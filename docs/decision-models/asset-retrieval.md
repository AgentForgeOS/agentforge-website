---
title: Asset Retrieval
slug: asset-retrieval
group: Execution
capability: Transportation & Yard Operations
status: draft
template_version: 1
generated: true
source: src/lib/solutions-data.ts
---

# Asset Retrieval

> _The asset the next step needs can't be found in time._ · Execution → Transportation & Yard Operations

## The decision
A job needs a specific container, trailer, or tool, and its last-known location is stale. Two candidates match — one closer but uncertain — and the job starts in 40 minutes. Send a retriever to the likely one, search, or stage a substitute?

## Why it's hard today
Chase the wrong location and you burn the window; wait for certainty and you're late. Asset positions are probabilistic — last-seen, not live — and confidence varies by zone and tag.

## Why existing systems stop here
Your tracking system gives a last-known position with a confidence you can't see; it doesn't decide whether that confidence is good enough to act on, or what to do if it isn't. It shows a dot, not a retrieval plan.

## Operational context assembled
- Last-known position and confidence
- Candidate matches and proximity
- Retriever availability
- Job start window
- Substitute options

## The governed decision — Decision Workspace
```
decision-workspace · retrieval · asset A-3092
⚠ Asset needed in 40 min — A-3092, location confidence medium
Evidence assembled
 · Last seen zone 4, 18 min ago (medium confidence)
 · Second candidate in zone 7, low confidence
 · One retriever free
 · Substitute available but slower
Recommendation · dispatch to zone 4, stage substitute as backup
 Policy: within window · retriever available · awaiting yard lead
[ Decision Object #A3092 ] [ Evidence ×4 ] [ Policy ✓ ] [ Dispatch ] [ Substitute ]
```

**Recommendation.** Dispatch to the higher-confidence location while staging the substitute as a hedge — making the window either way — under your retrieval policy.

## Policy & constraints
- Confidence thresholds for action
- Window-protection rules
- Retriever-allocation limits
- Substitute-fallback rules

## What changes
- Fewer missed job windows
- Less time burned chasing stale positions
- Hedged against bad reads

## The knowledge it keeps
Each retrieval and whether the asset was where expected is kept, so the model learns which zones and tags to trust, by hour and condition.

## Architecture
Underneath, this is the same operating model the rest of the platform runs: verified context is assembled, options are weighed and adversarially challenged, the decision is governed by your policy, and the outcome is learned. The decision changes from one of these to the next. The architecture does not.
