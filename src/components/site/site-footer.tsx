import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./logo";
import { LifecycleRail } from "./lifecycle";

/**
 * Footer nav. Labels can differ from the top nav (as How It Works →
 * /architecture): the "Company" group gives plainly-legible entry points —
 * "Our Story" → the Conviction page, and a general Contact email.
 */
const GROUPS = [
  {
    heading: "Explore",
    links: [
      { href: "/architecture", label: "How It Works" },
      { href: "/solutions", label: "Solutions" },
      { href: "/evaluating", label: "Evaluating" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/origin", label: "Our Story" },
      { href: "mailto:info@agentforgeos.ai?subject=AgentForge%20inquiry", label: "Contact" },
      { href: "/access", label: "Request access" },
    ],
  },
];

/** SiteFooter — the mark signs off; the links give people the entry points they expect. */
export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="py-12 md:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="flex max-w-xs flex-col gap-3">
            <Logo />
            <p className="text-sm text-muted-foreground">The Decision Layer for the enterprise.</p>
          </div>
          <div className="flex gap-16 sm:gap-24">
            {GROUPS.map((g) => (
              <div key={g.heading} className="flex flex-col gap-3">
                <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-muted-foreground/60">
                  {g.heading}
                </p>
                {g.links.map((l) => {
                  const external = l.href.startsWith("mailto:") || l.href.startsWith("http");
                  const className =
                    "text-sm text-muted-foreground transition-colors hover:text-foreground";
                  return external ? (
                    <a key={l.href} href={l.href} className={className}>
                      {l.label}
                    </a>
                  ) : (
                    <Link key={l.href} href={l.href} className={className}>
                      {l.label}
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-border/60 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} AgentForgeOS, Inc.
          </p>
          <LifecycleRail className="w-40" />
        </div>
      </Container>
    </footer>
  );
}
