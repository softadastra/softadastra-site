param(
    [string]$Version = $env:SOFTADASTRA_VERSION,
    [string]$Repo = $(if ($env:SOFTADASTRA_REPO) { $env:SOFTADASTRA_REPO } else { "softadastra/softadastra" }),
    [string]$InstallKind = $(if ($env:SOFTADASTRA_INSTALL_KIND) { $env:SOFTADASTRA_INSTALL_KIND } else { "all" }),
    [string]$HomeDir = $(if ($env:SOFTADASTRA_HOME) { $env:SOFTADASTRA_HOME } else { "$env:USERPROFILE\.softadastra" }),
    [string]$BinDir = $(if ($env:SOFTADASTRA_BIN_DIR) { $env:SOFTADASTRA_BIN_DIR } else { "$env:USERPROFILE\.softadastra\bin" }),
    [string]$SdkDir = $(if ($env:SOFTADASTRA_SDK_DIR) { $env:SOFTADASTRA_SDK_DIR } else { "$env:USERPROFILE\.softadastra\sdk" }),
    [switch]$CliOnly,
    [switch]$SdkOnly,
    [switch]$All,
    [switch]$Help
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$MinisignPubkey = "RWSiKJY4A6jQ1h4w2n442ECiigZh0sSiY2JazwsBqKNAyUVN+WhtDACj"
$BinName = "softadastra.exe"

function Write-Info {
    param([string]$Message)
    Write-Host "softadastra install: $Message"
}

function Write-Ok {
    param([string]$Message)
    Write-Host "softadastra install: $Message"
}

function Write-Warn {
    param([string]$Message)
    Write-Warning "softadastra install: $Message"
}

function Fail {
    param([string]$Message)
    Write-Error "softadastra install: $Message"
    exit 1
}

function Show-Help {
    Write-Host "Softadastra installer"
    Write-Host ""
    Write-Host "Usage:"
    Write-Host "  install.ps1              Install CLI + SDK"
    Write-Host "  install.ps1 -CliOnly     Install CLI only"
    Write-Host "  install.ps1 -SdkOnly     Install SDK only"
    Write-Host "  install.ps1 -All         Install CLI + SDK"
    Write-Host ""
    Write-Host "Options:"
    Write-Host "  -Version <tag>           Release version, for example v0.3.0. Default: latest"
    Write-Host "  -Repo <owner/repo>       GitHub repo. Default: softadastra/softadastra"
    Write-Host "  -InstallKind <kind>      all, cli, or sdk. Default: all"
    Write-Host "  -HomeDir <path>          Install root. Default: %USERPROFILE%\.softadastra"
    Write-Host "  -BinDir <path>           CLI bin directory. Default: %USERPROFILE%\.softadastra\bin"
    Write-Host "  -SdkDir <path>           SDK directory. Default: %USERPROFILE%\.softadastra\sdk"
    Write-Host ""
    Write-Host "Environment:"
    Write-Host "  SOFTADASTRA_VERSION"
    Write-Host "  SOFTADASTRA_REPO"
    Write-Host "  SOFTADASTRA_INSTALL_KIND"
    Write-Host "  SOFTADASTRA_HOME"
    Write-Host "  SOFTADASTRA_BIN_DIR"
    Write-Host "  SOFTADASTRA_SDK_DIR"
    Write-Host ""
    Write-Host "Examples:"
    Write-Host "  irm https://softadastra.com/install.ps1 | iex"
    Write-Host "  `$env:SOFTADASTRA_VERSION='v0.3.0'; irm https://softadastra.com/install.ps1 | iex"
    Write-Host "  `$env:SOFTADASTRA_INSTALL_KIND='cli'; irm https://softadastra.com/install.ps1 | iex"
}

function Resolve-Version {
    param(
        [string]$Repo,
        [string]$Version
    )

    if ([string]::IsNullOrWhiteSpace($Version) -or $Version -eq "latest") {
        $url = "https://github.com/$Repo/releases/latest"

        try {
            $response = Invoke-WebRequest -Uri $url -UseBasicParsing
            $finalUrl = $null

            if ($response.BaseResponse.ResponseUri) {
                $finalUrl = $response.BaseResponse.ResponseUri.AbsoluteUri
            }
            elseif ($response.BaseResponse.RequestMessage.RequestUri) {
                $finalUrl = $response.BaseResponse.RequestMessage.RequestUri.AbsoluteUri
            }

            if ([string]::IsNullOrWhiteSpace($finalUrl)) {
                Fail "could not resolve latest version"
            }

            return ($finalUrl.TrimEnd("/") -split "/")[-1]
        }
        catch {
            Fail "could not resolve latest version from $url"
        }
    }

    return $Version
}

function Get-AssetUrl {
    param(
        [string]$Repo,
        [string]$Tag,
        [string]$Asset
    )

    return "https://github.com/$Repo/releases/download/$Tag/$Asset"
}

function Download-File {
    param(
        [string]$Url,
        [string]$Output
    )

    Write-Info "downloading $Url"
    Invoke-WebRequest -Uri $Url -OutFile $Output -UseBasicParsing
}

function Verify-Checksum {
    param(
        [string]$ArchivePath,
        [string]$ShaPath
    )

    if (!(Test-Path $ShaPath)) {
        Fail "sha256 file not found: $ShaPath"
    }

    $shaContent = Get-Content $ShaPath -Raw
    $expected = $null

    if ($shaContent -match "([a-fA-F0-9]{64})") {
        $expected = $Matches[1].ToLowerInvariant()
    }

    if ([string]::IsNullOrWhiteSpace($expected)) {
        Fail "invalid sha256 file: $ShaPath"
    }

    $actual = (Get-FileHash -Algorithm SHA256 -Path $ArchivePath).Hash.ToLowerInvariant()

    if ($expected -ne $actual) {
        Fail "sha256 mismatch for $ArchivePath"
    }

    Write-Ok "sha256 ok"
}

function Verify-Signature {
    param(
        [string]$ArchivePath,
        [string]$SignaturePath
    )

    if (!(Test-Path $SignaturePath)) {
        Write-Warn "minisig not found: $SignaturePath"
        return
    }

    $minisign = Get-Command minisign -ErrorAction SilentlyContinue

    if ($null -eq $minisign) {
        Write-Warn "minisig is published but minisign is not installed"
        Write-Warn "continuing because checksum verification already succeeded"
        return
    }

    & minisign -Vm $ArchivePath -P $MinisignPubkey | Out-Null

    if ($LASTEXITCODE -ne 0) {
        Fail "minisign verification failed for $ArchivePath"
    }

    Write-Ok "minisign ok"
}

function Download-And-VerifyAsset {
    param(
        [string]$Asset,
        [string]$BaseUrl,
        [string]$TmpDir
    )

    $archive = Join-Path $TmpDir $Asset
    $sha = Join-Path $TmpDir "$Asset.sha256"
    $sig = Join-Path $TmpDir "$Asset.minisig"

    $url = "$BaseUrl/$Asset"

    Download-File -Url $url -Output $archive
    Download-File -Url "$url.sha256" -Output $sha

    Verify-Checksum -ArchivePath $archive -ShaPath $sha

    try {
        Download-File -Url "$url.minisig" -Output $sig
        Verify-Signature -ArchivePath $archive -SignaturePath $sig
    }
    catch {
        Write-Warn "minisig could not be downloaded or verified"
    }

    return $archive
}

function Add-ToUserPath {
    param([string]$PathToAdd)

    $currentPath = [Environment]::GetEnvironmentVariable("Path", "User")

    if ([string]::IsNullOrWhiteSpace($currentPath)) {
        [Environment]::SetEnvironmentVariable("Path", $PathToAdd, "User")
        Write-Info "PATH updated for current user"
        return
    }

    $parts = $currentPath -split ";"

    foreach ($part in $parts) {
        if ($part.TrimEnd("\") -ieq $PathToAdd.TrimEnd("\")) {
            Write-Info "PATH already contains $PathToAdd"
            return
        }
    }

    $newPath = "$currentPath;$PathToAdd"
    [Environment]::SetEnvironmentVariable("Path", $newPath, "User")
    Write-Info "PATH updated for current user"
}

function Set-SoftadastraHome {
    param([string]$Value)

    [Environment]::SetEnvironmentVariable("SOFTADASTRA_HOME", $Value, "User")
    Write-Info "SOFTADASTRA_HOME set for current user"
}

function Install-Cli {
    param(
        [string]$ArchivePath,
        [string]$BinDir
    )

    $tmpExtract = Join-Path ([System.IO.Path]::GetTempPath()) ("softadastra-cli-" + [System.Guid]::NewGuid().ToString("N"))

    try {
        New-Item -ItemType Directory -Force -Path $tmpExtract | Out-Null
        Expand-Archive -Path $ArchivePath -DestinationPath $tmpExtract -Force

        $candidate1 = Join-Path $tmpExtract "bin\softadastra.exe"
        $candidate2 = Join-Path $tmpExtract "softadastra.exe"
        $destination = Join-Path $BinDir "softadastra.exe"

        New-Item -ItemType Directory -Force -Path $BinDir | Out-Null

        if (Test-Path $candidate1) {
            Copy-Item $candidate1 $destination -Force
        }
        elseif (Test-Path $candidate2) {
            Copy-Item $candidate2 $destination -Force
        }
        else {
            Get-ChildItem -Recurse $tmpExtract | Select-Object FullName
            Fail "softadastra.exe not found in CLI archive"
        }

        Write-Ok "CLI installed: $destination"
    }
    finally {
        if (Test-Path $tmpExtract) {
            Remove-Item -Recurse -Force $tmpExtract
        }
    }
}

function Install-Sdk {
    param(
        [string]$ArchivePath,
        [string]$SdkDir
    )

    if (Test-Path $SdkDir) {
        Remove-Item -Recurse -Force $SdkDir
    }

    New-Item -ItemType Directory -Force -Path $SdkDir | Out-Null

    Expand-Archive -Path $ArchivePath -DestinationPath $SdkDir -Force

    $includeDir = Join-Path $SdkDir "include\softadastra"
    $configFile = Join-Path $SdkDir "lib\cmake\softadastra\softadastraConfig.cmake"

    if (!(Test-Path $includeDir)) {
        Fail "SDK archive is missing include\softadastra"
    }

    if (!(Test-Path $configFile)) {
        Fail "SDK archive is missing softadastraConfig.cmake"
    }

    Write-Ok "SDK installed: $SdkDir"
}

if ($Help) {
    Show-Help
    exit 0
}

if ([string]::IsNullOrWhiteSpace($Version)) {
    $Version = "latest"
}

if ($CliOnly) {
    $InstallKind = "cli"
}

if ($SdkOnly) {
    $InstallKind = "sdk"
}

if ($All) {
    $InstallKind = "all"
}

switch ($InstallKind) {
    "all" {}
    "cli" {}
    "sdk" {}
    default {
        Fail "unsupported InstallKind '$InstallKind'. Expected all, cli, or sdk"
    }
}

$os = "windows"
$arch = "x86_64"

if ($env:PROCESSOR_ARCHITECTURE -match "ARM64") {
    Fail "windows-aarch64 is not supported yet"
}

$tag = Resolve-Version -Repo $Repo -Version $Version
$baseUrl = "https://github.com/$Repo/releases/download/$tag"

$cliAsset = "softadastra-$os-$arch.zip"
$sdkAsset = "softadastra-sdk-$os-$arch.zip"

$tmpDir = Join-Path ([System.IO.Path]::GetTempPath()) ("softadastra-" + [System.Guid]::NewGuid().ToString("N"))

try {
    New-Item -ItemType Directory -Force -Path $tmpDir | Out-Null
    New-Item -ItemType Directory -Force -Path $HomeDir | Out-Null
    New-Item -ItemType Directory -Force -Path $BinDir | Out-Null

    Write-Info "repo: $Repo"
    Write-Info "version: $tag"
    Write-Info "kind: $InstallKind"
    Write-Info "target: $os-$arch"
    Write-Info "install root: $HomeDir"
    Write-Info "bin dir: $BinDir"
    Write-Info "sdk dir: $SdkDir"

    if ($InstallKind -eq "all" -or $InstallKind -eq "cli") {
        $cliArchive = Download-And-VerifyAsset -Asset $cliAsset -BaseUrl $baseUrl -TmpDir $tmpDir
        Install-Cli -ArchivePath $cliArchive -BinDir $BinDir
    }

    if ($InstallKind -eq "all" -or $InstallKind -eq "sdk") {
        $sdkArchive = Download-And-VerifyAsset -Asset $sdkAsset -BaseUrl $baseUrl -TmpDir $tmpDir
        Install-Sdk -ArchivePath $sdkArchive -SdkDir $SdkDir
    }

    Set-SoftadastraHome -Value $HomeDir
    Add-ToUserPath -PathToAdd $BinDir

    if ($InstallKind -eq "all" -or $InstallKind -eq "cli") {
        $softadastraExe = Join-Path $BinDir "softadastra.exe"

        if (Test-Path $softadastraExe) {
            try {
                $versionOutput = & $softadastraExe version
                Write-Ok "installed: $versionOutput"
            }
            catch {
                Write-Warn "installed, but running 'softadastra version' failed"
            }
        }
    }

    Write-Host ""
    Write-Host "Done."
    Write-Host "Version: $tag"
    Write-Host "Kind:    $InstallKind"

    if ($InstallKind -eq "all" -or $InstallKind -eq "cli") {
        Write-Host "CLI:     $(Join-Path $BinDir "softadastra.exe")"
    }

    if ($InstallKind -eq "all" -or $InstallKind -eq "sdk") {
        Write-Host "SDK:     $SdkDir"
    }

    Write-Host ""
    Write-Host "A new terminal may be required before 'softadastra' is available in PATH."
}
finally {
    if (Test-Path $tmpDir) {
        Remove-Item -Recurse -Force $tmpDir
    }
}
