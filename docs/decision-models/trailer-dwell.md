---
title: Trailer Dwell Optimization
slug: trailer-dwell
group: Execution
capability: Transportation & Yard Operations
status: draft
template_version: 1
generated: true
source: src/lib/solutions-data.ts
---

# Trailer Dwell Optimization

> _A trailer has sat past its dwell window, and detention is now ticking._ · Execution → Transportation & Yard Operations

## The decision
A loaded trailer has idled in the yard three hours past its target. The detention clock is running, a door is freeing up, and another carrier is waiting. Hold it, move it to a door, release it back to the carrier, or reassign the load?

## Why it's hard today
The trailer's position drifts, the appointment schedule lives in the TMS, the detention terms are in the carrier contract, and door availability changes by the minute. No one screen shows all four at once — and the cost of guessing wrong is detention dollars or a missed departure.

## Why existing systems stop here
Your yard system knows where the trailer is; it doesn't know the detention clause, the downstream appointment, or that this carrier's SLA makes releasing it the cheaper move. It shows a dot on a map, not a decision — and that dot is an estimate, not the truth.

## Operational context assembled
- Live yard position and dwell time, with confidence
- Appointment and door schedule
- Detention clock and carrier terms
- Downstream load priority

## The governed decision — Decision Workspace
```
decision-workspace · yard · trailer T-2207
⚠ Dwell 3h 12m over target — trailer T-2207, detention accruing
Evidence assembled
 · Position confidence high; idle at staging row 9
 · Door 14 frees in ~15 min
 · Carrier SLA: release-empty avoids detention after 4h
 · Inbound carrier waiting on a door
Recommendation · reposition to door 14, release the empty
 Policy: within detention threshold · dock capacity ok · awaiting yard-lead sign-off
[ Decision Object #2207 ] [ Evidence ×4 ] [ Policy ✓ ] [ Approve ] [ Hold ]
```

**Recommendation.** Reposition to door 14 now and release the empty — clearing detention exposure and the waiting carrier — under your yard policy, pending the yard lead's nod.

## Policy & constraints
- Detention-cost thresholds
- Carrier contract terms
- Dock capacity and safety
- Appointment priority

## What changes
- Lower detention spend
- Higher dock throughput
- More on-time departures

## The knowledge it keeps
Each call — and whether it actually cleared the congestion — is kept, so the yard's own patterns (which carriers, which doors, which hours) sharpen the next decision, and the model improves with every yard it runs in.

## Architecture
Underneath, this is the same operating model the rest of the platform runs: verified context is assembled, options are weighed and adversarially challenged, the decision is governed by your policy, and the outcome is learned. The decision changes from one of these to the next. The architecture does not.
