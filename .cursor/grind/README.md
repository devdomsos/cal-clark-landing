# Grind (automatic)

Uses Cursor’s native loop: the `stop` hook returns `followup_message` while work remains ([hooks docs](https://cursor.com/docs/hooks), [agent best practices](https://cursor.com/blog/agent-best-practices)).

**You do not register plans, edit a scratchpad, or create session files.**

| What | How |
|------|-----|
| Done signal | Owning plan YAML has zero `pending` / `in_progress` todos |
| Bind | Automatic when you `@` a plan, mention its path, or name it uniquely **with work intent**. Reading or editing a `.plan.md` does not start a grind. Transcript scans do not start a grind. |
| Loop | `stop` keeps submitting follow-ups until that plan’s YAML is clear (cap: 6). Injected Continue messages do not start a grind if this chat is idle. |
| Multi-agent | Each chat binds its own plan under `conversations/` (gitignored runtime) |

## User flow

1. Point the agent at a plan (`@` the file, or say finish/continue + plan name)
2. Let it work
3. It stops when the plan YAML has no open todos

Watch logs: **View → Output → Hooks** (`[grind]`, `[grind-bind]`, `[grind-touch]`).
