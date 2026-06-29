---
title: Capacity Allocation
slug: capacity-allocation
group: Planning
capability: Inventory & Planning
status: draft
template_version: 1
generated: true
source: src/lib/solutions-data.ts
---

# Capacity Allocation

> _Production capacity is short, and every order thinks it's first._ · Planning → Inventory & Planning

## The decision
Demand exceeds what the line can produce this period. Three orders compete for the same constrained capacity — one strategic, one high-margin, one at risk of penalty. Who gets made first?

## Why it's hard today
Sequence wrong and you breach an SLA, leave margin idle, or burn a strategic account. The right order depends on penalties, margin, and strategic weight — which live in different systems and different heads.

## Why existing systems stop here
Your scheduler sequences by due date or rule; it doesn't weigh the penalty clause, the margin, and the account's strategic value against each other. It produces a schedule, not a trade-off decision.

## Operational context assembled
- Available capacity and constraints
- Order due dates and penalties
- Margin by order
- Account strategic weight
- Changeover costs

## The governed decision — Decision Workspace
```
decision-workspace · capacity · line 2
⚠ Capacity 0.7× demand — line 2, three orders competing
Evidence assembled
 · Order A: tier-A account, mid-margin
 · Order B: high-margin, flexible date
 · Order C: penalty at +2 days
 · Changeover between A and C is costly
Recommendation · sequence C, A, B to avoid penalty and protect tier-A
 Policy: penalty avoided · tier-A protected · changeover within limit · awaiting scheduler
[ Decision Object #L2-44 ] [ Evidence ×4 ] [ Policy ✓ ] [ Approve ] [ Resequence ]
```

**Recommendation.** Sequence to avoid the penalty and protect the strategic account, fitting the high-margin order where changeover allows — under your capacity policy.

## Policy & constraints
- Penalty-avoidance rules
- Strategic-account priority
- Changeover-cost limits
- Due-date constraints

## What changes
- Penalties avoided
- Margin and strategic value protected
- Less idle capacity

## The knowledge it keeps
Each sequencing call and its result is kept, so the model learns this line's real changeover and throughput behavior, improving with use.

## Architecture
Underneath, this is the same operating model the rest of the platform runs: verified context is assembled, options are weighed and adversarially challenged, the decision is governed by your policy, and the outcome is learned. The decision changes from one of these to the next. The architecture does not.
