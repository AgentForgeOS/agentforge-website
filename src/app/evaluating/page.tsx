import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/site/container";
import { Section, SectionHeader } from "@/components/site/section";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { StackDiagram, GovernanceBoundary } from "@/components/site/evaluating-diagrams";
import { Display, Heading, Eyebrow, Lead, Prose } from "@/components/site/typography";
import { Reveal } from "@/components/site/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Evaluating AgentForge",
  description:
    "The questions a serious enterprise asks before trusting a new layer — answered with clarity, honesty, and confidence. AgentForge adapts to your enterprise, not the other way around.",
};

export default function EvaluatingPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Open — name the diligence moment, plant the recurring philosophy. */}
        <section className="pt-20 pb-12 md:pt-28 md:pb-16">
          <Container className="flex max-w-3xl flex-col gap-6">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>Evaluating AgentForge</Eyebrow>
              <Display className="text-h1">Could you actually trust this inside your enterprise?</Display>
              <Lead>
                By now the category, the architecture, and the operational decisions are familiar.
                This is the question that remains — the one a careful team asks before adopting
                anything new. The honest answer is the rest of this page, before you have to ask
                for it.
              </Lead>
              <Prose>
                One idea runs underneath every answer below:{" "}
                <span className="text-foreground">
                  AgentForge adapts to your enterprise; it doesn&apos;t ask your enterprise to adapt
                  to it.
                </span>{" "}
                Your systems stay. Your workflows stay. Your governance stays. What changes is that
                the decisions between them finally have a system of their own.
              </Prose>
            </Reveal>
          </Container>
        </section>

        {/* 1 · Orchestration / the stack. */}
        <Section className="border-y border-border/60 bg-card/30 py-14 md:py-20">
          <Container className="flex flex-col gap-12">
            <Reveal>
              <SectionHeader
                eyebrow="Your stack"
                title="AgentForge doesn't replace your systems of record. It orchestrates decisions across them."
                lead="Your ERP is your system of truth; your sensing and telemetry are your eyes. Neither was built to decide — and AgentForge isn't built to be either of them."
              />
            </Reveal>
            <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
              <Reveal className="flex flex-col gap-5">
                <Prose>
                  It sits above both, reads across them, and makes the governed decision they hand to
                  a person today. The decision becomes a durable Decision Object; the action flows
                  back into the systems that already own it. Nothing gets ripped out, and nothing
                  competes for the database write — the system of record keeps the state, AgentForge
                  keeps the decision.
                </Prose>
                <Prose>
                  And because each decision is re-grounded on current context before it executes, a
                  change underneath it doesn&apos;t strand the decision — it informs the next one.
                  AgentForge is the decision control point, not a second source of truth.
                </Prose>
              </Reveal>
              <Reveal delay={0.1}>
                <StackDiagram />
              </Reveal>
            </div>
          </Container>
        </Section>

        {/* 2 · Workflow fit. */}
        <Section className="py-14 md:py-20">
          <Container className="flex max-w-3xl flex-col gap-6">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>Your workflow</Eyebrow>
              <Heading>Your people keep their systems. AgentForge inserts at the decision, not in front of it.</Heading>
              <Prose>
                A planner doesn&apos;t leave the planning system. An adjuster doesn&apos;t learn a new
                process. An operator doesn&apos;t abandon the screens they know. AgentForge inserts
                itself at the operational decision point inside those workflows — assembling the
                context, surfacing a governed recommendation, and capturing what was decided.
              </Prose>
              <Prose>
                The existing approvals still happen. The existing policies still apply. The only thing
                that disappears is the scramble before the decision — not the workflow around it.
              </Prose>
            </Reveal>
          </Container>
        </Section>

        {/* 3 · The AI question. */}
        <Section className="border-y border-border/60 bg-card/30 py-14 md:py-20">
          <Container className="flex max-w-3xl flex-col gap-6">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>The AI question</Eyebrow>
              <Heading>Reasoning without operational context isn&apos;t operational intelligence.</Heading>
              <Prose>
                The fastest way to get an operational decision wrong is to reason brilliantly over the
                wrong picture of reality. A general model, however capable, doesn&apos;t know your
                supplier slipped, your trailer is dwelling, or your contract&apos;s exclusion clause —
                and asked anyway, it will answer confidently.
              </Prose>
              <Prose>
                AgentForge reasons only over verified operational context it has assembled and scored,
                never over invented detail. And the model never holds authority: generation and
                scoring are deterministic functions of that context; the language model contributes
                reasoning, while the decision is governed by policy and cleared by a person.
              </Prose>
              <Prose>
                Assembling that operational reality — from messy, incomplete, heterogeneous evidence —
                is the genuinely hard part. It is also the part AgentForge owns.
              </Prose>
            </Reveal>
          </Container>
        </Section>

        {/* 4 · Governance adaptability. */}
        <Section className="py-14 md:py-20">
          <Container className="flex flex-col gap-12">
            <Reveal>
              <SectionHeader
                eyebrow="Your governance"
                title="AgentForge adapts to your governance — not the other way around."
                lead="Enterprises don't share one risk posture, and a decision layer shouldn't pretend they do. Where it runs, which models it reasons with, and how much it may act on its own are your decisions, not ours."
              />
            </Reveal>
            <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
              <Reveal className="flex flex-col gap-5">
                <Prose>
                  Run it as SaaS, in your own cloud, in a private VPC, or hybrid. Reason with a managed
                  model or one that never leaves your walls. Your operational data is yours; deployment,
                  model selection, and governance are implementation choices the platform adapts to —
                  not limitations it imposes.
                </Prose>
                <Prose>
                  What stays constant is the part that has to: a human is accountable above the
                  threshold you set, every consequential decision leaves an immutable trail, and
                  autonomy never escalates quietly.
                </Prose>
              </Reveal>
              <Reveal delay={0.1}>
                <GovernanceBoundary />
              </Reveal>
            </div>
          </Container>
        </Section>

        {/* 5 · The moat seed. */}
        <Section className="border-y border-border/60 bg-card/30 py-14 md:py-20">
          <Container className="flex max-w-3xl flex-col gap-6">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>What compounds</Eyebrow>
              <Heading>Software can be replicated. Operational judgment has to be earned.</Heading>
              <Prose>
                Any capable team can build a decision engine. What no one can copy is the judgment a
                Decision Model accumulates by living inside a real operation. Every deployment teaches
                it something the last one couldn&apos;t — a new policy, an exception no one anticipated,
                a pattern that only appears at scale, a piece of organizational knowledge that used to
                live in one person&apos;s head.
              </Prose>
              <Prose>
                That accumulated judgment, not the code beneath it, is what compounds. We&apos;ll tell
                that story in full elsewhere; here it&apos;s enough to notice that the asset isn&apos;t
                the software — it&apos;s everything the software has learned.
              </Prose>
            </Reveal>
          </Container>
        </Section>

        {/* Close — what's intentionally for the conversation. */}
        <Section className="py-14 md:py-20">
          <Container className="flex flex-col items-center gap-8 text-center">
            <Reveal className="flex max-w-2xl flex-col items-center gap-6">
              <Heading className="max-w-2xl">What we&apos;d rather cover with you directly.</Heading>
              <Lead className="mx-auto text-center">
                Some questions deserve a conversation, not a webpage. What this costs, how it would
                deploy in your environment, the exact compliance posture for your industry, and what
                other operators have seen — those depend on your operation, and we&apos;d rather answer
                them honestly with you than approximate them here.
              </Lead>
              <a
                href="mailto:hello@agentforgeos.ai?subject=AgentForge%20access"
                className={cn(buttonVariants({ size: "lg" }), "group mt-1 px-5")}
              >
                Start the conversation
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
