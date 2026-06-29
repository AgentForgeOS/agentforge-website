import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/site/container";
import { Section } from "@/components/site/section";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Display, Heading, Eyebrow, Lead, Prose } from "@/components/site/typography";
import { Reveal } from "@/components/site/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Origin",
  description:
    "Every generation of enterprise software solved a different problem. This is the story of the one it didn't — operational judgment, the last unmanaged layer — and how it became impossible to ignore.",
};

/**
 * Lineage — the historical progression the rest of the site argues, made
 * concrete. Each era served the information AROUND a decision; the decision
 * itself was never given a system. The fourth step is the gap, not a product.
 */
const ERAS = [
  { era: "ERP", served: "the record" },
  { era: "Planning", served: "the forecast" },
  { era: "Visibility", served: "the view" },
];

function Lineage() {
  return (
    <div className="grid gap-3 sm:grid-cols-4">
      {ERAS.map((e) => (
        <div key={e.era} className="rounded-lg border border-border bg-card/40 px-4 py-4">
          <p className="font-mono text-[11px] uppercase tracking-wider text-foreground/80">{e.era}</p>
          <p className="mt-1 text-[12px] text-muted-foreground">served {e.served}</p>
        </div>
      ))}
      <div className="rounded-lg border border-dashed border-brand/40 bg-brand/[0.04] px-4 py-4">
        <p className="font-mono text-[11px] uppercase tracking-wider text-brand">Judgment</p>
        <p className="mt-1 text-[12px] text-muted-foreground">no system</p>
      </div>
    </div>
  );
}

/**
 * FounderAvatar — on-brand monogram placeholder so the live page is never a
 * broken image. To use a real photo: drop the file at public/founder.jpg and
 * replace the inner content with:
 *   <img src="/founder.jpg" alt="Nish Parikh" className="size-full object-cover" />
 */
function FounderAvatar() {
  return (
    <div className="flex size-40 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-card">
      <span className="font-mono text-2xl tracking-[0.2em] text-brand">NP</span>
    </div>
  );
}

