---
title: Vehicle Logistics
slug: vehicle-logistics
group: Execution
capability: Transportation & Yard Operations
status: draft
template_version: 1
generated: true
source: src/lib/solutions-data.ts
---

# Vehicle Logistics

> _The yard is congesting, and the next move sets up the next hour._ · Execution → Transportation & Yard Operations

## The decision
Vehicles are stacking in the yard — inbound to stage, ready-for-load to move, finished to ship. Space is tight, one lane is blocked, and a priority load is due out. What moves next?

## Why it's hard today
Move the wrong vehicle and you deadlock a lane or delay the priority departure. Sequencing depends on positions, destinations, space, and priority — a live puzzle that changes with every move.

## Why existing systems stop here
Your yard system shows where vehicles are; it doesn't sequence the next moves to clear congestion and hit the priority departure. It shows a map, not the next move.

## Operational context assembled
- Vehicle positions and states
- Destinations and priority
- Available space and blocked lanes
- Priority departure deadlines
- Mover availability

## The governed decision — Decision Workspace
```
decision-workspace · yard · sequence
⚠ Yard congesting — priority load due out in 35 min
Evidence assembled
 · Lane B blocked by a staged unit
 · Priority load behind two finished vehicles
 · One open staging slot
 · Two movers available
Recommendation · clear lane B, move priority out, restage in slot
 Policy: priority departure protected · safe sequencing · awaiting yard lead
[ Decision Object #YS-77 ] [ Evidence ×4 ] [ Policy ✓ ] [ Sequence ] [ Adjust ]
```

**Recommendation.** Clear the blocking unit, move the priority load out, and restage the rest into the open slot — keeping the departure — under your yard policy.

## Policy & constraints
- Priority-departure protection
- Safe-sequencing rules
- Space constraints
- Mover-allocation limits

## What changes
- Priority departures kept
- Congestion cleared faster
- Fewer deadlocked lanes

## The knowledge it keeps
Each sequence and how the yard actually flowed is kept, so the model learns this yard's real congestion patterns by shift and volume.

## Architecture
Underneath, this is the same operating model the rest of the platform runs: verified context is assembled, options are weighed and adversarially challenged, the decision is governed by your policy, and the outcome is learned. The decision changes from one of these to the next. The architecture does not.
