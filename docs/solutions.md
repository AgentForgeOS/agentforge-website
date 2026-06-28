# Solutions

> _A faithful text transcription of the AgentForge "Solutions" section (`/solutions` + the deep `/solutions/[model]` pages) for review. Organized for customer recognition — Planning vs Execution → Capability → Decision Model. Five models have deep pages (below); the rest are named on the landing and grow into deep pages over time. Written from the customer's point of view; the architecture is the explanation at the end, never the lead._

---

## Landing — `/solutions`

**SOLUTIONS**

# Find your operation.

These are the operational decisions teams make every day — the planning calls that follow the forecast, and the execution calls made live, on the floor and in the yard. Find yours below.

### Planning decisions
_The forward-looking calls your forecasting and commerce systems leave unmade._

**Inventory & Planning** — _Your demand forecast is an input, not a decision. The hard work is the call that follows — buy now or wait, allocate to which channel, reserve for the launch, move the slow stock._
- **Demand Allocation** → — Who gets the limited stock when demand outruns supply. _(deep)_
- **Inventory Purchasing & Buy Timing** — Buy now or wait — and how much, against the forecast.
- **Stock Reservation** — Hold inventory for a launch, a channel, or a key account.
- **Slow-Moving Inventory** — Mark down, transfer, or hold aging stock before it strands.
- **New Store / Launch Planning** — Position inventory for an opening with no sales history.
- **Capacity Allocation** — Allocate constrained production or fulfillment across demand.
- **SKU Substitution** — Offer the right substitute when the preferred SKU is short.

**Supplier & Procurement**
- **Supplier Disruption Response** → — Reroute, expedite, or hold when a supplier slips. _(deep)_
- **Purchase Order Exceptions** — Resolve POs that fall out of tolerance on price, date, or quantity.
- **Expedite-or-Hold** — Pay to expedite, or absorb the delay.
- **Dual-Source Switching** — Shift volume to an alternate source under risk or cost pressure.
- **Supplier Risk Escalation** — Act early on a supplier trending toward failure.

### Execution decisions
_Real-time calls as events happen — on the floor, in the yard, on the live event._

**Transportation & Yard Operations**
- **Trailer Dwell Optimization** → — Release or reposition trailers idling past their window. _(deep)_
- **Dock Assignment** — Assign the right door under shifting arrivals and labor.
- **Carrier Exceptions** — Reroute or re-promise when a shipment misses its window.
- **Asset Retrieval** — Find and move the right asset before it stalls the next step.
- **Vehicle Logistics** — Stage, move, and sequence vehicles through the yard.

**Manufacturing Operations**
- **Work-in-Process Bottlenecks** → — Rebalance a line when a work cell starves or backs up. _(deep)_
- **Quality Holds** — Release, rework, or scrap when a lot fails inspection.
- **Production Line Balancing** — Shift labor and orders as the schedule drifts.
- **Resource Assignment** — Assign the right machine, bay, or crew under constraints.

**Claims & Service Operations**
- **Claims Adjudication** → — Approve, deny, or escalate against contract and policy. _(deep)_
- **Fraud & Anomaly Triage** — Flag and route claims that don't add up.
- **Adjuster Assignment** — Route each claim to the right adjuster or shop.
- **Service Exceptions** — Decide the make-good when service falls out of SLA.

**One platform — read across the columns, and the realization arrives on its own.** These come from operations that share almost nothing. Yet a planner and a yard lead are running the same shape of decision — and the same architecture governs both, configured to each. That is why this is not a list of products. Each is a **Decision Model** on one architecture — and a model is never quite finished. Every operation it runs in leaves it a little sharper, until the model itself becomes the asset.

> **Don't see your decision? It's probably the same shape.** Tell us the call your team makes from memory, under pressure, with money on the line. We'll show you what it looks like governed. → **Request access**

---

# Deep Decision Model pages

Each deep page follows the same shape — the moment, why it's hard, why existing systems don't help, what AgentForge assembles, the governed decision, what improves, the knowledge it keeps, and (lightly, at the end) the architecture. The five below are V1; the rest of the catalog grows on this template.

---

## Demand Allocation
`Solutions · Planning · Inventory & Planning`

