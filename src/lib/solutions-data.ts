/**
 * Solutions taxonomy + deep Decision Model content.
 *
 * Organized for CUSTOMER RECOGNITION, not architectural elegance:
 *   Group (Planning vs Execution) → Capability (the responsibility a leader owns)
 *     → Decision Model (the specific call).
 * Models with a `slug` have a deep page at /solutions/[slug]; the rest are named
 * on the landing and grow into deep pages over time. A model that spans
 * capabilities is written once and can be listed under each.
 */

export type ModelRef = { name: string; line: string; slug?: string };
export type Capability = { name: string; framing?: string; models: ModelRef[] };
export type Group = { id: string; title: string; blurb: string; capabilities: Capability[] };

export const GROUPS: Group[] = [
  {
    id: "planning",
    title: "Planning decisions",
    blurb: "The forward-looking calls your forecasting and commerce systems leave unmade.",
    capabilities: [
      {
        name: "Inventory & Planning",
        framing:
          "Your demand forecast is an input, not a decision. The hard work is the call that follows — buy now or wait, allocate to which channel, reserve for the launch, move the slow stock.",
        models: [
          { name: "Demand Allocation", line: "Who gets the limited stock when demand outruns supply.", slug: "demand-allocation" },
          { name: "Inventory Purchasing & Buy Timing", line: "Buy now or wait — and how much, against the forecast." },
          { name: "Stock Reservation", line: "Hold inventory for a launch, a channel, or a key account." },
          { name: "Slow-Moving Inventory", line: "Mark down, transfer, or hold aging stock before it strands." },
          { name: "New Store / Launch Planning", line: "Position inventory for an opening with no sales history." },
          { name: "Capacity Allocation", line: "Allocate constrained production or fulfillment across demand." },
          { name: "SKU Substitution", line: "Offer the right substitute when the preferred SKU is short." },
        ],
      },
      {
        name: "Supplier & Procurement",
        models: [
          { name: "Supplier Disruption Response", line: "Reroute, expedite, or hold when a supplier slips.", slug: "supplier-disruption" },
          { name: "Purchase Order Exceptions", line: "Resolve POs that fall out of tolerance on price, date, or quantity." },
          { name: "Expedite-or-Hold", line: "Pay to expedite, or absorb the delay." },
          { name: "Dual-Source Switching", line: "Shift volume to an alternate source under risk or cost pressure." },
          { name: "Supplier Risk Escalation", line: "Act early on a supplier trending toward failure." },
        ],
      },
    ],
  },
  {
    id: "execution",
    title: "Execution decisions",
    blurb: "Real-time calls as events happen — on the floor, in the yard, on the live event.",
    capabilities: [
      {
        name: "Transportation & Yard Operations",
        models: [
          { name: "Trailer Dwell Optimization", line: "Release or reposition trailers idling past their window.", slug: "trailer-dwell" },
          { name: "Dock Assignment", line: "Assign the right door under shifting arrivals and labor." },
          { name: "Carrier Exceptions", line: "Reroute or re-promise when a shipment misses its window." },
          { name: "Asset Retrieval", line: "Find and move the right asset before it stalls the next step." },
          { name: "Vehicle Logistics", line: "Stage, move, and sequence vehicles through the yard." },
        ],
      },
      {
        name: "Manufacturing Operations",
        models: [
          { name: "Work-in-Process Bottlenecks", line: "Rebalance a line when a work cell starves or backs up.", slug: "wip-bottleneck" },
          { name: "Quality Holds", line: "Release, rework, or scrap when a lot fails inspection." },
          { name: "Production Line Balancing", line: "Shift labor and orders as the schedule drifts." },
          { name: "Resource Assignment", line: "Assign the right machine, bay, or crew under constraints." },
        ],
      },
      {
        name: "Claims & Service Operations",
        models: [
          { name: "Claims Adjudication", line: "Approve, deny, or escalate against contract and policy.", slug: "claims-adjudication" },
          { name: "Fraud & Anomaly Triage", line: "Flag and route claims that don't add up." },
          { name: "Adjuster Assignment", line: "Route each claim to the right adjuster or shop." },
          { name: "Service Exceptions", line: "Decide the make-good when service falls out of SLA." },
        ],
      },
    ],
  },
];

