---
title: Claims Adjudication
slug: claims-adjudication
group: Execution
capability: Claims & Service Operations
status: draft
template_version: 1
generated: true
source: src/lib/solutions-data.ts
---

# Claims Adjudication

> _A claim is filed, and it has to be decided against a contract no one has read in a year._ · Execution → Claims & Service Operations

## The decision
A claim comes in. Coverage depends on the contract terms, the component's history, the shop's track record, and a few faint fraud signals — and the customer is waiting. Approve, deny, partial-pay, request more, or escalate?

## Why it's hard today
The contract is a PDF, the prior claims are in one system, the shop's pattern in another, the fraud signal is subtle. Adjudicate too fast and you leak loss; too slow and the customer churns. Consistency across adjusters is nearly impossible by hand.

## Why existing systems stop here
Your claims system stores the claim; it doesn't read the contract, recall this shop's history, or weigh the fraud signal against the SLA. It routes a task, not a decision.

## Operational context assembled
- Contract terms and coverage
- Claim and component history
- Shop / provider track record
- Fraud and anomaly signals
- SLA and authority limits

## The governed decision — Decision Workspace
```
decision-workspace · claim #88412
⚠ Coverage ambiguity — claim #88412, component out of standard window
Evidence assembled
 · Contract covers component; one exclusion applies partially
 · Shop history clean; 0 anomalies in 24 months
 · Fraud score low; documentation complete
 · Within adjuster authority limit
Recommendation · approve at contracted rate, flag partial exclusion
 Policy: within authority · compliant · reserve threshold ok · awaiting adjuster sign-off
[ Decision Object #88412 ] [ Evidence ×4 ] [ Policy ✓ ] [ Approve ] [ Escalate ]
```

**Recommendation.** Approve at the contracted rate with the partial exclusion flagged — within adjuster authority — or escalate, with the contract clause and the fraud signal surfaced, pending sign-off.

## Policy & constraints
- Coverage rules and exclusions
- Authority limits by role
- Regulatory compliance
- Reserve thresholds

## What changes
- A tighter loss ratio
- Faster, more consistent cycle time
- Defensible, audit-ready decisions

## The knowledge it keeps
Every adjudication is preserved with its reasoning, so similar claims are decided consistently — and the patterns (a shop, a component, a fraud signature) sharpen with each one, and with every book it runs in.

## Architecture
Underneath, this is the same operating model the rest of the platform runs: verified context is assembled, options are weighed and adversarially challenged, the decision is governed by your policy, and the outcome is learned. The decision changes from one of these to the next. The architecture does not.
