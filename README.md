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
- **Brand** — `Logo` / `LifecycleMark` (operational signals converging into a decision core) and `LifecycleRail` (the Detect → Anticipate → Decide → Learn motif). The recurring node-and-connector geometry that makes the system recognizably AgentForge — in the logo, dividers, every section eyebrow, and the signal line a `ConceptCard` traces on hover.
- **Illustrations** — `IllLifecycle`, `IllConvergence`, `IllDecisionObject`, `IllContext`, `IllPolicyGates`, `IllMemory`: six canonical diagrams built from one grammar (signal nodes, connectors, a single accented decision; the recurring idea is convergence → decision → radiate back). Reusable across site, decks, whitepapers, and investor materials.
- **Typography** — `Display`, `Heading`, `Subheading`, `Eyebrow`, `Lead`, `Prose`, `MonoLabel`
- **Layout** — `Container`, `Section`, `SectionHeader`, `Hairline`
- **ConceptCard** — the fundamental unit. Every concept (decision type, architecture layer, principle, customer story, feature, industry) is the _same_ card with different content.
- **Terminal** — the "Decision Workspace" aesthetic (mission control, monospace, readout-green): `Terminal`, `TerminalFlag`, `TerminalHeading`, `TerminalList`, `TerminalActions`
- **Motion primitives** — `Reveal` (fade+rise on scroll) and `Stagger` / `StaggerItem` (sequence children). Both use the shared curve + threshold.
- **Primitives** — `src/components/ui/*` (Button, Card, Badge, Separator, Accordion, Tabs, Tooltip).

### Reference
`/design-system` renders every token and component — the living spec and the verification surface. `/` redirects to it (no marketing homepage yet).

## Rules
- **One accent — blue (`#3F80E8`), forever.** Never add a second. (Gold was considered and rejected to keep the system single-accent.)
- **The lifecycle motif is the signature.** Use the node-and-connector geometry sparingly — logo, dividers, the signal line a card traces on hover — never as wallpaper. It should register subconsciously, not announce itself.
- **Terminal = runtime.** Use the Decision Workspace only to show runtime reasoning — evidence, recommendations, policy evaluation, decision objects. **Never for marketing.** That restraint is what keeps it special.
- **One illustration grammar.** Every diagram uses the same atoms (signal nodes, connectors, a single accented decision); the recurring idea is convergence → decision → radiate-back. Never clip-art, stock diagrams, or Lucidchart.
- **Everything is a Decision Object.** The product's core idea, reflected in the UI — every concept is a reusable, governed object ("one card, every concept").
- **Never reduce the whitespace.** Enterprise buyers want breathing room.
- **Mission control, not a chatbot.** The mantra for every screen — if it doesn't feel like that, redesign it.
- Reuse components aggressively; minimize bespoke styles. Motion explains relationships — never decorates. Never invent layouts inconsistent with the system.

## Run

```bash
npm run dev     # http://localhost:3000  → /design-system
npm run build   # type-check + production build
```

## Notes
- Standalone project, decoupled from the product app (whose Next.js is a custom fork). Deploy target: Vercel → `agentforgeos.ai`.
- Wordmark is "AgentForge" per the source docs; the public-brand name (AgentForge vs AgentForgeOS) is still open and swappable in one place.
- **Next:** build pages (homepage manifesto, Decision Library, Architecture) composed _only_ from these primitives — no new tokens or layouts.