export type DeepModel = {
  slug: string;
  name: string;
  group: string;
  capability: string;
  situationLine: string;
  decision: string;
  whyHard: string;
  whySystemsFail: string;
  context: string[];
  terminal: { title: string; flag: string; evidence: string[]; recHeading: string; policy: string; actions: string[] };
  recommendation: string;
  policy: string[];
  outcomes: string[];
  knowledge: string;
};

const ARCHITECTURE_NOTE =
  "Underneath, this is the same operating model the rest of the platform runs: verified context is assembled, options are weighed and adversarially challenged, the decision is governed by your policy, and the outcome is learned. The decision changes from one of these to the next. The architecture does not.";

export const ARCH_NOTE = ARCHITECTURE_NOTE;

export const DEEP_MODELS: DeepModel[] = [
  {
    slug: "demand-allocation",
    name: "Demand Allocation",
    group: "Planning",
    capability: "Inventory & Planning",
    situationLine: "Demand outruns supply, and someone has to decide who gets the units.",
    decision:
      "Your forecast is in. It says three channels each want more of a hot SKU than you'll have for the next four weeks. The forecast doesn't decide who gets it — you do, by Friday, before the allocation locks.",
    whyHard:
      "Every channel's number looks justified. Cut the wrong one and you strand a launch, burn a key account, or leave margin on the table. The right answer depends on context a spreadsheet doesn't hold: which account is actually growing, which promotion is firm, which channel quietly over-forecasts every season.",
    whySystemsFail:
      "Your planning system forecast the demand — it didn't weigh the trade-off. It hands you a number and a deadline, not a decision. So the call gets made from memory, in a meeting, and it is never recorded, defensible, or repeatable.",
    context: [
      "Live and committed demand by channel",
      "On-hand, in-transit, and reserved inventory",
      "Promotion and launch calendars",
      "Account growth and margin tiers",
      "Each channel's historical forecast bias",
    ],
    terminal: {
      title: "decision-workspace · allocation · SKU 7741",
      flag: "⚠ Demand 1.8× supply — SKU 7741, next 4 weeks",
      evidence: [
        "Wholesale, DTC, and Retail all over-ask vs on-hand + in-transit",
        "Launch reservation firm for 1,200 units (DTC)",
        "Wholesale forecast runs +22% hot every season, later cut",
        "Retail account flagged tier A, growing",
      ],
      recHeading: "Recommendation · protect launch + tier-A, discount wholesale ask",
      policy: "Policy: launch reserved first · wholesale bias-adjusted · within margin floor · awaiting planner sign-off",
      actions: ["Decision Object #7741", "Evidence ×4", "Policy ✓", "Approve", "Adjust"],
    },
    recommendation:
      "A ranked allocation across channels — with the reasoning, the demand it protected, the ask it trimmed, and why — held under your allocation policy until you approve.",
    policy: [
      "Minimums for strategic accounts",
      "Margin floors",
      "Launch reservations honored first",
      "Forecast-bias adjustment on chronic over-askers",
    ],
    outcomes: [
      "Higher fill on the demand that matters",
      "Fewer stranded launches and lost key-account orders",
      "An allocation that's defensible after the fact",
    ],
    knowledge:
      "Every allocation becomes a Decision Object — what was asked, what was given, and how it turned out. Next season the model already knows which channel over-asked and by how much. And a model is never quite finished: every deployment it runs in leaves it a little sharper at the trade-off.",
  },
  {
    slug: "supplier-disruption",
    name: "Supplier Disruption Response",
    group: "Planning",
    capability: "Supplier & Procurement",
    situationLine: "A supplier's lead time just doubled, and the orders riding on it are now at risk.",
    decision:
      "An email lands: your supplier's lead time slipped from six days to fourteen. Three open orders depend on it — one for a tier-A account with a penalty clause. You have hours to decide: wait, expedite, reroute to an alternate, or re-promise the customer.",
    whyHard:
      "The signal is buried in an inbox, the contract terms are in a PDF, the alternate's SLA is in another system, and the account's importance is in someone's head. By the time you've assembled all of it, the window to act has already narrowed.",
    whySystemsFail:
      "Your ERP records the order; it doesn't read the supplier's email, know the penalty clause triggers at ten days, or recognize this account is growing. It surfaces a late PO, not a decision.",
    context: [
      "Inbound supplier signals (last 48h)",
      "Affected open orders and their accounts",
      "Contract penalty terms",
      "Alternate suppliers — SLA and cost",
      "Account tier and growth",
    ],
    terminal: {
      title: "decision-workspace · order #4821",
      flag: "⚠ Margin risk — Order #4821 · Northwind Logistics",
      evidence: [
        "Supplier lead time slipped 6 → 14 days (3 signals, last 48h)",
        "Contract penalty clause triggers above a 10-day delay",
        "Alternate supplier in-SLA at +4% unit cost",
        "Account flagged priority tier A",
      ],
      recHeading: "Recommendation · reroute to alternate supplier",
      policy: "Policy: +4% spend within auto-approve threshold · awaiting human sign-off",
      actions: ["Decision Object #4821", "Evidence ×4", "Policy ✓", "Approve", "Override"],
    },
    recommendation:
      "Reroute to the in-SLA alternate at +4%, within the auto-approve threshold — or hold, with the cost of each path laid out — awaiting sign-off.",
    policy: ["Spend within auto-approve threshold", "Penalty-clause avoidance", "Tier-A protection", "Approved alternates only"],
    outcomes: ["Penalties avoided", "Tier-A orders protected", "A response faster than an inbox allows"],
    knowledge:
      "The decision, its evidence, and the outcome persist. The next time this supplier slips, the system starts from what happened last time — and gets sharper with every deployment it runs in.",
  },
  {
    slug: "trailer-dwell",
    name: "Trailer Dwell Optimization",
    group: "Execution",
    capability: "Transportation & Yard Operations",
    situationLine: "A trailer has sat past its dwell window, and detention is now ticking.",
    decision:
      "A loaded trailer has idled in the yard three hours past its target. The detention clock is running, a door is freeing up, and another carrier is waiting. Hold it, move it to a door, release it back to the carrier, or reassign the load?",
    whyHard:
      "The trailer's position drifts, the appointment schedule lives in the TMS, the detention terms are in the carrier contract, and door availability changes by the minute. No one screen shows all four at once — and the cost of guessing wrong is detention dollars or a missed departure.",
    whySystemsFail:
      "Your yard system knows where the trailer is; it doesn't know the detention clause, the downstream appointment, or that this carrier's SLA makes releasing it the cheaper move. It shows a dot on a map, not a decision — and that dot is an estimate, not the truth.",
    context: [
      "Live yard position and dwell time, with confidence",
      "Appointment and door schedule",
      "Detention clock and carrier terms",
      "Downstream load priority",
    ],
    terminal: {
      title: "decision-workspace · yard · trailer T-2207",
      flag: "⚠ Dwell 3h 12m over target — trailer T-2207, detention accruing",
      evidence: [
        "Position confidence high; idle at staging row 9",
        "Door 14 frees in ~15 min",
        "Carrier SLA: release-empty avoids detention after 4h",
        "Inbound carrier waiting on a door",
      ],
      recHeading: "Recommendation · reposition to door 14, release the empty",
      policy: "Policy: within detention threshold · dock capacity ok · awaiting yard-lead sign-off",
      actions: ["Decision Object #2207", "Evidence ×4", "Policy ✓", "Approve", "Hold"],
    },
    recommendation:
      "Reposition to door 14 now and release the empty — clearing detention exposure and the waiting carrier — under your yard policy, pending the yard lead's nod.",
    policy: ["Detention-cost thresholds", "Carrier contract terms", "Dock capacity and safety", "Appointment priority"],
    outcomes: ["Lower detention spend", "Higher dock throughput", "More on-time departures"],
    knowledge:
      "Each call — and whether it actually cleared the congestion — is kept, so the yard's own patterns (which carriers, which doors, which hours) sharpen the next decision, and the model improves with every yard it runs in.",
  },
  {
    slug: "wip-bottleneck",
    name: "Work-in-Process Bottlenecks",
    group: "Execution",
    capability: "Manufacturing Operations",
    situationLine: "A work cell is starving while the material it needs sits two buildings away.",
    decision:
      "Cell 4 is about to run dry. The material it needs is staged two buildings over, another cell is backing up behind it, and the shift changes in ninety minutes. Expedite the move, resequence the line, pull a different order forward, or hold?",
    whyHard:
      "WIP location is approximate, the schedule is mid-shift, labor is finite, and the bottleneck moves the moment you act on it. The floor knows it's stuck before any system flags it — and an experienced supervisor's instinct is the only thing bridging the gap.",
    whySystemsFail:
      "Your MES shows the schedule, not the reality on the floor — where material actually is, how confident that reading is, and which move keeps the most cells running. It reports the bottleneck after it has already formed.",
    context: [
      "WIP location and confidence by cell",
      "Live schedule and cell status",
      "Material staging and transit",
      "Labor available this shift",
    ],
    terminal: {
      title: "decision-workspace · floor · cell 4",
      flag: "⚠ Cell 4 starving — ~22 min to dry, Cell 6 backing up",
      evidence: [
        "Required lot staged in Bldg C (move ~12 min)",
        "Resequencing two orders keeps 4 cells running",
        "Shift change in 90 min; one mover available",
        "Priority order due end of shift",
      ],
      recHeading: "Recommendation · expedite the lot, resequence two orders",
      policy: "Policy: within changeover limit · labor ok · priority order protected · awaiting supervisor",
      actions: ["Decision Object #C4-118", "Evidence ×4", "Policy ✓", "Approve", "Adjust"],
    },
    recommendation:
      "Move the staged lot to Cell 4 now and resequence two orders behind it — keeping four cells running — under your changeover and labor rules, pending the supervisor.",
    policy: ["Changeover-cost limits", "Labor and safety constraints", "Schedule-adherence rules", "Priority-order protection"],
    outcomes: ["Higher line utilization", "Fewer starved cells and shift-end misses", "Less reliance on one supervisor's memory"],
    knowledge:
      "The move and its result are kept, so the floor's recurring bottlenecks — and what actually cleared them — become the model's, not just the veteran supervisor's, sharpening with every plant it runs in.",
  },
  {
    slug: "claims-adjudication",
    name: "Claims Adjudication",
    group: "Execution",
    capability: "Claims & Service Operations",
    situationLine: "A claim is filed, and it has to be decided against a contract no one has read in a year.",
    decision:
      "A claim comes in. Coverage depends on the contract terms, the component's history, the shop's track record, and a few faint fraud signals — and the customer is waiting. Approve, deny, partial-pay, request more, or escalate?",
    whyHard:
      "The contract is a PDF, the prior claims are in one system, the shop's pattern in another, the fraud signal is subtle. Adjudicate too fast and you leak loss; too slow and the customer churns. Consistency across adjusters is nearly impossible by hand.",
    whySystemsFail:
      "Your claims system stores the claim; it doesn't read the contract, recall this shop's history, or weigh the fraud signal against the SLA. It routes a task, not a decision.",
    context: [
      "Contract terms and coverage",
      "Claim and component history",
      "Shop / provider track record",
      "Fraud and anomaly signals",
      "SLA and authority limits",
    ],
    terminal: {
      title: "decision-workspace · claim #88412",
      flag: "⚠ Coverage ambiguity — claim #88412, component out of standard window",
      evidence: [
        "Contract covers component; one exclusion applies partially",
        "Shop history clean; 0 anomalies in 24 months",
        "Fraud score low; documentation complete",
        "Within adjuster authority limit",
      ],
      recHeading: "Recommendation · approve at contracted rate, flag partial exclusion",
      policy: "Policy: within authority · compliant · reserve threshold ok · awaiting adjuster sign-off",
      actions: ["Decision Object #88412", "Evidence ×4", "Policy ✓", "Approve", "Escalate"],
    },
    recommendation:
      "Approve at the contracted rate with the partial exclusion flagged — within adjuster authority — or escalate, with the contract clause and the fraud signal surfaced, pending sign-off.",
    policy: ["Coverage rules and exclusions", "Authority limits by role", "Regulatory compliance", "Reserve thresholds"],
    outcomes: ["A tighter loss ratio", "Faster, more consistent cycle time", "Defensible, audit-ready decisions"],
    knowledge:
      "Every adjudication is preserved with its reasoning, so similar claims are decided consistently — and the patterns (a shop, a component, a fraud signature) sharpen with each one, and with every book it runs in.",
  },
];

export const DEEP_BY_SLUG: Record<string, DeepModel> = Object.fromEntries(
  DEEP_MODELS.map((m) => [m.slug, m]),
);
