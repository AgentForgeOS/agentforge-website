import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Logo } from "./logo";
import { buttonVariants } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";

const NAV = [
  { href: "/architecture", label: "How It Works" },
  { href: "/solutions", label: "Solutions" },
  { href: "/evaluating", label: "Evaluating" },
  { href: "/origin", label: "Conviction" },
];

/**
 * SiteHeader — shared across pages. Minimal by design. Desktop shows the inline
 * nav; below `sm`, <MobileNav> supplies a hamburger so every page stays reachable.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" aria-label="AgentForge — home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 sm:flex">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/access"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "px-3")}
          >
            Request access
          </a>
        </nav>

        {/* Mobile nav (hamburger + panel) */}
        <MobileNav links={NAV} className="sm:hidden" />
      </Container>
    </header>
  );
}
