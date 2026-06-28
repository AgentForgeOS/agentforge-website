import { Fragment } from "react";
import { cn } from "@/lib/utils";

/**
 * SystemMap — the one drawing of the whole operating model. Shown whole at the
 * top and at the close; shown with a single node lit at the head of each section,
 * so the page reads as successive zoom-ins on the same diagram rather than a
 * sequence of independent chapters. Operational intelligence is a loop: context →
 * decision → object → governance → learning → (patterns feed back to context).
 */
const NODES = [
  { id: "context", label: "Context", sub: "assemble reality" },
  { id: "lifecycle", label: "Lifecycle", sub: "produce the decision" },
  { id: "object", label: "Decision Object", sub: "make it durable" },
  { id: "governance", label: "Governance", sub: "authorize it" },
  { id: "learning", label: "Learning", sub: "compound it" },
] as const;

export type SystemNode = (typeof NODES)[number]["id"];

export function SystemMap({
  active,
  detailed,
  className,
}: {
  active?: SystemNode;
  detailed?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("relative rounded-xl border border-border bg-card px-4 pt-9 pb-4 md:px-6", className)}>
      {/* the loop — learning feeds patterns back to context */}
      <div
        className="pointer-events-none absolute inset-x-6 top-3.5 h-4 rounded-t-lg border-x border-t border-dashed border-hairline-strong"
        aria-hidden
      />
      <span className="absolute left-1/2 top-1.5 -translate-x-1/2 whitespace-nowrap bg-card px-2 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
        ↺ learning feeds back
      </span>

      <div className="flex items-stretch justify-between gap-1 sm:gap-2">
        {NODES.map((n, i) => {
          const on = active === n.id;
          return (
            <Fragment key={n.id}>
              {i > 0 ? (
                <span className="self-center text-xs text-muted-foreground/40" aria-hidden>
                  →
                </span>
              ) : null}
              <span
                className={cn(
                  "flex flex-1 flex-col items-center justify-center gap-0.5 rounded-lg border px-1.5 py-2 text-center",
                  on ? "border-brand/50 bg-brand/[0.06]" : "border-border",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-[10px] uppercase tracking-wide sm:text-[11px]",
                    on ? "text-brand" : "text-foreground/60",
                  )}
                >
                  {n.label}
                </span>
                {detailed ? (
                  <span className="text-[10px] leading-tight text-muted-foreground">{n.sub}</span>
                ) : null}
              </span>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
