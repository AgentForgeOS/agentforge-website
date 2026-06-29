---
title: New Store / Launch Planning
slug: launch-planning
group: Planning
capability: Inventory & Planning
status: draft
template_version: 1
generated: true
source: src/lib/solutions-data.ts
---

# New Store / Launch Planning

> _A new store opens in three weeks with no sales history to plan from._ · Planning → Inventory & Planning

## The decision
A store opens in 21 days. There's no local sales history, the assortment is set, but the initial stocking quantities are a guess. Mirror a comparable store, lean conservative, or weight to the local market signals?

## Why it's hard today
Overstock a new store and you strand capital where demand is unproven; understock and you open empty. With no history, the call leans on comparable-store analogues, local signals, and category norms — scattered and subjective.

## Why existing systems stop here
Your planning system needs history it doesn't have. It either copies a template or defaults to safety stock — neither tuned to this market or this opening.

## Operational context assembled
- Comparable-store sell-through
- Local market and demographic signals
- Assortment and category norms
- Lead time to restock
- Opening promo plan

## The governed decision — Decision Workspace
```
decision-workspace · launch · Store 214
⚠ No history — Store 214 opens in 21 days, initial buy due
Evidence assembled
 · Closest comps: Stores 188, 203 (similar format)
 · Local signal skews to performance category
 · Restock lead time 10 days
 · Opening promo confirmed
Recommendation · comp-weighted buy, over-index performance, lean elsewhere
 Policy: within opening budget · restock-able in 10d · awaiting planner
[ Decision Object #214 ] [ Evidence ×4 ] [ Policy ✓ ] [ Approve ] [ Adjust ]
```

**Recommendation.** Stock to a comparable-store baseline, over-index the categories the local signal favors, and stay lean where restock is fast — under your opening budget.

## Policy & constraints
- Opening-budget limits
- Restock-lead-time buffers
- Category min/max
- Comp-selection rules

## What changes
- Fewer dead openings and fewer empty shelves
- Capital matched to proven format
- A faster path to a clean replen signal

## The knowledge it keeps
Every opening and how it actually sold becomes a comp for the next one — so the model gets better at launches with each store it opens.

## Architecture
Underneath, this is the same operating model the rest of the platform runs: verified context is assembled, options are weighed and adversarially challenged, the decision is governed by your policy, and the outcome is learned. The decision changes from one of these to the next. The architecture does not.
