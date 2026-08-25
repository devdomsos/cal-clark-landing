---
name: ui-visual-craft
description: >
  UI/UX craft for mobile and web when building or reviewing screens without a
  mockup. Use when implementing UI from a chat request, creating components,
  reviewing simulator or browser screenshots, fixing spacing/layout, empty
  states, sheets, cards, or when visual QA might rubber-stamp "looks OK".
  Forces sibling-first design, token use, and a structured screenshot rubric.
---

# UI visual craft (no-mockup fallback)

Models often call a screenshot "fine" when spacing is tight, hierarchy is flat,
or elements crowd the edges. **Do not trust vibes.** Follow this skill whenever
you create or change user-visible UI, especially with no Figma/PNG reference.

## Design input priority

1. **User-provided image / Figma / Design Mode** - match it
2. **Sibling screen or shared primitive** - copy rhythm, gaps, radii, type
3. **This repo's design tokens** - see `.cursor/rules/project.mdc`
4. **This skill's fallback scale** - only when 1–3 do not answer the question

Never invent a one-off palette, random large radius, or purple-glow "AI default"
look when a sibling or token exists.

## Fallback layout scale

Use an **8pt rhythm**. Prefer existing theme constants over magic numbers.

| Role | Default (dp / px) | Notes |
|------|-------------------|--------|
| Screen edge gutter | **16** | Do not put text flush to the screen edge |
| Section stack gap | **16–24** | Between distinct blocks |
| Related item gap | **8–12** | Chips in a row, icon+label |
| Card / sheet inner padding | **16** | Content inset inside elevated surfaces |
| Primary CTA inner horizontal pad | **≥ 32** | Label not flush to pill edge |
| Touch target | **≥ 44** height | Buttons, icon hits, list rows |
| Corner radius | Match sibling | Do not invent 24+ blob radii without a sibling |

**Crowding fail:** two interactive clusters closer than ~8dp, or a label under ~12dp from a card edge.

**Breathing fail:** title + body + CTA packed with <12dp between each → open up.

## Build checklist (before first screenshot)

- [ ] Copied structure from a sibling when one exists
- [ ] Colors from the project theme
- [ ] Gutters ≥ 16; section gaps ≥ 16; related gaps ≥ 8
- [ ] Primary CTA padding and touch target meet the table
- [ ] Loading / empty / error considered
- [ ] Safe area: chrome not under status bar; sheet CTAs not on the home indicator

## Screenshot rubric (mandatory)

Answer each line pass/fail. If any fail → fix → re-capture once.

1. **Edge gutters** - content not flush (unless full-bleed media)
2. **Vertical rhythm** - clear 8pt steps
3. **Alignment** - shared leading edges; baselines in a row
4. **Hierarchy** - one primary action
5. **Touch / tap** - controls look ≥ ~44dp
6. **Density** - no overlap; chips not crushed
7. **Safe area** - not under notch / home indicator
8. **Theme** - existing tokens, not a new palette
9. **Copy** - product language; ASCII `-` only
10. **Parity** - matches sibling energy
11. **Changed surface** - you captured the thing you edited
12. **Platform expectation** - trailing close/delete on the trailing edge; pickers hide used options

## Interaction QA

A screenshot of the **open** surface is not done. For every new or changed control:

1. Activate it (Done, Cancel, Save, Close, Remove, primary)
2. Capture after dismiss
3. A crash on close is a fail
4. Destructive: open confirm, then Cancel unless deleting is the test

Name the controls you used. If you cannot reach one, say so.

## Anti-patterns

- Calling a screenshot done because nothing is clipped, while gaps are 2–4dp
- Screenshot of a new modal without tapping Done / Cancel / Remove
- New card with heavy shadow next to flat sibling cards
- Hardcoded colors when tokens exist
- Trailing X glued to the label (`flex: 1` on the wrong node)
- Used picker rows left visible and disabled
- Skipping visual QA because it was a small spacing change

## Related

- Taste: `.cursor/skills/design-ui/SKILL.md`
- Gate: `.cursor/rules/visual-qa.mdc`
- Workflow: `.cursor/skills/feature-workflow/gates.md`
