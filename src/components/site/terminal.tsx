import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Terminal — the "Decision Workspace" aesthetic. Mission control, not a
 * chatbot. Monospace, readout-green, governed. Reusable for the Decision
 * Library workspaces. Compose with TerminalFlag / TerminalHeading /
 * TerminalList / TerminalActions.
 */
export function Terminal({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border bg-[#070b12]", className)}>
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-hairline-strong" />
          <span className="size-2.5 rounded-full bg-hairline-strong" />
          <span className="size-2.5 rounded-full bg-hairline-strong" />
        </span>
        <span className="font-mono text-xs tracking-wide text-muted-foreground">{title}</span>
      </div>
      <div className="space-y-4 p-5 font-mono text-[13px] leading-relaxed">{children}</div>
    </div>
  );
}

export function TerminalFlag({ children }: { children: ReactNode }) {
  return <p className="font-medium text-warning">{children}</p>;
}

export function TerminalHeading({ children }: { children: ReactNode }) {
  return <p className="text-readout">{children}</p>;
}

export function TerminalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-1.5 text-foreground/65">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span className="text-readout/60" aria-hidden>
            ·
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function TerminalActions({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 pt-1">
      {items.map((label) => (
        <span
          key={label}
          className="rounded-md border border-border px-2.5 py-1 text-xs uppercase tracking-wide text-muted-foreground"
        >
          {label}
        </span>
      ))}
    </div>
  );
}
