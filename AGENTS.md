# Agent operating manual

Lean always-on rules for this repo.
Detailed workflows live in **skills** (loaded when relevant).
Plans live under `.cursor/plans/`.
Claude Code loads these same rules through [`CLAUDE.md`](CLAUDE.md).

Stack-specific facts live in [`.cursor/rules/project.mdc`](.cursor/rules/project.mdc).
Fill that file after you copy this kit. Do not invent a second always-on manual.

## General guidelines

- Never use the em dash. Use a plain ASCII hyphen `-`, a comma, a semicolon, or a sentence break.
- When writing commit messages, never add an agent name as a co-author.
- Never manually edit files marked as auto-generated (`CHANGELOG.md` unless the project says otherwise).
- When writing or substantially editing long Markdown files, put each full sentence on its own line.
- Prefer quality, simplicity, and long-term maintainability over shipping faster.
- When fixing a bug, reproduce it as close as possible to how a user would hit it.
- If UI looks off, even if unrelated to the current task, fix it along the way.
- If you see a lint error, test failure, or flaky test in scope, fix it.

## How to work

For any non-trivial feature:

1. Prefer **Plan Mode** for research, then implement
2. Follow [`.cursor/skills/feature-workflow/SKILL.md`](.cursor/skills/feature-workflow/SKILL.md)
3. If product/UX decisions are unlocked or branching → [grilling](.cursor/skills/grilling/SKILL.md) before coding
4. Visual work → [design-ui](.cursor/skills/design-ui/SKILL.md), then [ui-visual-craft](.cursor/skills/ui-visual-craft/SKILL.md) for the screenshot rubric
5. Games / canvas / 3D → `building-games`; WASD / vehicle / flight → `controls` first
6. Gates: [`.cursor/skills/feature-workflow/gates.md`](.cursor/skills/feature-workflow/gates.md)

**Never start a long-running dev server** unless the user asked or `project.mdc` says you should.
If the user already has one running, leave it up.

**HTTP 200 / typecheck green is not visual QA.** Confirm real content on screen and exercise new controls.

**Autonomous grind (automatic):** Cursor `stop` + `followup_message` loop.
Starts when you `@` a plan, paste its path, or name it with work intent (`continue`, `implement`, …).
Reading or editing a `.plan.md` does **not** start a grind.
Details: [`.cursor/grind/README.md`](.cursor/grind/README.md).
Two chats can grind two plans at once.

**Feature complete** = that plan's YAML has no open todos.
Do not ask for another definition of done.
Do not invent a parallel checklist.

**Continue means keep implementing.** Do not end early with a status wrap-up while asked work remains unblocked.
No plan does not skip gates.

## Hard rules

### 1. Dependencies

Before any new package: check existing deps, confirm docs support the use case, do not add libs not in the request, ask permission before installing.

### 2. Plans

When working from a Cursor plan, update its YAML todos as slices finish.

### 3. Architecture

- Put shared contracts in the correct package, not app-local dumps
- Server / backend owns business decisions; clients own UI + thin transport
- If placement is unclear, ask before adding debt
- Fill specifics in `project.mdc`

### 4. Product decisions

Do not invent thresholds, ranking cutoffs, labels, or behavior defaults.
If not locked in a plan or shared constant: load grilling.
Research peers first; adopt clear low-stakes defaults; grill only product/UX.
Do not implement until shared understanding is confirmed.
Record settled decisions in the owning plan.

### 5. User-facing copy

Final product language. No `payload`, `DTO`, or `schema` in UI.
ASCII hyphen `-` only.

### 6. Naming

Domain names, not workflow leftovers (`temp`, `hack`, `screenshot`, `dummy`) unless it is literally a test.

### 7. Typecheck before done

The bundler / fast refresh often does **not** typecheck.
Typecheck every package you touched, then every consumer of a shared contract you changed.
See `.cursor/rules/typecheck-gates.mdc`.

### 8. Visual QA

If you change user-visible UI, verify it yourself (browser and/or device).
A screenshot of the open UI is not enough - click/tap every new control.
Use the rubric in `ui-visual-craft`.
See `.cursor/rules/visual-qa.mdc`.

## Skills index

| Skill | When |
|-------|------|
| feature-workflow | Non-trivial feature / plan / grind |
| grilling | Unlocked product/UX decisions |
| design-ui | DOM / chrome / overlays; tokens, hierarchy, anti-slop |
| ui-visual-craft | Screenshot rubric; spacing fallback with no mockup |
| building-games / controls | Games, canvas, 3D; load controls before WASD / vehicles / flight |

## Rules index

Continue-until-done, typecheck gates, visual QA, code quality, and `project.mdc` (you fill this).
