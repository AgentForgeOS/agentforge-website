import type { Metadata } from "next";
import { ArrowDown, ArrowRight, GitBranch, Repeat, ShieldCheck } from "lucide-react";

import { Container } from "@/components/site/container";
import { Section, SectionHeader, Hairline } from "@/components/site/section";
import { Logo } from "@/components/site/logo";
import { LifecycleRail } from "@/components/site/lifecycle";
import {
  IllMaster,
  IllConvergence,
  IllDecisionObject,
  IllMemory,
} from "@/components/site/illustrations";
import { Display, Heading, Eyebrow, Lead, Prose, MonoLabel } from "@/components/site/typography";
import { ConceptCard } from "@/components/site/concept-card";
import {
  Terminal,
  TerminalFlag,
  TerminalHeading,
  TerminalList,
  TerminalActions,
} from "@/components/site/terminal";
import { Reveal } from "@/components/site/reveal";
import { Stagger, StaggerItem } from "@/components/site/stagger";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "AgentForge — The Decision Layer for the Enterprise",
  description:
    "Every enterprise has systems that record work and systems that notice change. Almost none have a system that helps them decide. AgentForge is building the decision layer.",
};

const LAYERS: {
  n: string;
  name: string;
  verb: string;
  body: string;
  missing?: boolean;
}[] = [
  {
    n: "01",
    name: "System of Record",
    verb: "Remembers what happened.",
    body: "ERP, CRM, the data warehouse. The systems of truth — mature, trusted, everywhere.",
  },
  {
    n: "02",
    name: "System of Awareness",
    verb: "Notices what's changing.",
    body: "Observability, monitoring, BI, anomaly detection. The systems that surface signal — increasingly standard.",
  },
  {
    n: "03",
    name: "The Decision Layer",
    verb: "Decides what to do about it.",
    body: "Where evidence becomes a governed, accountable decision. Almost no enterprise has built it as a system.",
    missing: true,
  },
];

const PHASES = [
  { k: "Detect", t: "Sees what's changing across the operation, continuously." },
  { k: "Anticipate", t: "Projects what it means before it becomes a crisis." },
  { k: "Decide", t: "Assembles the evidence and commits to an action under policy." },
  { k: "Learn", t: "Turns every decision and outcome into institutional memory." },
] as const;

const MODEL = [
  { Ill: IllConvergence, name: "Evidence assembly", note: "Heterogeneous signals converge into one decision." },
  { Ill: IllDecisionObject, name: "Decision Object", note: "Lineage in, the decision contained, effect out." },
  { Ill: IllMemory, name: "Institutional memory", note: "Every decision compounds what the system knows." },
] as const;

