#!/usr/bin/env sh

set -eu

# Minisign public key.
# This is public and safe to embed in the installer.
MINISIGN_PUBKEY="RWSiKJY4A6jQ1h4w2n442ECiigZh0sSiY2JazwsBqKNAyUVN+WhtDACj"

SOFTADASTRA_REPO="${SOFTADASTRA_REPO:-softadastra/softadastra}"
SOFTADASTRA_VERSION="${SOFTADASTRA_VERSION:-latest}"

# Install kind:
#   all = CLI + SDK
#   cli = CLI only
#   sdk = SDK only
SOFTADASTRA_INSTALL_KIND="${SOFTADASTRA_INSTALL_KIND:-all}"

SOFTADASTRA_HOME="${SOFTADASTRA_HOME:-$HOME/.softadastra}"
SOFTADASTRA_BIN_DIR="${SOFTADASTRA_BIN_DIR:-$SOFTADASTRA_HOME/bin}"
SOFTADASTRA_SDK_DIR="${SOFTADASTRA_SDK_DIR:-$SOFTADASTRA_HOME/sdk}"

BIN_NAME="softadastra"

if [ -t 2 ] && [ "${NO_COLOR:-}" = "" ]; then
  C_RESET="$(printf '\033[0m')"
  C_BOLD="$(printf '\033[1m')"
  C_DIM="$(printf '\033[2m')"
  C_RED="$(printf '\033[31m')"
  C_GREEN="$(printf '\033[32m')"
  C_YELLOW="$(printf '\033[33m')"
  C_BLUE="$(printf '\033[34m')"
  C_CYAN="$(printf '\033[36m')"
else
  C_RESET=""
  C_BOLD=""
  C_DIM=""
  C_RED=""
  C_GREEN=""
  C_YELLOW=""
  C_BLUE=""
  C_CYAN=""
fi

die() {
  printf "%s✖%s softadastra install: %s\n" "$C_RED" "$C_RESET" "$*" >&2
  exit 1
}

info() {
  printf "%s›%s softadastra install: %s\n" "$C_CYAN" "$C_RESET" "$*" >&2
}

ok() {
  printf "%s✔%s softadastra install: %s\n" "$C_GREEN" "$C_RESET" "$*" >&2
}

warn() {
  printf "%s!%s softadastra install: %s\n" "$C_YELLOW" "$C_RESET" "$*" >&2
}

step() {
  printf "\n%s==>%s %s\n" "$C_BOLD$C_BLUE" "$C_RESET" "$*" >&2
}

banner() {
  printf "\n%sSoftadastra installer%s\n" "$C_BOLD" "$C_RESET" >&2
  printf "%sReliable local-first infrastructure installer%s\n" "$C_DIM" "$C_RESET" >&2
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
    curl -fsSL "$url" -o "$out"
    return
  fi

  if have wget; then
    wget -qO "$out" "$url"
    return
  fi

  die "need curl or wget"
}

