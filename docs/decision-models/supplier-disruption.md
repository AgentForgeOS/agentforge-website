---
title: Supplier Disruption Response
slug: supplier-disruption
group: Planning
capability: Supplier & Procurement
status: draft
template_version: 1
generated: true
source: src/lib/solutions-data.ts
---

# Supplier Disruption Response

> _A supplier's lead time just doubled, and the orders riding on it are now at risk._ · Planning → Supplier & Procurement

## The decision
An email lands: your supplier's lead time slipped from six days to fourteen. Three open orders depend on it — one for a tier-A account with a penalty clause. You have hours to decide: wait, expedite, reroute to an alternate, or re-promise the customer.

## Why it's hard today
The signal is buried in an inbox, the contract terms are in a PDF, the alternate's SLA is in another system, and the account's importance is in someone's head. By the time you've assembled all of it, the window to act has already narrowed.

## Why existing systems stop here
Your ERP records the order; it doesn't read the supplier's email, know the penalty clause triggers at ten days, or recognize this account is growing. It surfaces a late PO, not a decision.

## Operational context assembled
- Inbound supplier signals (last 48h)
- Affected open orders and their accounts
- Contract penalty terms
- Alternate suppliers — SLA and cost
- Account tier and growth

## The governed decision — Decision Workspace
```
decision-workspace · order #4821
⚠ Margin risk — Order #4821 · Northwind Logistics
Evidence assembled
 · Supplier lead time slipped 6 → 14 days (3 signals, last 48h)
 · Contract penalty clause triggers above a 10-day delay
 · Alternate supplier in-SLA at +4% unit cost
 · Account flagged priority tier A
Recommendation · reroute to alternate supplier
 Policy: +4% spend within auto-approve threshold · awaiting human sign-off
[ Decision Object #4821 ] [ Evidence ×4 ] [ Policy ✓ ] [ Approve ] [ Override ]
```

**Recommendation.** Reroute to the in-SLA alternate at +4%, within the auto-approve threshold — or hold, with the cost of each path laid out — awaiting sign-off.

## Policy & constraints
- Spend within auto-approve threshold
- Penalty-clause avoidance
- Tier-A protection
- Approved alternates only

## What changes
- Penalties avoided
- Tier-A orders protected
- A response faster than an inbox allows

## The knowledge it keeps
The decision, its evidence, and the outcome persist. The next time this supplier slips, the system starts from what happened last time — and gets sharper with every deployment it runs in.

## Architecture
Underneath, this is the same operating model the rest of the platform runs: verified context is assembled, options are weighed and adversarially challenged, the decision is governed by your policy, and the outcome is learned. The decision changes from one of these to the next. The architecture does not.
