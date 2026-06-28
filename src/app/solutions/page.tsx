import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/site/container";
import { Section, SectionHeader } from "@/components/site/section";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Display, Heading, Eyebrow, Lead, Prose, MonoLabel } from "@/components/site/typography";
import { Reveal } from "@/components/site/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GROUPS } from "@/lib/solutions-data";

export const metadata: Metadata = {
  title: "Solutions — AgentForge",
  description:
    "Find your operation. The planning calls that follow the forecast, and the execution calls made live on the floor and in the yard — every one a Decision Model on the same architecture.",
};

export default function SolutionsPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* 1 · Recognition open — find your operation. */}
        <section className="pt-20 pb-12 md:pt-28 md:pb-16">
          <Container className="flex max-w-3xl flex-col gap-6">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>Solutions</Eyebrow>
              <Display className="text-h1">Find your operation.</Display>
              <Lead>
                These are the operational decisions teams make every day — the planning calls that
                follow the forecast, and the execution calls made live, on the floor and in the
                yard. Find yours below.
              </Lead>
            </Reveal>
          </Container>
        </section>

        {/* 2 · The capability landscape — breadth, grouped Planning / Execution. */}
        {GROUPS.map((group, gi) => (
          <Section
            key={group.id}
            className={cn(gi % 2 === 0 ? "border-y border-border/60 bg-card/30" : "", "py-14 md:py-20")}
          >
            <Container className="flex flex-col gap-10">
              <Reveal className="flex flex-col gap-2">
                <Heading className="text-h2">{group.title}</Heading>
                <Lead className="max-w-2xl">{group.blurb}</Lead>
              </Reveal>

              <Reveal>
                <div className="grid gap-4 lg:grid-cols-2">
                  {group.capabilities.map((cap) => (
                    <div
                      key={cap.name}
                      className="flex flex-col gap-5 rounded-xl border border-border bg-background/50 p-6 md:p-8"
                    >
                      <div className="flex flex-col gap-2">
                        <h3 className="text-base font-medium text-foreground">{cap.name}</h3>
                        {cap.framing ? (
                          <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                            {cap.framing}
                          </p>
                        ) : null}
                      </div>
                      <ul className="flex flex-col">
                        {cap.models.map((m) =>
                          m.slug ? (
                            <li key={m.name} className="border-t border-border first:border-t-0">
                              <Link
                                href={`/solutions/${m.slug}`}
                                className="group flex items-baseline justify-between gap-3 py-2.5 transition-colors"
                              >
                                <span className="flex flex-col gap-0.5">
                                  <span className="text-sm font-medium text-foreground transition-colors group-hover:text-brand">
                                    {m.name}
                                  </span>
                                  <span className="text-xs leading-relaxed text-muted-foreground">{m.line}</span>
                                </span>
                                <ArrowUpRight
                                  className="mt-0.5 size-4 shrink-0 text-muted-foreground/40 transition-colors group-hover:text-brand"
                                  aria-hidden
                                />
                              </Link>
                            </li>
                          ) : (
                            <li
                              key={m.name}
                              className="flex flex-col gap-0.5 border-t border-border py-2.5 first:border-t-0"
                            >
                              <span className="text-sm font-medium text-foreground/80">{m.name}</span>
                              <span className="text-xs leading-relaxed text-muted-foreground">{m.line}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </Reveal>
            </Container>
          </Section>
        ))}

        {/* 3 · The reveal — one architecture; the model sharpens with use. */}
        <Section>
          <Container className="flex flex-col gap-6">
            <Reveal className="flex max-w-3xl flex-col gap-6">
              <SectionHeader
                eyebrow="One platform"
                title="Read across the columns, and the realization arrives on its own."
                lead="These come from operations that share almost nothing. Yet a planner and a yard lead are running the same shape of decision — and the same architecture governs both, configured to each."
              />
              <Prose className="max-w-3xl">
                That is why this is not a list of products. Each is a{" "}
                <span className="text-foreground">Decision Model</span> on one architecture — and a
                model is never quite finished. Every operation it runs in leaves it a little sharper,
                until the model itself becomes the asset.
              </Prose>
            </Reveal>
          </Container>
        </Section>

        {/* 4 · Close. */}
        <Section className="border-t border-border/60 bg-card/30">
          <Container className="flex flex-col items-center gap-8 text-center">
            <Reveal className="flex max-w-2xl flex-col items-center gap-6">
              <Heading className="max-w-2xl">Don&apos;t see your decision? It&apos;s probably the same shape.</Heading>
              <Lead className="mx-auto text-center">
                Tell us the call your team makes from memory, under pressure, with money on the line.
                We&apos;ll show you what it looks like governed.
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
