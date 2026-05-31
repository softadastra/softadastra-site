# Softadastra installer (Windows PowerShell)
# Usage:
#   irm https://softadastra.com/install.ps1 | iex
#
# Optional:
#   $env:SOFTADASTRA_VERSION="v0.3.0"
#   $env:SOFTADASTRA_SDK_VERSION="v0.3.0"
#   $env:SOFTADASTRA_REPO="softadastra/softadastra"
#   $env:SOFTADASTRA_SDK_REPO="softadastra/sdk"
#   $env:SOFTADASTRA_INSTALL_KIND="all" # all, cli, sdk
#   $env:SOFTADASTRA_HOME="$env:LOCALAPPDATA\Softadastra"
#   $env:SOFTADASTRA_BIN_DIR="$env:LOCALAPPDATA\Softadastra\bin"
#   $env:SOFTADASTRA_SDK_DIR="$env:LOCALAPPDATA\Softadastra\sdk"

$ErrorActionPreference = "Stop"
$ProgressPreference = "SilentlyContinue"

$MinisignPubkey = "RWSiKJY4A6jQ1h4w2n442ECiigZh0sSiY2JazwsBqKNAyUVN+WhtDACj"

function Info($msg) {
    Write-Host "› softadastra: $msg"
}

function Ok($msg) {
    Write-Host "✔ softadastra: $msg" -ForegroundColor Green
}

function Warn($msg) {
    Write-Host "! softadastra: $msg" -ForegroundColor Yellow
}

function Die($msg) {
    throw "✖ softadastra: $msg"
}

function Resolve-LatestTag([string]$Repo) {
    $api = "https://api.github.com/repos/$Repo/releases/latest"

    try {
        $resp = Invoke-RestMethod -Uri $api -Headers @{ "User-Agent" = "softadastra-installer" }

        if (-not $resp.tag_name) {
            Die "could not resolve latest tag for $Repo. Set SOFTADASTRA_VERSION=vX.Y.Z"
        }

        return $resp.tag_name
    }
    catch {
        Die "could not resolve latest tag for $Repo. Set SOFTADASTRA_VERSION=vX.Y.Z"
    }
}

function Download-File([string]$Url, [string]$Output) {
    Invoke-WebRequest -Uri $Url -OutFile $Output -UseBasicParsing
}

function Verify-Checksum([string]$ArchivePath, [string]$ShaPath) {
    if (!(Test-Path $ShaPath)) {
        Die "sha256 file not found"
    }

    $content = Get-Content -LiteralPath $ShaPath -Raw
    $expected = $null

    if ($content -match "([a-fA-F0-9]{64})") {
        $expected = $Matches[1].ToLowerInvariant()
    }

    if ([string]::IsNullOrWhiteSpace($expected)) {
        Die "invalid sha256 file"
    }

    $actual = (Get-FileHash -Algorithm SHA256 -LiteralPath $ArchivePath).Hash.ToLowerInvariant()

    if ($expected -ne $actual) {
        Die "sha256 mismatch"
    }
}

function Verify-Signature([string]$ArchivePath, [string]$SigPath) {
    if (!(Test-Path $SigPath)) {
        return
    }

    $minisign = Get-Command minisign -ErrorAction SilentlyContinue

    if ($null -eq $minisign) {
        return
    }

    & minisign -Vm $ArchivePath -P $MinisignPubkey | Out-Null

    if ($LASTEXITCODE -ne 0) {
        Die "signature verification failed"
    }
}

function Download-And-VerifyAsset(
    [string]$BaseUrl,
    [string]$Asset,
    [string]$TmpDir
) {
    $archive = Join-Path $TmpDir $Asset
    $sha = Join-Path $TmpDir "$Asset.sha256"
    $sig = Join-Path $TmpDir "$Asset.minisig"

    $url = "$BaseUrl/$Asset"

    Info "downloading $Asset"

    Download-File -Url $url -Output $archive
    Download-File -Url "$url.sha256" -Output $sha

    Verify-Checksum -ArchivePath $archive -ShaPath $sha

    try {
        Download-File -Url "$url.minisig" -Output $sig
        Verify-Signature -ArchivePath $archive -SigPath $sig
    }
    catch {
        # Signature is optional. SHA256 remains required.
    }

    return $archive
}

