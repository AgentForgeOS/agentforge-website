import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/site/container";
import { Section, SectionHeader } from "@/components/site/section";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { IllContext, IllDecisionObject, IllPolicyGates, IllMemory } from "@/components/site/illustrations";
import { ContextAssembly } from "@/components/site/context-assembly";
import { PlatformLifecycle } from "@/components/site/platform";
import { SpecCard, Sequence } from "@/components/site/architecture-blocks";
import { SystemMap } from "@/components/site/system-map";
import {
  Terminal,
  TerminalFlag,
  TerminalHeading,
  TerminalList,
  TerminalActions,
} from "@/components/site/terminal";
import { Display, Heading, Subheading, Eyebrow, Lead, Prose, MonoLabel } from "@/components/site/typography";
import { Reveal } from "@/components/site/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Architecture — AgentForge",
  description:
    "The reference architecture for Operational Intelligence. Any system that governs operational decisions converges on the same constructs: operational context, the decision lifecycle, the Decision Object, governance, and learning.",
};

const LIFECYCLE = [
  {
    n: "Situation",
    t: "An evidence threshold is crossed and the system recognizes a decision is required — before a human would have noticed.",
  },
  {
    n: "Context Assembly",
    t: "Verified operational context is assembled from heterogeneous sources into one current picture.",
  },
  {
    n: "Evidence Assembly",
    t: "The evidence relevant to this specific decision is identified and bound to it.",
  },
  {
    n: "Pattern Retrieval",
    t: "Analogous past decisions, their outcomes, and learned patterns are retrieved to inform the call.",
  },
  {
    n: "Recommendation Generation",
    t: "Candidate courses of action are generated and ranked — a set of options, not a single answer.",
  },
  {
    n: "Adversarial Challenge",
    t: "The recommendation is actively attacked: contradictory evidence, alternative explanations, policy conflicts, missing data, and failure modes.",
    accent: true,
  },
  {
    n: "Policy & Governance Evaluation",
    t: "Authority, compliance, approval rules, confidence thresholds, and organizational policy are evaluated.",
  },
  {
    n: "Human Decision & Execution",
    t: "A human approves, modifies, rejects, or delegates — the system never executes on its own authority.",
  },
  {
    n: "Outcome & Learning",
    t: "The outcome and feedback are captured and folded back into institutional memory as new patterns.",
  },
];

