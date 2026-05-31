#!/usr/bin/env sh
set -eu

MINISIGN_PUBKEY="RWSiKJY4A6jQ1h4w2n442ECiigZh0sSiY2JazwsBqKNAyUVN+WhtDACj"

SOFTADASTRA_REPO="${SOFTADASTRA_REPO:-softadastra/softadastra}"
SOFTADASTRA_VERSION="${SOFTADASTRA_VERSION:-latest}"

# all, cli, sdk
SOFTADASTRA_INSTALL_KIND="${SOFTADASTRA_INSTALL_KIND:-all}"

SOFTADASTRA_HOME="${SOFTADASTRA_HOME:-$HOME/.softadastra}"
SOFTADASTRA_BIN_DIR="${SOFTADASTRA_BIN_DIR:-$HOME/.local/bin}"
SOFTADASTRA_SDK_DIR="${SOFTADASTRA_SDK_DIR:-$SOFTADASTRA_HOME/sdk}"

BIN_NAME="softadastra"

if [ -t 2 ] && [ "${NO_COLOR:-}" = "" ]; then
  C_RESET="$(printf '\033[0m')"
  C_BOLD="$(printf '\033[1m')"
  C_RED="$(printf '\033[31m')"
  C_GREEN="$(printf '\033[32m')"
  C_YELLOW="$(printf '\033[33m')"
  C_CYAN="$(printf '\033[36m')"
else
  C_RESET=""
  C_BOLD=""
  C_RED=""
  C_GREEN=""
  C_YELLOW=""
  C_CYAN=""
fi

die() {
  printf "%s✖%s softadastra: %s\n" "$C_RED" "$C_RESET" "$*" >&2
  exit 1
}

info() {
  printf "%s›%s softadastra: %s\n" "$C_CYAN" "$C_RESET" "$*" >&2
}

ok() {
  printf "%s✔%s softadastra: %s\n" "$C_GREEN" "$C_RESET" "$*" >&2
}

warn() {
  printf "%s!%s softadastra: %s\n" "$C_YELLOW" "$C_RESET" "$*" >&2
}

have() {
  command -v "$1" >/dev/null 2>&1
}

need_cmd() {
  have "$1" || die "missing dependency: $1"
}

fetch() {
  url="$1"
  out="$2"

  if have curl; then
    curl -fsSL "$url" -o "$out" >/dev/null 2>&1
    return
  fi

  if have wget; then
    wget -qO "$out" "$url" >/dev/null 2>&1
    return
  fi

  die "need curl or wget"
}

show_help() {
  cat <<EOF
Softadastra installer

Usage:
  install.sh                Install CLI + SDK
  install.sh --cli-only     Install CLI only
  install.sh --sdk-only     Install SDK only
  install.sh --all          Install CLI + SDK

Environment:
  SOFTADASTRA_VERSION       Release version, for example v0.3.0. Default: latest
  SOFTADASTRA_REPO          GitHub repo. Default: softadastra/softadastra
  SOFTADASTRA_INSTALL_KIND  all, cli, or sdk. Default: all
  SOFTADASTRA_HOME          Install root. Default: \$HOME/.softadastra
  SOFTADASTRA_BIN_DIR       CLI bin dir. Default: \$HOME/.local/bin
  SOFTADASTRA_SDK_DIR       SDK dir. Default: \$HOME/.softadastra/sdk
EOF
}

for arg in "$@"; do
  case "$arg" in
    --cli-only)
      SOFTADASTRA_INSTALL_KIND="cli"
      ;;
    --sdk-only)
      SOFTADASTRA_INSTALL_KIND="sdk"
      ;;
    --all)
      SOFTADASTRA_INSTALL_KIND="all"
      ;;
    --help|-h)
      show_help
      exit 0
      ;;
    *)
      die "unknown option: $arg"
      ;;
  esac
done

case "$SOFTADASTRA_INSTALL_KIND" in
  all|cli|sdk)
    ;;
  *)
    die "unsupported SOFTADASTRA_INSTALL_KIND='$SOFTADASTRA_INSTALL_KIND'"
    ;;
esac

need_cmd uname
need_cmd mktemp
need_cmd tar

detect_platform() {
  os="$(uname -s)"
  arch="$(uname -m)"

  case "$os" in
    Linux)
      OS="linux"
      ;;
    Darwin)
      OS="macos"
      ;;
    *)
      die "unsupported OS: $os"
      ;;
  esac

  case "$arch" in
    x86_64|amd64)
      ARCH="x86_64"
      ;;
    arm64|aarch64)
      ARCH="aarch64"
      ;;
    *)
      die "unsupported architecture: $arch"
      ;;
  esac
}

resolve_version() {
  if [ "$SOFTADASTRA_VERSION" = "latest" ]; then
    have curl || die "curl is required to resolve latest, or set SOFTADASTRA_VERSION=vX.Y.Z"

    final="$(curl -fsSLI -o /dev/null -w '%{url_effective}' "https://github.com/$SOFTADASTRA_REPO/releases/latest")"
    tag="${final##*/}"

    [ -n "$tag" ] || die "could not resolve latest version"

    printf "%s" "$tag"
  else
    printf "%s" "$SOFTADASTRA_VERSION"
  fi
}

verify_checksum() {
  archive="$1"
  sha_file="$2"

  if ! have sha256sum && ! have shasum; then
    die "need sha256sum or shasum for checksum verification"
  fi

  expected="$(
    awk '
      /^[0-9a-fA-F]{64}/ { print $1; exit }
      /^SHA256 \(/ { print $NF; exit }
    ' "$sha_file"
  )"

  [ -n "$expected" ] || die "invalid sha256 file"

  if have sha256sum; then
    actual="$(sha256sum "$archive" | awk '{print $1}')"
  else
    actual="$(shasum -a 256 "$archive" | awk '{print $1}')"
  fi

  [ "$expected" = "$actual" ] || die "sha256 mismatch"
}

