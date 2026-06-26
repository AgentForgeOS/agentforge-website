import {
  Activity,
  Boxes,
  Building2,
  GitBranch,
  Layers,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/site/container";
import { Section, SectionHeader } from "@/components/site/section";
import { Logo, LifecycleMark } from "@/components/site/logo";
import { LifecycleRail } from "@/components/site/lifecycle";
import {
  Display,
  Heading,
  Subheading,
  Eyebrow,
  Lead,
  Prose,
  MonoLabel,
} from "@/components/site/typography";
import { ConceptCard } from "@/components/site/concept-card";
import {
  Terminal,
  TerminalFlag,
  TerminalHeading,
  TerminalList,
  TerminalActions,
} from "@/components/site/terminal";
import { Reveal } from "@/components/site/reveal";
import { Stagger, StaggerItem } from "@/components/site/stagger";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const surfaceTokens = [
  { name: "background", value: "#090D16", note: "obsidian — page" },
  { name: "card", value: "#0E1421", note: "raised surface" },
  { name: "elevated", value: "#131A29", note: "overlay / hover" },
  { name: "border", value: "#1C2333", note: "hairline" },
  { name: "hairline-strong", value: "#2A3346", note: "emphasis edge" },
];

const inkTokens = [
  { name: "foreground", value: "#E7EBF3", note: "primary text" },
  { name: "muted-foreground", value: "#9AA3B7", note: "secondary text" },
];

const accentTokens = [
  { name: "brand", value: "#3F80E8", note: "the single accent" },
  { name: "brand-muted", value: "#14233F", note: "faint blue fill" },
];

const semanticTokens = [
  { name: "success", value: "#34B981", note: "muted green" },
  { name: "warning", value: "#E0A23B", note: "amber" },
  { name: "error", value: "#E5575A", note: "muted red" },
  { name: "readout", value: "#52C08C", note: "terminal" },
];

const archetypes = [
  {
    icon: GitBranch,
    eyebrow: "Decision type",
    title: "Inventory purchase decision",
    description:
      "Reorder now, adjust volumes, or alter supplier commitments — balanced against working capital and SLA risk.",
  },
  {
    icon: Layers,
    eyebrow: "Architecture layer",
    title: "Decide MCP",
    description:
      "Transforms operational awareness into governed choices, gated against corporate risk and compliance thresholds.",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Enterprise principle",
    title: "Deterministic gating",
    description:
      "Every recommendation is checked against active policies before it surfaces — structurally incapable of violating business rules.",
  },
  {
    icon: Building2,
    eyebrow: "Customer story",
    title: "Auto warranty adjudication",
    description:
      "Assembles coverage, VIN history, and shop behavior into one brief so adjusters decide in seconds, not 40 minutes.",
  },
  {
    icon: Boxes,
    eyebrow: "Feature",
    title: "Institutional memory",
    description:
      "Each closed decision becomes a permanent, queryable Decision Object — the organization compounds with every choice.",
  },
  {
    icon: Activity,
    eyebrow: "Industry",
    title: "Healthcare logistics",
    description:
      "Optimizing high-value medical supply storage and life-safety asset tiers across regional hospital networks.",
  },
];

const TextSpec = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-2 py-5">
    <MonoLabel>{label}</MonoLabel>
    {children}
  </div>
);

const Swatch = ({
  name,
  value,
  note,
}: {
  name: string;
  value: string;
  note: string;
}) => (
  <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
    <span
      className="size-9 shrink-0 rounded-md border border-hairline-strong"
      style={{ background: `var(--${name})` }}
    />
    <div className="min-w-0">
      <p className="truncate font-mono text-xs text-foreground">{name}</p>
      <p className="truncate font-mono text-[11px] text-muted-foreground">
        {value} · {note}
      </p>
    </div>
  </div>
);

