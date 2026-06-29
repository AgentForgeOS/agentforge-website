# Decision Models

Standalone, consistently-templated documents for every AgentForge **Decision Model** — treated as future **product assets**, not website copy.

**Status:** pre-promotion. The ontology is still being validated with design partners. Once stable, promote these into the Product documentation hierarchy (`agentforge-demo/docs/product/`).

**Source of truth:** `src/lib/solutions-data.ts`. These files are **generated** — run `npm run docs:models` to regenerate. Do not hand-edit; edit the source and regenerate so the docs never drift from what the website renders.

**Catalog:** 25 Decision Models · one canonical template (the moment → why it's hard → why existing systems stop → context assembled → the governed Decision Workspace → policy → what changes → the knowledge it keeps → architecture).

---

### Planning decisions
_The forward-looking calls your forecasting and commerce systems leave unmade._

- **Inventory & Planning**
  _Your demand forecast is an input, not a decision. The hard work is the call that follows — buy now or wait, allocate to which channel, reserve for the launch, move the slow stock._

  - [Demand Allocation](./demand-allocation.md) — Who gets the limited stock when demand outruns supply.
  - [Inventory Purchasing & Buy Timing](./inventory-purchasing.md) — Buy now or wait — and how much, against the forecast.
  - [Stock Reservation](./stock-reservation.md) — Hold inventory for a launch, a channel, or a key account.
  - [Slow-Moving Inventory](./slow-moving-inventory.md) — Mark down, transfer, or hold aging stock before it strands.
  - [New Store / Launch Planning](./launch-planning.md) — Position inventory for an opening with no sales history.
  - [Capacity Allocation](./capacity-allocation.md) — Allocate constrained production or fulfillment across demand.
  - [SKU Substitution](./sku-substitution.md) — Offer the right substitute when the preferred SKU is short.
- **Supplier & Procurement**
  - [Supplier Disruption Response](./supplier-disruption.md) — Reroute, expedite, or hold when a supplier slips.
  - [Purchase Order Exceptions](./po-exceptions.md) — Resolve POs that fall out of tolerance on price, date, or quantity.
  - [Expedite-or-Hold](./expedite-or-hold.md) — Pay to expedite, or absorb the delay.
  - [Dual-Source Switching](./dual-source-switching.md) — Shift volume to an alternate source under risk or cost pressure.
  - [Supplier Risk Escalation](./supplier-risk-escalation.md) — Act early on a supplier trending toward failure.

### Execution decisions
_Real-time calls as events happen — on the floor, in the yard, on the live event._

- **Transportation & Yard Operations**
  - [Trailer Dwell Optimization](./trailer-dwell.md) — Release or reposition trailers idling past their window.
  - [Dock Assignment](./dock-assignment.md) — Assign the right door under shifting arrivals and labor.
  - [Carrier Exceptions](./carrier-exceptions.md) — Reroute or re-promise when a shipment misses its window.
  - [Asset Retrieval](./asset-retrieval.md) — Find and move the right asset before it stalls the next step.
  - [Vehicle Logistics](./vehicle-logistics.md) — Stage, move, and sequence vehicles through the yard.
- **Manufacturing Operations**
  - [Work-in-Process Bottlenecks](./wip-bottleneck.md) — Rebalance a line when a work cell starves or backs up.
  - [Quality Holds](./quality-holds.md) — Release, rework, or scrap when a lot fails inspection.
  - [Production Line Balancing](./line-balancing.md) — Shift labor and orders as the schedule drifts.
  - [Resource Assignment](./resource-assignment.md) — Assign the right machine, bay, or crew under constraints.
- **Claims & Service Operations**
  - [Claims Adjudication](./claims-adjudication.md) — Approve, deny, or escalate against contract and policy.
  - [Fraud & Anomaly Triage](./fraud-triage.md) — Flag and route claims that don't add up.
  - [Adjuster Assignment](./adjuster-assignment.md) — Route each claim to the right adjuster or shop.
  - [Service Exceptions](./service-exceptions.md) — Decide the make-good when service falls out of SLA.