verify_signature() {
  archive="$1"
  sig_file="$2"

  if ! have minisign; then
    return
  fi

  minisign -Vm "$archive" -P "$MINISIGN_PUBKEY" >/dev/null 2>&1 || die "signature verification failed"
}

download_and_verify_asset() {
  asset="$1"

  archive="$TMP_DIR/$asset"
  sha_file="$TMP_DIR/$asset.sha256"
  sig_file="$TMP_DIR/$asset.minisig"
  url="$BASE_URL/$asset"

  info "downloading $asset"

  fetch "$url" "$archive" || die "download failed: $asset"
  fetch "$url.sha256" "$sha_file" || die "sha256 file not found: $asset"

  verify_checksum "$archive" "$sha_file"

  if fetch "$url.minisig" "$sig_file"; then
    verify_signature "$archive" "$sig_file"
  fi

  printf "%s" "$archive"
}

update_shell_profile() {
  profile=""

  if [ -n "${SHELL:-}" ]; then
    case "$SHELL" in
      */zsh)
        profile="$HOME/.zshrc"
        ;;
      */bash)
        profile="$HOME/.bashrc"
        ;;
      *)
        profile=""
        ;;
    esac
  fi

  [ -n "$profile" ] || return 0

  mkdir -p "$(dirname "$profile")"
  touch "$profile"

  if ! grep -q 'SOFTADASTRA_HOME' "$profile" 2>/dev/null; then
    {
      echo ""
      echo "# Softadastra"
      echo "export SOFTADASTRA_HOME=\"$SOFTADASTRA_HOME\""
      echo "export PATH=\"$SOFTADASTRA_BIN_DIR:\$PATH\""
    } >> "$profile"
  fi
}

install_cli() {
  archive="$(download_and_verify_asset "$CLI_ASSET")"
  extract_dir="$TMP_DIR/cli"

  rm -rf "$extract_dir"
  mkdir -p "$extract_dir" "$SOFTADASTRA_BIN_DIR"

  tar -xzf "$archive" -C "$extract_dir"

  if [ -f "$extract_dir/bin/$BIN_NAME" ]; then
    src="$extract_dir/bin/$BIN_NAME"
  elif [ -f "$extract_dir/$BIN_NAME" ]; then
    src="$extract_dir/$BIN_NAME"
  else
    die "$BIN_NAME not found in CLI archive"
  fi

  chmod +x "$src"
  cp "$src" "$SOFTADASTRA_BIN_DIR/$BIN_NAME"
  chmod +x "$SOFTADASTRA_BIN_DIR/$BIN_NAME"
}

install_sdk() {
  archive="$(download_and_verify_asset "$SDK_ASSET")"

  rm -rf "$SOFTADASTRA_SDK_DIR"
  mkdir -p "$SOFTADASTRA_SDK_DIR"

  tar -xzf "$archive" -C "$SOFTADASTRA_SDK_DIR"

  [ -d "$SOFTADASTRA_SDK_DIR/include/softadastra" ] || die "SDK archive is missing include/softadastra"
  [ -f "$SOFTADASTRA_SDK_DIR/lib/cmake/softadastra/softadastraConfig.cmake" ] || die "SDK archive is missing softadastraConfig.cmake"
}

detect_platform

TMP_DIR="$(mktemp -d 2>/dev/null || mktemp -d -t softadastra)"
cleanup() {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT INT TERM

TAG="$(resolve_version)"
BASE_URL="https://github.com/${SOFTADASTRA_REPO}/releases/download/${TAG}"

CLI_ASSET="softadastra-${OS}-${ARCH}.tar.gz"
SDK_ASSET="softadastra-sdk-${OS}-${ARCH}.tar.gz"

mkdir -p "$SOFTADASTRA_HOME" "$SOFTADASTRA_BIN_DIR"

printf "\n%sSoftadastra installer%s\n" "$C_BOLD" "$C_RESET" >&2
info "version=$TAG target=${OS}-${ARCH} kind=$SOFTADASTRA_INSTALL_KIND"

case "$SOFTADASTRA_INSTALL_KIND" in
  all)
    install_cli
    install_sdk
    ;;
  cli)
    install_cli
    ;;
  sdk)
    install_sdk
    ;;
esac

update_shell_profile

if [ "$SOFTADASTRA_INSTALL_KIND" = "all" ] || [ "$SOFTADASTRA_INSTALL_KIND" = "cli" ]; then
  if "$SOFTADASTRA_BIN_DIR/$BIN_NAME" version >/dev/null 2>&1; then
    INSTALLED_VERSION="$("$SOFTADASTRA_BIN_DIR/$BIN_NAME" version 2>/dev/null || true)"
    ok "$INSTALLED_VERSION"
  else
    warn "installed, but '$BIN_NAME version' failed"
  fi
fi

if [ "$SOFTADASTRA_INSTALL_KIND" = "all" ] || [ "$SOFTADASTRA_INSTALL_KIND" = "sdk" ]; then
  ok "SDK installed: $SOFTADASTRA_SDK_DIR"
fi

case ":$PATH:" in
  *":$SOFTADASTRA_BIN_DIR:"*)
    ok "ready"
    ;;
  *)
    warn "installed, open a new terminal if '$BIN_NAME' is not found"
    ;;
esac

printf "%sDone.%s\n\n" "$C_BOLD$C_GREEN" "$C_RESET" >&2

