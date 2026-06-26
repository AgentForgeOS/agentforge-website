import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/site/container";
import { Section, SectionHeader } from "@/components/site/section";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { LifecycleRail } from "@/components/site/lifecycle";
import {
  IllContext,
  IllConvergence,
  IllDecisionObject,
  IllPolicyGates,
  IllMemory,
} from "@/components/site/illustrations";
import { ContextAssembly } from "@/components/site/context-assembly";
import { PlatformLifecycle } from "@/components/site/platform";
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
    "The reference architecture for Operational Intelligence: how operational reality is assembled, decisions are governed as Decision Objects, and institutional memory compounds.",
};

/** A muted sensing/enterprise technology — named once, as a contributor. */
const SENSING = [
  "BLE",
  "Passive RFID",
  "Active RFID",
  "GPS",
  "UWB",
  "Computer Vision",
  "IoT Sensors",
  "ERP Events",
  "MES",
  "WMS",
  "Weather",
  "Machine Learning",
];

export default function ArchitecturePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* 1 · The reference architecture — a model for a category, not a feature. */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-24">
          <Container className="flex flex-col gap-12">
            <Reveal className="flex max-w-3xl flex-col gap-6">
              <Eyebrow>Reference architecture</Eyebrow>
              <Display className="text-h1">The Operational Intelligence Architecture.</Display>
              <Lead>
                Operational intelligence is not a feature, and not a single application. It
                is an architecture — a model for turning incomplete operational reality into
                governed decisions that improve with every cycle.
              </Lead>
              <Prose>
                Every enterprise already owns pieces of it. Systems of record hold the
                transactions. Sensing and telemetry observe the physical world. Forecasting
                and optimization project what comes next. What no one has assembled is the
                model that connects them — and the governed decision layer at its center.{" "}
                <span className="text-foreground">AgentForge defines how they work together.</span>
              </Prose>
            </Reveal>

            <Reveal>
              <div className="rounded-xl border border-border bg-card px-6 py-10 md:px-12">
                <LifecycleRail labels className="mx-auto max-w-3xl" />
                <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
                  One governed loop. Reality is assembled, futures are weighed, a decision is
                  made under policy, and the outcome is remembered — sharpening the next cycle.
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* 2 · Detect & Anticipate — the operational-depth showcase. */}
        <Section className="border-y border-border/60 bg-card/30">
          <Container className="flex flex-col gap-14">
            <Reveal>
              <SectionHeader
                eyebrow="Detect & Anticipate"
                title="Operational reality is assembled, not observed."
                lead="Detect is not signal collection. It is the continuous assembly of the best available representation of operational reality — from incomplete, heterogeneous, noisy, and constantly changing evidence."
              />
            </Reveal>

            <Reveal>
              <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
                <div className="flex flex-col gap-5">
                  <Subheading>Transactions are recorded. Reality is inferred.</Subheading>
                  <Prose>
                    Enterprise systems manage deterministic transactions: an order is placed,
                    a payment clears, a record is written. Operational environments are a
                    different kind of system. The truth is distributed across machines,
                    people, and physical space — and no instrument observes all of it.
                  </Prose>
                  <Prose>
                    So operational context is probabilistic, not absolute. Confidence varies
                    by source and by moment. Telemetry is noisy. Environments change. Signals
                    appear, conflict, and disappear. The current picture is always an
                    inference reconciled from many partial, imperfect perspectives — and it
                    is only ever the best available, never the whole.
                  </Prose>
                </div>
                <div className="rounded-xl border border-border bg-background/50 px-6 py-12 md:px-12">
                  <IllContext />
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex max-w-3xl flex-col gap-5">
                <Subheading>Physical operations are not transactional software.</Subheading>
                <Prose>
                  Assets move. People move. A location that was certain a minute ago is an
                  estimate now. Indoor positioning drifts as RF environments shift; the same
                  reader behaves differently in a packed warehouse than an open yard.
                  Battery-powered devices sleep to survive and wake on their own schedule, so
                  absence of signal is not absence of the thing.
                </Prose>
                <Prose>
                  Every sensing technology trades range against precision against cost against
                  battery life — which is why none of them is &ldquo;the&rdquo; source of
                  truth. Confidence is always contextual. An architecture for operations has
                  to treat that uncertainty as a first-class input, not an error to be hidden.
                  That is the difference between software that assumes the world and software
                  that continuously reconstructs it.
                </Prose>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex flex-col gap-6">
                <div className="flex max-w-3xl flex-col gap-5">
                  <Subheading>Technology neutrality, by design.</Subheading>
                  <Prose>
                    Heterogeneous sensing technologies coexist because each one captures only
                    part of operational reality. Detect normalizes them and assembles a common
                    operational context — so everything downstream reasons over reality
                    itself, independent of the technology that sensed it. New sources can be
                    added, and old ones retired, without changing the decision logic above.
                  </Prose>
                </div>
                <div className="flex flex-wrap gap-2">
                  {SENSING.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="max-w-3xl text-sm text-muted-foreground">
                  Each contributes a fragment. AgentForge owns the assembly of reality — not
                  the hardware that observes it.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <ContextAssembly className="mx-auto max-w-2xl" />
            </Reveal>

            <Reveal>
              <div className="flex max-w-3xl flex-col gap-5">
                <Subheading>Anticipate weighs the futures.</Subheading>
                <Prose>
                  Once reality is assembled, Anticipate projects it forward. Forecasting,
                  simulation, optimization, and risk evaluation explore what is likely and
                  what could happen instead — so a decision is made against the futures it
                  will actually create, not just the present it inherits. Like Detect,
                  Anticipate is open: it draws on whatever predictive capabilities an
                  organization already trusts.
                </Prose>
              </div>
            </Reveal>
          </Container>
        </Section>

        {/* 3 · Decision Objects — the emotional centerpiece. */}
        <Section>
          <Container className="flex flex-col gap-12">
            <Reveal>
              <SectionHeader
                eyebrow="Decision Objects"
                title="Every operational decision becomes a Decision Object."
                lead="This is the architectural control point — and the one idea worth remembering. A decision stops being a moment that happens in someone's head and becomes a durable, inspectable object the organization owns."
              />
            </Reveal>

            <Reveal>
              <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
                <div className="flex flex-col gap-5">
                  <Prose>
                    A Decision Object carries its whole lineage: the evidence it was assembled
                    from, the futures Anticipate weighed, the policy it was evaluated against,
                    the recommendation, the human action, and the outcome that followed.
                    Lineage in, the decision contained, effect out.
                  </Prose>
                  <Prose>
                    Because the decision is an object rather than an event, it can be opened,
                    audited, replayed, and learned from. Nothing is a black box. The
                    organization gains what it never had before — a system of record for its
                    decisions, not just its transactions.
                  </Prose>
                </div>
                <div className="rounded-xl border border-border bg-card px-6 py-12 md:px-12">
                  <IllDecisionObject />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="flex flex-col items-center gap-4">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  A Decision Object, in detail
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

        {/* 4 · Governance — AI assists, people govern, the platform remembers. */}
        <Section className="border-y border-border/60 bg-card/30">
          <Container className="flex flex-col gap-12">
            <Reveal>
              <SectionHeader
                eyebrow="Governance"
                title="AI assists. People govern. The platform remembers."
                lead="Governance is not policy validation bolted onto a model. It is bounded AI operating under organizational oversight — by design, not by configuration."
              />
            </Reveal>

            <Reveal>
              <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
                <div className="rounded-xl border border-border bg-background/50 px-6 py-12 md:px-12">
                  <IllPolicyGates />
                </div>
                <div className="flex flex-col gap-5">
                  <Prose>
                    Every recommendation passes through policy before it can become an action.
                    Candidate paths are filtered against the organization&apos;s rules, limits,
                    and thresholds — and a decision is advisory until a human or an explicit
                    policy clears it. Autonomy is bounded and never escalates quietly.
                  </Prose>
                  <Prose>
                    Human judgment stays central. The system assembles the evidence, applies
                    the policy, and explains its reasoning; the organization decides how much
                    it is trusted to act on its own, and that boundary is always visible.
                    Every consequential decision leaves an immutable trail.
                  </Prose>
                </div>
              </div>
            </Reveal>
          </Container>
        </Section>

        {/* 5 · Institutional Memory — experience compounds instead of leaving. */}
        <Section>
          <Container className="flex flex-col gap-12">
            <Reveal>
              <SectionHeader
                eyebrow="Institutional memory"
                title="Experience compounds instead of walking out the door."
                lead="In most organizations, operational judgment lives in people — and leaves with them. Here, every decision and outcome becomes memory the system keeps."
              />
            </Reveal>

            <Reveal>
              <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
                <div className="flex flex-col gap-5">
                  <Prose>
                    Each Decision Object — its evidence, its reasoning, and how it actually
                    turned out — feeds back into what the system knows. The next similar
                    situation starts from everything the last one learned, not from scratch.
                  </Prose>
                  <Prose>
                    Experience accumulates rather than resetting with every reorganization and
                    every departure. The layer sharpens with use, and the knowledge stays the
                    organization&apos;s own — a compounding asset instead of a perishable one.
                  </Prose>
                </div>
                <div className="rounded-xl border border-border bg-card px-6 py-12 md:px-12">
                  <IllMemory />
                </div>
              </div>
            </Reveal>
          </Container>
        </Section>

        {/* 6 · The Platform — reinforce platform characteristics, don't defend the word. */}
        <Section className="border-y border-border/60 bg-card/30">
          <Container className="flex flex-col gap-12">
            <Reveal>
              <SectionHeader
                eyebrow="The platform"
                title="A better decision changes today. A better lifecycle changes every decision after it."
                lead="Operational intelligence is a continuous lifecycle — Detect, Anticipate, Decide, Learn. The value is not in any individual capability, but in the operating model that connects every stage and lets each one strengthen the next."
              />
            </Reveal>

            <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
              <Reveal className="flex flex-col gap-5">
                <Prose>
                  Because the stages share one governed model, each can evolve independently —
                  a new sensing source in Detect, a better forecaster in Anticipate — while the
                  way decisions are made, governed, and remembered stays constant. The lifecycle
                  becomes more valuable the longer it runs.
                </Prose>
                <Prose>
                  Detect and Anticipate stay open: bring the capabilities you already have, or
                  adopt new ones over time. <span className="text-foreground">Decide</span> and{" "}
                  <span className="text-foreground">Learn</span> are the proprietary core — the
                  governed decision and the memory it compounds. That is the architectural
                  control point AgentForge owns; the rest of the ecosystem plugs in around it.
                </Prose>
              </Reveal>
              <Reveal delay={0.1}>
                <PlatformLifecycle />
              </Reveal>
            </div>

            <Reveal>
              <p className="max-w-3xl text-lg leading-relaxed text-foreground/90 text-pretty">
                AgentForge defines the open architecture for operational intelligence: existing
                capabilities plug into a common operating model, and the operating model never
                changes.
              </p>
            </Reveal>
          </Container>
        </Section>

        {/* 7 · Request access. */}
        <Section>
          <Container className="flex flex-col items-center gap-8 text-center">
            <Reveal className="flex max-w-2xl flex-col items-center gap-6">
              <Heading className="max-w-2xl">This is the architecture. We&apos;re building it.</Heading>
              <Lead className="mx-auto text-center">
                Built with operators who run these decisions every day — in supply chains and
                claims organizations, where being wrong is expensive and being right is
                invisible.
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