**Demand outruns supply, and someone has to decide who gets the units.**

**The decision.** Your forecast is in. It says three channels each want more of a hot SKU than you'll have for the next four weeks. The forecast doesn't decide who gets it — you do, by Friday, before the allocation locks.

**Why it's hard today.** Every channel's number looks justified. Cut the wrong one and you strand a launch, burn a key account, or leave margin on the table. The right answer depends on context a spreadsheet doesn't hold: which account is actually growing, which promotion is firm, which channel quietly over-forecasts every season.

**Why your systems don't help.** Your planning system forecast the demand — it didn't weigh the trade-off. It hands you a number and a deadline, not a decision. So the call gets made from memory, in a meeting, and it is never recorded, defensible, or repeatable.

**Operational context assembled:** Live and committed demand by channel · On-hand, in-transit, and reserved inventory · Promotion and launch calendars · Account growth and margin tiers · Each channel's historical forecast bias

```
decision-workspace · allocation · SKU 7741
⚠ Demand 1.8× supply — SKU 7741, next 4 weeks
Evidence assembled
 · Wholesale, DTC, and Retail all over-ask vs on-hand + in-transit
 · Launch reservation firm for 1,200 units (DTC)
 · Wholesale forecast runs +22% hot every season, later cut
 · Retail account flagged tier A, growing
Recommendation · protect launch + tier-A, discount wholesale ask
 Policy: launch reserved first · wholesale bias-adjusted · within margin floor · awaiting planner sign-off
[ Decision Object #7741 ] [ Evidence ×4 ] [ Policy ✓ ] [ Approve ] [ Adjust ]
```

**Governed by your policy:** Minimums for strategic accounts · Margin floors · Launch reservations honored first · Forecast-bias adjustment on chronic over-askers

**What improves:** Higher fill on the demand that matters · Fewer stranded launches and lost key-account orders · An allocation that's defensible after the fact

**The knowledge it keeps.** Every allocation becomes a Decision Object — what was asked, what was given, and how it turned out. Next season the model already knows which channel over-asked and by how much. And a model is never quite finished: every deployment it runs in leaves it a little sharper at the trade-off.

---

## Supplier Disruption Response
`Solutions · Planning · Supplier & Procurement`

**A supplier's lead time just doubled, and the orders riding on it are now at risk.**

**The decision.** An email lands: your supplier's lead time slipped from six days to fourteen. Three open orders depend on it — one for a tier-A account with a penalty clause. You have hours to decide: wait, expedite, reroute to an alternate, or re-promise the customer.

**Why it's hard today.** The signal is buried in an inbox, the contract terms are in a PDF, the alternate's SLA is in another system, and the account's importance is in someone's head. By the time you've assembled all of it, the window to act has already narrowed.

**Why your systems don't help.** Your ERP records the order; it doesn't read the supplier's email, know the penalty clause triggers at ten days, or recognize this account is growing. It surfaces a late PO, not a decision.

**Operational context assembled:** Inbound supplier signals (last 48h) · Affected open orders and their accounts · Contract penalty terms · Alternate suppliers — SLA and cost · Account tier and growth

```
decision-workspace · order #4821
⚠ Margin risk — Order #4821 · Northwind Logistics
Evidence assembled
 · Supplier lead time slipped 6 → 14 days (3 signals, last 48h)
 · Contract penalty clause triggers above a 10-day delay
 · Alternate supplier in-SLA at +4% unit cost
 · Account flagged priority tier A
Recommendation · reroute to alternate supplier
 Policy: +4% spend within auto-approve threshold · awaiting human sign-off
[ Decision Object #4821 ] [ Evidence ×4 ] [ Policy ✓ ] [ Approve ] [ Override ]
```

**Governed by your policy:** Spend within auto-approve threshold · Penalty-clause avoidance · Tier-A protection · Approved alternates only

**What improves:** Penalties avoided · Tier-A orders protected · A response faster than an inbox allows

**The knowledge it keeps.** The decision, its evidence, and the outcome persist. The next time this supplier slips, the system starts from what happened last time — and gets sharper with every deployment it runs in.

---

## Trailer Dwell Optimization
`Solutions · Execution · Transportation & Yard Operations`

