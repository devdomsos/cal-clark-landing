# Cursor plans

Non-trivial work gets a `.plan.md` under `.cursor/plans/<area>/{todo|partial|done}/`.

**Agent workflow:** [feature-workflow](../skills/feature-workflow/SKILL.md).
Grind is automatic when a plan is in context ([grind README](../grind/README.md)).
Hard rules stay lean in [`AGENTS.md`](../../AGENTS.md).

## Layout

```text
.cursor/plans/
  <area>/
    todo/      work remaining
    partial/   started, not done
    done/      finished (keep for history)
```

Copy [_example.plan.md](_example.plan.md) and replace the YAML.

## Grind bind

`@` the file, paste `.cursor/plans/…/foo.plan.md`, or name it uniquely with work intent (`continue`, `implement`, `finish`).
Reading the file is not enough to start a loop.

**Done** = YAML `todos` have no `pending` or `in_progress` items.
