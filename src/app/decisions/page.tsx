import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/site/container";
import { Section, SectionHeader } from "@/components/site/section";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { IllDecisionObject } from "@/components/site/illustrations";
import { Display, Heading, Eyebrow, Lead, Prose, MonoLabel } from "@/components/site/typography";
import { Reveal } from "@/components/site/reveal";
import { Stagger, StaggerItem } from "@/components/site/stagger";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Operational Decisions — AgentForge",
  description:
    "A trailer past its dwell window, a supplier slipping, a claim against a contract. Different operations, the same decision underneath — and one architecture governs them all.",
};

const ANATOMY = ["Situation", "Evidence", "Options", "Policy & constraints", "Outcome"] as const;

const COMPARE = [
  {
    name: "Trailer Dwell Optimization",
    domain: "Logistics · yard",
    rows: {
      Situation: "A trailer idles past its dwell target in the yard.",
      Evidence: "Yard position, appointment schedule, detention clock, door availability, carrier SLA.",
      Options: "Hold, reposition to a door, release to the carrier, reassign the load.",
      "Policy & constraints": "Detention thresholds, carrier contracts, dock capacity, safety rules.",
      Outcome: "Detention spend, dock throughput, on-time departure.",
    },
  },
  {
    name: "Claims Adjudication",
    domain: "Insurance · services",
    rows: {
      Situation: "A claim is filed and needs a decision.",
      Evidence: "Policy terms, contract SLAs, prior claims, documentation, fraud signals.",
      Options: "Approve, deny, partial-pay, request information, escalate.",
      "Policy & constraints": "Coverage rules, authority limits, regulatory compliance, reserve thresholds.",
      Outcome: "Payout accuracy, loss ratio, cycle time, compliance.",
    },
  },
] as const;

const FIELD = [
  {
    group: "Supply chain",
    items: [
      ["Inventory Rebalancing", "Move stock before one site stocks out and another overstocks."],
      ["Supplier Disruptions", "Reroute, expedite, or hold when a supplier slips."],
      ["Demand Allocation", "Decide who gets constrained supply when there isn't enough."],
    ],
  },
  {
    group: "Logistics & yard",
    items: [
      ["Transportation Exceptions", "Reroute or re-promise when a shipment misses its window."],
      ["Trailer Dwell Optimization", "Release or reposition trailers idling past their window."],
      ["Asset Retrieval & Yard Ops", "Find and move the right asset before it stalls the next step."],
    ],
  },
  {
    group: "Manufacturing",
    items: [
      ["Quality Holds", "Release, rework, or scrap when a lot fails inspection."],
      ["Work-in-Process Bottlenecks", "Rebalance a line when a work cell starves or backs up."],
    ],
  },
  {
    group: "Services & claims",
    items: [
      ["Claims Adjudication", "Approve, deny, or escalate against contract and policy."],
      ["Resource Assignment", "Assign the right crew, bay, or machine under shifting constraints."],
    ],
  },
] as const;

