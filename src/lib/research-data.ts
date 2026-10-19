/**
 * The research index.
 *
 * Adding a paper is an entry here plus a route under /research/<slug>. The
 * index renders from this list, so nothing else needs touching.
 *
 * `blurb` is the paragraph on the index card and carries the argument, not a
 * summary of the structure — someone scanning the list decides from it whether
 * the paper is worth their twenty minutes.
 */

export type Paper = {
  slug: string;
  title: string;
  subtitle: string;
  blurb: string;
  author: string;
  published: string;
  readingTime: string;
  pdf?: string;
  /** Pulled out as the card's closing line. One sentence, the sharpest one. */
  pullQuote?: string;
};

export const PAPERS: Paper[] = [
  {
    slug: "organizational-memory",
    title: "Beyond the Algorithm",
    subtitle:
      "How memory knowledge graphs can preserve and scale human judgment in non-deterministic enterprise decisions.",
    blurb:
      "Many of the decisions that create the most value have no single correct answer. A planner committing to next season's buy, a partner shaping a proposal, a lawyer choosing an approach — each works from incomplete evidence, precedent and preference. Organizations preserve what was decided and discard the reasoning that produced it, so every few years they pay again to learn what they already knew. This paper argues that a memory knowledge graph should hold the parts conventional systems drop: the situation, the evidence on both sides, the assumptions, the dissent, the alternatives considered, and what happened afterward. It also argues that memory alone is not enough.",
    author: "Nish Parikh",
    published: "October 2026",
    readingTime: "14 min read",
    pdf: "/papers/beyond-the-algorithm-agentforgeos.pdf",
    pullQuote:
      "Memory without expectation is an archive. Expectation without memory is an alert.",
  },
];