export default function OriginPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Open — the market's progression, stated as the page's thesis. */}
        <section className="pt-20 pb-12 md:pt-28 md:pb-16">
          <Container className="flex max-w-3xl flex-col gap-6">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>Origin</Eyebrow>
              <Display className="text-h1">
                Every generation of enterprise software solved a different problem.
              </Display>
              <Lead>
                This is the story of the one it didn&apos;t — and how, after years of building the
                others, the layer no one had ever managed became impossible to ignore.
              </Lead>
            </Reveal>
          </Container>
        </section>

        {/* 1 · The progression. */}
        <Section className="border-y border-border/60 bg-card/30 py-14 md:py-20">
          <Container className="flex max-w-3xl flex-col gap-8">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>The progression</Eyebrow>
              <Heading>Each era solved the bottleneck of its time. One was never addressed.</Heading>
              <Prose>
                Enterprise software has advanced in layers, each answering the constraint of its
                moment. ERP digitized the record, so the business could finally agree on what was
                true. Planning systems sharpened the forecast, so operations could look further
                ahead. Visibility platforms made the physical world observable, so teams could see
                what was happening as it happened.
              </Prose>
              <Prose>
                Each became essential infrastructure. None was a mistake. But notice what every one
                of them served: the record, the forecast, the view — the information{" "}
                <span className="text-foreground">around</span> a decision.
              </Prose>
              <Prose>
                The decision itself — the moment someone weighs an unexpected situation and commits
                to a response — was never given a system. It stayed where it had always been: in
                people&apos;s heads, exercised under pressure, supported by nothing.{" "}
                <span className="text-foreground">
                  Operational judgment remained the last unmanaged layer of the enterprise.
                </span>
              </Prose>
            </Reveal>
            <Reveal delay={0.1}>
              <Lineage />
            </Reveal>
          </Container>
        </Section>

        {/* 2 · Lived, not theorized. */}
        <Section className="py-14 md:py-20">
          <Container className="flex max-w-3xl flex-col gap-6">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>Lived, not theorized</Eyebrow>
              <Heading>We didn&apos;t arrive at this in a conference room.</Heading>
              <Prose>
                This isn&apos;t a conclusion we reasoned our way into. It&apos;s one we watched form —
                the same way, across years and across industries.
              </Prose>
              <Prose>
                AgentForge is the third enterprise platform we&apos;ve built. The most direct path to
                it ran through Cognosos — one of the leading real-time visibility platforms, deployed
                deep inside manufacturing, logistics, automotive, and healthcare operations. For
                years we worked alongside the teams who run mission-critical systems: not in demos,
                but in the environments where being wrong has consequences.
              </Prose>
              <Prose>
                We had built the visibility layer the industry still sells as the answer.{" "}
                <span className="text-foreground">
                  Which is exactly why we could see where it stopped.
                </span>
              </Prose>
            </Reveal>
          </Container>
        </Section>

        {/* 3 · The turn. */}
        <Section className="border-y border-border/60 bg-card/30 py-14 md:py-20">
          <Container className="flex max-w-3xl flex-col gap-6">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>The turn</Eyebrow>
              <Heading>Visibility was never the destination.</Heading>
              <Prose>
                The dashboards got better. The forecasts got sharper. The view got closer to real
                time. And still, every time something unexpected happened, the same scene played out.
              </Prose>
              <Prose>
                Someone stopped and began assembling the picture by hand. They searched across
                systems. They read back through email threads. They pulled up a spreadsheet someone
                maintained on the side. They called the colleague who simply knew — the one whose
                judgment lived nowhere but in their own experience. And then, under time pressure,
                they made the call.
              </Prose>
              <Prose>
                The information was already there. That was the quiet realization: the bottleneck had
                moved. It was no longer getting the data, or seeing the operation, or forecasting what
                came next. It was{" "}
                <span className="text-foreground">the judgment in the moment</span> — the most
                consequential step in the entire operation, and the only one no software had ever
                supported.
              </Prose>
            </Reveal>
          </Container>
        </Section>

        {/* 4 · Why now. */}
        <Section className="py-14 md:py-20">
          <Container className="flex max-w-3xl flex-col gap-6">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>Why now</Eyebrow>
              <Heading>AgentForge didn&apos;t begin with AI. It began with that gap.</Heading>
              <Prose>
                It would be easy to assume a company like this starts because language models arrived.
                It didn&apos;t. It started with a structural observation that predated the hype:
                judgment had become the binding constraint — and, for the first time, it had become
                possible to give it a system.
              </Prose>
              <Prose>
                Not because any single model got smart enough to trust on its own, but because the
                surrounding layers finally existed. Operational data could be assembled. Context could
                be modeled. A decision could be made inspectable, governed, and improved — instead of
                left to memory. The pieces were in place to treat operational judgment as engineering
                rather than intuition.
              </Prose>
              <Prose>
                Everything on the rest of this site — the architecture, the Decision Objects, the
                governance, the judgment that compounds with every deployment — is what follows once
                you take that one observation seriously. AgentForge is simply what you build when you
                decide the missing layer finally deserves a system of its own.
              </Prose>
            </Reveal>
          </Container>
        </Section>

        {/* 5 · Why we believe we can build it. */}
        <Section className="border-y border-border/60 bg-card/30 py-14 md:py-20">
          <Container className="flex max-w-3xl flex-col gap-6">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>Execution</Eyebrow>
              <Heading>Why we believe we can build it.</Heading>
              <Prose>
                Ideas about enterprise software are cheap. The hard part has never been imagining the
                system — it&apos;s getting difficult software to live inside a real operation and earn
                its keep.
              </Prose>
              <Prose>
                That part we know firsthand. We&apos;ve built enterprise platforms more than once.
                We&apos;ve put mission-critical software into environments that don&apos;t forgive
                failure. We&apos;ve integrated with the messy reality of systems that were never
                designed to cooperate. We&apos;ve earned operational trust the only way it can be
                earned — slowly, and in production. And we&apos;ve learned, usually the hard way, just
                how unforgiving enterprise adoption really is.
              </Prose>
              <Prose>
                We say none of this to impress. We say it because we are not underestimating what
                building this layer will take —{" "}
                <span className="text-foreground">
                  and that clear-eyed respect for the difficulty is the part we&apos;d point to, more
                  than any idea.
                </span>
              </Prose>
            </Reveal>
          </Container>
        </Section>

        {/* Founder — the reader meets the steward. Brief, humble, evidence-based;
            placed before the close so the mission still gets the last word. */}
        <Section className="py-14 md:py-20">
          <Container className="max-w-3xl">
            <Reveal className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
              <FounderAvatar />
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Eyebrow>The founder</Eyebrow>
                  <p className="text-lg font-medium text-foreground">Nish Parikh</p>
                  <p className="text-sm text-muted-foreground">Founder, AgentForge</p>
                </div>
                <Prose>
                  These observations were carried into AgentForge by its founder, Nish Parikh — not
                  as secondhand research, but as what he watched form firsthand, across years of
                  building the layers that came before it.
                </Prose>
                <Prose>
                  AgentForge is his third enterprise software company. He helped build Cognosos — the
                  visibility platform named earlier — and the years spent deploying it inside real
                  operations are where the missing layer stopped being an abstraction.
                </Prose>
                <Prose>
                  He isn&apos;t building AgentForge because the idea is novel. He&apos;s building it
                  because, after seeing that same gap in operation after operation, leaving it
                  unbuilt stopped being an option.
                </Prose>
              </div>
            </Reveal>
          </Container>
        </Section>

        {/* 6 · Looking ahead — conviction close. */}
        <Section className="py-16 md:py-24">
          <Container className="flex max-w-3xl flex-col gap-6">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>Looking ahead</Eyebrow>
              <Heading>What we&apos;re actually building.</Heading>
              <Prose>
                We don&apos;t believe enterprises need another AI application. There are already more
                of those than anyone asked for.
              </Prose>
              <Prose>
                We believe they need a system for operational judgment — a place where the most
                important decisions are made with full context, under real governance, and get better
                every time. That is the company we&apos;re building.
              </Prose>
              <div className="pt-2">
                <a
                  href="mailto:hello@agentforgeos.ai?subject=AgentForge%20access"
                  className={cn(buttonVariants({ size: "lg" }), "group px-5")}
                >
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
