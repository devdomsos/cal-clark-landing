#!/usr/bin/env bash
# Pre-commit: when .cursor/skills change, mirror into .claude/skills and stage the mirror.
set -euo pipefail

if [[ "${SKIP_SKILLS_SYNC:-}" == "1" ]]; then
  echo "[pre-commit] SKIP_SKILLS_SYNC=1 set; skipping Cursor→Claude skills sync."
  exit 0
fi

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

STAGED_CURSOR_SKILLS="$(
  git diff --cached --name-only --diff-filter=ACMRD |
    grep -E '^\.cursor/skills/' || true
)"

if [[ -z "$STAGED_CURSOR_SKILLS" ]]; then
  echo "[pre-commit] No staged changes under .cursor/skills/; skipping skills sync."
  exit 0
fi

echo "[pre-commit] Staged Cursor skill changes detected:"
echo "$STAGED_CURSOR_SKILLS" | sed 's/^/  /'
echo "[pre-commit] Syncing .cursor/skills → .claude/skills…"

bash "$ROOT/scripts/sync-skills-to-claude.sh"

git add -A -- ".claude/skills"
echo "[pre-commit] Staged mirrored .claude/skills for this commit."
