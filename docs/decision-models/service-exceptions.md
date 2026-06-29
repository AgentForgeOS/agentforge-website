---
title: Service Exceptions
slug: service-exceptions
group: Execution
capability: Claims & Service Operations
status: draft
template_version: 1
generated: true
source: src/lib/solutions-data.ts
---

# Service Exceptions

> _Service fell out of SLA — what's the right make-good?_ · Execution → Claims & Service Operations

## The decision
A service commitment was missed. The customer is upset, several remedies are possible — a credit, an expedite, an escalation, a personal follow-up — each with a different cost and effect. What make-good fits this customer and this miss?

## Why it's hard today
Over-compensate and you train customers to complain; under-compensate and you lose them. The right remedy depends on the customer's value, the severity, and what's worked before — across CRM, contract, and history.

## Why existing systems stop here
Your service system logs the breach; it doesn't choose a remedy proportional to the customer and the miss. It opens a ticket, not a resolution.

## Operational context assembled
- SLA breach severity
- Customer value and history
- Available remedies and cost
- Past remedy effectiveness
- Contractual obligations

## The governed decision — Decision Workspace
```
decision-workspace · service · case #61190
⚠ SLA missed — case #61190, high-value customer
Evidence assembled
 · Second miss this quarter
 · Customer lifetime value high
 · Credit + expedite worked before
 · Contract has a remedy clause
Recommendation · service credit + expedited resolution, owner follow-up
 Policy: within remedy budget · proportional to value · awaiting service lead
[ Decision Object #61190 ] [ Evidence ×4 ] [ Policy ✓ ] [ Approve ] [ Adjust ]
```

**Recommendation.** Offer a proportional service credit with an expedited fix and a personal follow-up — matched to the customer's value and the repeat miss — under your remedy policy.

## Policy & constraints
- Remedy-budget limits
- Proportionality rules
- Contractual-remedy compliance
- Repeat-miss escalation

## What changes
- Retained high-value customers
- Remedies proportional, not reflexive
- Fewer repeat escalations

## The knowledge it keeps
Each remedy and whether it retained the customer is kept, so the model learns which make-goods actually work, by customer value and miss type.

## Architecture
Underneath, this is the same operating model the rest of the platform runs: verified context is assembled, options are weighed and adversarially challenged, the decision is governed by your policy, and the outcome is learned. The decision changes from one of these to the next. The architecture does not.
