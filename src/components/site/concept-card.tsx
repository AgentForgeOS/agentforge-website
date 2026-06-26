import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./typography";

/**
 * ConceptCard — the fundamental unit of the system. Every concept (Decision
 * Type, Architecture Layer, Enterprise Principle, Customer Story, Feature,
 * Industry) is the same card with different content. Austere and typographic:
 * a thin monochrome icon, the shared eyebrow, a restrained border-only hover.
 * No tinted chips, no lift — precision over decoration.
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

  const inner = (
    <div
      className={cn(
        "group relative flex h-full flex-col gap-5 overflow-hidden rounded-lg border border-border bg-card p-7",
        "transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        interactive && "hover:border-hairline-strong hover:bg-elevated",
        className,
      )}
    >
      {/* signature: a node tick that propagates into a signal line on hover */}
      <span
        className="pointer-events-none absolute left-0 top-0 h-px w-5 bg-brand/50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full group-hover:bg-brand/70"
        aria-hidden="true"
      />
      {Icon ? (
        <Icon
          className="size-5 text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
          strokeWidth={1.5}
          aria-hidden
        />
      ) : null}

      <div className="flex flex-col gap-2.5">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h3 className="text-base font-medium text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      </div>

      {interactive ? (
        <ArrowUpRight
          className="absolute right-6 top-6 size-4 text-muted-foreground/30 transition-colors duration-300 group-hover:text-brand"
          strokeWidth={1.75}
          aria-hidden
        />
      ) : null}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {inner}
      </Link>
    );
  }
  return inner;
}
