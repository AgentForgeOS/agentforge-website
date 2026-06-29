---
title: Slow-Moving Inventory
slug: slow-moving-inventory
group: Planning
capability: Inventory & Planning
status: draft
template_version: 1
generated: true
source: src/lib/solutions-data.ts
---

# Slow-Moving Inventory

> _Aging stock is about to become a markdown — act before it strands._ · Planning → Inventory & Planning

## The decision
A SKU has gone quiet in one region while another is short on something similar. The aging clock is ticking toward a forced markdown. Transfer it, mark it down now, bundle it, or hold one more cycle?

## Why it's hard today
Mark down too early and you give away margin; too late and you eat a bigger cut. The right move depends on where demand still exists, transfer cost, and the markdown calendar — rarely visible together.

## Why existing systems stop here
Your system flags aging inventory; it doesn't know another region wants it, what the transfer costs, or where it sits on the markdown curve. It raises a flag, not a plan.

## Operational context assembled
- Aging and sell-through by location
- Regional demand for substitutes
- Transfer cost and lead time
- Markdown calendar and elasticity
- Carrying cost

## The governed decision — Decision Workspace
```
decision-workspace · aging · SKU 9027
⚠ 62 days aging — SKU 9027, markdown trigger in 8 days
Evidence assembled
 · Region West slow; Region East short on a near-substitute
 · Transfer ~$0.40/unit, 4-day lead
 · Markdown would cut ~30% margin
 · Carrying cost rising
Recommendation · transfer to East, hold markdown one cycle
 Policy: transfer within cost threshold · margin protected · awaiting planner
[ Decision Object #9027 ] [ Evidence ×4 ] [ Policy ✓ ] [ Approve ] [ Mark down ]
```

**Recommendation.** Transfer the slow stock to the region that still wants it and hold the markdown a cycle — protecting margin — under your aging policy.

## Policy & constraints
- Transfer-cost thresholds
- Markdown-timing rules
- Margin floors
- Carrying-cost limits

## What changes
- Less margin given to markdowns
- Aging stock redeployed, not dumped
- Lower carrying cost

## The knowledge it keeps
Each call and its outcome — sold after transfer or marked down anyway — is kept, so the model learns this category's true aging behavior.

## Architecture
Underneath, this is the same operating model the rest of the platform runs: verified context is assembled, options are weighed and adversarially challenged, the decision is governed by your policy, and the outcome is learned. The decision changes from one of these to the next. The architecture does not.
