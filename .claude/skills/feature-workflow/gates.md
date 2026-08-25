# Close-the-gates reference

Gates apply to **every** task that touches the relevant surface - plan or no plan.

## Typecheck (non-negotiable)

Before marking done, typecheck every package you touched and shared-contract consumers.
Commands live in `.cursor/rules/project.mdc`.
See `.cursor/rules/typecheck-gates.mdc`.

## Visual QA (non-negotiable if UI changed)

See `AGENTS.md` §8, `.cursor/rules/visual-qa.mdc`, and [ui-visual-craft](../ui-visual-craft/SKILL.md).

1. Open the exact surface you changed
2. Confirm real content on screen
3. Exercise every new control
4. Run the screenshot rubric
5. Report pass/fail

HTTP 200 is not this gate.

## Plan todos

When an owning `.cursor/plans/...` exists, update YAML todos when a slice finishes.
If there is no plan, skip this step - still close typecheck / visual gates.

## Grind loop (automatic)

Cursor-native: `stop` hook + `followup_message`.
**Feature complete** = owning plan YAML has no `pending` / `in_progress` todos.

Binding happens when you `@` a `.plan.md`, paste its path, or name it with work intent.
Reading or editing a plan file does not start a grind.

Loop cap is 6 (see `.cursor/hooks.json`).
Two chats can grind two plans at once. Details: `.cursor/grind/README.md`.

Hook logs → **View → Output → Hooks**: `[grind]`, `[grind-bind]`, `[grind-touch]`.
