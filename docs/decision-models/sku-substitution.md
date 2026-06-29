---
title: SKU Substitution
slug: sku-substitution
group: Planning
capability: Inventory & Planning
status: draft
template_version: 1
generated: true
source: src/lib/solutions-data.ts
---

# SKU Substitution

> _The SKU the customer wants is short — what do you offer instead?_ · Planning → Inventory & Planning

## The decision
An order can't be filled with the requested SKU. A near-substitute is in stock, another is inbound, and the customer has a history. Offer the in-stock substitute, hold for the inbound, or split the order?

## Why it's hard today
Offer the wrong substitute and you get a return or a churned customer; hold too long and you miss the ship window. The right swap depends on the customer's tolerance, the substitute's fit, and inbound timing.

## Why existing systems stop here
Your OMS knows the requested SKU is out; it doesn't know which substitute this customer will accept or whether the inbound arrives in time. It shows a stock-out, not a substitution decision.

## Operational context assembled
- Substitute availability and fit
- Inbound timing for the requested SKU
- Customer history and tolerance
- Ship-window constraints
- Margin by substitute

## The governed decision — Decision Workspace
```
decision-workspace · substitute · order #6610
⚠ Requested SKU out — order #6610, ship window 2 days
Evidence assembled
 · Near-substitute in stock, 95% fit
 · Requested SKU inbound in 5 days (misses window)
 · Customer accepted substitutes before
 · Substitute margin comparable
Recommendation · offer in-stock substitute, flag for confirm
 Policy: fit threshold met · margin ok · awaiting CS confirm
[ Decision Object #6610 ] [ Evidence ×4 ] [ Policy ✓ ] [ Offer ] [ Hold ]
```

**Recommendation.** Offer the high-fit in-stock substitute to hold the ship window, flagged for the customer's confirmation — under your substitution policy.

## Policy & constraints
- Substitute-fit thresholds
- Customer-tolerance rules
- Ship-window protection
- Margin floors

## What changes
- Fewer missed ship windows
- Fewer returns and churned orders
- Substitutions the customer accepts

## The knowledge it keeps
Every substitution and whether it stuck — accepted, returned, or refused — is kept, so the model learns each customer's real tolerance.

## Architecture
Underneath, this is the same operating model the rest of the platform runs: verified context is assembled, options are weighed and adversarially challenged, the decision is governed by your policy, and the outcome is learned. The decision changes from one of these to the next. The architecture does not.
