import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Eyebrow, Heading, Lead } from "./typography";

/** Vertical rhythm. Generous by default — whitespace is intentional. */
export function Section({ className, ...props }: ComponentProps<"section">) {
  return <section className={cn("py-20 md:py-28", className)} {...props} />;
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

/** Eyebrow → heading → lead. The one canonical way to open a section. */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Heading>{title}</Heading>
      {lead ? <Lead className={align === "center" ? "mx-auto" : undefined}>{lead}</Lead> : null}
    </div>
  );
}

/** A faint hairline divider for sectioning without weight. */
export function Hairline({ className }: { className?: string }) {
  return <div className={cn("h-px w-full bg-border", className)} role="presentation" />;
}

export { Container };
