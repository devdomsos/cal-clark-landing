#!/usr/bin/env bash
# Mirror project Cursor skills into Claude Code skills (real copies, not symlinks).
# Canonical source: .cursor/skills/
# Claude mirror:   .claude/skills/
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/.cursor/skills"
DEST="$ROOT/.claude/skills"

if [[ ! -d "$SRC" ]]; then
  echo "[skills:sync-claude] Missing source directory: $SRC" >&2
  exit 1
fi

mkdir -p "$DEST"
rsync -a --delete --exclude '.DS_Store' "$SRC/" "$DEST/"

echo "[skills:sync-claude] Synced .cursor/skills → .claude/skills"
