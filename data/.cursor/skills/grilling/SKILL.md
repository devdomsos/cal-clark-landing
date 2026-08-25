---
name: grilling
description: >
  Interview the user with a design-tree of product and UX decisions until shared
  understanding is reached. Use when product/UX choices are unlocked or
  branching; before writing a new plan; when thresholds, labels, empty states,
  or interaction models are not locked; or when the user asks to grill, design,
  decide, or lock product questions. Research industry standards before asking.
  Do not ask engineering questions except rare high-impact structural forks.
  Do not invent answers — ask the frontier in rounds with options, industry
  standard, and a recommendation, then wait.
---

# Grilling

Interview the user until you reach a shared understanding. Map this as a design tree: every decision branches into the decisions that hang off it.

## What you may ask

**Default: product and UX only.** Taste, positioning, user-visible behavior, copy intent, ranking/priority rules that change the product, empty states, interaction models, monetization-facing choices.

**Engineering: rare and high-impact only.** Ask an engineering question only when a structural fork is unclear and choosing wrong is expensive (package ownership, server-vs-client authority, contract shape that locks multiple apps, irreversible data model). Routine implementation, file layout, naming, refactors, and “how should we code this” are **not** grilling material — decide from codebase conventions and ship.

If it is diggable (codebase, docs, sibling patterns, tools), look it up or dispatch a sub-agent. Never ask the user for facts.

## Research before every question

Before a frontier question reaches the user, research what comparable products and industry practice do for that decision. Prefer concrete peers in this product's category over vague "best practice."

You research because the user usually would not know without the same work. Asking unresearched questions wastes both sides.

If research yields a clear, low-stakes industry default and the choice does not change product identity, **adopt it**, record it in the plan’s locked decisions, and do not ask. Only put a question on the frontier when:

- peers disagree, or
- the choice is brand/product-defining, or
- the stakes are high enough that a silent default would be wrong

## Frontier rounds

Work the tree in rounds. The frontier is every decision whose prerequisites are already settled — the questions you can ask now without guessing at answers you have not heard yet.

1. Research each frontier item first (industry + codebase facts)
2. Drop items you can safely default from research; lock them in the plan
3. Ask the remaining frontier in **one round**
4. Wait for answers before the next round

A question whose answer depends on another question still open in this round belongs to a later round. Settled answers push the frontier outward; recompute and continue.

Finding facts is your job, never the user’s. When a frontier item needs an environment fact, dispatch a sub-agent — do not block the rest of the frontier on it. Decisions that depend on that fact wait; everything else asks now.

## Question format

Each question must include concrete options, what peers do, and your recommendation:

❓ **Q1** - **<question title>**: <short product/UX context; why it matters>

**Options:**
- A) …
- B) …
- C) …

**Industry standard:** <what comparable products typically do; name peers when useful>

➡️ **Recommend:** <A/B/C + one-line why>

Do not ask open-ended “what do you think?” without options. Do not bury the industry finding — surface it next to the choices.

## Done

The session is done when the frontier is empty: every branch visited, nothing silently assumed (researched defaults must be written into locked decisions). Do not implement until the user confirms shared understanding.
