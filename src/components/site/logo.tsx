import { cn } from "@/lib/utils";

/**
 * DecisionMark — the AgentForgeOS mark. Evidence arrives from several sources,
 * converges, and terminates in one ringed, governed decision. The flow reads
 * left to right: the same direction as the wordmark, and the same direction as
 * <LifecycleRail>. The ring is what distinguishes a decision from a data point.
 *
 * Blue appears twice in the brand and both times it means *decision* — here in
 * the core, and on the OS of the wordmark in the standalone lockup. Nowhere else.
 *
 * Adopted 2026-09-24, replacing a three-signal centripetal glyph that converged
 * inward and read as a generic network icon. That glyph survives as
 * <CompactMark> for sizes this one cannot resolve at.
 */
export function DecisionMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="3.5 21.5 99.5 99.5"
      fill="none"
      className={cn("size-8", className)}
      aria-hidden="true"
    >
      <g className="stroke-hairline-strong" strokeWidth="2.6">
        <line x1="28" y1="34" x2="78" y2="62" />
        <line x1="22" y1="62" x2="78" y2="62" />
        <line x1="28" y1="92" x2="78" y2="62" />
        <line x1="48" y1="110" x2="78" y2="62" />
      </g>
      <g className="fill-background stroke-muted-foreground" strokeWidth="2.6">
        <circle cx="28" cy="34" r="6.5" />
        <circle cx="22" cy="62" r="6.5" />
        <circle cx="28" cy="92" r="6.5" />
        <circle cx="48" cy="110" r="5" />
      </g>
      <circle
        cx="78"
        cy="62"
        r="13"
        className="fill-background stroke-brand"
        strokeWidth="2.8"
      />
      <circle cx="78" cy="62" r="6" className="fill-brand" />
    </svg>
  );
}

/**
 * CompactMark — the small-size variant. Three signals converging on a filled
 * core, in a square box.
 *
 * <DecisionMark> carries ten elements and sub-pixel strokes below roughly 32px,
 * where it degrades into a smudge. Use this instead at ≤24px: inline labels,
 * the favicon, anywhere the mark is an annotation rather than the brand.
 * Same vocabulary — outlined nodes, hairline connectors, one blue core — so the
 * two read as the same family at two densities.
 */
export function CompactMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cn("size-7", className)}
      aria-hidden="true"
    >
      <g className="stroke-hairline-strong" strokeWidth="1.25">
        <line x1="16" y1="6.5" x2="16" y2="16" />
        <line x1="7" y1="23.5" x2="16" y2="16" />
        <line x1="25" y1="23.5" x2="16" y2="16" />
      </g>
      <g className="fill-background stroke-muted-foreground" strokeWidth="1.25">
        <circle cx="16" cy="6.5" r="2.3" />
        <circle cx="7" cy="23.5" r="2.3" />
        <circle cx="25" cy="23.5" r="2.3" />
      </g>
      <circle cx="16" cy="16" r="3.6" className="fill-brand" />
    </svg>
  );
}

/** Retained so existing small-size callers keep working. Prefer <CompactMark>. */
export const LifecycleMark = CompactMark;

/** The lockup — mark + wordmark in Geist. Monochrome wordmark on the site; the
 *  blue OS treatment belongs to the standalone lockup asset, not the nav bar. */
export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <DecisionMark className="size-7" />
      {showWordmark ? (
        <span className="text-[0.95rem] font-medium tracking-tight text-foreground">
          AgentForgeOS
        </span>
      ) : null}
    </span>
  );
}
