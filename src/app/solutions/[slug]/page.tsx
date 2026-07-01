import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/site/container";
import { Section, SectionHeader } from "@/components/site/section";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import {
  Terminal,
  TerminalFlag,
  TerminalHeading,
  TerminalList,
  TerminalActions,
} from "@/components/site/terminal";
import { Heading, Subheading, Eyebrow, Lead, Prose, MonoLabel } from "@/components/site/typography";
import { Reveal } from "@/components/site/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DEEP_MODELS, DEEP_BY_SLUG, ARCH_NOTE } from "@/lib/solutions-data";

export function generateStaticParams() {
  return DEEP_MODELS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = DEEP_BY_SLUG[slug];
  if (!m) return {};
  return {
    title: `${m.name} — AgentForge`,
    description: `${m.situationLine} How AgentForge governs the ${m.name} decision.`,
  };
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5 text-sm leading-relaxed text-muted-foreground">
      {items.map((it) => (
        <li key={it} className="flex gap-2.5">
          <span className="text-brand" aria-hidden>
            ·
          </span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function DecisionModelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = DEEP_BY_SLUG[slug];
  if (!m) notFound();

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero — capability breadcrumb, the decision, the moment. */}
        <section className="pt-16 pb-12 md:pt-24 md:pb-16">
          <Container className="flex max-w-3xl flex-col gap-6">
            <Reveal className="flex flex-col gap-5">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/solutions" className="transition-colors hover:text-foreground">
                  Solutions
                </Link>
                <span aria-hidden>·</span>
                <span>{m.group}</span>
                <span aria-hidden>·</span>
                <span>{m.capability}</span>
              </div>
              <Heading className="text-h1">{m.name}</Heading>
              <Lead>{m.situationLine}</Lead>
            </Reveal>
          </Container>
        </section>

        {/* The decision — the moment, from inside the operation. */}
        <Section className="border-y border-border/60 bg-card/30 py-14 md:py-20">
          <Container className="flex max-w-3xl flex-col gap-10">
            <Reveal className="flex flex-col gap-5">
              <Eyebrow>The decision</Eyebrow>
              <Prose className="text-lg text-foreground/90">{m.decision}</Prose>
            </Reveal>
            <Reveal className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Subheading>Why it&apos;s hard today</Subheading>
                <Prose>{m.whyHard}</Prose>
              </div>
              <div className="flex flex-col gap-2">
                <MonoLabel className="text-foreground/80">Why your systems don&apos;t help</MonoLabel>
                <Prose>{m.whySystemsFail}</Prose>
              </div>
            </Reveal>
          </Container>
        </Section>

        {/* What AgentForge assembles + the governed decision. */}
        <Section className="py-14 md:py-20">
          <Container className="flex flex-col gap-12">
            <Reveal>
              <SectionHeader
                eyebrow="What AgentForge does"
                title="It assembles the picture you can't see, and makes the call under your rules."
                lead={m.recommendation}
              />
            </Reveal>
            <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
              <Reveal className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <MonoLabel className="text-foreground/80">Operational context assembled</MonoLabel>
                  <Bullets items={m.context} />
                </div>
                <div className="flex flex-col gap-3">
                  <MonoLabel className="text-foreground/80">Governed by your policy</MonoLabel>
                  <Bullets items={m.policy} />
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <Terminal title={m.terminal.title} className="w-full">
                  <TerminalFlag>{m.terminal.flag}</TerminalFlag>
                  <div className="space-y-2">
                    <TerminalHeading>Evidence assembled</TerminalHeading>
                    <TerminalList items={m.terminal.evidence} />
                  </div>
                  <div className="space-y-2">
                    <TerminalHeading>{m.terminal.recHeading}</TerminalHeading>
                    <p className="text-foreground/55">{m.terminal.policy}</p>
                  </div>
                  <TerminalActions items={m.terminal.actions} />
                </Terminal>
              </Reveal>
            </div>
          </Container>
        </Section>

        {/* Outcomes + the knowledge it keeps (moat seed). */}
        <Section className="border-y border-border/60 bg-card/30 py-14 md:py-20">
          <Container className="grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal className="flex flex-col gap-3">
              <Eyebrow>What improves</Eyebrow>
              <Bullets items={m.outcomes} />
            </Reveal>
            <Reveal className="flex flex-col gap-3">
              <MonoLabel className="text-foreground/80">The knowledge it keeps</MonoLabel>
              <Prose>{m.knowledge}</Prose>
            </Reveal>
          </Container>
        </Section>

        {/* Architecture as the explanation — light, at the end. */}
        <Section className="py-14 md:py-20">
          <Container className="flex max-w-3xl flex-col gap-5">
            <MonoLabel className="text-foreground/80">Under the hood</MonoLabel>
            <Prose>{ARCH_NOTE}</Prose>
            <Link
              href="/architecture"
              className="group inline-flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              See how it works
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Container>
        </Section>

        {/* Close. */}
        <Section className="border-t border-border/60 bg-card/30">
          <Container className="flex flex-col items-center gap-8 text-center">
            <Reveal className="flex max-w-2xl flex-col items-center gap-6">
              <Heading className="max-w-2xl">This is exactly how your team works today.</Heading>
              <Lead className="mx-auto text-center">
                Only now the decision is assembled, governed, and remembered — instead of made from
                memory and lost.
              </Lead>
              <div className="mt-1 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/access"
                  className={cn(buttonVariants({ size: "lg" }), "group px-5")}
                >
                  Request access
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <Link
                  href="/solutions"
                  className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "px-4")}
                >
                  Back to all decisions
                </Link>
              </div>
            </Reveal>
          </Container>
        </Section>
      </main>

      <SiteFooter />
    </div>
  );
}
