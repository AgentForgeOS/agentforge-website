---
title: Stock Reservation
slug: stock-reservation
group: Planning
capability: Inventory & Planning
status: draft
template_version: 1
generated: true
source: src/lib/solutions-data.ts
---

# Stock Reservation

> _Two channels want the same units, and one launch can't be short._ · Planning → Inventory & Planning

## The decision
Inventory just landed. A launch needs it reserved, a key wholesale account is asking for the same SKU, and DTC is selling it live right now. Reserve for the launch, release to wholesale, or let DTC keep flowing?

## Why it's hard today
Reserve too much and you starve live demand; reserve too little and the launch gets embarrassed. The call depends on launch firmness, account importance, and real-time sell-through — all moving targets.

## Why existing systems stop here
Your OMS shows available-to-promise; it doesn't know the launch is firm, the account is strategic, or that DTC velocity just spiked. It allocates by rule, not by judgment.

## Operational context assembled
- Live sell-through by channel
- Launch commitments and dates
- Account tier and open orders
- On-hand and inbound
- Reservation aging

## The governed decision — Decision Workspace
```
decision-workspace · reserve · SKU 3318
⚠ Contention — SKU 3318 wanted by launch, wholesale, and DTC
Evidence assembled
 · Launch firm in 9 days, 800 units
 · Tier-A wholesale PO open
 · DTC velocity +40% today
 · Inbound covers ~half the gap
Recommendation · reserve launch, partial-release wholesale, cap DTC
 Policy: launch protected · tier-A minimum met · awaiting planner
[ Decision Object #3318 ] [ Evidence ×4 ] [ Policy ✓ ] [ Approve ] [ Adjust ]
```

**Recommendation.** Reserve what the launch firmly needs, release a partial to the tier-A account, and cap DTC at the remainder — under your reservation policy.

## Policy & constraints
- Launch reservations honored first
- Strategic-account minimums
- DTC velocity caps
- Reservation expiry

## What changes
- Launches that don't run short
- Key accounts kept whole
- Less idle reserved stock

## The knowledge it keeps
Every reservation and its result is kept, so the model learns which launches actually pull and which reservations expire, tightening with each cycle.

## Architecture
Underneath, this is the same operating model the rest of the platform runs: verified context is assembled, options are weighed and adversarially challenged, the decision is governed by your policy, and the outcome is learned. The decision changes from one of these to the next. The architecture does not.
