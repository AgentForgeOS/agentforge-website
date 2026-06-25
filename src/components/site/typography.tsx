import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/**
 * Typography primitives — engineering precision. Large headlines, short
 * paragraphs that breathe. Two weights only (regular / medium). Sizes resolve
 * to the display scale tokens in globals.css (text-display, text-h1, …).
 */

export function Display({ className, ...props }: ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "text-display font-medium text-foreground text-balance",
        className,
      )}
      {...props}
    />
  );
}

export function Heading({ className, ...props }: ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "text-h1 font-medium text-foreground text-balance",
        className,
      )}
      {...props}
    />
  );
}

export function Subheading({ className, ...props }: ComponentProps<"h3">) {
  return (
    <h3
      className={cn("text-h2 font-medium text-foreground", className)}
      {...props}
    />
  );
}

export function Eyebrow({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

export function Lead({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty",
        className,
      )}
      {...props}
    />
  );
}

export function Prose({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn("leading-relaxed text-muted-foreground text-pretty", className)}
      {...props}
    />
  );
}

/** Monospace label — technical voice (signal names, metrics, system terms). */
export function MonoLabel({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "font-mono text-xs uppercase tracking-wider text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
