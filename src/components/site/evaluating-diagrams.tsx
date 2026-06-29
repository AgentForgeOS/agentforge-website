import { cn } from "@/lib/utils";

/**
 * StackDiagram — answers "overlay or control point?" AgentForge sits ABOVE the
 * systems of record and awareness, reads across both, makes the governed
 * decision, and hands execution back down. The systems stay; the decision is
 * the new, durable thing.
 */
export function StackDiagram({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-xl border border-border bg-card p-6 md:p-10", className)}>
      <div className="rounded-lg border border-brand/40 bg-brand/[0.05] px-5 py-4 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">AgentForge · Decision Layer</p>
        <p className="mt-1 text-xs text-muted-foreground">assemble context · decide · govern · learn</p>
      </div>

      <div className="flex items-center justify-between px-2 py-2.5">
        <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground/60">↑ reads across</span>
        <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground/60">governed decision ↓</span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-background/40 px-4 py-4 text-center">
          <p className="font-mono text-[11px] uppercase tracking-wider text-foreground/80">Systems of Record</p>
          <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">ERP · CRM · WMS — the truth, and the state</p>
        </div>
        <div className="rounded-lg border border-border bg-background/40 px-4 py-4 text-center">
          <p className="font-mono text-[11px] uppercase tracking-wider text-foreground/80">Systems of Awareness</p>
          <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">sensing · telemetry · BI — what's happening now</p>
        </div>
      </div>

      <p className="mt-5 text-center text-xs leading-relaxed text-muted-foreground">
        Your systems stay. AgentForge decides across them — and hands execution back to the
        systems that already own it.
      </p>
    </div>
  );
}

function Dial({ label, opts }: { label: string; opts: string[] }) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-border bg-background/40 p-4">
      <span className="font-mono text-[10px] uppercase tracking-wider text-foreground/80">{label}</span>
      <div className="flex flex-wrap gap-1.5">
        {opts.map((o) => (
          <span key={o} className="rounded border border-border px-2 py-0.5 text-[11px] text-muted-foreground">
            {o}
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * GovernanceBoundary — answers "can I run this on my terms?" AgentForge adapts
 * INSIDE the enterprise's boundary; deployment, model, approval, and audit are
 * the enterprise's dials, not the product's limitations.
 */
export function GovernanceBoundary({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-xl border border-border bg-card p-6 md:p-10", className)}>
      <p className="mb-5 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Your enterprise · your governance
      </p>

      <div className="mx-auto mb-6 w-fit rounded-lg border border-brand/40 bg-brand/[0.05] px-5 py-2.5">
        <span className="font-mono text-[11px] uppercase tracking-wider text-brand">AgentForge adapts within it</span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Dial label="Deployment" opts={["SaaS", "Your cloud", "Private VPC", "Hybrid"]} />
        <Dial label="Model" opts={["Managed LLM", "Private model"]} />
        <Dial label="Human approval" opts={["Required above your threshold"]} />
        <Dial label="Audit" opts={["Every decision · immutable"]} />
      </div>

      <p className="mt-5 text-center text-xs leading-relaxed text-muted-foreground">
        Deployment, model, and governance are your decisions — implementation choices the
        platform adapts to, not limitations it imposes.
      </p>
    </div>
  );
}
