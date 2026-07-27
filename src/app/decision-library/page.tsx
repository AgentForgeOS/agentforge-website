import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/site/container";
import { Section, SectionHeader } from "@/components/site/section";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Display, Heading, Eyebrow, Lead, Prose } from "@/components/site/typography";
import { Reveal } from "@/components/site/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DEEP_BY_SLUG, GROUPS } from "@/lib/solutions-data";

export const metadata: Metadata = {
  title: "The Decision Library",
  description:
    "Every decision the platform runs is a Decision Model — a mapped operational judgment call. The library is what accumulates, and what compounds.",
};

/**
 * The Decision Library — the compounding-moat page.
 *
 * Solutions shows the models as a catalog (recognition: "that's my problem").
 * This page shows the same models as an ASSET CLASS: what one is made of, what
 * a deployment adds to it, and why an accumulating library behaves differently
 * from accumulating customers.
 *
 * Honesty constraints held here (brand-values: honesty is a hard constraint):
 *  - state the real number (25) and the real maturity, never imply 500;
 *  - say out loud that the loop runs in quarters, not sprints — the strongest
 *    objection is more persuasive when we raise it first;
 *  - no comparisons, no "unlike X" (copy voice: describe the architecture as
 *    inevitable, never defend it).
 */

const ANATOMY = [
  {
    k: "The situation it recognizes",
    v: "Demand outruns supply, and someone has to decide who gets the units.",
  },
  {
    k: "The context it must assemble",
    v: "Live and committed demand by channel · on-hand, in-transit, and reserved inventory · promotion and launch calendars · account growth and margin tiers · each channel's historical forecast bias",
  },
  {
    k: "The constraints it holds",
    v: "Minimums for strategic accounts · margin floors · launch reservations honored first · forecast-bias adjustment on chronic over-askers",
  },
  {
    k: "The actions it may take",
    v: "A ranked allocation across channels — the demand it protected, the ask it trimmed, and why — held until a planner approves.",
  },
  {
    k: "What it keeps afterward",
    v: "What was asked, what was given, and how it turned out. Next season the model already knows which channel over-asked, and by how much.",
  },
];

const COMPOUNDING = [
  {
    n: "01",
    t: "A constraint nobody wrote down",
    d: "The margin floor that was always understood but never encoded. The account that is never short-shipped, whatever the model says. Each one enters the model as a rule it will hold from then on.",
  },
  {
    n: "02",
    t: "An edge case that only appears in production",
    d: "The allocation that was right on paper and wrong in the warehouse. The exception that shows up twice a year and is handled from memory both times.",
  },
  {
    n: "03",
    t: "A pattern that only exists at volume",
    d: "One channel's forecast runs hot every season. One supplier slips only above a certain order size. No single decision reveals these — a few hundred do.",
  },
  {
    n: "04",
    t: "A governance rule learned the hard way",
    d: "The approval that should have been required. The threshold that was too loose. Governance is rarely designed in advance; it is discovered, and then it should never be lost again.",
  },
];

