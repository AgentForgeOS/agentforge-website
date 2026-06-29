---
title: Quality Holds
slug: quality-holds
group: Execution
capability: Manufacturing Operations
status: draft
template_version: 1
generated: true
source: src/lib/solutions-data.ts
---

# Quality Holds

> _A lot failed inspection — release, rework, or scrap?_ · Execution → Manufacturing Operations

## The decision
A lot tripped a quality check. It's bound for a key customer, rework is possible but slow, scrap is clean but costly, and a deviation might be acceptable. Release with deviation, rework, or scrap?

## Why it's hard today
Release a bad lot and you risk a customer escape; scrap a good-enough one and you eat the cost. The call depends on the defect's severity, the customer's spec tolerance, and the schedule — held in specs, history, and judgment.

## Why existing systems stop here
Your QMS records the failure; it doesn't weigh the deviation against the customer's real tolerance, the rework cost, and the schedule. It logs a hold, not a disposition.

## Operational context assembled
- Defect type and severity
- Customer spec and tolerance
- Rework cost and time
- Schedule impact
- Deviation history for this defect

## The governed decision — Decision Workspace
```
decision-workspace · quality · lot Q-4471
⚠ Lot failed — Q-4471, bound for a tier-A customer
Evidence assembled
 · Defect cosmetic, within historical deviation grants
 · Customer spec allows minor variance
 · Rework adds 6 hours
 · Schedule tight this week
Recommendation · release under documented deviation
 Policy: within customer tolerance · deviation documented · awaiting QA sign-off
[ Decision Object #Q4471 ] [ Evidence ×4 ] [ Policy ✓ ] [ Release ] [ Rework ]
```

**Recommendation.** Release under a documented deviation that stays inside the customer's tolerance — avoiding cost and delay without risking an escape — under your quality policy.

## Policy & constraints
- Customer-tolerance limits
- Deviation-documentation rules
- Defect-severity gates
- Escape-risk thresholds

## What changes
- Fewer needless scraps and reworks
- No quality escapes to customers
- Schedule protected

## The knowledge it keeps
Each disposition and whether the customer accepted it is kept, so the model learns this defect's real tolerance, by customer and spec.

## Architecture
Underneath, this is the same operating model the rest of the platform runs: verified context is assembled, options are weighed and adversarially challenged, the decision is governed by your policy, and the outcome is learned. The decision changes from one of these to the next. The architecture does not.
