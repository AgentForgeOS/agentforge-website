/**
 * Generate standalone Decision Model documents — one per model — from the single
 * structured source (src/lib/solutions-data.ts). Treats Decision Models as future
 * product assets: consistent template, drift-free with what the website renders.
 *
 *   npm run docs:models
 *
 * Do not hand-edit the output. Edit the source and regenerate. When the ontology
 * is validated with design partners, promote docs/decision-models/ into the
 * product documentation hierarchy (agentforge-demo/docs/product/).
 */
import { mkdir, writeFile, rm } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { GROUPS, DEEP_MODELS, ARCH_NOTE, type DeepModel } from "../src/lib/solutions-data";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(root, "docs", "decision-models");

const bullets = (xs: string[]) => xs.map((x) => `- ${x}`).join("\n");

function modelDoc(m: DeepModel): string {
  const t = m.terminal;
  return `---
title: ${m.name}
slug: ${m.slug}
group: ${m.group}
capability: ${m.capability}
status: draft
template_version: 1
generated: true
source: src/lib/solutions-data.ts
---

# ${m.name}

> _${m.situationLine}_ · ${m.group} → ${m.capability}

## The decision
${m.decision}

## Why it's hard today
${m.whyHard}

## Why existing systems stop here
${m.whySystemsFail}

## Operational context assembled
${bullets(m.context)}

## The governed decision — Decision Workspace
\`\`\`
${t.title}
${t.flag}
Evidence assembled
${t.evidence.map((e) => ` · ${e}`).join("\n")}
${t.recHeading}
 ${t.policy}
[ ${t.actions.join(" ] [ ")} ]
\`\`\`

**Recommendation.** ${m.recommendation}

## Policy & constraints
${bullets(m.policy)}

## What changes
${bullets(m.outcomes)}

## The knowledge it keeps
${m.knowledge}

## Architecture
${ARCH_NOTE}
`;
}

function readme(): string {
  const index = GROUPS.map((g) => {
    const caps = g.capabilities
      .map((c) => {
        const framing = c.framing ? `\n  _${c.framing}_\n` : "";
        const items = c.models.map((mm) => `  - [${mm.name}](./${mm.slug}.md) — ${mm.line}`).join("\n");
        return `- **${c.name}**${framing}\n${items}`;
      })
      .join("\n");
    return `### ${g.title}\n_${g.blurb}_\n\n${caps}`;
  }).join("\n\n");

  return `# Decision Models

Standalone, consistently-templated documents for every AgentForge **Decision Model** — treated as future **product assets**, not website copy.

**Status:** pre-promotion. The ontology is still being validated with design partners. Once stable, promote these into the Product documentation hierarchy (\`agentforge-demo/docs/product/\`).

**Source of truth:** \`src/lib/solutions-data.ts\`. These files are **generated** — run \`npm run docs:models\` to regenerate. Do not hand-edit; edit the source and regenerate so the docs never drift from what the website renders.

**Catalog:** ${DEEP_MODELS.length} Decision Models · one canonical template (the moment → why it's hard → why existing systems stop → context assembled → the governed Decision Workspace → policy → what changes → the knowledge it keeps → architecture).

---

${index}
`;
}

async function main() {
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });
  for (const m of DEEP_MODELS) {
    await writeFile(join(OUT, `${m.slug}.md`), modelDoc(m), "utf8");
  }
  await writeFile(join(OUT, "README.md"), readme(), "utf8");
  console.log(`✓ Generated ${DEEP_MODELS.length} Decision Model docs + README in docs/decision-models/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
