---
title: Carrier Exceptions
slug: carrier-exceptions
group: Execution
capability: Transportation & Yard Operations
status: draft
template_version: 1
generated: true
source: src/lib/solutions-data.ts
---

# Carrier Exceptions

> _A shipment just missed its window — reroute, re-promise, or recover?_ · Execution → Transportation & Yard Operations

## The decision
A load is delayed in transit and will miss its delivery window. The customer is tier-A, an alternate carrier could partially recover, and a re-promise might be accepted. Reroute, re-promise, or expedite the recovery?

## Why it's hard today
Re-promise a customer who won't tolerate it and you lose them; spend on recovery they'd have forgiven and you waste it. The right move depends on the customer, the alternate options, and the cost of each.

## Why existing systems stop here
Your TMS sees the delay; it doesn't know this customer's tolerance, whether a partial recovery is worth the cost, or how to re-promise credibly. It flags an exception, not a recovery plan.

## Operational context assembled
- Delay and revised ETA
- Customer tier and tolerance
- Alternate carrier / recovery options
- Recovery cost
- Commitment terms

## The governed decision — Decision Workspace
```
decision-workspace · carrier · load L-5567
⚠ Window miss — load L-5567, tier-A customer
Evidence assembled
 · ETA slips ~6 hours past window
 · Alternate carrier recovers ~80%
 · Customer rejected re-promises before
 · Recovery cost moderate
Recommendation · partial-reroute via alternate, notify proactively
 Policy: tier-A protected · cost within band · awaiting transport lead
[ Decision Object #L5567 ] [ Evidence ×4 ] [ Policy ✓ ] [ Reroute ] [ Re-promise ]
```

**Recommendation.** Partial-reroute via the alternate to recover most of the window and notify the customer proactively — under your service policy.

## Policy & constraints
- Tier-based tolerance rules
- Recovery-cost bands
- Proactive-notify requirements
- Commitment protection

## What changes
- Tier-A relationships protected
- Recovery spend where it earns its keep
- Fewer surprised customers

## The knowledge it keeps
Each exception and the customer's actual reaction is kept, so the model learns each account's real tolerance and the recoveries that work.

## Architecture
Underneath, this is the same operating model the rest of the platform runs: verified context is assembled, options are weighed and adversarially challenged, the decision is governed by your policy, and the outcome is learned. The decision changes from one of these to the next. The architecture does not.
