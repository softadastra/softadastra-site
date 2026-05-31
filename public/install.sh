#!/usr/bin/env sh

set -eu

SOFTADASTRA_VERSION="${SOFTADASTRA_VERSION:-latest}"
SOFTADASTRA_REPO="${SOFTADASTRA_REPO:-softadastra/softadastra}"
SOFTADASTRA_HOME="${SOFTADASTRA_HOME:-$HOME/.softadastra}"

INSTALL_CLI=1
INSTALL_SDK=1

for arg in "$@"; do
  case "$arg" in
    --cli-only)
      INSTALL_CLI=1
      INSTALL_SDK=0
      ;;
    --sdk-only)
      INSTALL_CLI=0
      INSTALL_SDK=1
      ;;
    --all)
      INSTALL_CLI=1
      INSTALL_SDK=1
      ;;
    --help|-h)
      echo "Softadastra installer"
      echo ""
      echo "Usage:"
      echo "  install.sh              Install CLI + SDK"
      echo "  install.sh --cli-only   Install CLI only"
      echo "  install.sh --sdk-only   Install SDK only"
      echo "  install.sh --all        Install CLI + SDK"
      echo ""
      echo "Environment:"
      echo "  SOFTADASTRA_VERSION     Release version, for example v0.2.0. Default: latest"
      echo "  SOFTADASTRA_HOME        Install directory. Default: \$HOME/.softadastra"
      echo "  SOFTADASTRA_REPO        GitHub repo. Default: softadastra/softadastra"
      exit 0
      ;;
    *)
      echo "error: unknown option: $arg" >&2
      echo "Run with --help for usage." >&2
      exit 1
      ;;
  esac
done

info() {
  printf '%s\n' "softadastra: $*"
}

fail() {
  printf '%s\n' "softadastra: error: $*" >&2
  exit 1
}

need_cmd() {
  command -v "$1" >/dev/null 2>&1 || fail "missing required command: $1"
}

detect_os() {
  os="$(uname -s)"

  case "$os" in
    Linux)
      printf '%s' "linux"
      ;;
    Darwin)
      printf '%s' "macos"
      ;;
    *)
      fail "unsupported OS: $os"
      ;;
  esac
}

detect_arch() {
  arch="$(uname -m)"

  case "$arch" in
    x86_64|amd64)
      printf '%s' "x86_64"
      ;;
    arm64|aarch64)
      printf '%s' "aarch64"
      ;;
    *)
      fail "unsupported architecture: $arch"
      ;;
  esac
}

download_file() {
  url="$1"
  output="$2"

  if command -v curl >/dev/null 2>&1; then
    curl -fsSL "$url" -o "$output"
    return
  fi

  if command -v wget >/dev/null 2>&1; then
    wget -q "$url" -O "$output"
    return
  fi

  fail "missing curl or wget"
}

github_asset_url() {
  asset="$1"

  if [ "$SOFTADASTRA_VERSION" = "latest" ]; then
    printf 'https://github.com/%s/releases/latest/download/%s' "$SOFTADASTRA_REPO" "$asset"
  else
    printf 'https://github.com/%s/releases/download/%s/%s' "$SOFTADASTRA_REPO" "$SOFTADASTRA_VERSION" "$asset"
  fi
}

install_archive() {
  asset="$1"
  destination="$2"

  tmp_dir="$(mktemp -d)"
  archive="$tmp_dir/$asset"

  url="$(github_asset_url "$asset")"

  info "downloading $asset"
  download_file "$url" "$archive"

  rm -rf "$destination"
  mkdir -p "$destination"

  info "extracting $asset"
  tar -xzf "$archive" -C "$destination"

  rm -rf "$tmp_dir"
}

append_path_hint() {
  shell_profile=""

  if [ -n "${SHELL:-}" ]; then
    case "$SHELL" in
      */zsh)
        shell_profile="$HOME/.zshrc"
        ;;
      */bash)
        if [ -f "$HOME/.bashrc" ]; then
          shell_profile="$HOME/.bashrc"
        else
          shell_profile="$HOME/.bash_profile"
        fi
        ;;
      *)
        shell_profile=""
        ;;
    esac
  fi

  if [ -n "$shell_profile" ]; then
    mkdir -p "$(dirname "$shell_profile")"
    touch "$shell_profile"

    if ! grep -q 'SOFTADASTRA_HOME' "$shell_profile" 2>/dev/null; then
      {
        echo ""
        echo "# Softadastra"
        echo "export SOFTADASTRA_HOME=\"$SOFTADASTRA_HOME\""
        echo "export PATH=\"\$SOFTADASTRA_HOME/bin:\$PATH\""
      } >> "$shell_profile"

      info "PATH updated in $shell_profile"
    fi
  fi
}

OS="$(detect_os)"
ARCH="$(detect_arch)"

CLI_ASSET="softadastra-${OS}-${ARCH}.tar.gz"
SDK_ASSET="softadastra-sdk-${OS}-${ARCH}.tar.gz"

BIN_DIR="$SOFTADASTRA_HOME/bin"
SDK_DIR="$SOFTADASTRA_HOME/sdk"

need_cmd uname
need_cmd tar
need_cmd mktemp

mkdir -p "$SOFTADASTRA_HOME"
mkdir -p "$BIN_DIR"

info "install directory: $SOFTADASTRA_HOME"
info "target: ${OS}-${ARCH}"

if [ "$INSTALL_CLI" = "1" ]; then
  CLI_TMP="$SOFTADASTRA_HOME/.cli-tmp"

  install_archive "$CLI_ASSET" "$CLI_TMP"

  if [ -f "$CLI_TMP/bin/softadastra" ]; then
    cp "$CLI_TMP/bin/softadastra" "$BIN_DIR/softadastra"
  elif [ -f "$CLI_TMP/softadastra" ]; then
    cp "$CLI_TMP/softadastra" "$BIN_DIR/softadastra"
  else
    rm -rf "$CLI_TMP"
    fail "softadastra binary not found in CLI archive"
  fi

  chmod +x "$BIN_DIR/softadastra"
  rm -rf "$CLI_TMP"

  info "CLI installed: $BIN_DIR/softadastra"
fi

if [ "$INSTALL_SDK" = "1" ]; then
  install_archive "$SDK_ASSET" "$SDK_DIR"
  info "SDK installed: $SDK_DIR"
fi

append_path_hint

if [ "$INSTALL_CLI" = "1" ]; then
  if "$BIN_DIR/softadastra" version >/dev/null 2>&1; then
    info "verified: $("$BIN_DIR/softadastra" version)"
  else
    info "installed, but version command could not be verified"
  fi
fi

echo ""
echo "Softadastra installed successfully."
echo ""
echo "Add this to your shell if it is not already available:"
echo "  export SOFTADASTRA_HOME=\"$SOFTADASTRA_HOME\""
echo "  export PATH=\"\$SOFTADASTRA_HOME/bin:\$PATH\""
echo ""

if [ "$INSTALL_SDK" = "1" ]; then
  echo "Use the SDK with CMake:"
  echo "  cmake -S . -B build -DCMAKE_PREFIX_PATH=\"$SDK_DIR\""
  echo ""
fi

if [ "$INSTALL_CLI" = "1" ]; then
  echo "Try:"
  echo "  softadastra version"
  echo ""
fi
