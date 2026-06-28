"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Terminal,
  TerminalFlag,
  TerminalHeading,
  TerminalList,
  TerminalActions,
} from "./terminal";
import { DEEP_BY_SLUG } from "@/lib/solutions-data";

/**
 * WorkspaceTabs — the closing realization, made visual. The Decision Workspace
 * is the recurring face of the platform; here the five operational worlds the
 * reader just toured become tabs on ONE workspace. Click through and the window
 * never changes — only the decision inside it does. That is the platform, felt
 * rather than asserted: this was not five products. It was one operating system.
 */
const WORLDS = [
  { slug: "demand-allocation", tab: "Inventory" },
  { slug: "supplier-disruption", tab: "Supplier" },
  { slug: "trailer-dwell", tab: "Yard" },
  { slug: "wip-bottleneck", tab: "Manufacturing" },
  { slug: "claims-adjudication", tab: "Claims" },
];

export function WorkspaceTabs({ className }: { className?: string }) {
  const [active, setActive] = useState(0);
  const t = DEEP_BY_SLUG[WORLDS[active].slug].terminal;

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Operational world">
        {WORLDS.map((w, i) => (
          <button
            key={w.slug}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={cn(
              "rounded-lg border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors",
              i === active
                ? "border-brand/50 bg-brand/[0.06] text-brand"
                : "border-border text-muted-foreground hover:text-foreground",
            )}
          >
            {w.tab}
          </button>
        ))}
      </div>

      <Terminal title={t.title} className="w-full">
        <TerminalFlag>{t.flag}</TerminalFlag>
        <div className="space-y-2">
          <TerminalHeading>Evidence assembled</TerminalHeading>
          <TerminalList items={t.evidence} />
        </div>
        <div className="space-y-2">
          <TerminalHeading>{t.recHeading}</TerminalHeading>
          <p className="text-foreground/55">{t.policy}</p>
        </div>
        <TerminalActions items={t.actions} />
      </Terminal>
    </div>
  );
}
