---
title: Demand Allocation
slug: demand-allocation
group: Planning
capability: Inventory & Planning
status: draft
template_version: 1
generated: true
source: src/lib/solutions-data.ts
---

# Demand Allocation

> _Demand outruns supply, and someone has to decide who gets the units._ · Planning → Inventory & Planning

## The decision
Your forecast is in. It says three channels each want more of a hot SKU than you'll have for the next four weeks. The forecast doesn't decide who gets it — you do, by Friday, before the allocation locks.

## Why it's hard today
Every channel's number looks justified. Cut the wrong one and you strand a launch, burn a key account, or leave margin on the table. The right answer depends on context a spreadsheet doesn't hold: which account is actually growing, which promotion is firm, which channel quietly over-forecasts every season.

## Why existing systems stop here
Your planning system forecast the demand — it didn't weigh the trade-off. It hands you a number and a deadline, not a decision. So the call gets made from memory, in a meeting, and it is never recorded, defensible, or repeatable.

## Operational context assembled
- Live and committed demand by channel
- On-hand, in-transit, and reserved inventory
- Promotion and launch calendars
- Account growth and margin tiers
- Each channel's historical forecast bias

## The governed decision — Decision Workspace
```
decision-workspace · allocation · SKU 7741
⚠ Demand 1.8× supply — SKU 7741, next 4 weeks
Evidence assembled
 · Wholesale, DTC, and Retail all over-ask vs on-hand + in-transit
 · Launch reservation firm for 1,200 units (DTC)
 · Wholesale forecast runs +22% hot every season, later cut
 · Retail account flagged tier A, growing
Recommendation · protect launch + tier-A, discount wholesale ask
 Policy: launch reserved first · wholesale bias-adjusted · within margin floor · awaiting planner sign-off
[ Decision Object #7741 ] [ Evidence ×4 ] [ Policy ✓ ] [ Approve ] [ Adjust ]
```

**Recommendation.** A ranked allocation across channels — with the reasoning, the demand it protected, the ask it trimmed, and why — held under your allocation policy until you approve.

## Policy & constraints
- Minimums for strategic accounts
- Margin floors
- Launch reservations honored first
- Forecast-bias adjustment on chronic over-askers

## What changes
- Higher fill on the demand that matters
- Fewer stranded launches and lost key-account orders
- An allocation that's defensible after the fact

## The knowledge it keeps
Every allocation becomes a Decision Object — what was asked, what was given, and how it turned out. Next season the model already knows which channel over-asked and by how much. And a model is never quite finished: every deployment it runs in leaves it a little sharper at the trade-off.

## Architecture
Underneath, this is the same operating model the rest of the platform runs: verified context is assembled, options are weighed and adversarially challenged, the decision is governed by your policy, and the outcome is learned. The decision changes from one of these to the next. The architecture does not.
