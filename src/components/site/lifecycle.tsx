import { Fragment } from "react";
import { cn } from "@/lib/utils";

const PHASES = ["Detect", "Anticipate", "Decide", "Learn"] as const;

/**
 * LifecycleRail — the operational lifecycle as connected nodes
 * (Detect → Anticipate → Decide → Learn; Decide, the commercial core, is the
 * filled accent). The brand's recurring geometry. Use it sparingly — a divider,
 * a section accent, a footer mark — never as wallpaper. Understatement is the
 * point: it should register subconsciously, not announce itself.
 */
export function LifecycleRail({
  labels = false,
  className,
}: {
  labels?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("relative flex items-center", labels && "pb-6", className)}>
      {PHASES.map((phase, i) => {
        const isDecide = phase === "Decide";
        return (
          <Fragment key={phase}>
            {i > 0 ? <span className="h-px flex-1 bg-hairline-strong" /> : null}
            <span className="relative flex items-center justify-center">
              <span
                className={cn(
                  "rounded-full",
                  isDecide
                    ? "size-2 bg-brand"
                    : "size-1.5 border border-muted-foreground bg-background",
                )}
              />
              {labels ? (
                <span className="absolute top-3.5 whitespace-nowrap font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {phase}
                </span>
              ) : null}
            </span>
          </Fragment>
        );
      })}
    </div>
  );
}
