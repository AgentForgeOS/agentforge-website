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
    "The reference architecture for Operational Intelligence: verified operational context, the Decision Object, the decision lifecycle, governance gates, pattern generation, and the two feedback loops.",
};

const CONSTRUCTS = [
  { k: "Operational Context", d: "Verified ground truth, continuously assembled." },
  { k: "Decision Object", d: "Every decision as a persistent, inspectable artifact." },
  { k: "Decision Lifecycle", d: "The nine steps every decision follows." },
  { k: "Governance Gates", d: "The checks every recommendation must pass." },
  { k: "Pattern Generation", d: "Decisions and outcomes become playbooks." },
  { k: "The Two Loops", d: "One runs the operation; one makes it smarter." },
  { k: "Institutional Memory", d: "Experience that compounds instead of leaving." },
  { k: "Platform Boundaries", d: "What stays open, and what AgentForge owns." },
];

export default function ArchitecturePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* 1 · Overview — the system, and its canonical constructs. */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-20">
          <Container className="flex flex-col gap-12">
            <Reveal className="flex max-w-3xl flex-col gap-6">
              <Eyebrow>Reference architecture</Eyebrow>
              <Display className="text-h1">The Operational Intelligence Architecture.</Display>
              <Lead>
                The homepage made the case for a decision layer. This is how it is built — the
                canonical constructs, the lifecycle every decision follows, and the boundaries
                that turn the idea into an engineered system.
              </Lead>
              <Prose>
                Every enterprise already owns pieces of it. Systems of record hold the
                transactions; sensing and telemetry observe the physical world; forecasting and
                optimization project what comes next.{" "}
                <span className="text-foreground">
                  AgentForge defines how they work together — and owns the constructs at the
                  center.
                </span>
              </Prose>
            </Reveal>

            <Reveal>
              <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
                {CONSTRUCTS.map((c) => (
                  <div key={c.k} className="flex flex-col gap-1.5 bg-card p-5">
                    <MonoLabel className="text-foreground/80">{c.k}</MonoLabel>
                    <p className="text-xs leading-relaxed text-muted-foreground text-pretty">{c.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        {/* 2 · Operational Context — verified ground truth (Detect). */}
        <Section className="border-y border-border/60 bg-card/30">
          <Container className="flex flex-col gap-12">
            <Reveal>
              <SectionHeader
                eyebrow="Operational Context"
                title="The layer reasons over verified ground truth — never hallucinated context."
                lead="Detect assembles operational reality from incomplete, heterogeneous, noisy evidence and hands the rest of the system a verified, confidence-scored picture to reason over. Nothing downstream invents the world it acts on."
              />
            </Reveal>

            <Reveal>
              <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
                <div className="flex flex-col gap-5">
                  <Prose>
                    Enterprise systems manage deterministic transactions. Operations are
                    different: the truth is distributed across machines, people, and physical
                    space, and no instrument observes all of it. Assets and people move;
                    indoor positioning drifts as RF environments shift; battery-powered devices
                    sleep, so absence of signal is not absence of the thing.
                  </Prose>
                  <Prose>
                    So operational context is probabilistic. Detect reconciles many partial,
                    conflicting perspectives into one current picture — and carries its
                    uncertainty forward as a first-class output, rather than hiding it.
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
          </Container>
        </Section>

        {/* 3 · The Decision Object — the centerpiece construct, specified. */}
        <Section>
          <Container className="flex flex-col gap-12">
            <Reveal>
              <SectionHeader
                eyebrow="Decision Object"
                title="Every operational decision becomes a Decision Object."
                lead="The architectural control point — and the one construct worth remembering. A decision stops being a moment in someone's head and becomes a durable artifact the organization owns, inspects, and learns from."
              />
            </Reveal>

            <Reveal>
              <div className="grid items-start gap-4 lg:grid-cols-[1fr_320px]">
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
                <div className="hidden rounded-xl border border-border bg-card px-6 py-12 lg:block">
                  <IllDecisionObject />
                </div>
              </div>
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

        {/* 4 · The Decision Lifecycle — the nine steps. */}
        <Section className="border-y border-border/60 bg-card/30">
          <Container className="flex flex-col gap-10">
            <Reveal>
              <SectionHeader
                eyebrow="Decision Lifecycle"
                title="Every decision follows the same nine steps."
                lead="One lifecycle, applied to every operational decision — from the situation that triggers it to the learning it leaves behind. The same path, every time, makes decisions comparable, auditable, and improvable."
              />
            </Reveal>
            <Reveal>
              <Sequence
                marker="number"
                items={[
                  "Situation",
                  "Context Assembly",
                  "Evidence",
                  "Pattern Retrieval",
                  "Policy Evaluation",
                  "Recommendation",
                  "Human Decision",
                  "Outcome",
                  "Learning",
                ]}
              />
            </Reveal>
          </Container>
        </Section>

        {/* 5 · Governance — the gates every recommendation passes. */}
        <Section>
          <Container className="flex flex-col gap-12">
            <Reveal>
              <SectionHeader
                eyebrow="Governance"
                title="AI assists. People govern. The platform remembers."
                lead="Governance is not validation bolted onto a model — it is bounded AI operating under organizational oversight. No recommendation becomes an action until it clears the same gates."
              />
            </Reveal>
            <Reveal>
              <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
                <div className="flex flex-col gap-6">
                  <Sequence
                    marker="check"
                    items={["Policy Evaluation", "Authority Check", "Compliance", "Escalation", "Human Approval", "Audit"]}
                  />
                  <Prose>
                    A decision is advisory until a human — or an explicit policy — clears it.
                    Autonomy is bounded and never escalates quietly; the organization sets how
                    much the system may act on its own, and that boundary is always visible.
                    Every consequential decision leaves an immutable trail.
                  </Prose>
                </div>
                <div className="rounded-xl border border-border bg-background/50 px-6 py-12 md:px-12">
                  <IllPolicyGates />
                </div>
              </div>
            </Reveal>
          </Container>
        </Section>

        {/* 6 · Pattern Generation — decisions become playbooks. */}
        <Section className="border-y border-border/60 bg-card/30">
          <Container className="flex flex-col gap-10">
            <Reveal>
              <SectionHeader
                eyebrow="Pattern Generation"
                title="Decisions become patterns. Patterns become playbooks."
                lead="Because every decision is a structured object with a known outcome, the system can mine its own history — detecting what works, codifying it, and bringing it back as a sharper recommendation next time."
              />
            </Reveal>
            <Reveal>
              <Sequence
                items={["Decision Objects", "Outcomes", "Pattern Detection", "Playbook Evolution", "Future Recommendations"]}
              />
            </Reveal>
            <Reveal>
              <Prose className="max-w-3xl">
                Playbooks are not written once and frozen. They evolve from accumulated
                evidence — the operating model gets better at the decisions it has seen, without
                anyone hand-tuning it.
              </Prose>
            </Reveal>
          </Container>
        </Section>

        {/* 7 · The Two Loops — operational and learning. */}
        <Section>
          <Container className="flex flex-col gap-12">
            <Reveal>
              <SectionHeader
                eyebrow="The two loops"
                title="One loop runs the operation. The other makes it smarter."
                lead="Two feedback loops turn on the same Decision Object. One closes in real time; one closes over time — and that is what compounds."
              />
            </Reveal>

            <Reveal>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 md:p-8">
                  <MonoLabel className="text-foreground/80">Operational loop · real time</MonoLabel>
                  <Sequence items={["Detect", "Anticipate", "Decide", "Act"]} accent="Decide" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Acting changes operational reality, which Detect reassembles — so the next
                    decision starts from a current picture, not a stale one.
                  </p>
                </div>
                <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 md:p-8">
                  <MonoLabel className="text-foreground/80">Learning loop · compounding</MonoLabel>
                  <Sequence items={["Decide", "Outcome", "Pattern", "Playbook"]} accent="Decide" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Every outcome feeds back into the playbooks, so each decision quietly
                    improves the decisions that come after it.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
                <div className="flex flex-col gap-5">
                  <Subheading>Institutional memory</Subheading>
                  <Prose>
                    What the learning loop accumulates is institutional memory. Every Decision
                    Object and outcome stays queryable, so the next similar situation starts from
                    everything the last one learned — and experience compounds instead of walking
                    out the door with the people who made it.
                  </Prose>
                </div>
                <div className="rounded-xl border border-border bg-background/50 px-6 py-12 md:px-12">
                  <IllMemory />
                </div>
              </div>
            </Reveal>
          </Container>
        </Section>

        {/* 8 · Platform boundaries — open vs proprietary. */}
        <Section className="border-y border-border/60 bg-card/30">
          <Container className="flex flex-col gap-12">
            <Reveal>
              <SectionHeader
                eyebrow="The platform"
                title="Open where you have capability. Proprietary where the value concentrates."
                lead="The boundary is deliberate. Detect and Anticipate are open — they embrace the technologies an enterprise already runs. Decide and Learn are the proprietary core, where the governed decision and the memory it compounds actually live."
              />
            </Reveal>
            <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
              <Reveal className="flex flex-col gap-5">
                <Prose>
                  Each stage can evolve independently — a new sensing source, a better
                  forecaster — while the way decisions are made, governed, and remembered stays
                  constant. The control point is not the sensors or the models; it is the
                  assembly of context, the Decision Object, and the loops that learn.
                </Prose>
                <Prose>
                  That is what AgentForge owns. The rest of the ecosystem plugs in around it,
                  and the operating model never changes.
                </Prose>
              </Reveal>
              <Reveal delay={0.1}>
                <PlatformLifecycle />
              </Reveal>
            </div>
          </Container>
        </Section>

        {/* 9 · Request access. */}
        <Section>
          <Container className="flex flex-col items-center gap-8 text-center">
            <Reveal className="flex max-w-2xl flex-col items-center gap-6">
              <Heading className="max-w-2xl">This is the architecture. We&apos;re building it.</Heading>
              <Lead className="mx-auto text-center">
                Built with operators who run these decisions every day — in supply chains and
                claims organizations, where being wrong is expensive and being right is invisible.
              </Lead>
              <a
                href="mailto:hello@agentforgeos.ai?subject=AgentForge%20access"
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
