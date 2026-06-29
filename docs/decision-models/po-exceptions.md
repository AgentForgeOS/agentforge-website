---
title: Purchase Order Exceptions
slug: po-exceptions
group: Planning
capability: Supplier & Procurement
status: draft
template_version: 1
generated: true
source: src/lib/solutions-data.ts
---

# Purchase Order Exceptions

> _A PO came back out of tolerance — accept it, or push back?_ · Planning → Supplier & Procurement

## The decision
A supplier confirms a PO, but the price is up 3%, the date slipped four days, and the quantity is short. Accept as-is, partially accept, or reject and renegotiate — with the receiving dock already expecting it?

## Why it's hard today
Accept a bad confirmation and it ripples into cost and schedule; reject it and you may get nothing. The right call depends on tolerance bands, the order's criticality, and the supplier relationship.

## Why existing systems stop here
Your ERP flags the variance; it doesn't know whether 3% is acceptable for this category, whether the four-day slip breaks a downstream commit, or how hard to push this supplier. It raises an exception, not a resolution.

## Operational context assembled
- PO terms vs confirmation
- Tolerance bands by category
- Downstream commitments affected
- Supplier relationship and leverage
- Receiving schedule

## The governed decision — Decision Workspace
```
decision-workspace · PO #44120
⚠ Out of tolerance — PO #44120: +3% price, +4 days, −5% qty
Evidence assembled
 · Price variance above the 2% band
 · 4-day slip breaks one downstream order
 · Qty short covered by safety stock
 · Supplier has limited alternates
Recommendation · accept price, push the date, accept short qty
 Policy: price within escalation band · downstream re-promised · awaiting buyer
[ Decision Object #44120 ] [ Evidence ×4 ] [ Policy ✓ ] [ Accept ] [ Renegotiate ]
```

**Recommendation.** Accept what's tolerable, push back on the date that breaks a commitment, and absorb the short quantity from safety stock — under your tolerance policy.

## Policy & constraints
- Price/qty/date tolerance bands
- Downstream-commit protection
- Escalation thresholds
- Supplier-leverage rules

## What changes
- Fewer cost and schedule surprises
- Pushback focused where it matters
- Faster PO resolution

## The knowledge it keeps
Each exception and its outcome is kept, so the model learns this supplier's real reliability and which pushbacks actually land.

## Architecture
Underneath, this is the same operating model the rest of the platform runs: verified context is assembled, options are weighed and adversarially challenged, the decision is governed by your policy, and the outcome is learned. The decision changes from one of these to the next. The architecture does not.
