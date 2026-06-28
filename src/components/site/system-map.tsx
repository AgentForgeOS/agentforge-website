import { Fragment } from "react";
import { cn } from "@/lib/utils";

/**
 * SystemMap — the one drawing of the whole operating model, as a closed LOOP,
 * not a pipeline. AgentForge is a feedback system: a decision is produced,
 * governed, executed, and its outcome learned from — and what is learned feeds
 * the next decision. Shown whole at the top and the close; shown with one node
 * lit at the head of each section, so the page reads as zoom-ins on one diagram.
 *
 *   Context → Decide → Decision Object → Govern
 *      ▲                                    │ execute
 *   Patterns ← Learn ← Outcome ← Execute ◀──┘
 */
export type SystemNode = "context" | "decide" | "object" | "govern" | "learn";

const TOP: { id?: SystemNode; label: string }[] = [
  { id: "context", label: "Context" },
  { id: "decide", label: "Decide" },
  { id: "object", label: "Decision Object" },
  { id: "govern", label: "Govern" },
];

const BOTTOM: { id?: SystemNode; label: string }[] = [
  { id: "learn", label: "Patterns" },
  { id: "learn", label: "Learn" },
  { label: "Outcome" },
  { label: "Execute" },
];

function Node({ label, on }: { label: string; on: boolean }) {
  return (
    <span
      className={cn(
        "flex flex-1 items-center justify-center rounded-lg border px-1.5 py-2 text-center font-mono text-[10px] uppercase tracking-wide sm:text-[11px]",
        on ? "border-brand/50 bg-brand/[0.06] text-brand" : "border-border text-foreground/60",
      )}
    >
      {label}
    </span>
  );
}

const Arrow = ({ d }: { d: string }) => (
  <span className="shrink-0 self-center px-0.5 text-xs text-muted-foreground/40" aria-hidden>
    {d}
  </span>
);

export function SystemMap({ active, className }: { active?: SystemNode; className?: string }) {
  return (
    <div className={cn("rounded-xl border border-border bg-card p-4 md:p-5", className)}>
      <div className="flex items-stretch gap-1">
        {TOP.map((n, i) => (
          <Fragment key={n.label}>
            {i > 0 ? <Arrow d="→" /> : null}
            <Node label={n.label} on={!!active && n.id === active} />
          </Fragment>
        ))}
      </div>

      <div className="flex items-center justify-between px-1 py-1.5">
        <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground/60">
          ↑ feeds the next decision
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground/60">
          execute ↓
        </span>
      </div>

      <div className="flex items-stretch gap-1">
        {BOTTOM.map((n, i) => (
          <Fragment key={n.label}>
            {i > 0 ? <Arrow d="←" /> : null}
            <Node label={n.label} on={!!active && n.id === active} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