export default function DecisionsPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* 1 · Open in their world — recognizable problems, then the turn. */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-20">
          <Container className="flex max-w-3xl flex-col gap-6">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>What it governs</Eyebrow>
              <p className="text-balance text-lg leading-relaxed text-muted-foreground">
                A trailer idles three hours past its window. A supplier&apos;s lead time doubles
                overnight. A quality hold stops the shipment to your largest account. A claim lands
                against a contract no one has read in a year.
              </p>
              <Display className="text-h1">Underneath, they are the same decision.</Display>
              <Lead>
                Each is a situation that forces a judgment call — evidence scattered across systems,
                options bounded by policy, an outcome learned too late. The operations could not be
                more different. The shape of the decision is identical.
              </Lead>
            </Reveal>
          </Container>
        </section>

        {/* 2 · The demonstration — two unrelated decisions, the same anatomy. */}
        <Section className="border-y border-border/60 bg-card/30">
          <Container className="flex flex-col gap-12">
            <Reveal>
              <SectionHeader
                eyebrow="The shared structure"
                title="Every operational decision has the same anatomy."
                lead="Set two that look nothing alike side by side, and the structure repeats — a situation, the evidence it needs, the options it weighs, the policy that bounds it, and the outcome it is judged by."
              />
            </Reveal>

            <Reveal>
              <div className="grid gap-4 md:grid-cols-2">
                {COMPARE.map((c) => (
                  <div
                    key={c.name}
                    className="flex flex-col gap-5 rounded-xl border border-border bg-background/50 p-6 md:p-8"
                  >
                    <div className="flex flex-col gap-1">
                      <MonoLabel>{c.domain}</MonoLabel>
                      <h3 className="text-base font-medium text-foreground">{c.name}</h3>
                    </div>
                    <div className="flex flex-col gap-4">
                      {ANATOMY.map((a) => (
                        <div key={a} className="grid gap-1 sm:grid-cols-[132px_1fr] sm:gap-4">
                          <span className="font-mono text-[11px] uppercase tracking-wider text-brand/80">
                            {a}
                          </span>
                          <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                            {c.rows[a]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <p className="max-w-3xl text-base text-foreground/85">
                Different yard, different ledger — the same five questions. That sameness is not a
                coincidence. It is the structure of operational judgment itself.
              </p>
            </Reveal>
          </Container>
        </Section>

        {/* 3 · The construct emerges — one architecture; the Decision Model. */}
        <Section>
          <Container className="flex flex-col gap-12">
            <Reveal>
              <SectionHeader
                eyebrow="Decision Models"
                title="Capture that structure once, and the architecture governs it."
                lead="Because the shape is shared, there is no separate product for trailers and another for claims. The same operating model — assemble context, decide under policy, learn from the outcome — runs every one of them."
              />
            </Reveal>
            <Reveal>
              <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
                <div className="flex flex-col gap-5">
                  <Prose>
                    That captured structure has a name: a{" "}
                    <span className="text-foreground">Decision Model</span> — the reusable
                    representation of one recurring operational decision. Where a Decision Object is a
                    single decision, made and recorded, a Decision Model is the form it takes every
                    time the situation returns.
                  </Prose>
                  <Prose>
                    Define the model once — the situation that triggers it, the evidence it requires,
                    the options, the policy, the outcome it answers to — and the architecture produces
                    governed decisions of it on demand. Configuring a new decision is not building a
                    new system.
                  </Prose>
                </div>
                <div className="rounded-xl border border-border bg-card px-6 py-12 md:px-12">
                  <IllDecisionObject />
                </div>
              </div>
            </Reveal>
          </Container>
        </Section>

        {/* 4 · The breadth — evidence of reach (seed only; no compounding here). */}
        <Section className="border-y border-border/60 bg-card/30">
          <Container className="flex flex-col gap-12">
            <Reveal>
              <SectionHeader
                eyebrow="The reach"
                title="One architecture. A widening field of decisions."
                lead="These come from industries that share almost nothing — and every one is the same architecture, configured to a different decision."
              />
            </Reveal>

            <Reveal>
              <Stagger className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                {FIELD.map((g) => (
                  <StaggerItem key={g.group} className="flex flex-col gap-5">
                    <MonoLabel className="text-foreground/80">{g.group}</MonoLabel>
                    <div className="flex flex-col gap-4">
                      {g.items.map(([name, line]) => (
                        <div key={name} className="flex flex-col gap-1">
                          <h3 className="text-sm font-medium text-foreground">{name}</h3>
                          <p className="text-xs leading-relaxed text-muted-foreground text-pretty">
                            {line}
                          </p>
                        </div>
                      ))}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>

            <Reveal>
              <p className="max-w-3xl text-base text-foreground/85">
                This is not a product menu, and not a finished list. It is what one architecture
                reaches. Each new decision is a model to configure, not a product to build — which is
                why the field only widens.
              </p>
            </Reveal>
          </Container>
        </Section>

        {/* 5 · Close — what it means for you. */}
        <Section>
          <Container className="flex flex-col items-center gap-8 text-center">
            <Reveal className="flex max-w-2xl flex-col items-center gap-6">
              <Heading className="max-w-2xl">Your hardest decisions are the ones it was built for.</Heading>
              <Lead className="mx-auto text-center">
                The calls made from memory, under pressure, with money on the line — the ones no
                system stands behind today. Tell us the decision that keeps your operation up at
                night.
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
