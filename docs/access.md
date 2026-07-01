# Request access

> Page mirror for review. Route: `/access`. Destination for every "Request access" / "Start the conversation" CTA across the site (header + all page closings). Replaces the old `mailto:` placeholder.

---

**Eyebrow:** Request access

**Headline:** Start the conversation.

**Lead:** AgentForge is early, and deliberately so — we work closely with a small number of design partners while the decision layer proves itself in real operations. Tell us about your operation, and if there's a fit, you'll hear from a person.

**Form fields:**
- Name (required)
- Work email (required)
- Company
- Your role or operation (optional) — e.g. planning, claims, yard ops
- What would you like to explore? (optional, textarea) — the decision or operation you're weighing AgentForge for

**Submit:** "Request access" · microcopy "No newsletter. Just a conversation."

**Success state:** replaces the form — "Thanks — we'll be in touch. We read every request personally. If there's a fit, you'll hear from a person, not a drip campaign."

---

## Implementation notes (not shown to visitors)

- **Capture backend:** [Web3Forms](https://web3forms.com) — no backend/server, no account. Submissions POST client-side to Web3Forms and are emailed to `hello@agentforgeos.ai`.
- **To go live:** create a free Web3Forms access key (enter `hello@agentforgeos.ai` at web3forms.com — key is emailed, ~2 min), then set **`NEXT_PUBLIC_WEB3FORMS_KEY`** in Vercel → Project → Settings → Environment Variables, and redeploy.
- **Graceful fallback:** until the key is set, the form degrades to a prefilled `mailto:hello@agentforgeos.ai` on submit — never a dead end, never a silent drop. Spam-protected via a hidden honeypot field.
- **Swap-friendly:** if we later prefer a scheduling link (Cal.com/Calendly) or a different form service, only the submit handler in `src/components/site/access-form.tsx` changes — the page, CTAs, and copy stay.
