"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Container } from "./container";
import { buttonVariants } from "@/components/ui/button";

type NavLink = { href: string; label: string };

/**
 * MobileNav — the hamburger + panel that makes every page reachable below the
 * `sm` breakpoint (the desktop inline nav is hidden there). Without this, a
 * phone visitor could only ever see the homepage.
 */
export function MobileNav({ links, className }: { links: NavLink[]; className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-16 border-b border-border bg-background/95 backdrop-blur-md">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="/access"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "mt-2 justify-center")}
            >
              Request access
            </a>
          </Container>
        </div>
      )}
    </div>
  );
}
