---
name: design-ui
description: >
  Design and build polished, non-generic UI for web, native, and game overlays.
  Use whenever you create or restyle any interface surface - pages, screens,
  dashboards, forms, modals, nav, sheets, and game HUD/menus. Covers design
  tokens, layout, typography, color, spacing, motion, and anti-AI-slop rules.
  Triggers on "design", "UI", "make it look good", "polish", "landing page",
  "theme", "style", "redesign", "ugly", "clean up".
metadata:
  short-description: "Polished, non-generic UI: tokens, layout, type, color, motion, anti-slop"
user-invocable: false
---

# Design & UI

Make interfaces that look intentional and premium, not template-generic. Apply
it to **DOM / overlay / product UI**. For a 3D game's gameplay canvas, see
`building-games` if installed; this skill governs the DOM UI layered over it.
After you ship pixels, judge them with `ui-visual-craft`.

**Read `references/` for depth** (loaded on demand):
- `references/refined-ui.md` - product-chrome design system (taste, not stack)
- `references/typography.md` - type scale, pairing, rhythm
- `references/surfaces.md` - elevation, borders, shadows, layering
- `references/animations.md` - motion, easing, transitions
- `references/performance.md` - keep UI smooth

Do **not** create a new token file or UI kit when this repo already has one.
See `.cursor/rules/project.mdc`.

---

## 1. Design-system-first

Define the system once, then compose from it. **Never** sprinkle ad-hoc values.

- Use **existing** tokens for the surface you are editing
- Ban ad-hoc styling in new work: no raw hex when a token exists, no arbitrary `p-[13px]` when a scale step exists
- Reuse existing components. Do not add a UI kit to satisfy this skill
- Icons: use the repo's existing icon set. Never emoji-as-icons

## 2. Quantified rubric

- ≤ 3–5 colors on a new surface (one primary + neutrals + at most one accent). Don't default to purple
- ≤ 2 font families (often one)
- Line-height 1.4–1.6 for body; tighter for large headings
- When you override a background, override the foreground too
- Mobile-first (~390px), no horizontal overflow, tap targets ≥ 44px
- 4/8-based spacing. Generous whitespace beats cramming
- One accent, used sparingly for primary actions

## 3. Anti-AI-slop

- No gradient-blob filler
- No emoji as icons
- No placeholder / lorem-gray boxes in the final product
- Every element earns its place
- Match the existing UI when editing in place; don't introduce a second visual language

## 4. Layout & hierarchy

- One primary action per view
- Real layout structure (grid/flex), not absolute-position hacks
- Empty, loading, and error states are part of the design

## 5. Motion

- 150–250ms, eased; respect `prefers-reduced-motion`
- Prefer transform/opacity, not layout animation that janks

## 6. Game overlays

If `building-games` is installed: this skill styles start screen, HUD, pause, menus.
Keep overlay readable over the canvas and out of the pointer-lock input path.

## Finish checklist

- Colors/spacing from the **correct existing theme**
- Contrast holds
- ~390px has no overflow; targets ≥ 44px
- Loading/empty/error handled
- Judged with `ui-visual-craft`. A curl 200 is not enough