show_help() {
  cat <<EOF
Softadastra installer

Usage:
  install.sh                       Install CLI + SDK
  install.sh --cli-only            Install CLI only
  install.sh --sdk-only            Install SDK only
  install.sh --all                 Install CLI + SDK

Environment:
  SOFTADASTRA_VERSION              Release version, for example v0.3.0. Default: latest
  SOFTADASTRA_REPO                 GitHub repo. Default: softadastra/softadastra
  SOFTADASTRA_INSTALL_KIND         all, cli, or sdk. Default: all
  SOFTADASTRA_HOME                 Install root. Default: \$HOME/.softadastra
  SOFTADASTRA_BIN_DIR              CLI bin dir. Default: \$SOFTADASTRA_HOME/bin
  SOFTADASTRA_SDK_DIR              SDK dir. Default: \$SOFTADASTRA_HOME/sdk

Examples:
  curl -fsSL https://softadastra.com/install.sh | sh
  curl -fsSL https://softadastra.com/install.sh | SOFTADASTRA_VERSION=v0.3.0 sh
  curl -fsSL https://softadastra.com/install.sh | SOFTADASTRA_INSTALL_KIND=cli sh
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
    die "unsupported SOFTADASTRA_INSTALL_KIND='$SOFTADASTRA_INSTALL_KIND' expected all, cli, or sdk"
    ;;
esac

need_cmd uname
need_cmd mktemp
need_cmd tar

banner

step "Detecting platform"

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

ok "platform detected: os=$OS arch=$ARCH"

TMP_DIR="$(mktemp -d 2>/dev/null || mktemp -d -t softadastra)"
cleanup() {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT INT TERM

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

step "Resolving release version"

TAG="$(resolve_version)"

ok "repo=$SOFTADASTRA_REPO version=$TAG kind=$SOFTADASTRA_INSTALL_KIND"

BASE_URL="https://github.com/${SOFTADASTRA_REPO}/releases/download/${TAG}"

CLI_ASSET="softadastra-${OS}-${ARCH}.tar.gz"
SDK_ASSET="softadastra-sdk-${OS}-${ARCH}.tar.gz"

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
    warn "minisig is published but minisign is not installed"
    warn "continuing because checksum verification already succeeded"
    return
  fi

  if minisign -Vm "$archive" -P "$MINISIGN_PUBKEY" >/dev/null 2>&1; then
    ok "minisign ok"
  else
    die "minisign verification failed"
  fi
}

download_and_verify_asset() {
  asset="$1"

  archive="$TMP_DIR/$asset"
  sha_file="$TMP_DIR/$asset.sha256"
  sig_file="$TMP_DIR/$asset.minisig"

  url="$BASE_URL/$asset"

  step "Downloading $asset"
  info "url: $url"

  fetch "$url" "$archive"
  ok "archive downloaded"

  step "Verifying checksum"
  if fetch "$url.sha256" "$sha_file"; then
    verify_checksum "$archive" "$sha_file"
    ok "sha256 ok"
  else
    die "sha256 file not found for $asset"
  fi

  step "Verifying signature"
  if fetch "$url.minisig" "$sig_file"; then
    verify_signature "$archive" "$sig_file"
  else
    warn "minisig not found for $asset"
  fi

  printf "%s" "$archive"
}

install_cli() {
  asset="$CLI_ASSET"
  archive="$(download_and_verify_asset "$asset")"
  extract_dir="$TMP_DIR/cli-extract"

  step "Installing CLI"

  rm -rf "$extract_dir"
  mkdir -p "$extract_dir" "$SOFTADASTRA_BIN_DIR"

  tar -xzf "$archive" -C "$extract_dir"

  if [ -f "$extract_dir/bin/$BIN_NAME" ]; then
    src="$extract_dir/bin/$BIN_NAME"
  elif [ -f "$extract_dir/$BIN_NAME" ]; then
    src="$extract_dir/$BIN_NAME"
  else
    die "$BIN_NAME binary not found in CLI archive"
  fi

  chmod +x "$src"
  cp "$src" "$SOFTADASTRA_BIN_DIR/$BIN_NAME"
  chmod +x "$SOFTADASTRA_BIN_DIR/$BIN_NAME"

  ok "CLI installed: $SOFTADASTRA_BIN_DIR/$BIN_NAME"
}

install_sdk() {
  asset="$SDK_ASSET"
  archive="$(download_and_verify_asset "$asset")"

  step "Installing SDK"

  rm -rf "$SOFTADASTRA_SDK_DIR"
  mkdir -p "$SOFTADASTRA_SDK_DIR"

  tar -xzf "$archive" -C "$SOFTADASTRA_SDK_DIR"

  [ -d "$SOFTADASTRA_SDK_DIR/include/softadastra" ] || die "SDK archive is missing include/softadastra"
  [ -f "$SOFTADASTRA_SDK_DIR/lib/cmake/softadastra/softadastraConfig.cmake" ] || die "SDK archive is missing softadastraConfig.cmake"

  ok "SDK installed: $SOFTADASTRA_SDK_DIR"
}

mkdir -p "$SOFTADASTRA_HOME"
mkdir -p "$SOFTADASTRA_BIN_DIR"

info "install root: $SOFTADASTRA_HOME"
info "bin dir: $SOFTADASTRA_BIN_DIR"
info "sdk dir: $SOFTADASTRA_SDK_DIR"

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

step "Validating installation"

if [ "$SOFTADASTRA_INSTALL_KIND" = "all" ] || [ "$SOFTADASTRA_INSTALL_KIND" = "cli" ]; then
  SOFTADASTRA_BIN="$SOFTADASTRA_BIN_DIR/$BIN_NAME"

  if "$SOFTADASTRA_BIN" version >/dev/null 2>&1; then
    INSTALLED_VERSION="$("$SOFTADASTRA_BIN" version 2>/dev/null || true)"
    ok "installed: $INSTALLED_VERSION"
  else
    warn "installed, but running '$BIN_NAME version' failed"
  fi
fi

step "Checking PATH"

case ":$PATH:" in
  *":$SOFTADASTRA_BIN_DIR:"*)
    ok "'$SOFTADASTRA_BIN_DIR' is already in PATH"
    ;;
  *)
    warn "'$SOFTADASTRA_BIN_DIR' is not in your PATH"
    info "add this to your shell config:"
    printf "  export SOFTADASTRA_HOME=\"%s\"\n" "$SOFTADASTRA_HOME" >&2
    printf "  export PATH=\"%s:\$PATH\"\n" "$SOFTADASTRA_BIN_DIR" >&2
    ;;
esac

printf "\n%sDone.%s\n" "$C_BOLD$C_GREEN" "$C_RESET" >&2
printf "%sVersion:%s %s\n" "$C_BOLD" "$C_RESET" "$TAG" >&2
printf "%sKind:%s    %s\n" "$C_BOLD" "$C_RESET" "$SOFTADASTRA_INSTALL_KIND" >&2

if [ "$SOFTADASTRA_INSTALL_KIND" = "all" ] || [ "$SOFTADASTRA_INSTALL_KIND" = "cli" ]; then
  printf "%sCLI:%s     %s\n" "$C_BOLD" "$C_RESET" "$SOFTADASTRA_BIN_DIR/$BIN_NAME" >&2
fi

if [ "$SOFTADASTRA_INSTALL_KIND" = "all" ] || [ "$SOFTADASTRA_INSTALL_KIND" = "sdk" ]; then
  printf "%sSDK:%s     %s\n" "$C_BOLD" "$C_RESET" "$SOFTADASTRA_SDK_DIR" >&2
fi
