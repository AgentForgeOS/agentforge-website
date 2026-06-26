import { Fragment } from "react";
import { cn } from "@/lib/utils";

/**
 * AssemblyFlow — the Detect → Anticipate → Decide progression as *convergence*,
 * not a catalog. Many partial truths (the inputs) funnel into Detect, which
 * assembles them; Anticipate explores the futures; Decide governs the choice
 * (the single accent — the flagship). The technologies are deliberately small,
 * interchangeable inputs: the moat is the operating model, not any one of them.
 */
const INPUTS = ["ERP", "WMS", "MES", "RTLS", "IoT", "Vision", "ML", "Weather", "Markets"];

const STAGES = [
  { k: "Detect", sub: "Assemble reality" },
  { k: "Anticipate", sub: "Explore futures" },
  { k: "Decide", sub: "Govern the choice", accent: true },
] as const;

export function AssemblyFlow({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-xl border border-border bg-card p-6 md:p-10",
        className,
      )}
    >
      <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Partial truths
      </p>
      <div className="flex max-w-xl flex-wrap items-center justify-center gap-2">
        {INPUTS.map((i) => (
          <span
            key={i}
            className="rounded-md border border-border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
          >
            {i}
          </span>
        ))}
      </div>

      <svg viewBox="0 0 160 32" className="my-4 h-8 w-40" fill="none" aria-hidden="true">
        <path
          d="M10,2 L80,22 M44,2 L80,22 M80,2 L80,22 M116,2 L80,22 M150,2 L80,22 M80,22 L80,30"
          className="stroke-hairline-strong"
          strokeWidth="1"
        />
      </svg>

      <div className="flex w-full items-stretch justify-center gap-2 sm:gap-3">
        {STAGES.map((s, i) => (
          <Fragment key={s.k}>
            {i > 0 ? (
              <span className="self-center text-muted-foreground" aria-hidden>
                →
              </span>
            ) : null}
            <div
              className={cn(
                "flex flex-1 flex-col items-center gap-1.5 rounded-lg border px-3 py-4 text-center",
                "accent" in s && s.accent ? "border-brand/40 bg-brand/[0.04]" : "border-border",
              )}
            >
              <span
                className={cn(
                  "rounded-full",
                  "accent" in s && s.accent
                    ? "size-2.5 bg-brand"
                    : "size-2 border border-muted-foreground bg-background",
                )}
              />
              <span
                className={cn(
                  "font-mono text-xs uppercase tracking-wider",
                  "accent" in s && s.accent ? "text-brand" : "text-foreground/80",
                )}
              >
                {s.k}
              </span>
              <span className="text-[11px] leading-snug text-muted-foreground">{s.sub}</span>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
