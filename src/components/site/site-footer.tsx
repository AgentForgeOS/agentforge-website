import { Container } from "./container";
import { Logo } from "./logo";
import { LifecycleRail } from "./lifecycle";

/** SiteFooter — quiet. The motif signs off. Shared across pages. */
export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="text-sm text-muted-foreground">The Decision Layer for the enterprise.</p>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <LifecycleRail className="w-40" />
          <p className="font-mono text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} AgentForgeOS, Inc.
          </p>
        </div>
      </Container>
    </footer>
  );
}
