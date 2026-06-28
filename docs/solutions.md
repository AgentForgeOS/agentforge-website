# Solutions

> _Faithful text transcription of the AgentForge "Solutions" section for review. The information architecture is **frozen**: Planning vs Execution → Capability → Decision Model. **All 25 models have a deep page** at `/solutions/[slug]` on one canonical template — structure, Decision Workspace, tone, and architectural language are constant; only the operational narrative and domain context vary. Each deep page is transcribed below in the compact **Today / With AgentForge** form; the live pages carry the full layout._

---

## Landing — `/solutions`

**Find your operation.** These are the operational decisions teams make every day — the planning calls that follow the forecast, and the execution calls made live, on the floor and in the yard. Find yours below.

### Planning decisions
_The forward-looking calls your forecasting and commerce systems leave unmade._

**Inventory & Planning** — _Your demand forecast is an input, not a decision. The hard work is the call that follows — buy now or wait, allocate to which channel, reserve for the launch, move the slow stock._
Demand Allocation · Inventory Purchasing & Buy Timing · Stock Reservation · Slow-Moving Inventory · New Store / Launch Planning · Capacity Allocation · SKU Substitution

**Supplier & Procurement**
Supplier Disruption Response · Purchase Order Exceptions · Expedite-or-Hold · Dual-Source Switching · Supplier Risk Escalation

### Execution decisions
_Real-time calls as events happen — on the floor, in the yard, on the live event._

**Transportation & Yard Operations**
Trailer Dwell Optimization · Dock Assignment · Carrier Exceptions · Asset Retrieval · Vehicle Logistics

**Manufacturing Operations**
Work-in-Process Bottlenecks · Quality Holds · Production Line Balancing · Resource Assignment

**Claims & Service Operations**
Claims Adjudication · Fraud & Anomaly Triage · Adjuster Assignment · Service Exceptions

### One platform · Only the decision changes. The operating system doesn't.

At first glance, an inventory allocation, a slipping supplier, a trailer past its window, a starved work cell, and a contested claim look like five different businesses. Read a few, though, and the same journey shows through each: reality is assembled from systems that don't talk to each other; the evidence is weighed; the alternatives are challenged; policy draws the line; a governed Decision Object is made; and the outcome becomes something the organization keeps. The content changes completely. The path never does.

_[Visual: the **Decision Workspace**, tabbed across the five worlds — Inventory · Supplier · Yard · Manufacturing · Claims. Clicking a tab swaps the decision inside; the window never changes.]_ **Five operational worlds. One Decision Workspace underneath. This was never five products.**

**And it compounds.** Every Decision Model begins with a single operational problem. Every deployment makes it more complete — a new constraint, an edge case no one anticipated, a pattern that only shows up at scale, a governance rule learned the hard way. So the platform doesn't simply accumulate customers. It accumulates increasingly sophisticated Decision Models — until the model itself becomes an operational asset.

---

# The 25 Decision Models

