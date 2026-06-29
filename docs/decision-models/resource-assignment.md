---
title: Resource Assignment
slug: resource-assignment
group: Execution
capability: Manufacturing Operations
status: draft
template_version: 1
generated: true
source: src/lib/solutions-data.ts
---

# Resource Assignment

> _The right machine, bay, or crew for the job isn't obvious._ · Execution → Manufacturing Operations

## The decision
A job is ready, but the ideal resource is busy, a second is available but slower, and a third needs a changeover. Wait for the ideal, take the available, or change over the third?

## Why it's hard today
Assign to the wrong resource and you lose throughput or quality; wait and you idle the job. The call depends on capability, availability, changeover, and the job's priority — rarely visible together.

## Why existing systems stop here
Your scheduler assigns by rule or availability; it doesn't weigh capability against changeover against priority. It picks a slot, not the best fit.

## Operational context assembled
- Resource capability and status
- Changeover requirements
- Job priority and due date
- Quality / capability match
- Crew skills

## The governed decision — Decision Workspace
```
decision-workspace · assign · job J-2208
⚠ Resource contention — J-2208 ready, ideal machine busy
Evidence assembled
 · Ideal machine free in 90 min
 · Available machine slower, lower yield
 · Third needs a 30-min changeover
 · Job due in 3 hours
Recommendation · change over the third, assign now
 Policy: capability match ok · changeover within limit · due-date met · awaiting supervisor
[ Decision Object #J2208 ] [ Evidence ×4 ] [ Policy ✓ ] [ Assign ] [ Wait ]
```

**Recommendation.** Change over the capable third resource and start now — beating the due date without the yield hit — under your assignment policy.

## Policy & constraints
- Capability-match rules
- Changeover-cost limits
- Due-date protection
- Crew-skill constraints

## What changes
- Higher throughput and yield
- Fewer idle jobs
- Resources matched to the work

## The knowledge it keeps
Each assignment and how it ran is kept, so the model learns each resource's real capability and changeover economics.

## Architecture
Underneath, this is the same operating model the rest of the platform runs: verified context is assembled, options are weighed and adversarially challenged, the decision is governed by your policy, and the outcome is learned. The decision changes from one of these to the next. The architecture does not.