export default function DesignSystemPage() {
  return (
    <main className="min-h-dvh">
      {/* Masthead */}
      <Section className="pt-24 pb-16 md:pt-36 md:pb-20">
        <Container>
          <Reveal className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Logo />
              <Badge variant="outline" className="font-mono text-[11px] font-normal">
                Design system
              </Badge>
            </div>
            <Display className="max-w-3xl">
              The reusable system, not a page.
            </Display>
            <Lead>
              Obsidian canvas, a single accent, surgical alignment. Every concept lives in
              a reusable card; motion explains, never decorates. The reference below is the
              source of truth — components compose only from these tokens.
            </Lead>
          </Reveal>
        </Container>
      </Section>

      {/* Identity / motif */}
      <Section className="py-16 md:py-24">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeader
              eyebrow="Identity / Motif"
              title="One geometry, everywhere"
              lead="The mark is the message: operational signals converging into a single governed decision. The same node-and-connector geometry recurs as the brand's quiet signature — in the logo, in dividers, in the line that travels a card on hover. Understated, never decorative."
            />
          </Reveal>
          <div className="grid items-center gap-10 rounded-xl border border-border bg-card p-8 md:grid-cols-[auto_1fr] md:gap-14 md:p-12">
            <LifecycleMark className="size-20" />
            <div className="flex flex-col gap-7">
              <LifecycleRail labels />
              <p className="text-sm leading-relaxed text-muted-foreground">
                Detect → Anticipate → <span className="text-foreground">Decide</span> → Learn.
                The decision core is the one place the accent appears at full strength.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Color */}
      <Section className="py-16 md:py-24">
        <Container className="flex flex-col gap-8">
          <Reveal>
            <SectionHeader
              eyebrow="Foundations / Color"
              title="One accent on obsidian"
              lead="No rainbow interfaces. Surfaces step from obsidian to slate; the brand blue is the only chroma that carries meaning. Semantics stay muted."
            />
          </Reveal>
          <Reveal delay={0.05} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-3">
              <MonoLabel>Surfaces</MonoLabel>
              {surfaceTokens.map((t) => (
                <Swatch key={t.name} {...t} />
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <MonoLabel>Ink</MonoLabel>
              {inkTokens.map((t) => (
                <Swatch key={t.name} {...t} />
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <MonoLabel>Accent</MonoLabel>
              {accentTokens.map((t) => (
                <Swatch key={t.name} {...t} />
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <MonoLabel>Semantic</MonoLabel>
              {semanticTokens.map((t) => (
                <Swatch key={t.name} {...t} />
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Typography */}
      <Section className="py-16 md:py-24">
        <Container className="flex flex-col gap-8">
          <Reveal>
            <SectionHeader
              eyebrow="Foundations / Type"
              title="Geist — engineering precision"
              lead="Large, tight-tracked headlines. Short paragraphs that breathe. Two weights only. Mono carries the technical voice."
            />
          </Reveal>
          <Reveal delay={0.05} className="divide-y divide-border rounded-xl border border-border bg-card px-6">
            <TextSpec label="Display · clamp 44–72">
              <Display>Operational decision intelligence</Display>
            </TextSpec>
            <TextSpec label="Heading · clamp 32–48">
              <Heading>The decision layer that compounds</Heading>
            </TextSpec>
            <TextSpec label="Subheading · clamp 24–32">
              <Subheading>Detect, anticipate, decide, learn</Subheading>
            </TextSpec>
            <TextSpec label="Eyebrow · tracked uppercase">
              <Eyebrow>Phase 02 — the decision library</Eyebrow>
            </TextSpec>
            <TextSpec label="Lead · 18px muted">
              <Lead>
                AgentForge governs high-stakes operational decisions, assembling evidence
                from fragmented systems into a single, explainable brief.
              </Lead>
            </TextSpec>
            <TextSpec label="Prose · 16px muted">
              <Prose className="max-w-2xl">
                Every recommendation traces to the signal or record that produced it. The
                human retains final authority; the system supplies reasoning, lineage, and
                safety rails.
              </Prose>
            </TextSpec>
            <TextSpec label="Mono label · technical">
              <MonoLabel>SIG · transit_extension · confidence 0.91</MonoLabel>
            </TextSpec>
          </Reveal>
        </Container>
      </Section>

      {/* Cards */}
      <Section className="py-16 md:py-24">
        <Container className="flex flex-col gap-8">
          <Reveal>
            <SectionHeader
              eyebrow="Components / Cards"
              title="One card, every concept"
              lead="Decision type, architecture layer, principle, customer story, feature, industry — identical structure, spacing, and interaction. Hover to reveal the affordance."
            />
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {archetypes.map((a) => (
              <StaggerItem key={a.title} className="h-full">
                <ConceptCard {...a} href="#" />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Decision Workspace / Terminal */}
      <Section className="py-16 md:py-24">
        <Container className="grid items-start gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Components / Workspace"
              title="Mission control, not a chatbot"
              lead="The Decision Workspace renders a governed exception: anomaly, evaluated evidence, proposed action, and the human's authority — in the product's monospace, readout-green voice."
            />
          </Reveal>
          <Reveal delay={0.05}>
            <Terminal title="agentforge · inventory purchase specification">
              <TerminalFlag>⚑ HIGH-CONFIDENCE EXCEPTION FLAGGED</TerminalFlag>
              <p className="text-foreground/70">
                Anomaly: transit extension risks regional safety-stock shortage
              </p>
              <TerminalHeading>✓ EVALUATED EVIDENCE</TerminalHeading>
              <TerminalList
                items={[
                  "Sales velocity: inbound run-rate +18% MoM",
                  "Pipeline status: port processing extended ~14 days",
                  "Business rules: target volume matches tier discount",
                ]}
              />
              <TerminalHeading>◆ PROPOSED ACTION</TerminalHeading>
              <p className="text-foreground/70">
                Authorize 30% supplier deposit to secure production, while routing an agile
                near-shore backup order to bridge the transit gap.
              </p>
              <TerminalActions
                items={["Approve action", "Modify path", "Route to human review"]}
              />
            </Terminal>
          </Reveal>
        </Container>
      </Section>

      {/* Controls + progressive disclosure */}
      <Section className="py-16 md:py-24">
        <Container className="flex flex-col gap-8">
          <Reveal>
            <SectionHeader
              eyebrow="Components / Controls"
              title="Quiet, consistent, accessible"
              lead="shadcn primitives re-themed to the tokens. Progressive disclosure over density — reveal through interaction."
            />
          </Reveal>

          <Reveal delay={0.05} className="grid gap-4 lg:grid-cols-2">
            <div className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6">
              <MonoLabel>Buttons</MonoLabel>
              <div className="flex flex-wrap items-center gap-3">
                <Button>Request a discussion</Button>
                <Button variant="secondary">Explore architecture</Button>
                <Button variant="outline">Decision library</Button>
                <Button variant="ghost">Learn more</Button>
              </div>
              <MonoLabel>Badges</MonoLabel>
              <div className="flex flex-wrap items-center gap-2">
                <Badge>Governed</Badge>
                <Badge variant="secondary">Advisory</Badge>
                <Badge variant="outline">HITL</Badge>
                <Badge variant="destructive">Exception</Badge>
              </div>
              <MonoLabel>Tooltip</MonoLabel>
              <div>
                <Tooltip>
                  <TooltipTrigger className="inline-flex items-center rounded-md border border-border bg-card px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-accent">
                    Confidence 0.91
                  </TooltipTrigger>
                  <TooltipContent>
                    Decomposed: evidence 0.94 · pattern 0.86 · policy 1.0
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>

            <div className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6">
              <MonoLabel>Tabs</MonoLabel>
              <Tabs defaultValue="detect">
                <TabsList>
                  <TabsTrigger value="detect">Detect</TabsTrigger>
                  <TabsTrigger value="anticipate">Anticipate</TabsTrigger>
                  <TabsTrigger value="decide">Decide</TabsTrigger>
                </TabsList>
                <TabsContent value="detect" className="pt-2">
                  <Prose className="text-sm">
                    Assembles the best available representation of operational reality from
                    diverse enterprise and physical-world signals.
                  </Prose>
                </TabsContent>
                <TabsContent value="anticipate" className="pt-2">
                  <Prose className="text-sm">
                    Models possible future states with associated risks and confidence,
                    interfacing with planning and optimization software.
                  </Prose>
                </TabsContent>
                <TabsContent value="decide" className="pt-2">
                  <Prose className="text-sm">
                    Transforms awareness into governed choices — evidence, constraints, and
                    human judgment, bounded by policy.
                  </Prose>
                </TabsContent>
              </Tabs>

              <Separator />

              <MonoLabel>Accordion</MonoLabel>
              <Accordion>
                <AccordionItem value="1">
                  <AccordionTrigger>Open architecture &amp; integration</AccordionTrigger>
                  <AccordionContent>
                    Vendor-neutral Module Control Protocols abstract ingestion away from
                    underlying infrastructure — ERPs, WMS, TMS, telemetry.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="2">
                  <AccordionTrigger>Complete audit trail</AccordionTrigger>
                  <AccordionContent>
                    Every exception, alternative, and human verification is written to a
                    persistent, structured Decision Object for compliance review.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Motion */}
      <Section className="py-12 md:py-20">
        <Container className="flex flex-col gap-8">
          <Reveal>
            <SectionHeader
              eyebrow="Foundations / Motion"
              title="One curve, four durations"
              lead="Expo ease-out, 150–600ms. Reveal on scroll, stagger to assemble. Everything you scrolled past used these primitives."
            />
          </Reveal>
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {[
              { k: "fast", v: "150ms" },
              { k: "base", v: "250ms" },
              { k: "slow", v: "400ms" },
              { k: "deliberate", v: "600ms" },
            ].map((d) => (
              <StaggerItem key={d.k}>
                <div className="rounded-lg border border-border bg-card p-5">
                  <p className="font-mono text-2xl text-foreground">{d.v}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    duration-{d.k}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section className="py-12">
        <Container className="flex flex-col gap-8 border-t border-border pt-12">
          <LifecycleRail className="max-w-xs opacity-70" />
          <p className="font-mono text-xs text-muted-foreground">
            AgentForge · obsidian · one accent · mission control, not a chatbot
          </p>
        </Container>
      </Section>
    </main>
  );
}