export default function ArchitecturePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* 1 · The whole system — the inevitable architecture, drawn once. */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-20">
          <Container className="flex flex-col gap-12">
            <Reveal className="flex max-w-3xl flex-col gap-6">
              <Eyebrow>Reference architecture</Eyebrow>
              <Display className="text-h1">The Operational Intelligence Architecture.</Display>
              <Lead>
                Any system that sets out to govern operational decisions arrives at the same
                architecture — not by imitation, but because the problem demands it. These are the
                constructs it converges on, and how they fit together.
              </Lead>
              <Prose>
                Operational intelligence is a loop. Reality is assembled into context; a decision is
                produced and made durable; it is governed, acted on, and learned from — and the
                learning sharpens the next turn.
              </Prose>
            </Reveal>

            <Reveal>
              <SystemMap className="mx-auto max-w-3xl" />
            </Reveal>
          </Container>
        </section>

        {/* 2 · Operational Context — what a decision reasons over. */}
        <Section className="border-y border-border/60 bg-card/30">
          <Container className="flex flex-col gap-12">
            <Reveal className="flex flex-col gap-8">
              <SectionHeader
                eyebrow="Operational Context"
                title="A decision is only as good as the reality it reasons over."
                lead="So the first thing any decision system needs is the truth — what is actually happening, right now. In operations that is never simply read; it has to be assembled, and assembled honestly, because everything downstream inherits its errors."
              />
              <SystemMap active="context" className="max-w-2xl" />
            </Reveal>

            <Reveal>
              <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
                <div className="flex flex-col gap-5">
                  <Prose>
                    Enterprise systems manage deterministic transactions. Operations are different:
                    the truth is distributed across machines, people, and physical space, and no
                    instrument observes all of it. Assets and people move; positioning drifts as RF
                    environments shift; battery-powered devices sleep, so absence of signal is not
                    absence of the thing.
                  </Prose>
                  <Prose>
                    Context is therefore probabilistic, assembled from three kinds of evidence —{" "}
                    <span className="text-foreground">structured</span> (operational systems),{" "}
                    <span className="text-foreground">observed</span> (extracted from documents and
                    telemetry), and <span className="text-foreground">experiential</span> (past
                    decisions with known outcomes). Detect reconciles them into one current picture
                    and carries its uncertainty forward, rather than hiding it.
                  </Prose>
                </div>
                <div className="rounded-xl border border-border bg-background/50 px-6 py-12 md:px-12">
                  <IllContext />
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="grid gap-4 lg:grid-cols-2">
                <SpecCard
                  name="Detect"
                  summary="Assemble the best available representation of operational reality."
                  rows={[
                    { label: "Inputs", values: ["ERP", "RTLS", "IoT", "Vision", "Documents", "Weather", "Markets", "Human Signals"] },
                    { label: "Produces", values: ["Operational Context"], accent: true },
                    { label: "Output", values: ["Verified Ground Truth", "Confidence Scores", "Missing Evidence", "Contradictions"] },
                  ]}
                />
                <SpecCard
                  name="Anticipate"
                  summary="Weigh the futures the decision will create, before it is made."
                  rows={[
                    { label: "Inputs", values: ["Forecasting", "Simulation", "Optimization", "Risk Models"] },
                    { label: "Operates on", values: ["Operational Context"], accent: true },
                    { label: "Output", values: ["Projected Futures", "Likelihoods", "Confidence"] },
                  ]}
                />
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <ContextAssembly className="mx-auto max-w-2xl" />
            </Reveal>

            <Reveal>
              <p className="max-w-3xl text-base text-foreground/85">
                Verified context is the input. Turning it into a decision is a fixed sequence — the
                same one, every time.
              </p>
            </Reveal>
          </Container>
        </Section>

        {/* 3 · The Decision Lifecycle — how a decision is produced. */}
        <Section>
          <Container className="flex flex-col gap-12">
            <Reveal className="flex flex-col gap-8">
              <SectionHeader
                eyebrow="Decision Lifecycle"
                title="A decision produced ad hoc cannot be trusted."
                lead="So once context exists, the decision is produced from it the same way every time. One fixed path is what makes a decision comparable, auditable, and improvable. And the path is deterministic — generation, scoring, and confidence are functions of the context. Language models contribute reasoning; authority remains with policy and human judgment."
              />
              <SystemMap active="decide" className="max-w-2xl" />
            </Reveal>

            <Reveal>
              <ol className="flex flex-col">
                {LIFECYCLE.map((s, i) => (
                  <li
                    key={s.n}
                    className={cn(
                      "grid grid-cols-[36px_1fr] gap-4 border-t py-5 md:grid-cols-[48px_1fr]",
                      s.accent ? "border-brand/30" : "border-border",
                    )}
                  >
                    <span className="pt-0.5 font-mono text-xs text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className={cn("text-sm font-medium", s.accent ? "text-brand" : "text-foreground")}>
                          {s.n}
                        </h3>
                        {s.accent ? (
                          <span className="rounded border border-brand/40 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-brand">
                            Differentiator
                          </span>
                        ) : null}
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{s.t}</p>
                    </div>
                  </li>
                ))}
                <li className="border-t border-border" aria-hidden />
              </ol>
            </Reveal>

            <Reveal>
              <p className="max-w-3xl text-base text-foreground/85">
                Run this path and the result is not a message that scrolls away. It is a persistent
                object.
              </p>
            </Reveal>
          </Container>
        </Section>

        {/* 4 · The Decision Object — why the artifact must exist. */}
        <Section className="border-y border-border/60 bg-card/30">
          <Container className="flex flex-col gap-12">
            <Reveal className="flex flex-col gap-8">
              <SectionHeader
                eyebrow="Decision Object"
                title="The lifecycle ends in an object, not an answer."
                lead="This is the architectural control point. A model's response evaporates the moment it is read — it cannot be governed, audited, or learned from. So a decision is never allowed to remain a response."
              />
              <SystemMap active="object" className="max-w-2xl" />
            </Reveal>

            <Reveal>
              <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
                <div className="flex flex-col gap-5">
                  <Prose>
                    It becomes a durable artifact the organization owns instead — and everything
                    downstream depends on that single design choice:
                  </Prose>
                  <ul className="flex flex-col gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <li className="flex gap-2.5">
                      <span className="text-brand">·</span>
                      <span><span className="text-foreground">Governance</span> attaches to the object — it is what gets approved, not the model.</span>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="text-brand">·</span>
                      <span><span className="text-foreground">Auditability</span> anchors on it — the full trail of why is the object itself.</span>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="text-brand">·</span>
                      <span><span className="text-foreground">Institutional memory</span> is built from it — every object is a past decision to learn from.</span>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="text-brand">·</span>
                      <span><span className="text-foreground">Every future recommendation</span> is retrieved from it — patterns are distilled from accumulated objects.</span>
                    </li>
                  </ul>
                  <Prose>Once you see why it must exist, what it carries becomes obvious.</Prose>
                </div>
                <div className="rounded-xl border border-border bg-background/50 px-6 py-12 md:px-12">
                  <IllDecisionObject />
                </div>
              </div>
            </Reveal>

            <Reveal>
              <SpecCard
                name="Decision Object"
                summary="A persistent operational artifact — produced once, referenced forever."
                rows={[
                  {
                    label: "Contains",
                    values: [
                      "Situation",
                      "Evidence Graph",
                      "Signals",
                      "Policies Evaluated",
                      "Reasoning Chain",
                      "Recommendation",
                      "Human Action",
                      "Outcome",
                      "Feedback",
                      "Confidence",
                      "Related Decisions",
                    ],
                  },
                  {
                    label: "Properties",
                    values: ["Immutable", "Versioned", "Traceable", "Searchable", "Reusable"],
                    accent: true,
                  },
                ]}
              />
            </Reveal>

            <Reveal delay={0.05}>
              <div className="flex flex-col items-center gap-4">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  A Decision Object, instantiated
                </p>
                <Terminal title="decision-workspace · order #4821" className="w-full max-w-3xl">
                  <TerminalFlag>⚠ Margin risk — Order #4821 · Northwind Logistics</TerminalFlag>
                  <div className="space-y-2">
                    <TerminalHeading>Evidence assembled</TerminalHeading>
                    <TerminalList
                      items={[
                        "Supplier lead time slipped 6 → 14 days (3 signals, last 48h)",
                        "Contract penalty clause triggers above a 10-day delay",
                        "Alternate supplier in-SLA at +4% unit cost",
                        "Account flagged priority tier A",
                      ]}
                    />
                  </div>
                  <div className="space-y-2">
                    <TerminalHeading>Recommendation · reroute to alternate supplier</TerminalHeading>
                    <p className="text-foreground/55">
                      Policy: +4% spend within auto-approve threshold · awaiting human sign-off
                    </p>
                  </div>
                  <TerminalActions
                    items={["Decision Object #4821", "Evidence ×4", "Policy ✓", "Approve", "Override"]}
                  />
                </Terminal>
              </div>
            </Reveal>
          </Container>
        </Section>

        {/* 5 · Governance — applied to the object, not the model. */}
        <Section>
          <Container className="flex flex-col gap-12">
            <Reveal className="flex flex-col gap-8">
              <SectionHeader
                eyebrow="Governance"
                title="AI assists. People govern. The platform remembers."
                lead="A decision that can move the business has to answer to the business. So before any decision becomes an action, it must clear the organization's authority — and because the decision is now a persistent object, there is something durable to attach that authority to."
              />
              <SystemMap active="govern" className="max-w-2xl" />
            </Reveal>
            <Reveal>
              <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
                <div className="flex flex-col gap-6">
                  <Sequence
                    marker="check"
                    items={["Policy Evaluation", "Authority Check", "Compliance", "Escalation", "Human Approval", "Audit"]}
                  />
                  <Prose>
                    Two distinct boundaries are enforced: <span className="text-foreground">policy</span>{" "}
                    decides what is <span className="text-foreground">authorized</span>, and{" "}
                    <span className="text-foreground">constraints</span> decide what is{" "}
                    <span className="text-foreground">feasible</span>. A decision stays advisory until
                    a human — or an explicit policy — clears it. Autonomy is bounded and never escalates
                    quietly; the organization sets how far the system may act on its own, and that
                    boundary is always visible. Every consequential decision leaves an immutable trail.
                  </Prose>
                </div>
                <div className="rounded-xl border border-border bg-card px-6 py-12 md:px-12">
                  <IllPolicyGates />
                </div>
              </div>
            </Reveal>
            <Reveal>
              <p className="max-w-3xl text-base text-foreground/85">
                Once cleared, the decision executes. What actually happens next — the outcome — is
                what the system learns from.
              </p>
            </Reveal>
          </Container>
        </Section>

        {/* 6 · Learning — what the system learns from. */}
        <Section className="border-y border-border/60 bg-card/30">
          <Container className="flex flex-col gap-12">
            <Reveal className="flex flex-col gap-8">
              <SectionHeader
                eyebrow="Learning"
                title="A system that decides the same way forever cannot improve."
                lead="The only way to get better is to learn from what actually happened — which is possible only because every decision persisted as an object with its outcome. Two loops turn on it: one closes in real time, one closes over time. The second is what compounds."
              />
              <SystemMap active="learn" className="max-w-2xl" />
            </Reveal>

            <Reveal>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-4 rounded-xl border border-border bg-background/50 p-6 md:p-8">
                  <MonoLabel className="text-foreground/80">Operational loop · real time</MonoLabel>
                  <Sequence items={["Detect", "Decide", "Act", "Sense"]} accent="Decide" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Acting changes operational reality, which Detect reassembles — so the next decision
                    starts from a current picture, not a stale one.
                  </p>
                </div>
                <div className="flex flex-col gap-4 rounded-xl border border-border bg-background/50 p-6 md:p-8">
                  <MonoLabel className="text-foreground/80">Learning loop · compounding</MonoLabel>
                  <Sequence items={["Decide", "Outcome", "Pattern", "Playbook"]} accent="Decide" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Each outcome updates the patterns, so the next adversarial challenge is more
                    calibrated and every decision quietly improves the ones that follow.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex flex-col gap-4">
                <Subheading>How one outcome changes every decision after it</Subheading>
                <Sequence
                  items={[
                    "Decision",
                    "Outcome",
                    "Decision Object updated",
                    "Pattern extracted",
                    "Confidence rises",
                    "Next recommendation shifts",
                  ]}
                />
                <Prose className="max-w-3xl">
                  This is the whole moat, in a single line. A closed decision doesn&apos;t just
                  resolve a situation — its outcome updates the Decision Object, which sharpens a
                  pattern, which moves that pattern&apos;s confidence, which changes the recommendation
                  the next time the situation recurs. A new deployment begins on playbook rules; with
                  every cycle the patterns calibrate to your operation — your suppliers, your
                  exceptions, your judgment — until the system reasons like your most experienced
                  operator, on your operation specifically. That accumulated history is institutional
                  memory: queryable, owned by you, and impossible to replicate without having lived
                  your decisions.
                </Prose>
              </div>
            </Reveal>
          </Container>
        </Section>

        {/* 7 · Platform boundaries — zoom back out to the whole. */}
        <Section>
          <Container className="flex flex-col gap-12">
            <Reveal className="flex flex-col gap-8">
              <SectionHeader
                eyebrow="The platform"
                title="Open where you have capability. Proprietary where the value concentrates."
                lead="Step back to the whole. One operating model sits behind a single boundary: Detect and Anticipate are an open ecosystem; Decide and Learn are the proprietary core — the assembly of context, the Decision Object, and the loops that learn."
              />
              <SystemMap className="max-w-2xl" />
            </Reveal>
            <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
              <Reveal className="flex flex-col gap-5">
                <Prose>
                  The RTLS, vision, forecasting, and optimization providers an enterprise already
                  runs — or new ones adopted over time — integrate through one contract and feed the
                  same operating model. AgentForge does not compete with them; it gives them a
                  decision layer to feed. Each can evolve independently while the way decisions are
                  made, governed, and remembered stays constant.
                </Prose>
                <Prose>
                  The control point is not the sensors or the models — it is the operating model that
                  turns context into governed, compounding decisions. That is what AgentForge owns;
                  the ecosystem plugs in around it.
                </Prose>
              </Reveal>
              <Reveal delay={0.1}>
                <PlatformLifecycle />
              </Reveal>
            </div>
          </Container>
        </Section>

        {/* 8 · Inevitability + request access. */}
        <Section className="border-t border-border/60 bg-card/30">
          <Container className="flex flex-col items-center gap-8 text-center">
            <Reveal className="flex max-w-2xl flex-col items-center gap-6">
              <Heading className="max-w-2xl">Any system that governs operational decisions arrives here.</Heading>
              <Lead className="mx-auto text-center">
                These constructs are not unique to AgentForge — they are what the problem demands. We
                are simply building the first implementation, with operators who run these decisions
                every day, where being wrong is expensive and being right is invisible.
              </Lead>
              <a
                href="/access"
                className={cn(buttonVariants({ size: "lg" }), "group mt-1 px-5")}
              >
                Request access
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </Container>
        </Section>
      </main>

      <SiteFooter />
    </div>
  );
}