function Add-ToUserPath([string]$PathToAdd) {
    $userPath = [Environment]::GetEnvironmentVariable("Path", "User")

    if ([string]::IsNullOrWhiteSpace($userPath)) {
        [Environment]::SetEnvironmentVariable("Path", $PathToAdd, "User")
        return $true
    }

    $segments = $userPath -split ";" |
        ForEach-Object { $_.Trim() } |
        Where-Object { $_ -ne "" }

    foreach ($segment in $segments) {
        if ([string]::Equals(
            $segment.TrimEnd("\"),
            $PathToAdd.TrimEnd("\"),
            [System.StringComparison]::OrdinalIgnoreCase
        )) {
            return $false
        }
    }

    $newPath = ($segments + $PathToAdd) -join ";"
    [Environment]::SetEnvironmentVariable("Path", $newPath, "User")

    return $true
}

function Install-Cli([string]$ArchivePath, [string]$BinDir) {
    $extractDir = Join-Path ([System.IO.Path]::GetTempPath()) ("softadastra-cli-" + [System.Guid]::NewGuid().ToString("N"))

    try {
        New-Item -ItemType Directory -Force -Path $extractDir | Out-Null
        New-Item -ItemType Directory -Force -Path $BinDir | Out-Null

        Expand-Archive -LiteralPath $ArchivePath -DestinationPath $extractDir -Force

        $candidate = Get-ChildItem -LiteralPath $extractDir -Recurse -File -Filter "softadastra.exe" |
            Select-Object -First 1

        if (-not $candidate) {
            Die "softadastra.exe not found in CLI archive"
        }

        $destination = Join-Path $BinDir "softadastra.exe"
        Copy-Item -LiteralPath $candidate.FullName -Destination $destination -Force

        return $destination
    }
    finally {
        Remove-Item -LiteralPath $extractDir -Recurse -Force -ErrorAction SilentlyContinue | Out-Null
    }
}

function Install-Sdk([string]$ArchivePath, [string]$SdkDir) {
    if (Test-Path $SdkDir) {
        Remove-Item -Recurse -Force $SdkDir
    }

    New-Item -ItemType Directory -Force -Path $SdkDir | Out-Null

    Expand-Archive -LiteralPath $ArchivePath -DestinationPath $SdkDir -Force

    $includeDir = Join-Path $SdkDir "include\softadastra\sdk"
    $configFile = Join-Path $SdkDir "lib\cmake\sdk-cpp\sdk-cppConfig.cmake"

    if (!(Test-Path $includeDir)) {
        Die "SDK archive is missing include\softadastra\sdk"
    }

    if (!(Test-Path $configFile)) {
        Die "SDK archive is missing sdk-cppConfig.cmake"
    }
}

$Repo = if ($env:SOFTADASTRA_REPO) {
    $env:SOFTADASTRA_REPO
}
else {
    "softadastra/softadastra"
}

$SdkRepo = if ($env:SOFTADASTRA_SDK_REPO) {
    $env:SOFTADASTRA_SDK_REPO
}
else {
    "softadastra/sdk"
}

$Version = if ($env:SOFTADASTRA_VERSION) {
    $env:SOFTADASTRA_VERSION
}
else {
    "latest"
}

$SdkVersion = if ($env:SOFTADASTRA_SDK_VERSION) {
    $env:SOFTADASTRA_SDK_VERSION
}
else {
    $Version
}

$InstallKind = if ($env:SOFTADASTRA_INSTALL_KIND) {
    $env:SOFTADASTRA_INSTALL_KIND
}
else {
    "all"
}

$HomeDir = if ($env:SOFTADASTRA_HOME) {
    $env:SOFTADASTRA_HOME
}
else {
    Join-Path $env:LOCALAPPDATA "Softadastra"
}

$BinDir = if ($env:SOFTADASTRA_BIN_DIR) {
    $env:SOFTADASTRA_BIN_DIR
}
else {
    Join-Path $HomeDir "bin"
}

$SdkDir = if ($env:SOFTADASTRA_SDK_DIR) {
    $env:SOFTADASTRA_SDK_DIR
}
else {
    Join-Path $HomeDir "sdk"
}

switch ($InstallKind.ToLowerInvariant()) {
    "all" {}
    "cli" {}
    "sdk" {}
    default {
        Die "unsupported SOFTADASTRA_INSTALL_KIND: $InstallKind"
    }
}

$archRaw = $env:PROCESSOR_ARCHITECTURE

$Arch = switch -Regex ($archRaw) {
    "AMD64" { "x86_64"; break }
    "^ARM" { Die "windows-aarch64 is not supported yet" }
    default { Die "unsupported architecture: $archRaw" }
}

$CliTag = if ($Version -eq "latest") {
    Resolve-LatestTag -Repo $Repo
}
else {
    $Version
}

$SdkTag = if ($SdkVersion -eq "latest") {
    Resolve-LatestTag -Repo $SdkRepo
}
else {
    $SdkVersion
}

$Os = "windows"

$CliBaseUrl = "https://github.com/$Repo/releases/download/$CliTag"
$SdkBaseUrl = "https://github.com/$SdkRepo/releases/download/$SdkTag"

$CliAsset = "softadastra-$Os-$Arch.zip"
$SdkAsset = "softadastra-sdk-$Os-$Arch.zip"

$TmpDir = Join-Path ([System.IO.Path]::GetTempPath()) ("softadastra-" + [System.Guid]::NewGuid().ToString("N"))

Write-Host "Softadastra installer" -ForegroundColor Green
Info "cli=$CliTag sdk=$SdkTag target=$Os-$Arch kind=$InstallKind"

try {
    New-Item -ItemType Directory -Force -Path $TmpDir | Out-Null
    New-Item -ItemType Directory -Force -Path $HomeDir | Out-Null
    New-Item -ItemType Directory -Force -Path $BinDir | Out-Null

    $exe = Join-Path $BinDir "softadastra.exe"

    if ($InstallKind -eq "all" -or $InstallKind -eq "cli") {
        $cliArchive = Download-And-VerifyAsset -BaseUrl $CliBaseUrl -Asset $CliAsset -TmpDir $TmpDir
        $exe = Install-Cli -ArchivePath $cliArchive -BinDir $BinDir
    }

    if ($InstallKind -eq "all" -or $InstallKind -eq "sdk") {
        $sdkArchive = Download-And-VerifyAsset -BaseUrl $SdkBaseUrl -Asset $SdkAsset -TmpDir $TmpDir
        Install-Sdk -ArchivePath $sdkArchive -SdkDir $SdkDir
    }

    [Environment]::SetEnvironmentVariable("SOFTADASTRA_HOME", $HomeDir, "User")
    $pathChanged = Add-ToUserPath -PathToAdd $BinDir

    if ($InstallKind -eq "all" -or $InstallKind -eq "cli") {
        try {
            $versionOutput = & $exe version 2>$null

            if ($versionOutput) {
                Ok "$versionOutput"
            }
            else {
                Warn "installed, but 'softadastra version' returned no output"
            }
        }
        catch {
            Warn "installed, but running 'softadastra version' failed"
        }
    }

    if ($InstallKind -eq "all" -or $InstallKind -eq "sdk") {
        Ok "SDK installed: $SdkDir"
    }

    if ($pathChanged) {
        Warn "open a new terminal if 'softadastra' is not found"
    }
    else {
        Ok "ready"
    }

    Write-Host "Done." -ForegroundColor Green
}
finally {
    Remove-Item -LiteralPath $TmpDir -Recurse -Force -ErrorAction SilentlyContinue | Out-Null
}