_Canonical template: **the moment → Today (how it's decided now, and why your systems stop here) → With AgentForge (context assembled · the Decision Workspace · governed) → what changes → the knowledge it keeps.** Architecture is the explanation at the very end of each live page, never the lead._

## Planning · Inventory & Planning

### Demand Allocation
_Demand outruns supply, and someone has to decide who gets the units._
**Today.** Your forecast says three channels each want more of a hot SKU than you'll have for four weeks. The forecast hands you a number and a deadline, not a decision; the call gets made from memory, in a meeting — unrecorded, indefensible, unrepeatable.
**With AgentForge.** Demand by channel, on-hand/in-transit/reserved, promo and launch calendars, account tiers, and each channel's forecast bias are assembled. Workspace: `⚠ Demand 1.8× supply — SKU 7741` → *protect launch + tier-A, discount the wholesale ask* (launch reserved first · wholesale bias-adjusted · within margin floor). **Changes:** higher fill on the demand that matters; fewer stranded launches; an allocation defensible after the fact. **Keeps:** which channel over-asked and by how much — sharper every season.

### Inventory Purchasing & Buy Timing
_The forecast says buy — but buy now, buy later, or buy less?_
**Today.** A SKU trends short; the supplier wants a six-week commit, price is rising, finance is squeezing inventory. Your planner gives a quantity off the forecast — it doesn't weigh the price curve, the cash constraint, and the MOQ against each other.
**With AgentForge.** Forecast firmness, open-to-buy, MOQ/lead time/price trend, and markdown risk assembled. Workspace: `⚠ Stock-out risk in 3 weeks — SKU 5520, price +6%` → *commit 60% now, stage 40%* (within open-to-buy · MOQ met). **Changes:** fewer stock-outs on hot items; less cash tied up early; buys timed to the price curve. **Keeps:** this category's real lead-time and price behavior.

### Stock Reservation
_Two channels want the same units, and one launch can't be short._
**Today.** Inventory lands; a launch needs it, a tier-A wholesale account asks for it, DTC is selling it live. Your OMS shows available-to-promise — it doesn't know the launch is firm or that DTC velocity just spiked.
**With AgentForge.** Live sell-through, launch commitments, account tier, inbound, and reservation aging assembled. Workspace: `⚠ Contention — SKU 3318` → *reserve launch, partial-release wholesale, cap DTC*. **Changes:** launches that don't run short; key accounts kept whole; less idle reserved stock. **Keeps:** which launches actually pull and which reservations expire.

### Slow-Moving Inventory
_Aging stock is about to become a markdown — act before it strands._
**Today.** A SKU goes quiet in one region while another is short on a near-substitute; the markdown clock ticks. Your system flags aging — it doesn't know another region wants it, the transfer cost, or where it sits on the markdown curve.
**With AgentForge.** Aging by location, regional substitute demand, transfer cost, markdown calendar, carrying cost assembled. Workspace: `⚠ 62 days aging — SKU 9027, markdown in 8 days` → *transfer to East, hold markdown one cycle*. **Changes:** less margin given to markdowns; stock redeployed, not dumped. **Keeps:** this category's true aging behavior.

### New Store / Launch Planning
_A new store opens in three weeks with no sales history to plan from._
**Today.** No local history; the initial stocking quantities are a guess. Your planner needs history it doesn't have — it copies a template or defaults to safety stock, neither tuned to this market.
**With AgentForge.** Comparable-store sell-through, local signals, category norms, restock lead time, opening promo assembled. Workspace: `⚠ No history — Store 214 opens in 21 days` → *comp-weighted buy, over-index performance, lean where restock is fast*. **Changes:** fewer dead openings and empty shelves; capital matched to proven format. **Keeps:** every opening becomes a comp for the next.

### Capacity Allocation
_Production capacity is short, and every order thinks it's first._
**Today.** Demand exceeds the line; three orders compete — one strategic, one high-margin, one at penalty risk. Your scheduler sequences by due date — it doesn't weigh the penalty, the margin, and the strategic value against each other.
**With AgentForge.** Capacity, due dates and penalties, margin, strategic weight, changeover assembled. Workspace: `⚠ Capacity 0.7× demand — line 2` → *sequence C, A, B to avoid penalty and protect tier-A*. **Changes:** penalties avoided; margin and strategic value protected; less idle capacity. **Keeps:** this line's real changeover and throughput behavior.

### SKU Substitution
_The SKU the customer wants is short — what do you offer instead?_
**Today.** An order can't be filled; a near-substitute is in stock, another inbound, the customer has history. Your OMS shows a stock-out — not which substitute this customer will accept or whether the inbound arrives in time.
**With AgentForge.** Substitute availability/fit, inbound timing, customer tolerance, ship window, margin assembled. Workspace: `⚠ Requested SKU out — order #6610, 2-day window` → *offer the 95%-fit in-stock substitute, flag for confirm*. **Changes:** fewer missed windows; fewer returns; substitutions the customer accepts. **Keeps:** each customer's real tolerance.

## Planning · Supplier & Procurement

### Supplier Disruption Response
_A supplier's lead time just doubled, and the orders riding on it are now at risk._
**Today.** An email: lead time 6 → 14 days; three open orders depend on it, one tier-A with a penalty clause. Your ERP records the order — it doesn't read the email, know the clause triggers at ten days, or recognize the account is growing.
**With AgentForge.** Inbound signals, affected orders/accounts, penalty terms, alternates (SLA/cost), account tier assembled. Workspace: `⚠ Margin risk — Order #4821` → *reroute to the in-SLA alternate at +4%* (within auto-approve). **Changes:** penalties avoided; tier-A protected; faster than an inbox allows. **Keeps:** what happened last time this supplier slipped.

### Purchase Order Exceptions
_A PO came back out of tolerance — accept it, or push back?_
**Today.** A confirmation: +3% price, +4 days, −5% qty, dock already expecting it. Your ERP flags the variance — it doesn't know whether 3% is acceptable here or whether the slip breaks a downstream commit.
**With AgentForge.** PO vs confirmation, tolerance bands, downstream commits, supplier leverage, receiving assembled. Workspace: `⚠ Out of tolerance — PO #44120` → *accept price, push the date, absorb short qty from safety stock*. **Changes:** fewer cost/schedule surprises; pushback focused where it matters. **Keeps:** this supplier's reliability and which pushbacks land.

### Expedite-or-Hold
_Pay to expedite, or absorb the delay — which costs less?_
**Today.** A shipment runs late; expedited freight recovers the date at a premium, holding risks a stock-out or penalty. Your TMS quotes a rate — it doesn't weigh the premium against the cost of the delay.
**With AgentForge.** Delay and exposed orders, premium options, stock-out/penalty exposure, SKU criticality assembled. Workspace: `⚠ 3-day delay — shipment S-8841` → *partial-expedite the critical SKUs only* (net-positive vs penalty). **Changes:** premiums paid only where they pay off; penalties avoided; margin protected. **Keeps:** the break-even for this lane and supplier.

### Dual-Source Switching
_Your primary source is wobbling — shift volume to the backup?_
**Today.** Primary quality and OTD are drifting; the qualified alternate costs more but is steady. Your procurement system tracks scorecards — it doesn't decide when the trend is bad enough to move volume, or how much.
**With AgentForge.** Primary trend, alternate capacity/cost, switching cost/qualification, volume at risk, contract assembled. Workspace: `⚠ Primary drift — part 7740: OTD 96%→88%` → *shift 40% to the alternate, keep primary on watch*. **Changes:** exposure reduced before a failure; cost increase contained. **Keeps:** this supplier's real trajectory and the right trigger.

### Supplier Risk Escalation
_A supplier is trending toward failure — act now, or wait for proof?_
**Today.** Weak signals stack — slower acks, a late-payment notice, a quality dip — none conclusive. Your systems hold each signal separately; none assembles them into a risk picture or decides it's time to act.
**With AgentForge.** Financial-distress signals, quality/OTD trend, responsiveness, external risk, exposure assembled. Workspace: `⚠ Risk signals stacking — supplier Atlas` → *escalate: open dual-source, schedule risk review*. **Changes:** failures anticipated, not absorbed; single-source exposure cut early. **Keeps:** which signal combinations actually precede failure.

## Execution · Transportation & Yard Operations

### Trailer Dwell Optimization
_A trailer has sat past its dwell window, and detention is now ticking._
**Today.** A trailer idles three hours over; detention runs, a door frees, a carrier waits. Your yard system shows a dot on a map — and the dot is an estimate, not the truth; it doesn't know the detention clause or the downstream appointment.
**With AgentForge.** Live position with confidence, appointment/door schedule, detention clock and terms, downstream priority assembled. Workspace: `⚠ Dwell 3h 12m over — trailer T-2207` → *reposition to door 14, release the empty*. **Changes:** lower detention spend; higher dock throughput; more on-time departures. **Keeps:** which carriers, doors, and hours behave how.

### Dock Assignment
_Trucks are arriving faster than doors are freeing up._
**Today.** Three inbound within the hour, two doors, thin labor, one reefer. Your WMS shows door status — it doesn't sequence arrivals against labor, load sensitivity, and downstream need.
**With AgentForge.** Inbound ETAs/load types, door capability, labor, handling needs, downstream pick priority assembled. Workspace: `⚠ 3 inbound, 2 doors — facility 7, one reefer` → *reefer → door 3, urgent-pick → door 5, third holds*. **Changes:** no spoiled cold-chain; higher throughput; labor used where it counts. **Keeps:** this facility's real door and labor rhythms.

### Carrier Exceptions
_A shipment just missed its window — reroute, re-promise, or recover?_
**Today.** A delay will miss a tier-A delivery window; an alternate recovers most, a re-promise might be accepted. Your TMS flags the exception — it doesn't know this customer's tolerance or whether recovery is worth the cost.
**With AgentForge.** Revised ETA, customer tier/tolerance, recovery options and cost, commitment terms assembled. Workspace: `⚠ Window miss — load L-5567, tier-A` → *partial-reroute via alternate, notify proactively*. **Changes:** tier-A relationships protected; recovery spend where it earns; fewer surprised customers. **Keeps:** each account's real tolerance.

### Asset Retrieval
_The asset the next step needs can't be found in time._
**Today.** A job needs a specific asset in 40 minutes; its last-known location is stale, two candidates match. Your tracking gives a last-known dot with a confidence you can't see — it doesn't decide whether that's good enough to act on.
**With AgentForge.** Last-known position and confidence, candidate proximity, retriever availability, window, substitute assembled. Workspace: `⚠ Asset needed in 40 min — A-3092, confidence medium` → *dispatch to zone 4, stage substitute as backup*. **Changes:** fewer missed windows; less time chasing stale positions; hedged against bad reads. **Keeps:** which zones and tags to trust, by hour.

### Vehicle Logistics
_The yard is congesting, and the next move sets up the next hour._
**Today.** Vehicles stack — inbound, ready-for-load, finished; space is tight, a lane is blocked, a priority load is due. Your yard system shows a map — not the next move to clear congestion and hit the departure.
**With AgentForge.** Vehicle positions/states, destinations/priority, space and blocked lanes, deadlines, movers assembled. Workspace: `⚠ Yard congesting — priority due in 35 min` → *clear lane B, move priority out, restage*. **Changes:** priority departures kept; congestion cleared faster; fewer deadlocked lanes. **Keeps:** this yard's congestion patterns by shift and volume.

## Execution · Manufacturing Operations

### Work-in-Process Bottlenecks
_A work cell is starving while the material it needs sits two buildings away._
**Today.** Cell 4 is about to run dry; material is staged two buildings over, another cell backs up, shift changes in 90 minutes. Your MES shows the schedule, not the floor — it reports the bottleneck after it forms.
**With AgentForge.** WIP location and confidence, live schedule/cell status, staging/transit, shift labor assembled. Workspace: `⚠ Cell 4 starving — ~22 min to dry` → *expedite the lot, resequence two orders*. **Changes:** higher line utilization; fewer starved cells; less reliance on one supervisor's memory. **Keeps:** the floor's recurring bottlenecks and what cleared them.

### Quality Holds
_A lot failed inspection — release, rework, or scrap?_
**Today.** A lot trips a check, bound for a key customer; rework is slow, scrap costly, a deviation might be acceptable. Your QMS logs the hold — it doesn't weigh the deviation against the customer's real tolerance and the schedule.
**With AgentForge.** Defect type/severity, customer spec/tolerance, rework cost/time, schedule impact, deviation history assembled. Workspace: `⚠ Lot failed — Q-4471, tier-A` → *release under documented deviation* (within customer tolerance). **Changes:** fewer needless scraps/reworks; no escapes; schedule protected. **Keeps:** this defect's real tolerance, by customer.

### Production Line Balancing
_The schedule has drifted, and the line is out of balance._
**Today.** Mid-shift the plan no longer matches reality — one station ahead, another behind, an order moved up, labor uneven. Your MES holds the schedule — it doesn't rebalance labor and sequence against the floor's real rates.
**With AgentForge.** Station rates/status, labor flexibility/skills, order priority/due dates, throughput vs plan, changeover assembled. Workspace: `⚠ Out of balance — station 3 behind, 5 idle` → *shift one operator 5 → 3, resequence priority up*. **Changes:** steadier throughput; due dates held through drift; labor on the bottleneck. **Keeps:** this line's real rates and which moves help.

### Resource Assignment
_The right machine, bay, or crew for the job isn't obvious._
**Today.** A job is ready; the ideal resource is busy, a second is slower, a third needs a changeover. Your scheduler assigns by availability — it doesn't weigh capability against changeover against priority.
**With AgentForge.** Resource capability/status, changeover, job priority/due, capability match, crew skills assembled. Workspace: `⚠ Resource contention — J-2208, ideal busy` → *change over the third, assign now*. **Changes:** higher throughput and yield; fewer idle jobs; resources matched to the work. **Keeps:** each resource's real capability and changeover economics.

## Execution · Claims & Service Operations

### Claims Adjudication
_A claim is filed, and it has to be decided against a contract no one has read in a year._
**Today.** Coverage depends on contract terms, component history, the shop's record, and faint fraud signals; the customer waits. Your claims system routes a task — it doesn't read the contract, recall the shop, or weigh the fraud signal against the SLA.
**With AgentForge.** Contract/coverage, claim/component history, shop record, fraud signals, SLA/authority assembled. Workspace: `⚠ Coverage ambiguity — claim #88412` → *approve at contracted rate, flag partial exclusion* (within authority). **Changes:** tighter loss ratio; faster, more consistent cycle time; defensible decisions. **Keeps:** the patterns — a shop, a component, a fraud signature.

### Fraud & Anomaly Triage
_A claim doesn't quite add up — investigate, fast-track, or route?_
**Today.** Faint anomaly signals — an unusual pattern, a flagged provider, a timing oddity — none conclusive, investigation costly. Your system flags a risk score — it doesn't assemble the weak signals or decide the threshold to investigate.
**With AgentForge.** Anomaly signals/patterns, provider history, claim/customer history, investigation cost, exposure assembled. Workspace: `⚠ Anomaly signals — claim #90233, provider flagged` → *route to SIU, hold payout* (multi-signal). **Changes:** leakage caught earlier; clean claims not slowed; investigation where it counts. **Keeps:** which signal combinations and providers predict loss.

### Adjuster Assignment
_This claim needs the right adjuster or shop — who gets it?_
**Today.** One adjuster has the specialty but a full queue, a shop is closer but mixed-rated, the customer is priority. Your system routes by queue or zone — it doesn't match complexity to specialty against capacity and priority.
**With AgentForge.** Complexity/specialty needed, capacity/ratings, geography/SLA, customer priority, load balance assembled. Workspace: `⚠ Assignment needed — claim #77150` → *assign specialist, rebalance one routine claim off queue*. **Changes:** claims matched to skill; SLAs protected; balanced load. **Keeps:** which matches resolve fastest and cleanest.

### Service Exceptions
_Service fell out of SLA — what's the right make-good?_
**Today.** A missed commitment, an upset customer; credit, expedite, escalation, or follow-up each carry a different cost and effect. Your service system opens a ticket — it doesn't choose a remedy proportional to the customer and the miss.
**With AgentForge.** Breach severity, customer value/history, remedies and cost, past effectiveness, contract assembled. Workspace: `⚠ SLA missed — case #61190, high-value` → *service credit + expedited resolution, owner follow-up* (proportional to value). **Changes:** retained high-value customers; remedies proportional, not reflexive; fewer repeat escalations. **Keeps:** which make-goods actually work, by customer value and miss type.

---

_Under the hood, every one runs the same operating model: verified context assembled, options weighed and adversarially challenged, the decision governed by policy, the outcome learned. The decision changes from one to the next. The architecture does not. → See **How It Works**._
