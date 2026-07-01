# The Operational Intelligence Architecture

> _Reference architecture._ A faithful text transcription of the AgentForge Architecture page (`/architecture`) for review. The page is built around one recurring **system diagram** (below); each section zooms into one node of it before the page returns to the whole.

Any system that sets out to govern operational decisions arrives at the same architecture — not by imitation, but because the problem demands it. These are the constructs it converges on, and how they fit together.

Operational intelligence is a loop. Reality is assembled into context; a decision is produced and made durable; it is governed, acted on, and learned from — and the learning sharpens the next turn.

### The system, drawn once — a loop, not a pipeline

```
   Context  →  Decide  →  Decision Object  →  Govern
      ▲                                          │ execute
      │                                          ▼
   Patterns  ←  Learn  ←  Outcome  ←  Execute  ◀─┘
   ( ↑ feeds the next decision )
```

_The architecture is recursive: every governed decision is executed, its outcome learned from, and what is learned feeds the next decision. This diagram reappears in each section with one node highlighted — the "you are here."_

---

## Operational Context  · ▸ Context
### A decision is only as good as the reality it reasons over.

So the first thing any decision system needs is the truth — what is actually happening, right now. In operations that is never simply read; it has to be assembled, and assembled honestly, because everything downstream inherits its errors.

Enterprise systems manage deterministic transactions. Operations are different: the truth is distributed across machines, people, and physical space, and no instrument observes all of it. Assets and people move; positioning drifts as RF environments shift; battery-powered devices sleep, so absence of signal is not absence of the thing.

Context is therefore probabilistic, assembled from three kinds of evidence — **structured** (operational systems), **observed** (extracted from documents and telemetry), and **experiential** (past decisions with known outcomes). Detect reconciles them into one current picture and carries its uncertainty forward, rather than hiding it.

**Detect** — _Assemble the best available representation of operational reality._
- **Inputs:** ERP · RTLS · IoT · Vision · Documents · Weather · Markets · Human Signals
- **Produces:** Operational Context
- **Output:** Verified Ground Truth · Confidence Scores · Missing Evidence · Contradictions

**Anticipate** — _Weigh the futures the decision will create, before it is made._
- **Inputs:** Forecasting · Simulation · Optimization · Risk Models
- **Operates on:** Operational Context
- **Output:** Projected Futures · Likelihoods · Confidence

```
Heterogeneous sources
  ERP · MES · WMS · RTLS · IoT · Computer Vision · ML Models · External Signals
        ↓
  Signal Normalization
        ↓
  Context Assembly        ← AgentForge
        ↓
  Operational Reality
        ↓
  Decision Workspace
```

_Verified context is the input. Turning it into a decision is a fixed sequence — the same one, every time._

---

## Decision Lifecycle  · ▸ Decide
### A decision produced ad hoc cannot be trusted.

So once context exists, the decision is produced from it the same way every time. One fixed path is what makes a decision comparable, auditable, and improvable. And the path is deterministic — generation, scoring, and confidence are functions of the context. Language models contribute reasoning; authority remains with policy and human judgment.

1. **Situation** — An evidence threshold is crossed and the system recognizes a decision is required — before a human would have noticed.
2. **Context Assembly** — Verified operational context is assembled from heterogeneous sources into one current picture.
3. **Evidence Assembly** — The evidence relevant to this specific decision is identified and bound to it.
4. **Pattern Retrieval** — Analogous past decisions, their outcomes, and learned patterns are retrieved to inform the call.
5. **Recommendation Generation** — Candidate courses of action are generated and ranked — a set of options, not a single answer.
6. **Adversarial Challenge** _(differentiator)_ — The recommendation is actively attacked: contradictory evidence, alternative explanations, policy conflicts, missing data, and failure modes.
7. **Policy & Governance Evaluation** — Authority, compliance, approval rules, confidence thresholds, and organizational policy are evaluated.
8. **Human Decision & Execution** — A human approves, modifies, rejects, or delegates — the system never executes on its own authority.
9. **Outcome & Learning** — The outcome and feedback are captured and folded back into institutional memory as new patterns.

_Run this path and the result is not a message that scrolls away. It is a persistent object._

---

## Decision Object  · ▸ Decision Object
### The lifecycle ends in an object, not an answer.

This is the architectural control point. A model's response evaporates the moment it is read — it cannot be governed, audited, or learned from. So a decision is never allowed to remain a response.

It becomes a durable artifact the organization owns instead — and everything downstream depends on that single design choice:

