---
title: Fraud & Anomaly Triage
slug: fraud-triage
group: Execution
capability: Claims & Service Operations
status: draft
template_version: 1
generated: true
source: src/lib/solutions-data.ts
---

# Fraud & Anomaly Triage

> _A claim doesn't quite add up — investigate, fast-track, or route?_ · Execution → Claims & Service Operations

## The decision
A claim carries faint anomaly signals — an unusual pattern, a flagged provider, a timing oddity. None is conclusive, the customer is waiting, and investigation is costly. Fast-track, route to special investigation, or request more?

## Why it's hard today
Over-investigate clean claims and you anger customers and burn cost; under-investigate and you leak loss. The signals are subtle and scattered, and the threshold is a judgment call.

## Why existing systems stop here
Your claims system scores risk per rule; it doesn't assemble the weak signals into a picture or decide the threshold to investigate. It flags a score, not a triage decision.

## Operational context assembled
- Anomaly signals and patterns
- Provider / shop history
- Claim and customer history
- Investigation cost
- Loss exposure

## The governed decision — Decision Workspace
```
decision-workspace · triage · claim #90233
⚠ Anomaly signals — claim #90233, provider flagged
Evidence assembled
 · Provider on a watch pattern (2 prior)
 · Timing unusual vs the incident date
 · Customer history clean
 · Loss exposure moderate
Recommendation · route to special investigation, hold payout
 Policy: multi-signal · exposure above auto-pay · awaiting SIU sign-off
[ Decision Object #90233 ] [ Evidence ×4 ] [ Policy ✓ ] [ Route SIU ] [ Fast-track ]
```

**Recommendation.** Route to investigation and hold the payout where the signals stack against a flagged provider — focusing scrutiny where it pays — under your triage policy.

## Policy & constraints
- Multi-signal thresholds
- Auto-pay exposure limits
- Provider-watch rules
- Customer-experience guards

## What changes
- Leakage caught earlier
- Clean claims not slowed
- Investigation spent where it counts

## The knowledge it keeps
Each triage and whether fraud was confirmed is kept, so the model learns which signal combinations and providers actually predict loss.

## Architecture
Underneath, this is the same operating model the rest of the platform runs: verified context is assembled, options are weighed and adversarially challenged, the decision is governed by your policy, and the outcome is learned. The decision changes from one of these to the next. The architecture does not.
