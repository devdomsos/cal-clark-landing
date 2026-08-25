---
name: feature-workflow
description: >
  Deliberate plan-first workflow for non-trivial features. Use when implementing
  features, fixing multi-file bugs, following a Cursor plan, continuing plan
  work, or autonomous iterate-until-done grind. Forces layer classification,
  product-question gates, typecheck fan-out, and visual QA. Continue means keep
  implementing open plan todos; do not end early.
---

# Feature Workflow (deliberate mode)

Follow this sequence. Do not rush or invent product decisions.

Prefer **Plan Mode** for the initial research pass on non-trivial work.
Do not start long-running dev servers unless `project.mdc` says to.
Long unattended loops are automatic when a plan is in play (see [gates.md](gates.md) § Grind).

**Small / no-plan tasks:** still close gates (typecheck, visual QA if UI).
Do not invent a plan file.

**Continue / keep going:** keep implementing until the asked work is finished.

## Grind (automatic)

When a plan is in context (user `@`'d it, pasted its path, or named it with work intent):

1. Implement the next open YAML todo
2. Update that plan's todo status when a slice finishes
3. The Cursor `stop` hook continues this chat until the plan has zero open todos

Do **not** register, edit a scratchpad, or invent a second checklist.
Two agents = two chats; each binds from its own user prompt.

## 1. Orient

- Open the owning plan under `.cursor/plans/<section>/{todo|partial}/…`
- Skim `.cursor/plans/README.md` if the area is unclear
- Read [`AGENTS.md`](../../../AGENTS.md) and [project.mdc](../../rules/project.mdc)
- List open todos and **locked** product decisions
- Prefer the next unfinished todo over a status wrap-up

## 2. Classify the layer

Put logic in the right place. Fill the table in [entry-points.md](entry-points.md).

Typical split:

| Concern | Owner |
|---------|--------|
| Business rules, eligibility, ranking | Backend / server |
| Shared DTOs / parsers | Domain package |
| Rendering, local UI state | Client app |

Wrong placement is expensive. Stop and ask if unclear.

Load skills when relevant:

- DOM / web chrome / polish → [design-ui](../design-ui/SKILL.md), then [ui-visual-craft](../ui-visual-craft/SKILL.md)
- Unlocked product/UX → [grilling](../grilling/SKILL.md)
- Games / canvas / 3D → `building-games` if installed; WASD/vehicle/flight → `controls` first

## 3. Find the vertical slice

Trace **route → service → types → UI**.

- Prefer editing existing files
- Copy sibling patterns exactly
- Do not add dependencies unless the user approved

## 4. Grill unlocked decisions

If a product/UX threshold, label, empty state, or interaction model is **not locked**:

1. Follow [grilling](../grilling/SKILL.md)
2. Research peers first; adopt clear low-stakes defaults
3. Do not implement until the frontier is empty **and** the user confirms
4. Record settled decisions in the plan

Skip grilling when every relevant decision is already locked.

## 5. Implement thin changes only

- Match existing shells, tokens, spacing
- Keep identifiers domain-named (no `temp`, `hack`, `screenshot` in prod names)

## 6. Close the gates

See [gates.md](gates.md).

**Feature complete** = owning plan has zero `pending` / `in_progress` todos.
