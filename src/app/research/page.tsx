import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

import { Container } from "@/components/site/container";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Display, Heading, Eyebrow, Lead, Prose, MonoLabel } from "@/components/site/typography";
import { Reveal } from "@/components/site/reveal";
import { PAPERS, type Paper } from "@/lib/research-data";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Papers on organizational memory, human judgment and the architecture required to retain both.",
  openGraph: {
    type: "website",
    url: "/research",
    title: "Research · AgentForgeOS",
    description:
      "Papers on organizational memory, human judgment and the architecture required to retain both.",
  },
};

/**
 * One paper on the index. The whole card is the link; the PDF is a separate
 * target inside it, so a reader who wants the file does not have to open the
 * page first.
 */
function PaperCard({ paper }: { paper: Paper }) {
  return (
    <article className="group relative flex flex-col gap-5 rounded-xl border border-border bg-card/30 p-7 transition-colors hover:border-brand/40 md:p-9">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <MonoLabel>{paper.published}</MonoLabel>
          <MonoLabel>{paper.readingTime}</MonoLabel>
        </div>
        <Heading className="text-h2">
          <Link href={`/research/${paper.slug}`} className="after:absolute after:inset-0">
            {paper.title}
          </Link>
        </Heading>
        <Lead className="max-w-none text-base">{paper.subtitle}</Lead>
      </div>

      <Prose className="max-w-2xl">{paper.blurb}</Prose>

      {paper.pullQuote ? (
        <p className="border-l-2 border-brand pl-5 text-pretty text-lg leading-relaxed font-medium text-foreground">
          {paper.pullQuote}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
        <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-brand">
          Read the paper
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
        {paper.pdf ? (
          // relative + z-10 so this escapes the card-wide link above it.
          <a
            href={paper.pdf}
            className="relative z-10 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
          >
            <Download className="size-3.5" aria-hidden="true" />
            PDF
          </a>
        ) : null}
        <MonoLabel>{paper.author}</MonoLabel>
      </div>
    </article>
  );
}

export default function ResearchPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="pt-20 pb-12 md:pt-28 md:pb-16">
          <Container className="flex max-w-3xl flex-col gap-6">
            {/* A label and the list. No rationale: anything explaining why we
                publish these is an argument aimed at us, sitting on a page
                meant for a reader who did not ask. */}
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>Research</Eyebrow>
              <Display className="text-h1">White papers.</Display>
            </Reveal>
          </Container>
        </section>

        <section className="pb-20 md:pb-28">
          <Container className="max-w-3xl">
            <div className="flex flex-col gap-6">
              {PAPERS.map((paper) => (
                <Reveal key={paper.slug}>
                  <PaperCard paper={paper} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
