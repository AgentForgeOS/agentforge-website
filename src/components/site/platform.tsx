import { Fragment } from "react";
import { cn } from "@/lib/utils";
import { LifecycleMark } from "./logo";

/**
 * PlatformLifecycle — the strategic positioning diagram. AgentForge spans the
 * whole Operational Intelligence loop (Detect → Anticipate → Decide → Learn),
 * but the commercial architecture is deliberate: Detect and Anticipate stay
 * OPEN (your existing tools, or ours); Decide and Learn are the PROPRIETARY
 * core. Decide is the flagship — the single largest accent. Built from the
 * lifecycle grammar so it reads as the same family as the rest of the system.
 * Reusable in decks, whitepapers, and the homepage.
 */
const STAGES = [
  { k: "Detect", tone: "open" },
  { k: "Anticipate", tone: "open" },
  { k: "Decide", tone: "flagship" },
  { k: "Learn", tone: "core" },
] as const;

export function PlatformLifecycle({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-xl border border-border bg-card p-6 md:p-10", className)}>
      <div className="mb-8 flex items-center justify-center gap-2">
        <LifecycleMark className="size-4" />
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          AgentForge Platform
        </span>
      </div>

      <div className="flex items-center">
        {STAGES.map((s, i) => (
          <Fragment key={s.k}>
            {i > 0 ? <span className="h-px flex-1 bg-hairline-strong" /> : null}
            <div className="flex flex-col items-center gap-2.5">
              <span
                className={cn(
                  "rounded-full",
                  s.tone === "flagship"
                    ? "size-3 bg-brand"
                    : s.tone === "core"
                      ? "size-2 bg-brand/70"
                      : "size-2 border border-muted-foreground bg-background",
                )}
              />
              <span
                className={cn(
                  "font-mono text-xs uppercase tracking-wider",
                  s.tone === "flagship" ? "text-brand" : "text-foreground/80",
                )}
              >
                {s.k}
              </span>
            </div>
          </Fragment>
        ))}
      </div>

      <div className="mt-7 grid grid-cols-2 gap-3">
        <Band label="Open" sub="Your existing tools, or ours" />
        <Band label="AgentForge Core" sub="Proprietary" accent />
      </div>
    </div>
  );
}

function Band({ label, sub, accent }: { label: string; sub: string; accent?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-lg px-4 py-3 text-center",
        accent ? "border border-brand/40 bg-brand/[0.04]" : "border border-dashed border-border",
      )}
    >
      <p
        className={cn(
          "font-mono text-[10px] uppercase tracking-[0.18em]",
          accent ? "text-brand" : "text-muted-foreground",
        )}
      >
        {label}
      </p>
      <p className="mt-1 text-xs text-muted-foreground/80">{sub}</p>
    </div>
  );
}
