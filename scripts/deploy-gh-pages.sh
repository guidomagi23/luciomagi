#!/usr/bin/env bash

set -euo pipefail

REPO_URL="${REPO_URL:-https://github.com/luciomagi/luciomagi.git}"
BRANCH="${BRANCH:-gh-pages}"
BUILD_DIR="${BUILD_DIR:-build}"

if [ ! -d "$BUILD_DIR" ]; then
  echo "No existe '$BUILD_DIR'. Ejecuta el build antes de deployar."
  exit 1
fi

TMP_DIR="$(mktemp -d)"
cleanup() {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

git clone --depth 1 --branch "$BRANCH" "$REPO_URL" "$TMP_DIR"

find "$TMP_DIR" -mindepth 1 -maxdepth 1 ! -name ".git" -exec rm -rf {} +
cp -R "$BUILD_DIR"/. "$TMP_DIR"/
touch "$TMP_DIR/.nojekyll"

cd "$TMP_DIR"
git add -A -f .

if git diff --cached --quiet; then
  echo "No hay cambios para publicar."
  exit 0
fi

git commit -m "Deploy site ($(date '+%Y-%m-%d %H:%M:%S'))"
git push origin "$BRANCH"

echo "Deploy completado en '$REPO_URL' rama '$BRANCH'."
