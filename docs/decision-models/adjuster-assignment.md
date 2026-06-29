---
title: Adjuster Assignment
slug: adjuster-assignment
group: Execution
capability: Claims & Service Operations
status: draft
template_version: 1
generated: true
source: src/lib/solutions-data.ts
---

# Adjuster Assignment

> _This claim needs the right adjuster or shop — who gets it?_ · Execution → Claims & Service Operations

## The decision
A claim comes in needing assignment. One adjuster has the specialty but a full queue, a shop is closer but mixed-rated, and the customer is a priority. Route to the specialist, the nearby shop, or balance the load?

## Why it's hard today
Route by load alone and you mismatch complexity; route by specialty alone and you overload. The right assignment depends on complexity, specialty, capacity, geography, and the customer — across systems.

## Why existing systems stop here
Your system routes by queue or zone; it doesn't match claim complexity to adjuster specialty against capacity and customer priority. It assigns a slot, not the right fit.

## Operational context assembled
- Claim complexity and specialty needed
- Adjuster / shop capacity and ratings
- Geography and SLA
- Customer priority
- Current load balance

## The governed decision — Decision Workspace
```
decision-workspace · assign · claim #77150
⚠ Assignment needed — claim #77150, specialty + priority customer
Evidence assembled
 · Needs structural specialty
 · Specialist queue full; SLA at risk
 · Nearby shop available, mixed rating
 · Customer flagged priority
Recommendation · assign specialist, rebalance one routine claim off queue
 Policy: specialty matched · SLA protected · awaiting team lead
[ Decision Object #77150 ] [ Evidence ×4 ] [ Policy ✓ ] [ Assign ] [ Adjust ]
```

**Recommendation.** Assign the specialist and rebalance a routine claim off their queue to protect the SLA — matching complexity and capacity — under your assignment policy.

## Policy & constraints
- Specialty-match rules
- SLA protection
- Capacity-balancing limits
- Customer-priority weighting

## What changes
- Claims matched to the right skill
- SLAs protected
- Balanced adjuster load

## The knowledge it keeps
Each assignment and its cycle-time and quality result is kept, so the model learns which matches actually resolve fastest and cleanest.

## Architecture
Underneath, this is the same operating model the rest of the platform runs: verified context is assembled, options are weighed and adversarially challenged, the decision is governed by your policy, and the outcome is learned. The decision changes from one of these to the next. The architecture does not.
