import { cn } from "@/lib/utils";

/**
 * LifecycleMark — the AgentForge glyph. Three operational signals converging
 * into one governed decision core. This is where the single blue accent lives;
 * it appears here and almost nowhere else. The mark is the brand's recurring
 * geometry in its most compact form (see <LifecycleRail> for the extended motif).
 */
export function LifecycleMark({ className }: { className?: string }) {
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

/** The lockup — mark + wordmark in Geist. Monochrome wordmark; the colour
 *  lives only in the mark's decision core. */
export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LifecycleMark />
      {showWordmark ? (
        <span className="text-[0.95rem] font-medium tracking-tight text-foreground">
          AgentForge
        </span>
      ) : null}
    </span>
  );
}