const PRINCIPLES = [
  {
    icon: GitBranch,
    eyebrow: "Evidence",
    title: "Every decision traces to its inputs.",
    description:
      "No conclusion without lineage. Open any decision and see the signals, the policy, and the reasoning that produced it.",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Governance",
    title: "Advisory until approved.",
    description:
      "Every decision is a recommendation until a human — or an explicit policy — clears it. Autonomy never escalates quietly.",
  },
  {
    icon: Repeat,
    eyebrow: "Memory",
    title: "It compounds.",
    description:
      "Every decision and outcome becomes institutional memory. The layer sharpens with use — and the knowledge stays yours.",
  },
] as const;

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      {/* Header — minimal by design. Conviction, not conversion. */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="flex items-center gap-8">
            <a
              href="#thesis"
              className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline"
            >
              The thesis
            </a>
            <a
              href="#architecture"
              className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline"
            >
              The layer
            </a>
            <a href="#access" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "px-3")}>
              Request access
            </a>
          </nav>
        </Container>
      </header>

      <main className="flex-1">
        {/* 1 · The opening truth — begin with a truth, not the product. */}
        <section className="pt-24 pb-16 md:pt-36 md:pb-24">
          <Container className="flex flex-col items-center gap-10 text-center">
            <Reveal className="flex max-w-3xl flex-col items-center gap-7">
              <p className="max-w-xl text-balance text-lg leading-relaxed text-muted-foreground">
                Every enterprise runs on systems that record work. Every enterprise
                runs on people who decide what to do about it.
              </p>
              <Display className="max-w-2xl">Almost nothing helps them decide.</Display>
              <Lead className="mx-auto text-center">
                Between the systems that remember and the systems that notice, the most
                consequential work in any company still happens with no system behind
                it. This is about the layer that should exist.
              </Lead>
              <a
                href="#thesis"
                className="group mt-1 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Follow the argument
                <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </Reveal>

            <Reveal delay={0.1} className="w-full">
              <div className="mx-auto mt-6 w-full max-w-3xl">
                <IllMaster />
              </div>
            </Reveal>
          </Container>
        </section>

        {/* 2 · The realization — three layers, you have two. */}
        <Section id="thesis" className="scroll-mt-20">
          <Container className="flex flex-col gap-12">
            <Reveal>
              <SectionHeader
                eyebrow="The enterprise stack"
                title="Three layers. Most companies have two."
                lead="Every enterprise has built two of the three layers it runs on. The third — where decisions actually get made — was never built as a system."
              />
            </Reveal>
            <Reveal>
              <Stagger className="flex flex-col">
                {LAYERS.map((l) => (
                  <StaggerItem
                    key={l.n}
                    className={cn(
                      "grid grid-cols-1 gap-3 border-t py-8 md:grid-cols-[56px_220px_1fr] md:gap-10 md:py-9",
                      l.missing ? "border-brand/40" : "border-border",
                    )}
                  >
                    <MonoLabel className={l.missing ? "text-brand" : undefined}>{l.n}</MonoLabel>
                    <div className="flex items-center gap-3">
                      <h3
                        className={cn(
                          "text-base font-medium",
                          l.missing ? "text-brand" : "text-foreground",
                        )}
                      >
                        {l.name}
                      </h3>
                      {l.missing ? (
                        <span className="rounded border border-brand/40 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-brand">
                          Missing
                        </span>
                      ) : null}
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-base text-foreground">{l.verb}</p>
                      <Prose className="text-sm">{l.body}</Prose>
                    </div>
                  </StaggerItem>
                ))}
                <div className="border-t border-border" />
              </Stagger>
            </Reveal>
          </Container>
        </Section>

        {/* 3 · The gap — why the stack feels incomplete. */}
        <Section className="border-y border-border/60 bg-card/30">
          <Container className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal className="flex flex-col gap-5">
              <Eyebrow>The gap</Eyebrow>
              <Heading>Your most important layer runs on no infrastructure.</Heading>
              <Prose>
                Your systems of record and awareness do their jobs. Then they hand the
                hardest part — the decision — to a person with a dashboard and a deadline.
              </Prose>
              <Prose>
                That decision gets made in a head, a spreadsheet, a thread. It isn&apos;t
                assembled from evidence the same way twice. It can&apos;t be governed.
                Nothing learns from it. The layer where your most consequential, most
                expensive work happens is the one layer you never systematized.
              </Prose>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-xl border border-border bg-background/50 px-6 py-12 md:px-12">
                <IllConvergence />
              </div>
            </Reveal>
          </Container>
        </Section>

        {/* 4 · The decision layer, defined — "of course this should exist." */}
        <Section id="architecture" className="scroll-mt-20">
          <Container className="flex flex-col gap-14">
            <Reveal>
              <SectionHeader
                eyebrow="The decision layer"
                title="What that layer actually does."
                lead="Strip away the product names, and a decision layer does four things — continuously, as one loop."
              />
            </Reveal>

            <Reveal>
              <div className="flex flex-col gap-10 rounded-xl border border-border bg-card px-6 py-10 md:px-12">
                <LifecycleRail labels className="mx-auto max-w-3xl" />
                <div className="grid gap-8 pt-2 sm:grid-cols-2 lg:grid-cols-4">
                  {PHASES.map((p) => (
                    <div key={p.k} className="flex flex-col gap-2">
                      <MonoLabel className={p.k === "Decide" ? "text-brand" : undefined}>
                        {p.k}
                      </MonoLabel>
                      <Prose className="text-sm">{p.t}</Prose>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <Stagger className="grid gap-4 sm:grid-cols-3">
                {MODEL.map(({ Ill, name, note }) => (
                  <StaggerItem
                    key={name}
                    className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6"
                  >
                    <div className="rounded-lg border border-border bg-background/40 p-6">
                      <Ill />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-sm font-medium text-foreground">{name}</h3>
                      <p className="text-xs leading-relaxed text-muted-foreground text-pretty">
                        {note}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>
          </Container>
        </Section>

        {/* 5 · AgentForge — introduced only now, with one concrete runtime moment. */}
        <Section className="border-y border-border/60 bg-card/30">
          <Container className="flex flex-col gap-12">
            <Reveal>
              <SectionHeader
                eyebrow="AgentForge"
                title="We're building the decision layer."
                lead="AgentForge sits on top of your systems of record and awareness and does the one thing they don't: it decides — with evidence, under your governance, and it remembers."
              />
            </Reveal>

            <Reveal delay={0.05}>
              <Terminal title="decision-workspace · order #4821" className="mx-auto max-w-3xl">
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
            </Reveal>

            <Reveal>
              <Prose className="mx-auto max-w-2xl text-center">
                Everything is a <span className="text-foreground">Decision Object</span>: assembled
                from evidence, made under explicit policy, inspectable forever, and fed back into
                what the system knows. Not a black box — a system of record for decisions.
              </Prose>
            </Reveal>
          </Container>
        </Section>

        {/* 6 · Conviction — a system that decides has to earn trust. */}
        <Section>
          <Container className="flex flex-col gap-12">
            <Reveal>
              <SectionHeader
                eyebrow="Why you can trust it"
                title="A system that decides has to earn it."
                lead="The decision layer holds the most consequential work in the company. Three commitments are non-negotiable."
              />
            </Reveal>
            <Reveal>
              <Stagger className="grid gap-4 md:grid-cols-3">
                {PRINCIPLES.map((p) => (
                  <StaggerItem key={p.title}>
                    <ConceptCard
                      icon={p.icon}
                      eyebrow={p.eyebrow}
                      title={p.title}
                      description={p.description}
                    />
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>
          </Container>
        </Section>

        {/* 7 · Close — inevitability, then one quiet ask. */}
        <Section id="access" className="scroll-mt-20">
          <Container className="flex flex-col items-center gap-8 text-center">
            <Reveal className="flex max-w-3xl flex-col items-center gap-6">
              <Heading className="max-w-3xl">
                Your systems of record remember. Your systems of awareness notice. The
                decision layer is where it finally becomes action you can trust.
              </Heading>
              <Lead className="mx-auto text-center">
                The day this clicks, you stop asking your ERP to be your decision system —
                and start asking what is. We&apos;re building it.
              </Lead>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:hello@agentforgeos.ai?subject=AgentForge%20access"
                  className={cn(buttonVariants({ size: "lg" }), "group px-5")}
                >
                  Request access
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a href="#thesis" className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "px-4")}>
                  Re-read the thesis
                </a>
              </div>
            </Reveal>
          </Container>
        </Section>
      </main>

      {/* Footer — quiet. The motif signs off. */}
      <footer className="border-t border-border">
        <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3">
            <Logo />
            <p className="text-sm text-muted-foreground">The Decision Layer for the enterprise.</p>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <LifecycleRail className="w-40" />
            <p className="font-mono text-xs text-muted-foreground/70">
              © {new Date().getFullYear()} AgentForgeOS, Inc.
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
