import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Logo } from "./logo";
import { buttonVariants } from "@/components/ui/button";

/**
 * SiteHeader — shared across pages. Minimal by design: the mark, one page link,
 * one quiet ask. Conviction, not conversion.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" aria-label="AgentForge — home">
          <Logo />
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="/decisions"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            Decisions
          </Link>
          <Link
            href="/architecture"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            Architecture
          </Link>
          <a
            href="mailto:hello@agentforgeos.ai?subject=AgentForge%20access"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "px-3")}
          >
            Request access
          </a>
        </nav>
      </Container>
    </header>
  );
}
