# Operational Decisions

> _A faithful text transcription of the AgentForge "Decisions" page (`/decisions`) for review. The page's job is to make the architecture tangible: the reader recognizes their own operational problems, then realizes unrelated-looking problems share one structure — governed by one architecture. Examples are evidence; the realization is the story._

---

## What it governs

A trailer idles three hours past its window. A supplier's lead time doubles overnight. A quality hold stops the shipment to your largest account. A claim lands against a contract no one has read in a year.

# Underneath, they are the same decision.

Each is a situation that forces a judgment call — evidence scattered across systems, options bounded by policy, an outcome learned too late. The operations could not be more different. The shape of the decision is identical.

---

## The shared structure
### Every operational decision has the same anatomy.

Set two that look nothing alike side by side, and the structure repeats — a situation, the evidence it needs, the options it weighs, the policy that bounds it, and the outcome it is judged by.

| | **Trailer Dwell Optimization** _(logistics · yard)_ | **Claims Adjudication** _(insurance · services)_ |
|---|---|---|
| **Situation** | A trailer idles past its dwell target in the yard. | A claim is filed and needs a decision. |
| **Evidence** | Yard position, appointment schedule, detention clock, door availability, carrier SLA. | Policy terms, contract SLAs, prior claims, documentation, fraud signals. |
| **Options** | Hold, reposition to a door, release to the carrier, reassign the load. | Approve, deny, partial-pay, request information, escalate. |
| **Policy & constraints** | Detention thresholds, carrier contracts, dock capacity, safety rules. | Coverage rules, authority limits, regulatory compliance, reserve thresholds. |
| **Outcome** | Detention spend, dock throughput, on-time departure. | Payout accuracy, loss ratio, cycle time, compliance. |

Different yard, different ledger — the same five questions. That repetition is the quiet, decisive fact: an operational decision is not a one-off act of judgment. It has a form — and anything with a form can be modeled.

---

## Decision Models
### Capture that structure once, and the architecture governs it.

Because the shape is shared, there is no separate product for trailers and another for claims. The same operating model — assemble context, decide under policy, learn from the outcome — runs every one of them.

That captured structure has a name: a **Decision Model** — the reusable representation of one recurring operational decision. Where a Decision Object is a single decision, made and recorded, a Decision Model is the form it takes every time the situation returns.

Define the model once — the situation that triggers it, the evidence it requires, the options, the policy, the outcome it answers to — and the architecture produces governed decisions of it on demand. Configuring a new decision is not building a new system. And a model is never quite finished: every deployment it runs in leaves it a little sharper.

---

## The reach
### One architecture. A widening field of decisions.

These come from industries that share almost nothing. The shape of the decision never changes — only the content does. One architecture, configured to each.

**Supply chain**
- **Inventory Rebalancing** — Move stock before one site stocks out and another overstocks.
- **Supplier Disruptions** — Reroute, expedite, or hold when a supplier slips.
- **Demand Allocation** — Decide who gets constrained supply when there isn't enough.

**Logistics & yard**
- **Transportation Exceptions** — Reroute or re-promise when a shipment misses its window.
- **Trailer Dwell Optimization** — Release or reposition trailers idling past their window.
- **Asset Retrieval & Yard Ops** — Find and move the right asset before it stalls the next step.

**Manufacturing**
- **Quality Holds** — Release, rework, or scrap when a lot fails inspection.
- **Work-in-Process Bottlenecks** — Rebalance a line when a work cell starves or backs up.

**Services & claims**
- **Claims Adjudication** — Approve, deny, or escalate against contract and policy.
- **Resource Assignment** — Assign the right crew, bay, or machine under shifting constraints.

This is not a product menu, and not a finished list. It is what one architecture reaches. Each new decision is a model to configure, not a product to build — which is why the field only widens.

---

## Your hardest decisions are the ones it was built for.

The calls made from memory, under pressure, with money on the line — the ones no system stands behind today. Tell us the decision that keeps your operation up at night.

**Request access** → hello@agentforgeos.ai
