# Evaluating AgentForge

> Page mirror for review. The live page composes this from the design system; this file is the faithful text. Route: `/evaluating` · nav: **Evaluating**.

---

## Open

**Eyebrow:** Evaluating AgentForge

**Headline:** Could you actually trust this inside your enterprise?

**Lead:** By now the category, the architecture, and the operational decisions are familiar. This is the question that remains — the one a careful team asks before adopting anything new. The honest answer is the rest of this page, before you have to ask for it.

One idea runs underneath every answer below: **AgentForge adapts to your enterprise; it doesn't ask your enterprise to adapt to it.** Your systems stay. Your workflows stay. Your governance stays. What changes is that the decisions between them finally have a system of their own.

---

## 1 · Your stack

**AgentForge doesn't replace your systems of record. It orchestrates decisions across them.**

_Your ERP is your system of truth; your sensing and telemetry are your eyes. Neither was built to decide — and AgentForge isn't built to be either of them._

It sits above both, reads across them, and makes the governed decision they hand to a person today. The decision becomes a durable Decision Object; the action flows back into the systems that already own it. Nothing gets ripped out, and nothing competes for the database write — the system of record keeps the state, AgentForge keeps the decision.

And because each decision is re-grounded on current context before it executes, a change underneath it doesn't strand the decision — it informs the next one. AgentForge is the decision control point, not a second source of truth.

**[Diagram — StackDiagram]**
- Top band: **AgentForge · Decision Layer** — assemble context · decide · govern · learn
- ↑ reads across · governed decision ↓
- Foundations: **Systems of Record** (ERP · CRM · WMS — the truth, and the state) · **Systems of Awareness** (sensing · telemetry · BI — what's happening now)
- Caption: Your systems stay. AgentForge decides across them — and hands execution back to the systems that already own it.

---

## 2 · Your workflow

**Your people keep their systems. AgentForge inserts at the decision, not in front of it.**

A planner doesn't leave the planning system. An adjuster doesn't learn a new process. An operator doesn't abandon the screens they know. AgentForge inserts itself at the operational decision point inside those workflows — assembling the context, surfacing a governed recommendation, and capturing what was decided.

The existing approvals still happen. The existing policies still apply. The only thing that disappears is the scramble before the decision — not the workflow around it.

---

## 3 · The AI question

**Reasoning without operational context isn't operational intelligence.**

The fastest way to get an operational decision wrong is to reason brilliantly over the wrong picture of reality. A general model, however capable, doesn't know your supplier slipped, your trailer is dwelling, or your contract's exclusion clause — and asked anyway, it will answer confidently.

AgentForge reasons only over verified operational context it has assembled and scored, never over invented detail. And the model never holds authority: generation and scoring are deterministic functions of that context; the language model contributes reasoning, while the decision is governed by policy and cleared by a person.

Assembling that operational reality — from messy, incomplete, heterogeneous evidence — is the genuinely hard part. It is also the part AgentForge owns.

---

## 4 · Your governance

**AgentForge adapts to your governance — not the other way around.**

_Enterprises don't share one risk posture, and a decision layer shouldn't pretend they do. Where it runs, which models it reasons with, and how much it may act on its own are your decisions, not ours._

Run it as SaaS, in your own cloud, in a private VPC, or hybrid. Reason with a managed model or one that never leaves your walls. Your operational data is yours; deployment, model selection, and governance are implementation choices the platform adapts to — not limitations it imposes.

What stays constant is the part that has to: a human is accountable above the threshold you set, every consequential decision leaves an immutable trail, and autonomy never escalates quietly.

**[Diagram — GovernanceBoundary]**
- Header: Your enterprise · your governance → **AgentForge adapts within it**
- Deployment: SaaS · Your cloud · Private VPC · Hybrid
- Model: Managed LLM · Private model
- Human approval: Required above your threshold
- Audit: Every decision · immutable
- Caption: Deployment, model, and governance are your decisions — implementation choices the platform adapts to, not limitations it imposes.

---

## 5 · What compounds

**Software can be replicated. Operational judgment has to be earned.**

Any capable team can build a decision engine. What no one can copy is the judgment a Decision Model accumulates by living inside a real operation. Every deployment teaches it something the last one couldn't — a new policy, an exception no one anticipated, a pattern that only appears at scale, a piece of organizational knowledge that used to live in one person's head.

That accumulated judgment, not the code beneath it, is what compounds. We'll tell that story in full elsewhere; here it's enough to notice that the asset isn't the software — it's everything the software has learned.

---

## Close

**What we'd rather cover with you directly.**

Some questions deserve a conversation, not a webpage. What this costs, how it would deploy in your environment, the exact compliance posture for your industry, and what other operators have seen — those depend on your operation, and we'd rather answer them honestly with you than approximate them here.

**CTA:** Start the conversation → /access (request-access form)
