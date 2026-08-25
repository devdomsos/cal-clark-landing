# Image tools in this repo

Cursor / Claude **do not** have Grok Build `imagine_*` tools. Never invent those calls.

## What to use

| If the tool list has… | Use it for |
|---|---|
| `imagine_text_to_image` / `imagine_image_to_image` / `imagine_image_to_video` | Grok Build only. Follow the specialist skill as written. |
| Higgsfield `generate_image` / `generate_video` / `generate_image_batch` | Same job: stills, sheets, map art, video harvest. Magenta `#FF00FF` backgrounds still apply when chroma scripts will run. |
| Neither | **Correct path, not a failure:** CSS, SVG, emoji, canvas code-draw, geometric / WebGL. Abstract games (tetris, snake, pong, breakout) stay procedural even when gen tools exist. |

Do not add image-gen dependencies without the AGENTS.md dep checklist.

## Paths

Skill scripts live under `.cursor/skills/<skill>/scripts/` (mirrored to `.claude/skills/`).
Output game art next to the game that uses it (for example `dance-or-die/…/assets/`), not `/workspace`.

## When gen tools are missing

Ship playable geometric/CSS/canvas art. Do not block the user on a Grok-only pipeline.
