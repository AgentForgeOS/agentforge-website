---
title: Inventory Purchasing & Buy Timing
slug: inventory-purchasing
group: Planning
capability: Inventory & Planning
status: draft
template_version: 1
generated: true
source: src/lib/solutions-data.ts
---

# Inventory Purchasing & Buy Timing

> _The forecast says buy — but buy now, buy later, or buy less?_ · Planning → Inventory & Planning

## The decision
Replenishment flags a SKU trending short. The forecast supports a buy, but the supplier wants a six-week commit, the price is rising, and finance is squeezing inventory. Commit the full quantity now, split the buy, or wait a cycle?

## Why it's hard today
Buy too early and you tie up cash and risk markdowns; buy too late and you stock out a hot item. The right answer depends on lead-time risk, the price trend, open-to-buy, and how firm the demand really is — none of which sit in one place.

## Why existing systems stop here
Your planning system recommends a quantity off the forecast; it doesn't weigh the price curve, the cash constraint, and the supplier's minimum against each other. It gives you a number, not a buy decision.

## Operational context assembled
- Forecast and demand firmness
- Open-to-buy and cash constraints
- Supplier MOQ, lead time, and price trend
- On-hand and in-transit
- Markdown risk by category

## The governed decision — Decision Workspace
```
decision-workspace · buy · SKU 5520
⚠ Stock-out risk in 3 weeks — SKU 5520, price trending +6%
Evidence assembled
 · Forecast firm; promo confirmed
 · Supplier MOQ 4,000; lead time 6 weeks
 · Open-to-buy tight this period
 · Price expected +6% on next quote
Recommendation · commit 60% now, stage 40% for next cycle
 Policy: within open-to-buy · MOQ met · markdown risk acceptable · awaiting planner
[ Decision Object #5520 ] [ Evidence ×4 ] [ Policy ✓ ] [ Approve ] [ Adjust ]
```

**Recommendation.** Commit the quantity that covers firm demand now and stage the rest — balancing stock-out risk, the price trend, and the cash you have — held under your open-to-buy policy.

## Policy & constraints
- Open-to-buy limits
- Supplier MOQ and terms
- Markdown-risk thresholds
- Cash constraints

## What changes
- Fewer stock-outs on hot items
- Less cash tied up early
- Buys timed to the price curve

## The knowledge it keeps
Each buy and how it played out — sold through, marked down, or stranded — is kept, so the model learns this category's real lead-time and price behavior, sharpening with every season it runs.

## Architecture
Underneath, this is the same operating model the rest of the platform runs: verified context is assembled, options are weighed and adversarially challenged, the decision is governed by your policy, and the outcome is learned. The decision changes from one of these to the next. The architecture does not.
