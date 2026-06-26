import { cn } from "@/lib/utils";

/**
 * ContextAssembly — the Detect pipeline as a reference-architecture diagram.
 * Heterogeneous sensing and enterprise sources are normalized, then assembled
 * into one operational picture. The accent sits on Context Assembly — the layer
 * AgentForge owns. The hardware/sensing layer stays deliberately open and muted:
 * the control point is the assembly of reality, not the sensors that feed it.
 */
const SOURCES = [
  "ERP",
  "MES",
  "WMS",
  "RTLS",
  "IoT",
  "Computer Vision",
  "ML Models",
  "External Signals",
];

const PIPELINE = [
  { k: "Signal Normalization", sub: "Heterogeneous signals, one schema" },
  { k: "Context Assembly", sub: "The operational picture, continuously assembled", accent: true },
  { k: "Operational Reality", sub: "Probabilistic, current, trusted" },
  { k: "Decision Workspace", sub: "Where governed decisions are made" },
];

function Arrow() {
  return (
    <svg viewBox="0 0 12 18" className="my-1.5 h-4 w-3" fill="none" aria-hidden="true">
      <path d="M6,1 L6,16 M2,12 L6,16 L10,12" className="stroke-hairline-strong" strokeWidth="1" />
    </svg>
  );
}

export function ContextAssembly({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center rounded-xl border border-border bg-card p-6 md:p-10", className)}>
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Heterogeneous sources
      </p>
      <div className="flex max-w-xl flex-wrap items-center justify-center gap-2">
        {SOURCES.map((s) => (
          <span
            key={s}
            className="rounded-md border border-border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="flex w-full max-w-md flex-col items-center">
        {PIPELINE.map((p, i) => (
          <div key={p.k} className="flex w-full flex-col items-center">
            <Arrow />
            <div
              className={cn(
                "w-full rounded-lg border px-4 py-3 text-center",
                "accent" in p && p.accent
                  ? "border-brand/40 bg-brand/[0.05]"
                  : "border-border bg-background/40",
              )}
            >
              <div className="flex items-center justify-center gap-2">
                <span
                  className={cn(
                    "font-mono text-xs uppercase tracking-wider",
                    "accent" in p && p.accent ? "text-brand" : "text-foreground/80",
                  )}
                >
                  {p.k}
                </span>
                {"accent" in p && p.accent ? (
                  <span className="rounded border border-brand/40 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-brand">
                    AgentForge
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground">{p.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