export default function DecisionLibraryPage() {
  const allocation = DEEP_BY_SLUG["demand-allocation"];
  const modelCount = GROUPS.reduce(
    (n, g) => n + g.capabilities.reduce((m, c) => m + c.models.length, 0),
    0,
  );
  const capabilityCount = GROUPS.reduce((n, g) => n + g.capabilities.length, 0);

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Open — name the asset. */}
        <section className="pt-20 pb-12 md:pt-28 md:pb-16">
          <Container className="flex max-w-3xl flex-col gap-6">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>The Decision Library</Eyebrow>
              <Display className="text-h1">
                Software can be replicated. Operational judgment has to be earned.
              </Display>
              <Lead>
                Every decision the platform runs is a{" "}
                <span className="text-foreground">Decision Model</span> — one operational
                judgment call, mapped: the situation it recognizes, the context it assembles,
                the constraints it holds, and what it keeps once the outcome is known.
              </Lead>
              <Prose>
                The library is the collection of those models. It is the part of this system
                that cannot be bought, copied, or rebuilt from a specification — because it is
                assembled from decisions that were actually made.
              </Prose>
            </Reveal>
          </Container>
        </section>

        {/* 1 · Anatomy — what a Decision Model actually is. */}
        <Section className="border-y border-border/60 bg-card/30 py-14 md:py-20">
          <Container className="flex flex-col gap-12">
            <Reveal>
              <SectionHeader
                eyebrow="Anatomy"
                title="A Decision Model is a mapped judgment call, not a workflow."
                lead="A workflow describes the steps. A Decision Model describes the judgment — everything that has to be true, weighed, and honored for the call to be a good one. Here is a real one, opened up."
              />
            </Reveal>
            <Reveal className="flex flex-col gap-6">
              <div className="rounded-xl border border-border bg-background/40 p-6 md:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Decision Model · {allocation.capability}
                </p>
                <p className="mt-2 text-h4 font-medium text-foreground">{allocation.name}</p>
                <dl className="mt-6 flex flex-col divide-y divide-border/60">
                  {ANATOMY.map((row) => (
                    <div key={row.k} className="flex flex-col gap-1.5 py-4 sm:flex-row sm:gap-8">
                      <dt className="shrink-0 font-mono text-[11px] uppercase tracking-wider text-muted-foreground sm:w-56 sm:pt-0.5">
                        {row.k}
                      </dt>
                      <dd className="text-sm leading-relaxed text-foreground/90">{row.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <Prose>
                Nothing in that list is exotic. That is the point — it is the ordinary substance
                of a decision an experienced planner makes on a Friday afternoon, written down
                completely enough that a system can hold it, apply it under policy, and improve
                it. Mapping one takes real work. Mapping a hundred takes years.
              </Prose>
            </Reveal>
          </Container>
        </Section>

        {/* 2 · The library today — honest numbers. */}
        <Section className="py-14 md:py-20">
          <Container className="flex flex-col gap-12">
            <Reveal>
              <SectionHeader
                eyebrow="The library today"
                title={`${modelCount} Decision Models, across ${capabilityCount} operational capabilities.`}
                lead="Stated plainly, because the number matters less than the direction. This is a beginning that is real, not a catalog that is claimed."
              />
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {GROUPS.map((g) => (
                <Reveal key={g.id} className="flex flex-col gap-4">
                  <div className="rounded-xl border border-border bg-card/30 p-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {g.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.blurb}</p>
                    <ul className="mt-5 flex flex-col gap-3">
                      {g.capabilities.map((c) => (
                        <li key={c.name} className="flex items-baseline justify-between gap-4">
                          <span className="text-sm text-foreground/90">{c.name}</span>
                          <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
                            {c.models.length}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <Prose>
                Each of these is mapped to the same depth as the one above — the situation, the
                context, the constraints, the governed action. They are the starting library:
                the decisions that recur in nearly every operation, in the form they take before
                a single deployment has taught them anything.
              </Prose>
            </Reveal>
          </Container>
        </Section>

        {/* 3 · What a deployment adds — the mechanism. */}
        <Section className="border-y border-border/60 bg-card/30 py-14 md:py-20">
          <Container className="flex flex-col gap-12">
            <Reveal>
              <SectionHeader
                eyebrow="What a deployment adds"
                title="A model arrives competent. It leaves each operation more complete."
                lead="This is the mechanism underneath the word 'compounds' — four specific things a real deployment contributes that no amount of design anticipates."
              />
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {COMPOUNDING.map((c) => (
                <Reveal key={c.n}>
                  <div className="flex h-full flex-col gap-2 rounded-xl border border-border bg-background/40 p-6">
                    <span className="font-mono text-[11px] text-muted-foreground">{c.n}</span>
                    <p className="text-base font-medium text-foreground">{c.t}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{c.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* 4 · Compounds vs accumulates — the distinction the page turns on. */}
        <Section className="py-14 md:py-20">
          <Container className="flex max-w-3xl flex-col gap-6">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>Why it compounds</Eyebrow>
              <Heading>Most platforms accumulate customers. A library accumulates judgment.</Heading>
              <Prose>
                Those are different curves. Serving more customers makes a company larger; it
                does not make the product better at the work. A library behaves differently,
                because what one deployment learns is structural rather than local.
              </Prose>
              <Prose>
                A bias correction learned on one channel applies to the next channel that
                behaves the same way. A constraint discovered at one operation ships with the
                model to the next one. A pattern learned on a single item extends to the items
                beneath it in the hierarchy, at reduced confidence, until evidence raises or
                lowers it.{" "}
                <span className="text-foreground">
                  The model that arrives at your operation is sharper than the one that arrived
                  at the last, and yours will sharpen it again.
                </span>
              </Prose>
              <Prose>
                One honest note about the rate. Operational feedback is slow: an allocation made
                in March may not be provably right until June, and a procurement call can take
                two quarters to resolve. This loop turns in quarters, not sprints. That is also
                why it is durable — an asset that takes years of real operations to build is not
                one that can be assembled quickly by anyone else, including us.
              </Prose>
            </Reveal>
          </Container>
        </Section>

        {/* 5 · What stays yours. */}
        <Section className="border-y border-border/60 bg-card/30 py-14 md:py-20">
          <Container className="flex max-w-3xl flex-col gap-6">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>What stays yours</Eyebrow>
              <Heading>The judgment your operation earns belongs to your operation.</Heading>
              <Prose>
                Every decision, its evidence, its rationale, and its outcome is recorded as a
                Decision Object in your own graph — inspectable, exportable, and yours. The
                constraints your team encoded and the patterns your history proved remain your
                asset, on your side of the boundary.
              </Prose>
              <Prose>
                What improves across the library is the shape of the models — the structure of
                the judgment, not the particulars of your business. Your suppliers, your
                accounts, your thresholds, and your history stay where they are.{" "}
                <span className="text-foreground">
                  An operation should be able to leave with everything it learned. That
                  constraint is what makes this an asset rather than a dependency.
                </span>
              </Prose>
            </Reveal>
          </Container>
        </Section>

        {/* 6 · Hard to copy — the honest close. */}
        <Section className="py-16 md:py-24">
          <Container className="flex max-w-3xl flex-col gap-6">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>Why this is difficult</Eyebrow>
              <Heading>The architecture is publishable. The library is not.</Heading>
              <Prose>
                Everything about how this system works can be described in public, and most of
                it is described on this site. The graph, the Decision Object, the adversarial
                step, the governance model — a capable team can read all of it and build
                something with the same shape.
              </Prose>
              <Prose>
                What they cannot read is the content: the constraint matrix for a real
                allocation, the evidence sources that actually resolve a supplier dispute, the
                policy boundary that a claims organization discovered the expensive way. That is
                not architecture. It is mapped judgment, and there is only one way to get it —
                one operation, one decision, one outcome at a time.
              </Prose>
              <Prose>
                <span className="text-foreground">
                  A specification can be copied in a quarter. A library has to be earned in
                  years.
                </span>{" "}
                We are early in ours, and we would rather say so than describe a library we have
                not built yet.
              </Prose>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="/solutions" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-5")}>
                  See the models
                </a>
                <a href="/access" className={cn(buttonVariants({ size: "lg" }), "group px-5")}>
                  Start the conversation
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>
          </Container>
        </Section>
      </main>

      <SiteFooter />
    </div>
  );
}
