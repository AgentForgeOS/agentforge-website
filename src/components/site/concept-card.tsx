import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { MonoLabel } from "./typography";

/**
 * ConceptCard — the fundamental unit of the system. Every concept (Decision
 * Type, Architecture Layer, Enterprise Principle, Customer Story, Feature,
 * Industry) is the same card with different content. Identical spacing,
 * typography, and interaction by design.
 */
type ConceptCardProps = {
  icon?: LucideIcon;
  eyebrow?: string;
  title: string;
  description: string;
  href?: string;
  className?: string;
};

export function ConceptCard({
  icon: Icon,
  eyebrow,
  title,
  description,
  href,
  className,
}: ConceptCardProps) {
  const interactive = Boolean(href);
  const showHeaderRow = Boolean(Icon) || interactive;

  const inner = (
    <div
      className={cn(
        "group relative flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6",
        "transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        interactive && "hover:-translate-y-0.5 hover:border-hairline-strong hover:bg-elevated",
        className,
      )}
    >
      {showHeaderRow ? (
        <div className="flex items-center justify-between">
          {Icon ? (
            <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-brand-muted text-brand">
              <Icon className="size-5" strokeWidth={1.75} aria-hidden />
            </span>
          ) : (
            <span />
          )}
          {interactive ? (
            <ArrowUpRight
              className="size-4 text-muted-foreground transition-colors duration-300 group-hover:text-brand"
              strokeWidth={1.75}
              aria-hidden
            />
          ) : null}
        </div>
      ) : null}

      <div className="flex flex-col gap-2">
        {eyebrow ? <MonoLabel className="text-brand/80">{eyebrow}</MonoLabel> : null}
        <h3 className="text-base font-medium text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {inner}
      </Link>
    );
  }
  return inner;
}
