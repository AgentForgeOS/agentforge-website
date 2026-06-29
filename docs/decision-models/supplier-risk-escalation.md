---
title: Supplier Risk Escalation
slug: supplier-risk-escalation
group: Planning
capability: Supplier & Procurement
status: draft
template_version: 1
generated: true
source: src/lib/solutions-data.ts
---

# Supplier Risk Escalation

> _A supplier is trending toward failure — act now, or wait for proof?_ · Planning → Supplier & Procurement

## The decision
Weak signals are stacking up on a supplier — a missed-payment notice, slower responses, a quality dip. Nothing is conclusive. Escalate to dual-source and a risk review now, or wait for a harder signal?

## Why it's hard today
Escalate on noise and you waste effort and strain the relationship; wait and you get caught when they fail. The signals are faint, scattered, and easy to dismiss individually.

## Why existing systems stop here
Your systems hold each signal separately — finance, quality, comms. None of them assembles the weak signals into a risk picture or decides it's time to act.

## Operational context assembled
- Financial-distress signals
- Quality and OTD trend
- Responsiveness and comms changes
- External risk (news, ratings)
- Exposure if they fail

## The governed decision — Decision Workspace
```
decision-workspace · risk · supplier Atlas
⚠ Risk signals stacking — supplier Atlas, exposure high
Evidence assembled
 · PO acks slowed (avg 1d → 4d)
 · One late-payment notice (external)
 · Quality dip on the last lot
 · We carry 3 single-sourced parts here
Recommendation · escalate: open dual-source, schedule risk review
 Policy: exposure above threshold · multi-signal · awaiting procurement lead
[ Decision Object #ATLAS ] [ Evidence ×4 ] [ Policy ✓ ] [ Escalate ] [ Watch ]
```

**Recommendation.** Escalate to a risk review and begin qualifying an alternate for the single-sourced parts — getting ahead of the exposure — under your supplier-risk policy.

## Policy & constraints
- Exposure thresholds
- Multi-signal escalation rules
- Single-source review triggers
- Relationship-handling rules

## What changes
- Failures anticipated, not absorbed
- Single-source exposure reduced early
- Calmer, planned transitions

## The knowledge it keeps
Each escalation and whether the supplier failed or recovered is kept, so the model learns which signal combinations actually precede failure.

## Architecture
Underneath, this is the same operating model the rest of the platform runs: verified context is assembled, options are weighed and adversarially challenged, the decision is governed by your policy, and the outcome is learned. The decision changes from one of these to the next. The architecture does not.
