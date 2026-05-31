param(
    [string]$Version = $env:SOFTADASTRA_VERSION,
    [string]$Repo = "softadastra/softadastra",
    [string]$HomeDir = "$env:USERPROFILE\.softadastra",
    [switch]$CliOnly,
    [switch]$SdkOnly,
    [switch]$All,
    [switch]$Help
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Write-Info {
    param([string]$Message)
    Write-Host "softadastra: $Message"
}

function Fail {
    param([string]$Message)
    Write-Error "softadastra: error: $Message"
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
    Write-Host "  -Version <tag>           Release version, for example v0.2.0. Default: latest"
    Write-Host "  -Repo <owner/repo>       GitHub repo. Default: softadastra/softadastra"
    Write-Host "  -HomeDir <path>          Install directory. Default: %USERPROFILE%\.softadastra"
    Write-Host ""
    Write-Host "Environment:"
    Write-Host "  SOFTADASTRA_VERSION      Release version, for example v0.2.0"
}

function Get-AssetUrl {
    param(
        [string]$Repo,
        [string]$Version,
        [string]$Asset
    )

    if ([string]::IsNullOrWhiteSpace($Version) -or $Version -eq "latest") {
        return "https://github.com/$Repo/releases/latest/download/$Asset"
    }

    return "https://github.com/$Repo/releases/download/$Version/$Asset"
}

function Download-File {
    param(
        [string]$Url,
        [string]$Output
    )

    Write-Info "downloading $Url"
    Invoke-WebRequest -Uri $Url -OutFile $Output -UseBasicParsing
}

function Install-ZipArchive {
    param(
        [string]$Asset,
        [string]$Destination
    )

    $tmpDir = Join-Path ([System.IO.Path]::GetTempPath()) ("softadastra-" + [System.Guid]::NewGuid().ToString("N"))
    New-Item -ItemType Directory -Force -Path $tmpDir | Out-Null

    try {
        $archive = Join-Path $tmpDir $Asset
        $url = Get-AssetUrl -Repo $Repo -Version $Version -Asset $Asset

        Download-File -Url $url -Output $archive

        if (Test-Path $Destination) {
            Remove-Item -Recurse -Force $Destination
        }

        New-Item -ItemType Directory -Force -Path $Destination | Out-Null

        Write-Info "extracting $Asset"
        Expand-Archive -Path $archive -DestinationPath $Destination -Force
    }
    finally {
        if (Test-Path $tmpDir) {
            Remove-Item -Recurse -Force $tmpDir
        }
    }
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

if ($Help) {
    Show-Help
    exit 0
}

if ([string]::IsNullOrWhiteSpace($Version)) {
    $Version = "latest"
}

$installCli = $true
$installSdk = $true

if ($CliOnly) {
    $installCli = $true
    $installSdk = $false
}

if ($SdkOnly) {
    $installCli = $false
    $installSdk = $true
}

if ($All) {
    $installCli = $true
    $installSdk = $true
}

$os = "windows"
$arch = "x86_64"

if ($env:PROCESSOR_ARCHITECTURE -match "ARM64") {
    Fail "windows-aarch64 is not supported yet"
}

$cliAsset = "softadastra-$os-$arch.zip"
$sdkAsset = "softadastra-sdk-$os-$arch.zip"

$binDir = Join-Path $HomeDir "bin"
$sdkDir = Join-Path $HomeDir "sdk"

Write-Info "install directory: $HomeDir"
Write-Info "target: $os-$arch"
Write-Info "version: $Version"

New-Item -ItemType Directory -Force -Path $HomeDir | Out-Null
New-Item -ItemType Directory -Force -Path $binDir | Out-Null

if ($installCli) {
    $cliTmp = Join-Path $HomeDir ".cli-tmp"

    Install-ZipArchive -Asset $cliAsset -Destination $cliTmp

    $candidate1 = Join-Path $cliTmp "bin\softadastra.exe"
    $candidate2 = Join-Path $cliTmp "softadastra.exe"

    if (Test-Path $candidate1) {
        Copy-Item $candidate1 (Join-Path $binDir "softadastra.exe") -Force
    }
    elseif (Test-Path $candidate2) {
        Copy-Item $candidate2 (Join-Path $binDir "softadastra.exe") -Force
    }
    else {
        Remove-Item -Recurse -Force $cliTmp
        Fail "softadastra.exe not found in CLI archive"
    }

    Remove-Item -Recurse -Force $cliTmp

    Write-Info "CLI installed: $(Join-Path $binDir "softadastra.exe")"
}

if ($installSdk) {
    Install-ZipArchive -Asset $sdkAsset -Destination $sdkDir
    Write-Info "SDK installed: $sdkDir"
}

Set-SoftadastraHome -Value $HomeDir
Add-ToUserPath -PathToAdd $binDir

if ($installCli) {
    $softadastraExe = Join-Path $binDir "softadastra.exe"

    if (Test-Path $softadastraExe) {
        try {
            $versionOutput = & $softadastraExe version
            Write-Info "verified: $versionOutput"
        }
        catch {
            Write-Info "installed, but version command could not be verified"
        }
    }
}

Write-Host ""
Write-Host "Softadastra installed successfully."
Write-Host ""

Write-Host "A new terminal may be required before 'softadastra' is available in PATH."
Write-Host ""

if ($installSdk) {
    Write-Host "Use the SDK with CMake:"
    Write-Host "  cmake -S . -B build -DCMAKE_PREFIX_PATH=`"$sdkDir`""
    Write-Host ""
}

if ($installCli) {
    Write-Host "Try:"
    Write-Host "  softadastra version"
    Write-Host ""
}
