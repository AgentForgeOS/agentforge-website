---
title: Dual-Source Switching
slug: dual-source-switching
group: Planning
capability: Supplier & Procurement
status: draft
template_version: 1
generated: true
source: src/lib/solutions-data.ts
---

# Dual-Source Switching

> _Your primary source is wobbling — shift volume to the backup?_ · Planning → Supplier & Procurement

## The decision
The primary supplier's quality and on-time numbers are drifting. The qualified alternate costs more but is steady. Shift a portion of volume now, wait for a clearer signal, or split going forward?

## Why it's hard today
Shift too soon and you pay more for a problem that might resolve; too late and you're exposed when the primary fails. The call depends on trend confidence, the cost delta, and switching friction.

## Why existing systems stop here
Your procurement system tracks each supplier's metrics; it doesn't decide when the trend is bad enough to move volume, or how much. It reports scorecards, not a sourcing decision.

## Operational context assembled
- Primary supplier trend (quality, OTD)
- Alternate capacity and cost
- Switching cost and qualification status
- Volume at risk
- Contract commitments

## The governed decision — Decision Workspace
```
decision-workspace · source · part 7740
⚠ Primary drift — part 7740: OTD 96% → 88% over 6 weeks
Evidence assembled
 · Quality escapes up in 2 of the last 3 lots
 · Alternate qualified, +5% cost, steady
 · Switching cost low; capacity available
 · Contract allows split sourcing
Recommendation · shift 40% to the alternate, keep the primary on watch
 Policy: cost delta within band · qualification valid · awaiting buyer
[ Decision Object #7740 ] [ Evidence ×4 ] [ Policy ✓ ] [ Approve ] [ Wait ]
```

**Recommendation.** Move a portion of volume to the steady alternate now and keep the primary on watch — hedging the exposure — under your sourcing policy.

## Policy & constraints
- Cost-delta bands
- Qualification requirements
- Volume-shift limits
- Contract split rules

## What changes
- Exposure reduced before a failure
- Cost increase contained
- Supply kept steady

## The knowledge it keeps
Each shift and whether the primary recovered or failed is kept, so the model learns this supplier's real trajectory and the right trigger point.

## Architecture
Underneath, this is the same operating model the rest of the platform runs: verified context is assembled, options are weighed and adversarially challenged, the decision is governed by your policy, and the outcome is learned. The decision changes from one of these to the next. The architecture does not.
