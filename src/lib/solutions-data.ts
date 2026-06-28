/**
 * Solutions taxonomy + deep Decision Model content. FROZEN information architecture.
 *
 *   Group (Planning vs Execution) → Capability (the responsibility a leader owns)
 *     → Decision Model (the specific call).
 *
 * Every model has a deep page at /solutions/[slug] on one canonical template.
 * The structure, Decision Workspace, tone, and architectural language are constant;
 * only the operational narrative and domain-specific context vary, so each page
 * reads like it was written by someone who has actually run that operation.
 */

export type ModelRef = { name: string; line: string; slug: string };
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
          { name: "Inventory Purchasing & Buy Timing", line: "Buy now or wait — and how much, against the forecast.", slug: "inventory-purchasing" },
          { name: "Stock Reservation", line: "Hold inventory for a launch, a channel, or a key account.", slug: "stock-reservation" },
          { name: "Slow-Moving Inventory", line: "Mark down, transfer, or hold aging stock before it strands.", slug: "slow-moving-inventory" },
          { name: "New Store / Launch Planning", line: "Position inventory for an opening with no sales history.", slug: "launch-planning" },
          { name: "Capacity Allocation", line: "Allocate constrained production or fulfillment across demand.", slug: "capacity-allocation" },
          { name: "SKU Substitution", line: "Offer the right substitute when the preferred SKU is short.", slug: "sku-substitution" },
        ],
      },
      {
        name: "Supplier & Procurement",
        models: [
          { name: "Supplier Disruption Response", line: "Reroute, expedite, or hold when a supplier slips.", slug: "supplier-disruption" },
          { name: "Purchase Order Exceptions", line: "Resolve POs that fall out of tolerance on price, date, or quantity.", slug: "po-exceptions" },
          { name: "Expedite-or-Hold", line: "Pay to expedite, or absorb the delay.", slug: "expedite-or-hold" },
          { name: "Dual-Source Switching", line: "Shift volume to an alternate source under risk or cost pressure.", slug: "dual-source-switching" },
          { name: "Supplier Risk Escalation", line: "Act early on a supplier trending toward failure.", slug: "supplier-risk-escalation" },
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
          { name: "Dock Assignment", line: "Assign the right door under shifting arrivals and labor.", slug: "dock-assignment" },
          { name: "Carrier Exceptions", line: "Reroute or re-promise when a shipment misses its window.", slug: "carrier-exceptions" },
          { name: "Asset Retrieval", line: "Find and move the right asset before it stalls the next step.", slug: "asset-retrieval" },
          { name: "Vehicle Logistics", line: "Stage, move, and sequence vehicles through the yard.", slug: "vehicle-logistics" },
        ],
      },
      {
        name: "Manufacturing Operations",
        models: [
          { name: "Work-in-Process Bottlenecks", line: "Rebalance a line when a work cell starves or backs up.", slug: "wip-bottleneck" },
          { name: "Quality Holds", line: "Release, rework, or scrap when a lot fails inspection.", slug: "quality-holds" },
          { name: "Production Line Balancing", line: "Shift labor and orders as the schedule drifts.", slug: "line-balancing" },
          { name: "Resource Assignment", line: "Assign the right machine, bay, or crew under constraints.", slug: "resource-assignment" },
        ],
      },
      {
        name: "Claims & Service Operations",
        models: [
          { name: "Claims Adjudication", line: "Approve, deny, or escalate against contract and policy.", slug: "claims-adjudication" },
          { name: "Fraud & Anomaly Triage", line: "Flag and route claims that don't add up.", slug: "fraud-triage" },
          { name: "Adjuster Assignment", line: "Route each claim to the right adjuster or shop.", slug: "adjuster-assignment" },
          { name: "Service Exceptions", line: "Decide the make-good when service falls out of SLA.", slug: "service-exceptions" },
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

export const ARCH_NOTE =
  "Underneath, this is the same operating model the rest of the platform runs: verified context is assembled, options are weighed and adversarially challenged, the decision is governed by your policy, and the outcome is learned. The decision changes from one of these to the next. The architecture does not.";

export const DEEP_MODELS: DeepModel[] = [
  // ── Inventory & Planning ──────────────────────────────────────────────
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
    slug: "inventory-purchasing",
    name: "Inventory Purchasing & Buy Timing",
    group: "Planning",
    capability: "Inventory & Planning",
    situationLine: "The forecast says buy — but buy now, buy later, or buy less?",
    decision:
      "Replenishment flags a SKU trending short. The forecast supports a buy, but the supplier wants a six-week commit, the price is rising, and finance is squeezing inventory. Commit the full quantity now, split the buy, or wait a cycle?",
    whyHard:
      "Buy too early and you tie up cash and risk markdowns; buy too late and you stock out a hot item. The right answer depends on lead-time risk, the price trend, open-to-buy, and how firm the demand really is — none of which sit in one place.",
    whySystemsFail:
      "Your planning system recommends a quantity off the forecast; it doesn't weigh the price curve, the cash constraint, and the supplier's minimum against each other. It gives you a number, not a buy decision.",
    context: [
      "Forecast and demand firmness",
      "Open-to-buy and cash constraints",
      "Supplier MOQ, lead time, and price trend",
      "On-hand and in-transit",
      "Markdown risk by category",
    ],
    terminal: {
      title: "decision-workspace · buy · SKU 5520",
      flag: "⚠ Stock-out risk in 3 weeks — SKU 5520, price trending +6%",
      evidence: [
        "Forecast firm; promo confirmed",
        "Supplier MOQ 4,000; lead time 6 weeks",
        "Open-to-buy tight this period",
        "Price expected +6% on next quote",
      ],
      recHeading: "Recommendation · commit 60% now, stage 40% for next cycle",
      policy: "Policy: within open-to-buy · MOQ met · markdown risk acceptable · awaiting planner",
      actions: ["Decision Object #5520", "Evidence ×4", "Policy ✓", "Approve", "Adjust"],
    },
    recommendation:
      "Commit the quantity that covers firm demand now and stage the rest — balancing stock-out risk, the price trend, and the cash you have — held under your open-to-buy policy.",
    policy: ["Open-to-buy limits", "Supplier MOQ and terms", "Markdown-risk thresholds", "Cash constraints"],
    outcomes: ["Fewer stock-outs on hot items", "Less cash tied up early", "Buys timed to the price curve"],
    knowledge:
      "Each buy and how it played out — sold through, marked down, or stranded — is kept, so the model learns this category's real lead-time and price behavior, sharpening with every season it runs.",
  },
  {
    slug: "stock-reservation",
    name: "Stock Reservation",
    group: "Planning",
    capability: "Inventory & Planning",
    situationLine: "Two channels want the same units, and one launch can't be short.",
    decision:
      "Inventory just landed. A launch needs it reserved, a key wholesale account is asking for the same SKU, and DTC is selling it live right now. Reserve for the launch, release to wholesale, or let DTC keep flowing?",
    whyHard:
      "Reserve too much and you starve live demand; reserve too little and the launch gets embarrassed. The call depends on launch firmness, account importance, and real-time sell-through — all moving targets.",
    whySystemsFail:
      "Your OMS shows available-to-promise; it doesn't know the launch is firm, the account is strategic, or that DTC velocity just spiked. It allocates by rule, not by judgment.",
    context: [
      "Live sell-through by channel",
      "Launch commitments and dates",
      "Account tier and open orders",
      "On-hand and inbound",
      "Reservation aging",
    ],
    terminal: {
      title: "decision-workspace · reserve · SKU 3318",
      flag: "⚠ Contention — SKU 3318 wanted by launch, wholesale, and DTC",
      evidence: [
        "Launch firm in 9 days, 800 units",
        "Tier-A wholesale PO open",
        "DTC velocity +40% today",
        "Inbound covers ~half the gap",
      ],
      recHeading: "Recommendation · reserve launch, partial-release wholesale, cap DTC",
      policy: "Policy: launch protected · tier-A minimum met · awaiting planner",
      actions: ["Decision Object #3318", "Evidence ×4", "Policy ✓", "Approve", "Adjust"],
    },
    recommendation:
      "Reserve what the launch firmly needs, release a partial to the tier-A account, and cap DTC at the remainder — under your reservation policy.",
    policy: ["Launch reservations honored first", "Strategic-account minimums", "DTC velocity caps", "Reservation expiry"],
    outcomes: ["Launches that don't run short", "Key accounts kept whole", "Less idle reserved stock"],
    knowledge:
      "Every reservation and its result is kept, so the model learns which launches actually pull and which reservations expire, tightening with each cycle.",
  },
  {
    slug: "slow-moving-inventory",
    name: "Slow-Moving Inventory",
    group: "Planning",
    capability: "Inventory & Planning",
    situationLine: "Aging stock is about to become a markdown — act before it strands.",
    decision:
      "A SKU has gone quiet in one region while another is short on something similar. The aging clock is ticking toward a forced markdown. Transfer it, mark it down now, bundle it, or hold one more cycle?",
    whyHard:
      "Mark down too early and you give away margin; too late and you eat a bigger cut. The right move depends on where demand still exists, transfer cost, and the markdown calendar — rarely visible together.",
    whySystemsFail:
      "Your system flags aging inventory; it doesn't know another region wants it, what the transfer costs, or where it sits on the markdown curve. It raises a flag, not a plan.",
    context: [
      "Aging and sell-through by location",
      "Regional demand for substitutes",
      "Transfer cost and lead time",
      "Markdown calendar and elasticity",
      "Carrying cost",
    ],
    terminal: {
      title: "decision-workspace · aging · SKU 9027",
      flag: "⚠ 62 days aging — SKU 9027, markdown trigger in 8 days",
      evidence: [
        "Region West slow; Region East short on a near-substitute",
        "Transfer ~$0.40/unit, 4-day lead",
        "Markdown would cut ~30% margin",
        "Carrying cost rising",
      ],
      recHeading: "Recommendation · transfer to East, hold markdown one cycle",
      policy: "Policy: transfer within cost threshold · margin protected · awaiting planner",
      actions: ["Decision Object #9027", "Evidence ×4", "Policy ✓", "Approve", "Mark down"],
    },
    recommendation:
      "Transfer the slow stock to the region that still wants it and hold the markdown a cycle — protecting margin — under your aging policy.",
    policy: ["Transfer-cost thresholds", "Markdown-timing rules", "Margin floors", "Carrying-cost limits"],
    outcomes: ["Less margin given to markdowns", "Aging stock redeployed, not dumped", "Lower carrying cost"],
    knowledge:
      "Each call and its outcome — sold after transfer or marked down anyway — is kept, so the model learns this category's true aging behavior.",
  },
  {
    slug: "launch-planning",
    name: "New Store / Launch Planning",
    group: "Planning",
    capability: "Inventory & Planning",
    situationLine: "A new store opens in three weeks with no sales history to plan from.",
    decision:
      "A store opens in 21 days. There's no local sales history, the assortment is set, but the initial stocking quantities are a guess. Mirror a comparable store, lean conservative, or weight to the local market signals?",
    whyHard:
      "Overstock a new store and you strand capital where demand is unproven; understock and you open empty. With no history, the call leans on comparable-store analogues, local signals, and category norms — scattered and subjective.",
    whySystemsFail:
      "Your planning system needs history it doesn't have. It either copies a template or defaults to safety stock — neither tuned to this market or this opening.",
    context: [
      "Comparable-store sell-through",
      "Local market and demographic signals",
      "Assortment and category norms",
      "Lead time to restock",
      "Opening promo plan",
    ],
    terminal: {
      title: "decision-workspace · launch · Store 214",
      flag: "⚠ No history — Store 214 opens in 21 days, initial buy due",
      evidence: [
        "Closest comps: Stores 188, 203 (similar format)",
        "Local signal skews to performance category",
        "Restock lead time 10 days",
        "Opening promo confirmed",
      ],
      recHeading: "Recommendation · comp-weighted buy, over-index performance, lean elsewhere",
      policy: "Policy: within opening budget · restock-able in 10d · awaiting planner",
      actions: ["Decision Object #214", "Evidence ×4", "Policy ✓", "Approve", "Adjust"],
    },
    recommendation:
      "Stock to a comparable-store baseline, over-index the categories the local signal favors, and stay lean where restock is fast — under your opening budget.",
    policy: ["Opening-budget limits", "Restock-lead-time buffers", "Category min/max", "Comp-selection rules"],
    outcomes: ["Fewer dead openings and fewer empty shelves", "Capital matched to proven format", "A faster path to a clean replen signal"],
    knowledge:
      "Every opening and how it actually sold becomes a comp for the next one — so the model gets better at launches with each store it opens.",
  },
  {
    slug: "capacity-allocation",
    name: "Capacity Allocation",
    group: "Planning",
    capability: "Inventory & Planning",
    situationLine: "Production capacity is short, and every order thinks it's first.",
    decision:
      "Demand exceeds what the line can produce this period. Three orders compete for the same constrained capacity — one strategic, one high-margin, one at risk of penalty. Who gets made first?",
    whyHard:
      "Sequence wrong and you breach an SLA, leave margin idle, or burn a strategic account. The right order depends on penalties, margin, and strategic weight — which live in different systems and different heads.",
    whySystemsFail:
      "Your scheduler sequences by due date or rule; it doesn't weigh the penalty clause, the margin, and the account's strategic value against each other. It produces a schedule, not a trade-off decision.",
    context: [
      "Available capacity and constraints",
      "Order due dates and penalties",
      "Margin by order",
      "Account strategic weight",
      "Changeover costs",
    ],
    terminal: {
      title: "decision-workspace · capacity · line 2",
      flag: "⚠ Capacity 0.7× demand — line 2, three orders competing",
      evidence: [
        "Order A: tier-A account, mid-margin",
        "Order B: high-margin, flexible date",
        "Order C: penalty at +2 days",
        "Changeover between A and C is costly",
      ],
      recHeading: "Recommendation · sequence C, A, B to avoid penalty and protect tier-A",
      policy: "Policy: penalty avoided · tier-A protected · changeover within limit · awaiting scheduler",
      actions: ["Decision Object #L2-44", "Evidence ×4", "Policy ✓", "Approve", "Resequence"],
    },
    recommendation:
      "Sequence to avoid the penalty and protect the strategic account, fitting the high-margin order where changeover allows — under your capacity policy.",
    policy: ["Penalty-avoidance rules", "Strategic-account priority", "Changeover-cost limits", "Due-date constraints"],
    outcomes: ["Penalties avoided", "Margin and strategic value protected", "Less idle capacity"],
    knowledge:
      "Each sequencing call and its result is kept, so the model learns this line's real changeover and throughput behavior, improving with use.",
  },
  {
    slug: "sku-substitution",
    name: "SKU Substitution",
    group: "Planning",
    capability: "Inventory & Planning",
    situationLine: "The SKU the customer wants is short — what do you offer instead?",
    decision:
      "An order can't be filled with the requested SKU. A near-substitute is in stock, another is inbound, and the customer has a history. Offer the in-stock substitute, hold for the inbound, or split the order?",
    whyHard:
      "Offer the wrong substitute and you get a return or a churned customer; hold too long and you miss the ship window. The right swap depends on the customer's tolerance, the substitute's fit, and inbound timing.",
    whySystemsFail:
      "Your OMS knows the requested SKU is out; it doesn't know which substitute this customer will accept or whether the inbound arrives in time. It shows a stock-out, not a substitution decision.",
    context: [
      "Substitute availability and fit",
      "Inbound timing for the requested SKU",
      "Customer history and tolerance",
      "Ship-window constraints",
      "Margin by substitute",
    ],
    terminal: {
      title: "decision-workspace · substitute · order #6610",
      flag: "⚠ Requested SKU out — order #6610, ship window 2 days",
      evidence: [
        "Near-substitute in stock, 95% fit",
        "Requested SKU inbound in 5 days (misses window)",
        "Customer accepted substitutes before",
        "Substitute margin comparable",
      ],
      recHeading: "Recommendation · offer in-stock substitute, flag for confirm",
      policy: "Policy: fit threshold met · margin ok · awaiting CS confirm",
      actions: ["Decision Object #6610", "Evidence ×4", "Policy ✓", "Offer", "Hold"],
    },
    recommendation:
      "Offer the high-fit in-stock substitute to hold the ship window, flagged for the customer's confirmation — under your substitution policy.",
    policy: ["Substitute-fit thresholds", "Customer-tolerance rules", "Ship-window protection", "Margin floors"],
    outcomes: ["Fewer missed ship windows", "Fewer returns and churned orders", "Substitutions the customer accepts"],
    knowledge:
      "Every substitution and whether it stuck — accepted, returned, or refused — is kept, so the model learns each customer's real tolerance.",
  },
  // ── Supplier & Procurement ────────────────────────────────────────────
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
    slug: "po-exceptions",
    name: "Purchase Order Exceptions",
    group: "Planning",
    capability: "Supplier & Procurement",
    situationLine: "A PO came back out of tolerance — accept it, or push back?",
    decision:
      "A supplier confirms a PO, but the price is up 3%, the date slipped four days, and the quantity is short. Accept as-is, partially accept, or reject and renegotiate — with the receiving dock already expecting it?",
    whyHard:
      "Accept a bad confirmation and it ripples into cost and schedule; reject it and you may get nothing. The right call depends on tolerance bands, the order's criticality, and the supplier relationship.",
    whySystemsFail:
      "Your ERP flags the variance; it doesn't know whether 3% is acceptable for this category, whether the four-day slip breaks a downstream commit, or how hard to push this supplier. It raises an exception, not a resolution.",
    context: [
      "PO terms vs confirmation",
      "Tolerance bands by category",
      "Downstream commitments affected",
      "Supplier relationship and leverage",
      "Receiving schedule",
    ],
    terminal: {
      title: "decision-workspace · PO #44120",
      flag: "⚠ Out of tolerance — PO #44120: +3% price, +4 days, −5% qty",
      evidence: [
        "Price variance above the 2% band",
        "4-day slip breaks one downstream order",
        "Qty short covered by safety stock",
        "Supplier has limited alternates",
      ],
      recHeading: "Recommendation · accept price, push the date, accept short qty",
      policy: "Policy: price within escalation band · downstream re-promised · awaiting buyer",
      actions: ["Decision Object #44120", "Evidence ×4", "Policy ✓", "Accept", "Renegotiate"],
    },
    recommendation:
      "Accept what's tolerable, push back on the date that breaks a commitment, and absorb the short quantity from safety stock — under your tolerance policy.",
    policy: ["Price/qty/date tolerance bands", "Downstream-commit protection", "Escalation thresholds", "Supplier-leverage rules"],
    outcomes: ["Fewer cost and schedule surprises", "Pushback focused where it matters", "Faster PO resolution"],
    knowledge:
      "Each exception and its outcome is kept, so the model learns this supplier's real reliability and which pushbacks actually land.",
  },
  {
    slug: "expedite-or-hold",
    name: "Expedite-or-Hold",
    group: "Planning",
    capability: "Supplier & Procurement",
    situationLine: "Pay to expedite, or absorb the delay — which costs less?",
    decision:
      "A shipment is running late. Expedited freight would recover the date but costs a premium; holding risks a stock-out or a missed commitment. Pay to expedite, partial-expedite the critical SKUs, or hold?",
    whyHard:
      "Expedite everything and you erode margin; hold and you may breach an SLA. The break-even depends on the cost of the delay versus the premium — a calculation usually done by gut.",
    whySystemsFail:
      "Your TMS can book expedited freight; it doesn't weigh the premium against the cost of the stock-out or the penalty. It quotes a rate, not a decision.",
    context: [
      "Delay length and affected orders",
      "Expedite premium options",
      "Stock-out and penalty exposure",
      "Criticality by SKU",
      "Service commitments",
    ],
    terminal: {
      title: "decision-workspace · expedite · shipment S-8841",
      flag: "⚠ 3-day delay — shipment S-8841, two orders exposed",
      evidence: [
        "Expedite premium ~$3,100",
        "One order penalty ~$5,400 at +2 days",
        "Other order has buffer",
        "Critical SKUs are 40% of the load",
      ],
      recHeading: "Recommendation · partial-expedite critical SKUs only",
      policy: "Policy: net-positive vs penalty · within freight budget · awaiting buyer",
      actions: ["Decision Object #S8841", "Evidence ×4", "Policy ✓", "Approve", "Hold"],
    },
    recommendation:
      "Expedite only the critical SKUs whose delay costs more than the premium, and let the buffered remainder ride — under your freight policy.",
    policy: ["Expedite-budget limits", "Net-cost-positive rule", "Penalty-avoidance priority", "Criticality thresholds"],
    outcomes: ["Premiums paid only where they pay off", "Penalties avoided", "Margin protected on the rest"],
    knowledge:
      "Each expedite call and its real cost vs benefit is kept, so the model sharpens its break-even for this lane and supplier.",
  },
  {
    slug: "dual-source-switching",
    name: "Dual-Source Switching",
    group: "Planning",
    capability: "Supplier & Procurement",
    situationLine: "Your primary source is wobbling — shift volume to the backup?",
    decision:
      "The primary supplier's quality and on-time numbers are drifting. The qualified alternate costs more but is steady. Shift a portion of volume now, wait for a clearer signal, or split going forward?",
    whyHard:
      "Shift too soon and you pay more for a problem that might resolve; too late and you're exposed when the primary fails. The call depends on trend confidence, the cost delta, and switching friction.",
    whySystemsFail:
      "Your procurement system tracks each supplier's metrics; it doesn't decide when the trend is bad enough to move volume, or how much. It reports scorecards, not a sourcing decision.",
    context: [
      "Primary supplier trend (quality, OTD)",
      "Alternate capacity and cost",
      "Switching cost and qualification status",
      "Volume at risk",
      "Contract commitments",
    ],
    terminal: {
      title: "decision-workspace · source · part 7740",
      flag: "⚠ Primary drift — part 7740: OTD 96% → 88% over 6 weeks",
      evidence: [
        "Quality escapes up in 2 of the last 3 lots",
        "Alternate qualified, +5% cost, steady",
        "Switching cost low; capacity available",
        "Contract allows split sourcing",
      ],
      recHeading: "Recommendation · shift 40% to the alternate, keep the primary on watch",
      policy: "Policy: cost delta within band · qualification valid · awaiting buyer",
      actions: ["Decision Object #7740", "Evidence ×4", "Policy ✓", "Approve", "Wait"],
    },
    recommendation:
      "Move a portion of volume to the steady alternate now and keep the primary on watch — hedging the exposure — under your sourcing policy.",
    policy: ["Cost-delta bands", "Qualification requirements", "Volume-shift limits", "Contract split rules"],
    outcomes: ["Exposure reduced before a failure", "Cost increase contained", "Supply kept steady"],
    knowledge:
      "Each shift and whether the primary recovered or failed is kept, so the model learns this supplier's real trajectory and the right trigger point.",
  },
  {
    slug: "supplier-risk-escalation",
    name: "Supplier Risk Escalation",
    group: "Planning",
    capability: "Supplier & Procurement",
    situationLine: "A supplier is trending toward failure — act now, or wait for proof?",
    decision:
      "Weak signals are stacking up on a supplier — a missed-payment notice, slower responses, a quality dip. Nothing is conclusive. Escalate to dual-source and a risk review now, or wait for a harder signal?",
    whyHard:
      "Escalate on noise and you waste effort and strain the relationship; wait and you get caught when they fail. The signals are faint, scattered, and easy to dismiss individually.",
    whySystemsFail:
      "Your systems hold each signal separately — finance, quality, comms. None of them assembles the weak signals into a risk picture or decides it's time to act.",
    context: [
      "Financial-distress signals",
      "Quality and OTD trend",
      "Responsiveness and comms changes",
      "External risk (news, ratings)",
      "Exposure if they fail",
    ],
    terminal: {
      title: "decision-workspace · risk · supplier Atlas",
      flag: "⚠ Risk signals stacking — supplier Atlas, exposure high",
      evidence: [
        "PO acks slowed (avg 1d → 4d)",
        "One late-payment notice (external)",
        "Quality dip on the last lot",
        "We carry 3 single-sourced parts here",
      ],
      recHeading: "Recommendation · escalate: open dual-source, schedule risk review",
      policy: "Policy: exposure above threshold · multi-signal · awaiting procurement lead",
      actions: ["Decision Object #ATLAS", "Evidence ×4", "Policy ✓", "Escalate", "Watch"],
    },
    recommendation:
      "Escalate to a risk review and begin qualifying an alternate for the single-sourced parts — getting ahead of the exposure — under your supplier-risk policy.",
    policy: ["Exposure thresholds", "Multi-signal escalation rules", "Single-source review triggers", "Relationship-handling rules"],
    outcomes: ["Failures anticipated, not absorbed", "Single-source exposure reduced early", "Calmer, planned transitions"],
    knowledge:
      "Each escalation and whether the supplier failed or recovered is kept, so the model learns which signal combinations actually precede failure.",
  },
  // ── Transportation & Yard Operations ──────────────────────────────────
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
    slug: "dock-assignment",
    name: "Dock Assignment",
    group: "Execution",
    capability: "Transportation & Yard Operations",
    situationLine: "Trucks are arriving faster than doors are freeing up.",
    decision:
      "Three trucks are inbound within the hour, two doors are open, labor is thin, and one load is temperature-sensitive. Which truck gets which door, and which waits?",
    whyHard:
      "Assign wrong and you idle a reefer, bottleneck the dock, or strand labor. The right assignment depends on load type, door capability, labor, and downstream priority — all changing minute to minute.",
    whySystemsFail:
      "Your yard/WMS shows door status; it doesn't sequence arrivals against labor, load sensitivity, and downstream need. It shows availability, not an assignment.",
    context: [
      "Inbound ETAs and load types",
      "Door capability and status",
      "Labor availability",
      "Temperature / handling needs",
      "Downstream pick priority",
    ],
    terminal: {
      title: "decision-workspace · dock · facility 7",
      flag: "⚠ 3 inbound, 2 doors — facility 7, one reefer",
      evidence: [
        "Reefer load can't wait long",
        "Door 3 has reefer capability, free now",
        "Labor covers two unloads, not three",
        "One load feeds an urgent pick",
      ],
      recHeading: "Recommendation · reefer → door 3, urgent-pick → door 5, third holds",
      policy: "Policy: cold-chain protected · labor within limit · awaiting dock lead",
      actions: ["Decision Object #F7-22", "Evidence ×4", "Policy ✓", "Assign", "Adjust"],
    },
    recommendation:
      "Send the reefer to the capable door, the urgent-pick load to the second, and hold the third until labor frees — under your dock policy.",
    policy: ["Cold-chain protection", "Labor constraints", "Door-capability rules", "Downstream-priority weighting"],
    outcomes: ["No spoiled cold-chain loads", "Higher dock throughput", "Labor used where it counts"],
    knowledge:
      "Each assignment and how the dock actually flowed is kept, so the model learns this facility's real door and labor rhythms.",
  },
  {
    slug: "carrier-exceptions",
    name: "Carrier Exceptions",
    group: "Execution",
    capability: "Transportation & Yard Operations",
    situationLine: "A shipment just missed its window — reroute, re-promise, or recover?",
    decision:
      "A load is delayed in transit and will miss its delivery window. The customer is tier-A, an alternate carrier could partially recover, and a re-promise might be accepted. Reroute, re-promise, or expedite the recovery?",
    whyHard:
      "Re-promise a customer who won't tolerate it and you lose them; spend on recovery they'd have forgiven and you waste it. The right move depends on the customer, the alternate options, and the cost of each.",
    whySystemsFail:
      "Your TMS sees the delay; it doesn't know this customer's tolerance, whether a partial recovery is worth the cost, or how to re-promise credibly. It flags an exception, not a recovery plan.",
    context: [
      "Delay and revised ETA",
      "Customer tier and tolerance",
      "Alternate carrier / recovery options",
      "Recovery cost",
      "Commitment terms",
    ],
    terminal: {
      title: "decision-workspace · carrier · load L-5567",
      flag: "⚠ Window miss — load L-5567, tier-A customer",
      evidence: [
        "ETA slips ~6 hours past window",
        "Alternate carrier recovers ~80%",
        "Customer rejected re-promises before",
        "Recovery cost moderate",
      ],
      recHeading: "Recommendation · partial-reroute via alternate, notify proactively",
      policy: "Policy: tier-A protected · cost within band · awaiting transport lead",
      actions: ["Decision Object #L5567", "Evidence ×4", "Policy ✓", "Reroute", "Re-promise"],
    },
    recommendation:
      "Partial-reroute via the alternate to recover most of the window and notify the customer proactively — under your service policy.",
    policy: ["Tier-based tolerance rules", "Recovery-cost bands", "Proactive-notify requirements", "Commitment protection"],
    outcomes: ["Tier-A relationships protected", "Recovery spend where it earns its keep", "Fewer surprised customers"],
    knowledge:
      "Each exception and the customer's actual reaction is kept, so the model learns each account's real tolerance and the recoveries that work.",
  },
  {
    slug: "asset-retrieval",
    name: "Asset Retrieval",
    group: "Execution",
    capability: "Transportation & Yard Operations",
    situationLine: "The asset the next step needs can't be found in time.",
    decision:
      "A job needs a specific container, trailer, or tool, and its last-known location is stale. Two candidates match — one closer but uncertain — and the job starts in 40 minutes. Send a retriever to the likely one, search, or stage a substitute?",
    whyHard:
      "Chase the wrong location and you burn the window; wait for certainty and you're late. Asset positions are probabilistic — last-seen, not live — and confidence varies by zone and tag.",
    whySystemsFail:
      "Your tracking system gives a last-known position with a confidence you can't see; it doesn't decide whether that confidence is good enough to act on, or what to do if it isn't. It shows a dot, not a retrieval plan.",
    context: [
      "Last-known position and confidence",
      "Candidate matches and proximity",
      "Retriever availability",
      "Job start window",
      "Substitute options",
    ],
    terminal: {
      title: "decision-workspace · retrieval · asset A-3092",
      flag: "⚠ Asset needed in 40 min — A-3092, location confidence medium",
      evidence: [
        "Last seen zone 4, 18 min ago (medium confidence)",
        "Second candidate in zone 7, low confidence",
        "One retriever free",
        "Substitute available but slower",
      ],
      recHeading: "Recommendation · dispatch to zone 4, stage substitute as backup",
      policy: "Policy: within window · retriever available · awaiting yard lead",
      actions: ["Decision Object #A3092", "Evidence ×4", "Policy ✓", "Dispatch", "Substitute"],
    },
    recommendation:
      "Dispatch to the higher-confidence location while staging the substitute as a hedge — making the window either way — under your retrieval policy.",
    policy: ["Confidence thresholds for action", "Window-protection rules", "Retriever-allocation limits", "Substitute-fallback rules"],
    outcomes: ["Fewer missed job windows", "Less time burned chasing stale positions", "Hedged against bad reads"],
    knowledge:
      "Each retrieval and whether the asset was where expected is kept, so the model learns which zones and tags to trust, by hour and condition.",
  },
  {
    slug: "vehicle-logistics",
    name: "Vehicle Logistics",
    group: "Execution",
    capability: "Transportation & Yard Operations",
    situationLine: "The yard is congesting, and the next move sets up the next hour.",
    decision:
      "Vehicles are stacking in the yard — inbound to stage, ready-for-load to move, finished to ship. Space is tight, one lane is blocked, and a priority load is due out. What moves next?",
    whyHard:
      "Move the wrong vehicle and you deadlock a lane or delay the priority departure. Sequencing depends on positions, destinations, space, and priority — a live puzzle that changes with every move.",
    whySystemsFail:
      "Your yard system shows where vehicles are; it doesn't sequence the next moves to clear congestion and hit the priority departure. It shows a map, not the next move.",
    context: [
      "Vehicle positions and states",
      "Destinations and priority",
      "Available space and blocked lanes",
      "Priority departure deadlines",
      "Mover availability",
    ],
    terminal: {
      title: "decision-workspace · yard · sequence",
      flag: "⚠ Yard congesting — priority load due out in 35 min",
      evidence: [
        "Lane B blocked by a staged unit",
        "Priority load behind two finished vehicles",
        "One open staging slot",
        "Two movers available",
      ],
      recHeading: "Recommendation · clear lane B, move priority out, restage in slot",
      policy: "Policy: priority departure protected · safe sequencing · awaiting yard lead",
      actions: ["Decision Object #YS-77", "Evidence ×4", "Policy ✓", "Sequence", "Adjust"],
    },
    recommendation:
      "Clear the blocking unit, move the priority load out, and restage the rest into the open slot — keeping the departure — under your yard policy.",
    policy: ["Priority-departure protection", "Safe-sequencing rules", "Space constraints", "Mover-allocation limits"],
    outcomes: ["Priority departures kept", "Congestion cleared faster", "Fewer deadlocked lanes"],
    knowledge:
      "Each sequence and how the yard actually flowed is kept, so the model learns this yard's real congestion patterns by shift and volume.",
  },
  // ── Manufacturing Operations ──────────────────────────────────────────
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
    slug: "quality-holds",
    name: "Quality Holds",
    group: "Execution",
    capability: "Manufacturing Operations",
    situationLine: "A lot failed inspection — release, rework, or scrap?",
    decision:
      "A lot tripped a quality check. It's bound for a key customer, rework is possible but slow, scrap is clean but costly, and a deviation might be acceptable. Release with deviation, rework, or scrap?",
    whyHard:
      "Release a bad lot and you risk a customer escape; scrap a good-enough one and you eat the cost. The call depends on the defect's severity, the customer's spec tolerance, and the schedule — held in specs, history, and judgment.",
    whySystemsFail:
      "Your QMS records the failure; it doesn't weigh the deviation against the customer's real tolerance, the rework cost, and the schedule. It logs a hold, not a disposition.",
    context: [
      "Defect type and severity",
      "Customer spec and tolerance",
      "Rework cost and time",
      "Schedule impact",
      "Deviation history for this defect",
    ],
    terminal: {
      title: "decision-workspace · quality · lot Q-4471",
      flag: "⚠ Lot failed — Q-4471, bound for a tier-A customer",
      evidence: [
        "Defect cosmetic, within historical deviation grants",
        "Customer spec allows minor variance",
        "Rework adds 6 hours",
        "Schedule tight this week",
      ],
      recHeading: "Recommendation · release under documented deviation",
      policy: "Policy: within customer tolerance · deviation documented · awaiting QA sign-off",
      actions: ["Decision Object #Q4471", "Evidence ×4", "Policy ✓", "Release", "Rework"],
    },
    recommendation:
      "Release under a documented deviation that stays inside the customer's tolerance — avoiding cost and delay without risking an escape — under your quality policy.",
    policy: ["Customer-tolerance limits", "Deviation-documentation rules", "Defect-severity gates", "Escape-risk thresholds"],
    outcomes: ["Fewer needless scraps and reworks", "No quality escapes to customers", "Schedule protected"],
    knowledge:
      "Each disposition and whether the customer accepted it is kept, so the model learns this defect's real tolerance, by customer and spec.",
  },
  {
    slug: "line-balancing",
    name: "Production Line Balancing",
    group: "Execution",
    capability: "Manufacturing Operations",
    situationLine: "The schedule has drifted, and the line is out of balance.",
    decision:
      "Mid-shift, the plan no longer matches reality — one station is ahead, another behind, an order moved up, and labor is uneven. Reassign labor, resequence orders, or hold the plan?",
    whyHard:
      "Rebalance wrong and you trade one bottleneck for another or breach a due date. The right move depends on station rates, labor flexibility, and order priority — a live optimization the plan can't keep up with.",
    whySystemsFail:
      "Your MES holds the schedule; it doesn't continuously rebalance labor and sequence against the floor's real rates. It shows the plan, not the adjustment.",
    context: [
      "Station rates and status",
      "Labor flexibility and skills",
      "Order priority and due dates",
      "Current vs planned throughput",
      "Changeover costs",
    ],
    terminal: {
      title: "decision-workspace · line · cell group A",
      flag: "⚠ Out of balance — station 3 behind, station 5 idle",
      evidence: [
        "Station 3 down to 70% rate (one absence)",
        "Station 5 ahead; cross-trained labor free",
        "Priority order due in 4 hours",
        "Changeover to resequence is low",
      ],
      recHeading: "Recommendation · shift one operator 5 → 3, resequence priority order up",
      policy: "Policy: labor within skill rules · priority due-date met · awaiting supervisor",
      actions: ["Decision Object #GA-19", "Evidence ×4", "Policy ✓", "Rebalance", "Hold"],
    },
    recommendation:
      "Move a cross-trained operator to the lagging station and pull the priority order up — restoring balance and the due date — under your line policy.",
    policy: ["Labor skill / safety rules", "Priority-due-date protection", "Changeover-cost limits", "Rate-target constraints"],
    outcomes: ["Steadier throughput", "Due dates held through drift", "Labor matched to the bottleneck"],
    knowledge:
      "Each rebalance and its result is kept, so the model learns this line's real rates and which moves actually help.",
  },
  {
    slug: "resource-assignment",
    name: "Resource Assignment",
    group: "Execution",
    capability: "Manufacturing Operations",
    situationLine: "The right machine, bay, or crew for the job isn't obvious.",
    decision:
      "A job is ready, but the ideal resource is busy, a second is available but slower, and a third needs a changeover. Wait for the ideal, take the available, or change over the third?",
    whyHard:
      "Assign to the wrong resource and you lose throughput or quality; wait and you idle the job. The call depends on capability, availability, changeover, and the job's priority — rarely visible together.",
    whySystemsFail:
      "Your scheduler assigns by rule or availability; it doesn't weigh capability against changeover against priority. It picks a slot, not the best fit.",
    context: [
      "Resource capability and status",
      "Changeover requirements",
      "Job priority and due date",
      "Quality / capability match",
      "Crew skills",
    ],
    terminal: {
      title: "decision-workspace · assign · job J-2208",
      flag: "⚠ Resource contention — J-2208 ready, ideal machine busy",
      evidence: [
        "Ideal machine free in 90 min",
        "Available machine slower, lower yield",
        "Third needs a 30-min changeover",
        "Job due in 3 hours",
      ],
      recHeading: "Recommendation · change over the third, assign now",
      policy: "Policy: capability match ok · changeover within limit · due-date met · awaiting supervisor",
      actions: ["Decision Object #J2208", "Evidence ×4", "Policy ✓", "Assign", "Wait"],
    },
    recommendation:
      "Change over the capable third resource and start now — beating the due date without the yield hit — under your assignment policy.",
    policy: ["Capability-match rules", "Changeover-cost limits", "Due-date protection", "Crew-skill constraints"],
    outcomes: ["Higher throughput and yield", "Fewer idle jobs", "Resources matched to the work"],
    knowledge:
      "Each assignment and how it ran is kept, so the model learns each resource's real capability and changeover economics.",
  },
  // ── Claims & Service Operations ───────────────────────────────────────
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
  {
    slug: "fraud-triage",
    name: "Fraud & Anomaly Triage",
    group: "Execution",
    capability: "Claims & Service Operations",
    situationLine: "A claim doesn't quite add up — investigate, fast-track, or route?",
    decision:
      "A claim carries faint anomaly signals — an unusual pattern, a flagged provider, a timing oddity. None is conclusive, the customer is waiting, and investigation is costly. Fast-track, route to special investigation, or request more?",
    whyHard:
      "Over-investigate clean claims and you anger customers and burn cost; under-investigate and you leak loss. The signals are subtle and scattered, and the threshold is a judgment call.",
    whySystemsFail:
      "Your claims system scores risk per rule; it doesn't assemble the weak signals into a picture or decide the threshold to investigate. It flags a score, not a triage decision.",
    context: [
      "Anomaly signals and patterns",
      "Provider / shop history",
      "Claim and customer history",
      "Investigation cost",
      "Loss exposure",
    ],
    terminal: {
      title: "decision-workspace · triage · claim #90233",
      flag: "⚠ Anomaly signals — claim #90233, provider flagged",
      evidence: [
        "Provider on a watch pattern (2 prior)",
        "Timing unusual vs the incident date",
        "Customer history clean",
        "Loss exposure moderate",
      ],
      recHeading: "Recommendation · route to special investigation, hold payout",
      policy: "Policy: multi-signal · exposure above auto-pay · awaiting SIU sign-off",
      actions: ["Decision Object #90233", "Evidence ×4", "Policy ✓", "Route SIU", "Fast-track"],
    },
    recommendation:
      "Route to investigation and hold the payout where the signals stack against a flagged provider — focusing scrutiny where it pays — under your triage policy.",
    policy: ["Multi-signal thresholds", "Auto-pay exposure limits", "Provider-watch rules", "Customer-experience guards"],
    outcomes: ["Leakage caught earlier", "Clean claims not slowed", "Investigation spent where it counts"],
    knowledge:
      "Each triage and whether fraud was confirmed is kept, so the model learns which signal combinations and providers actually predict loss.",
  },
  {
    slug: "adjuster-assignment",
    name: "Adjuster Assignment",
    group: "Execution",
    capability: "Claims & Service Operations",
    situationLine: "This claim needs the right adjuster or shop — who gets it?",
    decision:
      "A claim comes in needing assignment. One adjuster has the specialty but a full queue, a shop is closer but mixed-rated, and the customer is a priority. Route to the specialist, the nearby shop, or balance the load?",
    whyHard:
      "Route by load alone and you mismatch complexity; route by specialty alone and you overload. The right assignment depends on complexity, specialty, capacity, geography, and the customer — across systems.",
    whySystemsFail:
      "Your system routes by queue or zone; it doesn't match claim complexity to adjuster specialty against capacity and customer priority. It assigns a slot, not the right fit.",
    context: [
      "Claim complexity and specialty needed",
      "Adjuster / shop capacity and ratings",
      "Geography and SLA",
      "Customer priority",
      "Current load balance",
    ],
    terminal: {
      title: "decision-workspace · assign · claim #77150",
      flag: "⚠ Assignment needed — claim #77150, specialty + priority customer",
      evidence: [
        "Needs structural specialty",
        "Specialist queue full; SLA at risk",
        "Nearby shop available, mixed rating",
        "Customer flagged priority",
      ],
      recHeading: "Recommendation · assign specialist, rebalance one routine claim off queue",
      policy: "Policy: specialty matched · SLA protected · awaiting team lead",
      actions: ["Decision Object #77150", "Evidence ×4", "Policy ✓", "Assign", "Adjust"],
    },
    recommendation:
      "Assign the specialist and rebalance a routine claim off their queue to protect the SLA — matching complexity and capacity — under your assignment policy.",
    policy: ["Specialty-match rules", "SLA protection", "Capacity-balancing limits", "Customer-priority weighting"],
    outcomes: ["Claims matched to the right skill", "SLAs protected", "Balanced adjuster load"],
    knowledge:
      "Each assignment and its cycle-time and quality result is kept, so the model learns which matches actually resolve fastest and cleanest.",
  },
  {
    slug: "service-exceptions",
    name: "Service Exceptions",
    group: "Execution",
    capability: "Claims & Service Operations",
    situationLine: "Service fell out of SLA — what's the right make-good?",
    decision:
      "A service commitment was missed. The customer is upset, several remedies are possible — a credit, an expedite, an escalation, a personal follow-up — each with a different cost and effect. What make-good fits this customer and this miss?",
    whyHard:
      "Over-compensate and you train customers to complain; under-compensate and you lose them. The right remedy depends on the customer's value, the severity, and what's worked before — across CRM, contract, and history.",
    whySystemsFail:
      "Your service system logs the breach; it doesn't choose a remedy proportional to the customer and the miss. It opens a ticket, not a resolution.",
    context: [
      "SLA breach severity",
      "Customer value and history",
      "Available remedies and cost",
      "Past remedy effectiveness",
      "Contractual obligations",
    ],
    terminal: {
      title: "decision-workspace · service · case #61190",
      flag: "⚠ SLA missed — case #61190, high-value customer",
      evidence: [
        "Second miss this quarter",
        "Customer lifetime value high",
        "Credit + expedite worked before",
        "Contract has a remedy clause",
      ],
      recHeading: "Recommendation · service credit + expedited resolution, owner follow-up",
      policy: "Policy: within remedy budget · proportional to value · awaiting service lead",
      actions: ["Decision Object #61190", "Evidence ×4", "Policy ✓", "Approve", "Adjust"],
    },
    recommendation:
      "Offer a proportional service credit with an expedited fix and a personal follow-up — matched to the customer's value and the repeat miss — under your remedy policy.",
    policy: ["Remedy-budget limits", "Proportionality rules", "Contractual-remedy compliance", "Repeat-miss escalation"],
    outcomes: ["Retained high-value customers", "Remedies proportional, not reflexive", "Fewer repeat escalations"],
    knowledge:
      "Each remedy and whether it retained the customer is kept, so the model learns which make-goods actually work, by customer value and miss type.",
  },
];

export const DEEP_BY_SLUG: Record<string, DeepModel> = Object.fromEntries(
  DEEP_MODELS.map((m) => [m.slug, m]),
);
