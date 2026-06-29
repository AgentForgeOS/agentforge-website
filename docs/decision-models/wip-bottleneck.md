---
title: Work-in-Process Bottlenecks
slug: wip-bottleneck
group: Execution
capability: Manufacturing Operations
status: draft
template_version: 1
generated: true
source: src/lib/solutions-data.ts
---

# Work-in-Process Bottlenecks

> _A work cell is starving while the material it needs sits two buildings away._ · Execution → Manufacturing Operations

## The decision
Cell 4 is about to run dry. The material it needs is staged two buildings over, another cell is backing up behind it, and the shift changes in ninety minutes. Expedite the move, resequence the line, pull a different order forward, or hold?

## Why it's hard today
WIP location is approximate, the schedule is mid-shift, labor is finite, and the bottleneck moves the moment you act on it. The floor knows it's stuck before any system flags it — and an experienced supervisor's instinct is the only thing bridging the gap.

## Why existing systems stop here
Your MES shows the schedule, not the reality on the floor — where material actually is, how confident that reading is, and which move keeps the most cells running. It reports the bottleneck after it has already formed.

## Operational context assembled
- WIP location and confidence by cell
- Live schedule and cell status
- Material staging and transit
- Labor available this shift

## The governed decision — Decision Workspace
```
decision-workspace · floor · cell 4
⚠ Cell 4 starving — ~22 min to dry, Cell 6 backing up
Evidence assembled
 · Required lot staged in Bldg C (move ~12 min)
 · Resequencing two orders keeps 4 cells running
 · Shift change in 90 min; one mover available
 · Priority order due end of shift
Recommendation · expedite the lot, resequence two orders
 Policy: within changeover limit · labor ok · priority order protected · awaiting supervisor
[ Decision Object #C4-118 ] [ Evidence ×4 ] [ Policy ✓ ] [ Approve ] [ Adjust ]
```

**Recommendation.** Move the staged lot to Cell 4 now and resequence two orders behind it — keeping four cells running — under your changeover and labor rules, pending the supervisor.

## Policy & constraints
- Changeover-cost limits
- Labor and safety constraints
- Schedule-adherence rules
- Priority-order protection

## What changes
- Higher line utilization
- Fewer starved cells and shift-end misses
- Less reliance on one supervisor's memory

## The knowledge it keeps
The move and its result are kept, so the floor's recurring bottlenecks — and what actually cleared them — become the model's, not just the veteran supervisor's, sharpening with every plant it runs in.

## Architecture
Underneath, this is the same operating model the rest of the platform runs: verified context is assembled, options are weighed and adversarially challenged, the decision is governed by your policy, and the outcome is learned. The decision changes from one of these to the next. The architecture does not.