**A trailer has sat past its dwell window, and detention is now ticking.**

**The decision.** A loaded trailer has idled in the yard three hours past its target. The detention clock is running, a door is freeing up, and another carrier is waiting. Hold it, move it to a door, release it back to the carrier, or reassign the load?

**Why it's hard today.** The trailer's position drifts, the appointment schedule lives in the TMS, the detention terms are in the carrier contract, and door availability changes by the minute. No one screen shows all four at once — and the cost of guessing wrong is detention dollars or a missed departure.

**Why your systems don't help.** Your yard system knows where the trailer is; it doesn't know the detention clause, the downstream appointment, or that this carrier's SLA makes releasing it the cheaper move. It shows a dot on a map, not a decision — and that dot is an estimate, not the truth.

**Operational context assembled:** Live yard position and dwell time, with confidence · Appointment and door schedule · Detention clock and carrier terms · Downstream load priority

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

**Governed by your policy:** Detention-cost thresholds · Carrier contract terms · Dock capacity and safety · Appointment priority

**What improves:** Lower detention spend · Higher dock throughput · More on-time departures

**The knowledge it keeps.** Each call — and whether it actually cleared the congestion — is kept, so the yard's own patterns (which carriers, which doors, which hours) sharpen the next decision, and the model improves with every yard it runs in.

---

## Work-in-Process Bottlenecks
`Solutions · Execution · Manufacturing Operations`

**A work cell is starving while the material it needs sits two buildings away.**

**The decision.** Cell 4 is about to run dry. The material it needs is staged two buildings over, another cell is backing up behind it, and the shift changes in ninety minutes. Expedite the move, resequence the line, pull a different order forward, or hold?

**Why it's hard today.** WIP location is approximate, the schedule is mid-shift, labor is finite, and the bottleneck moves the moment you act on it. The floor knows it's stuck before any system flags it — and an experienced supervisor's instinct is the only thing bridging the gap.

**Why your systems don't help.** Your MES shows the schedule, not the reality on the floor — where material actually is, how confident that reading is, and which move keeps the most cells running. It reports the bottleneck after it has already formed.

**Operational context assembled:** WIP location and confidence by cell · Live schedule and cell status · Material staging and transit · Labor available this shift

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

**Governed by your policy:** Changeover-cost limits · Labor and safety constraints · Schedule-adherence rules · Priority-order protection

**What improves:** Higher line utilization · Fewer starved cells and shift-end misses · Less reliance on one supervisor's memory

**The knowledge it keeps.** The move and its result are kept, so the floor's recurring bottlenecks — and what actually cleared them — become the model's, not just the veteran supervisor's, sharpening with every plant it runs in.

---

## Claims Adjudication
`Solutions · Execution · Claims & Service Operations`

**A claim is filed, and it has to be decided against a contract no one has read in a year.**

**The decision.** A claim comes in. Coverage depends on the contract terms, the component's history, the shop's track record, and a few faint fraud signals — and the customer is waiting. Approve, deny, partial-pay, request more, or escalate?

**Why it's hard today.** The contract is a PDF, the prior claims are in one system, the shop's pattern in another, the fraud signal is subtle. Adjudicate too fast and you leak loss; too slow and the customer churns. Consistency across adjusters is nearly impossible by hand.

**Why your systems don't help.** Your claims system stores the claim; it doesn't read the contract, recall this shop's history, or weigh the fraud signal against the SLA. It routes a task, not a decision.

**Operational context assembled:** Contract terms and coverage · Claim and component history · Shop / provider track record · Fraud and anomaly signals · SLA and authority limits

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

**Governed by your policy:** Coverage rules and exclusions · Authority limits by role · Regulatory compliance · Reserve thresholds

**What improves:** A tighter loss ratio · Faster, more consistent cycle time · Defensible, audit-ready decisions

**The knowledge it keeps.** Every adjudication is preserved with its reasoning, so similar claims are decided consistently — and the patterns (a shop, a component, a fraud signature) sharpen with each one, and with every book it runs in.

---

_Under the hood, every one of these runs the same operating model: verified context assembled, options weighed and adversarially challenged, the decision governed by policy, the outcome learned. The decision changes from one to the next. The architecture does not. → See **How It Works**._
