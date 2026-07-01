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
  title: "Conviction",
  description:
    "Every generation of enterprise software removed one kind of operational uncertainty. The next removes the uncertainty of judgment. AgentForge wasn't invented because AI became exciting — it became impossible not to build once the missing layer came into view.",
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

/** FounderAvatar — the founder's portrait, framed to head-and-shoulders. */
function FounderAvatar() {
  return (
    <div className="size-40 shrink-0 overflow-hidden rounded-xl border border-border bg-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/founder.jpg"
        alt="Nish Parikh, founder of AgentForge"
        className="size-full object-cover object-[center_30%]"
      />
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
              <Eyebrow>Conviction</Eyebrow>
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
                This isn&apos;t a conclusion we reasoned our way into. It&apos;s one we watched form,
                slowly, from a particular vantage point — the inside of operations most software
                never reaches.
              </Prose>
              <Prose>
                The most direct path to AgentForge ran through Cognosos, a real-time visibility
                platform. Building it meant spending years in the least forgiving operations there
                are: factories, distribution centers, vehicle yards, hospitals, and the supply chains
                that connect them. Not in demos — in the places where being wrong has consequences.
                The company itself isn&apos;t the point. The years inside those environments are.
              </Prose>
              <Prose>
                That is where this gap reveals itself. You don&apos;t find it by studying enterprise
                software from the outside — you find it by building the layer everyone treats as the
                answer, deploying it where failure isn&apos;t an option, and watching what people
                still had to do by hand afterward.{" "}
                <span className="text-foreground">
                  We had built the visibility layer the industry still sells as the answer, which is
                  exactly why we could see where it stopped.
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
              <Heading>The better operations could see, the more obvious the real bottleneck became.</Heading>
              <Prose>
                Visibility was never the destination. The dashboards got better, the forecasts got
                sharper, the view got closer to real time — and still, every time something unexpected
                happened, the same scene played out.
              </Prose>
              <Prose>
                Someone stopped and began assembling the picture by hand. They searched across
                systems. They read back through email threads. They pulled up a spreadsheet someone
                maintained on the side. They called the colleague who simply knew — the one whose
                judgment lived nowhere but in their own experience. And then, under time pressure,
                they made the call.
              </Prose>
              <Prose>
                Here is the part that mattered most, and it took years to see clearly: every
                improvement in visibility made that moment more conspicuous, not less. The closer an
                operation got to seeing everything, the more plainly the real constraint stood out —
                and it was no longer getting the data, seeing the floor, or forecasting what came
                next. It was{" "}
                <span className="text-foreground">the judgment in the moment</span>, the most
                consequential step in the operation and the only one no software had ever touched.
              </Prose>
              <Prose>
                That is the pattern beneath every era of enterprise software:{" "}
                <span className="text-foreground">
                  each layer, by succeeding, exposes the one above it.
                </span>{" "}
                Records made forecasting worth doing. Forecasting made real-time visibility worth
                building. And visibility, working exactly as intended, made operational judgment
                impossible to keep ignoring. Seen that way, AgentForge isn&apos;t something anyone set
                out to invent. It&apos;s the layer the previous ones had been pointing to all along.
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
                The architecture, the Decision Objects, the governance, the judgment that compounds
                with every deployment — all of it follows once you take that one observation
                seriously. AgentForge is simply what you build when you decide the missing layer
                finally deserves a system of its own.
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
                Ideas about enterprise software are cheap. The hard part was never imagining the
                system — it&apos;s getting difficult software to live inside a real operation and earn
                its keep. What gives us conviction isn&apos;t that we&apos;ve built enterprise
                platforms before. It&apos;s what building them taught us about this exact problem.
              </Prose>
              <Prose>
                We learned that operational trust is earned slowly and lost instantly, and that no
                demo ever shortcuts it. We learned that enterprise deployment is unforgiving in ways
                no architecture diagram warns you about — that the edge cases are the job, not a
                footnote to it. And we learned the lesson that shapes AgentForge most directly:
                software that tries to replace how an operation already works gets rejected, and only
                software that adapts to the workflow already in place ever earns a seat in it.
              </Prose>
              <Prose>
                We say none of this to impress. We say it because it is exactly what building this
                layer will demand, and we are not underestimating it.{" "}
                <span className="text-foreground">
                  That clear-eyed respect for the difficulty is the part we&apos;d point to, more than
                  any idea.
                </span>
              </Prose>
            </Reveal>
          </Container>
        </Section>

        {/* Founder — the human close: introduce the person behind AgentForge and
            ground the page's conviction. Placed before the mission's final word. */}
        <Section className="py-14 md:py-20">
          <Container className="flex max-w-3xl flex-col gap-8">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>The founder</Eyebrow>
              <Heading>The builder behind AgentForge.</Heading>
              <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
                <div className="flex shrink-0 flex-col gap-3">
                  <FounderAvatar />
                  <div>
                    <p className="text-base font-medium text-foreground">Nish Parikh</p>
                    <p className="text-sm text-muted-foreground">Founder, AgentForge</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Prose>
                    Looking back, AgentForge feels less like the beginning of something new than the
                    continuation of a career spent building enterprise platforms.
                  </Prose>
                  <Prose>
                    Across nearly three decades of building enterprise platforms, Nish has worked on
                    systems that helped enterprises operate with greater confidence — from
                    synchronizing data across disconnected systems, to bringing critical information
                    to mobile workers, to making physical operations visible in real time.
                  </Prose>
                  <Prose>Each platform solved an important problem. Each also revealed another one.</Prose>
                  <Prose>
                    It was while co-founding Cognosos that something unexpected became impossible to
                    ignore. As customers gained unprecedented visibility into their operations, the
                    hardest decisions were still being made outside the software — in spreadsheets,
                    email threads, whiteboard conversations, and in the experience of people who had
                    seen similar situations before.
                  </Prose>
                  <Prose>
                    That realization stayed with him long after individual customer meetings ended.
                  </Prose>
                  <Prose>
                    AgentForge grew from a simple conviction: if operational judgment has become one of
                    the most valuable assets inside an enterprise, it deserves to become something
                    organizations can build, govern, improve, and pass from one generation to the next.
                  </Prose>
                  <Prose>
                    Like the platforms before it, AgentForge is an attempt to solve a fundamental
                    systems problem. The difference is that this time, the system isn&apos;t
                    information.
                  </Prose>
                  <Prose className="text-foreground">It&apos;s judgment.</Prose>
                </div>
              </div>
            </Reveal>
          </Container>
        </Section>

        {/* 6 · Looking ahead — conviction close. */}
        <Section className="py-16 md:py-24">
          <Container className="flex max-w-3xl flex-col gap-6">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>Looking ahead</Eyebrow>
              <Heading>The next layer.</Heading>
              <Prose>
                Every generation of enterprise software took one kind of uncertainty out of running a
                business. Records settled what was true. Planning narrowed what was coming. Visibility
                resolved what was happening right now. Each, in its time, went from novelty to
                something no serious operation would run without.
              </Prose>
              <Prose>
                We believe the next layer removes the uncertainty that&apos;s left — the uncertainty
                of what to do about it. Operational judgment becomes something a system can assemble,
                govern, and improve, instead of something that lives only in people&apos;s heads and
                walks out the door when they do.
              </Prose>
              <Prose>
                If we&apos;re right, judgment won&apos;t stay the exception. It will become as ordinary
                a part of the enterprise as the system of record and the system of awareness are
                today — a layer no operation of consequence runs without.{" "}
                <span className="text-foreground">
                  That is the conviction we&apos;re building on. Not another application. The next
                  layer.
                </span>
              </Prose>
              <div className="pt-2">
                <a
                  href="/access"
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
