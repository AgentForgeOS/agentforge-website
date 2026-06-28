import { cn } from "@/lib/utils";
import { MonoLabel } from "./typography";

/**
 * Reference-architecture primitives. The Architecture page is a spec, not a
 * manifesto — these give it the AWS/Stripe register: named constructs with
 * explicit fields, and labeled flows. Same tokens, same single accent.
 */

type SpecRow = { label: string; values: string[]; accent?: boolean };

/** A canonical construct, specified: a name, a one-line summary, labeled fields. */
export function SpecCard({
  name,
  summary,
  rows,
  className,
}: {
  name: string;
  summary?: string;
  rows: SpecRow[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-5 rounded-xl border border-border bg-card p-6 md:p-8", className)}>
      <div className="flex flex-col gap-1.5">
        <MonoLabel className="text-foreground">{name}</MonoLabel>
        {summary ? (
          <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{summary}</p>
        ) : null}
      </div>
      <div className="flex flex-col gap-4">
        {rows.map((r) => (
          <div key={r.label} className="grid gap-2 sm:grid-cols-[150px_1fr] sm:gap-4">
            <span className="pt-0.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {r.label}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {r.values.map((v) => (
                <span
                  key={v}
                  className={cn(
                    "rounded-md border px-2 py-0.5 font-mono text-[11px]",
                    r.accent ? "border-brand/40 text-brand" : "border-border text-foreground/80",
                  )}
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** A labeled flow: numbered steps, governance checks, or a plain arrow sequence. */
export function Sequence({
  items,
  marker = "arrow",
  accent,
  className,
}: {
  items: string[];
  marker?: "number" | "check" | "arrow";
  accent?: string;
  className?: string;
}) {
  return (
    <ol className={cn("flex flex-wrap items-center gap-x-1.5 gap-y-3", className)}>
      {items.map((it, i) => {
        const isAccent = accent === it;
        return (
          <li key={it} className="flex items-center gap-1.5">
            {i > 0 ? (
              <span className="text-muted-foreground/50" aria-hidden>
                →
              </span>
            ) : null}
            <span
              className={cn(
                "flex items-center gap-2 rounded-lg border px-3 py-2",
                isAccent ? "border-brand/50 bg-brand/[0.05]" : "border-border bg-card",
              )}
            >
              {marker === "number" ? (
                <span className="font-mono text-[10px] text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
              ) : null}
              {marker === "check" ? (
                <span className="text-readout" aria-hidden>
                  ✓
                </span>
              ) : null}
              <span className={cn("text-sm", isAccent ? "text-brand" : "text-foreground/85")}>{it}</span>
            </span>
          </li>
        );
      })}
    </ol>
  );
}
