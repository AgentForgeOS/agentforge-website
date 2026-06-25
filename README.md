# AgentForge — Design System

A reusable, premium-enterprise design system (Apple / Palantir / Stripe / Linear / Vercel — _not_ SaaS templates). This repo is the **system**, not the website: tokens + primitives that the marketing pages will later be composed from. No marketing pages are built yet, by design.

The design system translates the brand's _feeling_ spec (the Brand Design System doc) and the narrative (the Website Blueprint) into concrete, enforceable tokens.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme`) — tokens live in `src/app/globals.css`
- **shadcn/ui** (Base UI primitives) — `src/components/ui/*`
- **Framer Motion** (`motion`) — `src/lib/motion.ts` + motion primitives
- **Geist** Sans/Mono · **lucide-react** (outline icons)

## The system

### Tokens — `src/app/globals.css`
Obsidian-dark, **one** accent. Components never hardcode color; everything resolves through a token utility.

| Group | Tokens |
|---|---|
| Surfaces | `background` `#090D16` · `card` · `elevated` · `border` · `hairline-strong` |
| Ink | `foreground` · `muted-foreground` |
| Accent | `brand` `#3F80E8` (a calmer, desaturated azure — deliberately _not_ default blue-500) · `brand-muted` |
| Semantic | `success` · `warning` · `error` · `readout` (terminal green) |
| Type | display scale (`text-display` / `text-h1` / `text-h2` / `text-eyebrow`), Geist sans + mono |
| Motion | one curve (`--ease-out-expo`), four durations (150 / 250 / 400 / 600ms) |

Use as Tailwind utilities: `bg-background`, `bg-card`, `text-brand`, `border-border`, `text-readout`, `text-display`, etc. shadcn primitives read the same contract (`--primary` = brand), so they're themed automatically.

### Components — `src/components/site/*`
- **Typography** — `Display`, `Heading`, `Subheading`, `Eyebrow`, `Lead`, `Prose`, `MonoLabel`
- **Layout** — `Container`, `Section`, `SectionHeader`, `Hairline`
- **ConceptCard** — the fundamental unit. Every concept (decision type, architecture layer, principle, customer story, feature, industry) is the _same_ card with different content.
- **Terminal** — the "Decision Workspace" aesthetic (mission control, monospace, readout-green): `Terminal`, `TerminalFlag`, `TerminalHeading`, `TerminalList`, `TerminalActions`
- **Motion primitives** — `Reveal` (fade+rise on scroll) and `Stagger` / `StaggerItem` (sequence children). Both use the shared curve + threshold.
- **Primitives** — `src/components/ui/*` (Button, Card, Badge, Separator, Accordion, Tabs, Tooltip).

### Reference
`/design-system` renders every token and component — the living spec and the verification surface. `/` redirects to it (no marketing homepage yet).

## Rules (from the brand doc)
- Never introduce a new color without approval. One accent.
- Reuse components aggressively; minimize bespoke styles.
- Whitespace over density · clarity over decoration · consistency over novelty.
- Motion explains relationships — never decorates.
- Never invent page layouts inconsistent with the system.

## Run

```bash
npm run dev     # http://localhost:3000  → /design-system
npm run build   # type-check + production build
```

## Notes
- Standalone project, decoupled from the product app (whose Next.js is a custom fork). Deploy target: Vercel → `agentforgeos.ai`.
- Wordmark is "AgentForge" per the source docs; the public-brand name (AgentForge vs AgentForgeOS) is still open and swappable in one place.
- **Next:** build pages (homepage manifesto, Decision Library, Architecture) composed _only_ from these primitives — no new tokens or layouts.
