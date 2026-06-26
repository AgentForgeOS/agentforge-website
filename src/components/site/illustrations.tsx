import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * AgentForge illustration language.
 *
 * Six canonical diagrams, all built from ONE shared grammar — signal nodes,
 * connectors, and a single accented decision core. The recurring idea is
 * convergence: signals/evidence/options converge into a governed decision,
 * which then radiates back into the system through learning.
 *
 * Rules (so future illustrations stay one family):
 *   • Only these atoms: SignalNode, MemoryNode, DecisionNode, Link.
 *   • The accent appears once per diagram — on the decision.
 *   • Line-art only. No fills besides node interiors, no gradients, no glow.
 *   • Geometry explains the concept; captions name it. Never label inside.
 */

const VIEW = "0 0 220 132";

const SignalNode = ({ cx, cy }: { cx: number; cy: number }) => (
  <circle cx={cx} cy={cy} r={4.5} className="fill-background stroke-muted-foreground" strokeWidth={1.5} />
);
const MemoryNode = ({ cx, cy }: { cx: number; cy: number }) => (
  <circle cx={cx} cy={cy} r={4} className="fill-background stroke-border" strokeWidth={1.5} />
);
const DecisionNode = ({ cx, cy }: { cx: number; cy: number }) => (
  <circle cx={cx} cy={cy} r={6} className="fill-brand" />
);
const Link = ({ d, faint }: { d: string; faint?: boolean }) => (
  <path
    d={d}
    fill="none"
    strokeWidth={1.5}
    className={faint ? "stroke-border" : "stroke-hairline-strong"}
  />
);

function Frame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <svg viewBox={VIEW} fill="none" aria-hidden="true" className={cn("w-full", className)}>
      {children}
    </svg>
  );
}

/** 1 · Detect → Anticipate → Decide → Learn, with the feedback loop. */
export function IllLifecycle() {
  return (
    <Frame>
      <Link d="M30,52 H190" />
      <Link d="M190,60 C150,104 70,104 30,60" />
      <SignalNode cx={30} cy={52} />
      <SignalNode cx={83} cy={52} />
      <DecisionNode cx={137} cy={52} />
      <SignalNode cx={190} cy={52} />
    </Frame>
  );
}

/** 2 · Evidence assembly — many signals converge into one decision. */
export function IllConvergence() {
  return (
    <Frame>
      <Link d="M30,30 L186,66" />
      <Link d="M30,66 H186" />
      <Link d="M30,102 L186,66" />
      <SignalNode cx={30} cy={30} />
      <SignalNode cx={30} cy={66} />
      <SignalNode cx={30} cy={102} />
      <DecisionNode cx={188} cy={66} />
    </Frame>
  );
}

/** 3 · Decision Object — lineage in, decision contained, effect out. */
export function IllDecisionObject() {
  return (
    <Frame>
      <Link d="M28,40 L112,66" />
      <Link d="M28,92 L112,66" />
      <Link d="M112,66 L192,40" />
      <Link d="M112,66 L192,92" />
      <rect x={94} y={48} width={36} height={36} rx={7} className="fill-card stroke-border" strokeWidth={1.5} />
      <SignalNode cx={28} cy={40} />
      <SignalNode cx={28} cy={92} />
      <MemoryNode cx={192} cy={40} />
      <MemoryNode cx={192} cy={92} />
      <DecisionNode cx={112} cy={66} />
    </Frame>
  );
}

/** 4 · Operational context — an anchor entity and its related graph. */
export function IllContext() {
  return (
    <Frame>
      <Link d="M110,66 L110,24" />
      <Link d="M110,66 L168,44" />
      <Link d="M110,66 L168,90" />
      <Link d="M110,66 L52,90" />
      <Link d="M110,66 L52,44" />
      <Link d="M110,24 L168,44" faint />
      <Link d="M168,90 L52,90" faint />
      <Link d="M52,44 L110,24" faint />
      <SignalNode cx={110} cy={24} />
      <SignalNode cx={168} cy={44} />
      <SignalNode cx={168} cy={90} />
      <SignalNode cx={52} cy={90} />
      <SignalNode cx={52} cy={44} />
      <DecisionNode cx={110} cy={66} />
    </Frame>
  );
}

/** 5 · Policy gates — candidate paths filtered before they reach a decision. */
export function IllPolicyGates() {
  return (
    <Frame>
      <Link d="M28,36 L116,48 L190,66" />
      <Link d="M28,66 H190" />
      <Link d="M28,96 L116,84" />
      <line x1={116} y1={24} x2={116} y2={108} strokeWidth={1.5} strokeDasharray="3 5" className="stroke-muted-foreground" />
      <SignalNode cx={28} cy={36} />
      <SignalNode cx={28} cy={66} />
      <SignalNode cx={28} cy={96} />
      <DecisionNode cx={190} cy={66} />
    </Frame>
  );
}

/** 6 · Institutional memory — the loop, with knowledge compounding inside. */
export function IllMemory() {
  return (
    <Frame>
      <Link d="M110,26 L168,66 L110,106 L52,66 Z" />
      <MemoryNode cx={92} cy={58} />
      <MemoryNode cx={110} cy={72} />
      <MemoryNode cx={128} cy={58} />
      <SignalNode cx={110} cy={26} />
      <SignalNode cx={110} cy={106} />
      <SignalNode cx={52} cy={66} />
      <DecisionNode cx={168} cy={66} />
    </Frame>
  );
}

/**
 * The master illustration — the entire operational-intelligence story as one
 * abstract metaphor, built from the same grammar. Heterogeneous signals (left)
 * converge into evidence, into a governed decision made under human oversight
 * (the framed workspace), whose outcome feeds back as institutional memory —
 * the field growing denser every cycle. This is the signature graphic.
 */
export function IllMaster({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 380 200" fill="none" aria-hidden="true" className={cn("w-full", className)}>
      {/* institutional learning — the outcome feeding back into the field */}
      <path
        d="M270,92 C330,18 80,8 38,44"
        fill="none"
        strokeWidth={1.5}
        strokeDasharray="2 5"
        className="stroke-border"
      />
      {/* convergence: signal field → evidence → decision → oversight */}
      <g className="stroke-hairline-strong" strokeWidth={1.5}>
        <path d="M30,50 L198,100" />
        <path d="M58,72 L198,100" />
        <path d="M26,92 L198,100" />
        <path d="M54,112 L198,100" />
        <path d="M34,138 L198,100" />
        <path d="M62,158 L198,100" />
        <path d="M206,100 L262,100" />
        <path d="M272,92 L272,60" />
      </g>
      {/* governed decision workspace */}
      <rect x={244} y={34} width={56} height={90} rx={8} className="fill-card stroke-border" strokeWidth={1.5} />
      {/* operational reality — heterogeneous signals, memory accruing (faint) */}
      <MemoryNode cx={20} cy={120} />
      <MemoryNode cx={46} cy={38} />
      <SignalNode cx={30} cy={50} />
      <SignalNode cx={58} cy={72} />
      <SignalNode cx={26} cy={92} />
      <SignalNode cx={54} cy={112} />
      <SignalNode cx={34} cy={138} />
      <SignalNode cx={62} cy={158} />
      {/* evidence */}
      <SignalNode cx={202} cy={100} />
      {/* human oversight */}
      <circle cx={272} cy={50} r={7.5} strokeWidth={1.25} className="stroke-muted-foreground" />
      <circle cx={272} cy={50} r={3.25} strokeWidth={1.25} className="fill-background stroke-foreground" />
      {/* the governed decision */}
      <DecisionNode cx={272} cy={100} />
    </svg>
  );
}
