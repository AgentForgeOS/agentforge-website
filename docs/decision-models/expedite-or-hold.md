---
title: Expedite-or-Hold
slug: expedite-or-hold
group: Planning
capability: Supplier & Procurement
status: draft
template_version: 1
generated: true
source: src/lib/solutions-data.ts
---

# Expedite-or-Hold

> _Pay to expedite, or absorb the delay — which costs less?_ · Planning → Supplier & Procurement

## The decision
A shipment is running late. Expedited freight would recover the date but costs a premium; holding risks a stock-out or a missed commitment. Pay to expedite, partial-expedite the critical SKUs, or hold?

## Why it's hard today
Expedite everything and you erode margin; hold and you may breach an SLA. The break-even depends on the cost of the delay versus the premium — a calculation usually done by gut.

## Why existing systems stop here
Your TMS can book expedited freight; it doesn't weigh the premium against the cost of the stock-out or the penalty. It quotes a rate, not a decision.

## Operational context assembled
- Delay length and affected orders
- Expedite premium options
- Stock-out and penalty exposure
- Criticality by SKU
- Service commitments

## The governed decision — Decision Workspace
```
decision-workspace · expedite · shipment S-8841
⚠ 3-day delay — shipment S-8841, two orders exposed
Evidence assembled
 · Expedite premium ~$3,100
 · One order penalty ~$5,400 at +2 days
 · Other order has buffer
 · Critical SKUs are 40% of the load
Recommendation · partial-expedite critical SKUs only
 Policy: net-positive vs penalty · within freight budget · awaiting buyer
[ Decision Object #S8841 ] [ Evidence ×4 ] [ Policy ✓ ] [ Approve ] [ Hold ]
```

**Recommendation.** Expedite only the critical SKUs whose delay costs more than the premium, and let the buffered remainder ride — under your freight policy.

## Policy & constraints
- Expedite-budget limits
- Net-cost-positive rule
- Penalty-avoidance priority
- Criticality thresholds

## What changes
- Premiums paid only where they pay off
- Penalties avoided
- Margin protected on the rest

## The knowledge it keeps
Each expedite call and its real cost vs benefit is kept, so the model sharpens its break-even for this lane and supplier.

## Architecture
Underneath, this is the same operating model the rest of the platform runs: verified context is assembled, options are weighed and adversarially challenged, the decision is governed by your policy, and the outcome is learned. The decision changes from one of these to the next. The architecture does not.
