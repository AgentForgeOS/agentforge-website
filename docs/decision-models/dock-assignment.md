---
title: Dock Assignment
slug: dock-assignment
group: Execution
capability: Transportation & Yard Operations
status: draft
template_version: 1
generated: true
source: src/lib/solutions-data.ts
---

# Dock Assignment

> _Trucks are arriving faster than doors are freeing up._ · Execution → Transportation & Yard Operations

## The decision
Three trucks are inbound within the hour, two doors are open, labor is thin, and one load is temperature-sensitive. Which truck gets which door, and which waits?

## Why it's hard today
Assign wrong and you idle a reefer, bottleneck the dock, or strand labor. The right assignment depends on load type, door capability, labor, and downstream priority — all changing minute to minute.

## Why existing systems stop here
Your yard/WMS shows door status; it doesn't sequence arrivals against labor, load sensitivity, and downstream need. It shows availability, not an assignment.

## Operational context assembled
- Inbound ETAs and load types
- Door capability and status
- Labor availability
- Temperature / handling needs
- Downstream pick priority

## The governed decision — Decision Workspace
```
decision-workspace · dock · facility 7
⚠ 3 inbound, 2 doors — facility 7, one reefer
Evidence assembled
 · Reefer load can't wait long
 · Door 3 has reefer capability, free now
 · Labor covers two unloads, not three
 · One load feeds an urgent pick
Recommendation · reefer → door 3, urgent-pick → door 5, third holds
 Policy: cold-chain protected · labor within limit · awaiting dock lead
[ Decision Object #F7-22 ] [ Evidence ×4 ] [ Policy ✓ ] [ Assign ] [ Adjust ]
```

**Recommendation.** Send the reefer to the capable door, the urgent-pick load to the second, and hold the third until labor frees — under your dock policy.

## Policy & constraints
- Cold-chain protection
- Labor constraints
- Door-capability rules
- Downstream-priority weighting

## What changes
- No spoiled cold-chain loads
- Higher dock throughput
- Labor used where it counts

## The knowledge it keeps
Each assignment and how the dock actually flowed is kept, so the model learns this facility's real door and labor rhythms.

## Architecture
Underneath, this is the same operating model the rest of the platform runs: verified context is assembled, options are weighed and adversarially challenged, the decision is governed by your policy, and the outcome is learned. The decision changes from one of these to the next. The architecture does not.
