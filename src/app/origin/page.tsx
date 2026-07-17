import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/site/container";
import { Section } from "@/components/site/section";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Display, Heading, Eyebrow, Prose } from "@/components/site/typography";
import { Reveal } from "@/components/site/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Conviction",
  description:
    "The person behind AgentForgeOS, the moment the missing layer became impossible to ignore, and why he believes it can be built.",
};

/** FounderAvatar — the founder's portrait, framed to head-and-shoulders. */
function FounderAvatar() {
  return (
    <div className="size-40 shrink-0 overflow-hidden rounded-xl border border-border bg-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/founder.jpg"
        alt="Nish Parikh, founder of AgentForgeOS"
        className="size-full object-cover object-[center_30%]"
      />
    </div>
  );
}

/**
 * Conviction — founder-first (2026-07-17 restructure). The home page already
 * argues the thesis; a reader arrives here from "who's behind it?" — so the
 * person comes first, then the moment he saw the gap, why now, why him, and
 * where it goes. Roughly half the previous length; the eras argument and its
 * Lineage cards were cut (the home page owns that story).
 */
export default function OriginPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Open — short; deliver the person the home page promised. */}
        <section className="pt-20 pb-12 md:pt-28 md:pb-16">
          <Container className="flex max-w-3xl flex-col gap-6">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>Conviction</Eyebrow>
              <Display className="text-h1">
                Operational judgment deserves a system of its own.
              </Display>
            </Reveal>
          </Container>
        </section>

        {/* 1 · The founder — first, as promised. */}
        <Section className="border-y border-border/60 bg-card/30 py-14 md:py-20">
          <Container className="flex max-w-3xl flex-col gap-8">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>The founder</Eyebrow>
              <Heading>The builder behind AgentForgeOS.</Heading>
              <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
                <div className="flex shrink-0 flex-col gap-3">
                  <FounderAvatar />
                  <div>
                    <p className="text-base font-medium text-foreground">Nish Parikh</p>
                    <p className="text-sm text-muted-foreground">Founder, AgentForgeOS</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Prose>
                    Across nearly three decades, Nish has built enterprise platforms that helped
                    operations run with greater confidence — synchronizing data across
                    disconnected systems, bringing critical information to mobile workers, and
                    making physical operations visible in real time.
                  </Prose>
                  <Prose>
                    It was while co-founding Cognosos, a real-time visibility platform, that the
                    gap became impossible to ignore. Building it meant years inside the least
                    forgiving operations there are — factories, distribution centers, vehicle
                    yards, hospitals — and every time something unexpected happened, the same
                    scene played out. Someone stopped and assembled the picture by hand: searching
                    across systems, reading back through email threads, pulling up a spreadsheet
                    maintained on the side, and calling the colleague who simply knew. Then, under
                    pressure, they made the call.
                  </Prose>
                  <Prose>
                    Every improvement in visibility made that moment more conspicuous, not less.
                    The hardest decisions were still being made outside the software — and that,
                    he became convinced, was the real bottleneck. Not getting the data or seeing
                    the floor, but{" "}
                    <span className="text-foreground">the judgment in the moment</span>, the one
                    step no software had ever touched.
                  </Prose>
                  <Prose>
                    AgentForgeOS grew from a simple conviction: if operational judgment has become
                    one of the most valuable assets inside an enterprise, it deserves to become
                    something organizations can build, govern, improve, and pass from one
                    generation to the next.
                  </Prose>
                  <Prose>
                    Like the platforms before it, AgentForgeOS is an attempt to solve a
                    fundamental systems problem. The difference is that this time, the system
                    isn&apos;t information. <span className="text-foreground">It&apos;s judgment.</span>
                  </Prose>
                </div>
              </div>
            </Reveal>
          </Container>
        </Section>

        {/* 2 · Why now. */}
        <Section className="border-y border-border/60 bg-card/30 py-14 md:py-20">
          <Container className="flex max-w-3xl flex-col gap-6">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>Why now</Eyebrow>
              <Heading>It didn&apos;t begin with AI. It began with that gap.</Heading>
              <Prose>
                Judgment had become the binding constraint — and, for the first time, it had
                become possible to give it a system. Not because any single model got smart
                enough to trust on its own, but because the surrounding layers finally existed:
                operational data could be assembled, context could be modeled, and a decision
                could be made inspectable, governed, and improved instead of left to memory.
              </Prose>
              <Prose>
                The architecture, the Decision Objects, the governance, the judgment that
                compounds with every deployment — all of it follows once you take that one
                observation seriously.
              </Prose>
            </Reveal>
          </Container>
        </Section>

        {/* 4 · Why we believe we can build it. */}
        <Section className="py-14 md:py-20">
          <Container className="flex max-w-3xl flex-col gap-6">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>Execution</Eyebrow>
              <Heading>Why we believe we can build it.</Heading>
              <Prose>
                The hard part was never imagining the system — it&apos;s getting difficult
                software to live inside a real operation and earn its keep. Building enterprise
                platforms taught us that operational trust is earned slowly and lost instantly,
                that the edge cases are the job rather than a footnote to it, and that only
                software which adapts to the workflow already in place ever earns a seat in it.
              </Prose>
              <Prose>
                We say none of this to impress. We say it because it is exactly what building
                this layer will demand, and we are not underestimating it.{" "}
                <span className="text-foreground">
                  That clear-eyed respect for the difficulty is the part we&apos;d point to, more
                  than any idea.
                </span>
              </Prose>
            </Reveal>
          </Container>
        </Section>

        {/* 5 · Looking ahead — conviction close. */}
        <Section className="py-16 md:py-24">
          <Container className="flex max-w-3xl flex-col gap-6">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>Looking ahead</Eyebrow>
              <Heading>The next layer.</Heading>
              <Prose>
                We believe the next layer of enterprise software removes the uncertainty
                that&apos;s left — the uncertainty of what to do. Operational judgment becomes
                something a system can assemble, govern, and improve, instead of something that
                lives only in people&apos;s heads and walks out the door when they do.
              </Prose>
              <Prose>
                If we&apos;re right, judgment won&apos;t stay the exception. It will become as
                ordinary a part of the enterprise as the system of record is today — a layer no
                operation of consequence runs without.{" "}
                <span className="text-foreground">
                  That is the conviction we&apos;re building on. Not another application. The
                  next layer.
                </span>
              </Prose>
              <div className="pt-2">
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