- **Governance** attaches to the object — it is what gets approved, not the model.
- **Auditability** anchors on it — the full trail of _why_ is the object itself.
- **Institutional memory** is built from it — every object is a past decision to learn from.
- **Every future recommendation** is retrieved from it — patterns are distilled from accumulated objects.

Once you see why it must exist, what it carries becomes obvious.

**Decision Object** — _A persistent operational artifact, produced once, referenced forever._
- **Contains:** Situation · Evidence Graph · Signals · Policies Evaluated · Reasoning Chain · Recommendation · Human Action · Outcome · Feedback · Confidence · Related Decisions
- **Properties:** Immutable · Versioned · Traceable · Searchable · Reusable

A Decision Object, instantiated:

```
decision-workspace · order #4821
─────────────────────────────────────────────────────────
⚠ Margin risk — Order #4821 · Northwind Logistics

Evidence assembled
 · Supplier lead time slipped 6 → 14 days (3 signals, last 48h)
 · Contract penalty clause triggers above a 10-day delay
 · Alternate supplier in-SLA at +4% unit cost
 · Account flagged priority tier A

Recommendation · reroute to alternate supplier
 Policy: +4% spend within auto-approve threshold · awaiting human sign-off

[ Decision Object #4821 ]  [ Evidence ×4 ]  [ Policy ✓ ]  [ Approve ]  [ Override ]
```

---

## Governance  · ▸ Govern
### AI assists. People govern. The platform remembers.

A decision that can move the business has to answer to the business. So before any decision becomes an action, it must clear the organization's authority — and because the decision is now a persistent object, there is something durable to attach that authority to.

```
✓ Policy Evaluation → ✓ Authority Check → ✓ Compliance → ✓ Escalation → ✓ Human Approval → ✓ Audit
```

Two distinct boundaries are enforced: **policy** decides what is **authorized**, and **constraints** decide what is **feasible**. A decision stays advisory until a human — or an explicit policy — clears it. Autonomy is bounded and never escalates quietly; the organization sets how far the system may act on its own, and that boundary is always visible. Every consequential decision leaves an immutable trail.

_Once cleared, the decision executes. What actually happens next — the outcome — is what the system learns from._

---

## Learning  · ▸ Learn
### A system that decides the same way forever cannot improve.

The only way to get better is to learn from what actually happened — which is possible only because every decision persisted as an object with its outcome. Two loops turn on it: one closes in real time, one closes over time. The second is what compounds.

**Operational loop · real time**
```
Detect → [ Decide ] → Act → Sense ↻
```
Acting changes operational reality, which Detect reassembles — so the next decision starts from a current picture, not a stale one.

**Learning loop · compounding**
```
[ Decide ] → Outcome → Pattern → Playbook ↻
```
Each outcome updates the patterns, so the next adversarial challenge is more calibrated and every decision quietly improves the ones that follow.

**How one outcome changes every decision after it**
```
Decision → Outcome → Decision Object updated → Pattern extracted → Confidence rises → Next recommendation shifts
```

This is the whole moat, in a single line. A closed decision doesn't just resolve a situation — its outcome updates the Decision Object, which sharpens a pattern, which moves that pattern's confidence, which changes the recommendation the next time the situation recurs. A new deployment begins on playbook rules; with every cycle the patterns calibrate to your operation — your suppliers, your exceptions, your judgment — until the system reasons like your most experienced operator, on your operation specifically. That accumulated history is institutional memory: queryable, owned by you, and impossible to replicate without having lived your decisions.

---

## The Platform  · ▸ the whole, again
### Open where you have capability. Proprietary where the value concentrates.

Step back to the whole. One operating model sits behind a single boundary: Detect and Anticipate are an open ecosystem; Decide and Learn are the proprietary core — the assembly of context, the Decision Object, and the loops that learn.

```
                      AgentForge Platform

   Detect   →   Anticipate   →   Decide   →   Learn
   └──────── Open ────────┘     └─ AgentForge Core ─┘
   Your existing tools, or ours      Proprietary
```

The RTLS, vision, forecasting, and optimization providers an enterprise already runs — or new ones adopted over time — integrate through one contract and feed the same operating model. AgentForge does not compete with them; it gives them a decision layer to feed. Each can evolve independently while the way decisions are made, governed, and remembered stays constant.

The control point is not the sensors or the models — it is the operating model that turns context into governed, compounding decisions. That is what AgentForge owns; the ecosystem plugs in around it.

---

## Any system that governs operational decisions arrives here.

These constructs are not unique to AgentForge — they are what the problem demands. We are simply building the first implementation, with operators who run these decisions every day, where being wrong is expensive and being right is invisible.

**Request access** → /access (request-access form)
