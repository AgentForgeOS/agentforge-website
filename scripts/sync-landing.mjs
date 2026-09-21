#!/usr/bin/env node
/**
 * Sync the VSC campaign landing page into public/.
 *
 * The page is AUTHORED in the agentforge-demo repo, next to the product
 * screenshots it is made of, and reviewed there as a file and as a PDF. This
 * copies it here to be served. Do not edit the copy in public/ — it is
 * overwritten every time this runs.
 *
 *   node scripts/sync-landing.mjs
 *   LANDING_SRC=/some/other/path node scripts/sync-landing.mjs
 *
 * THE ONE TRANSFORM: a <base> tag is injected.
 *
 * The source uses relative image paths (img/...) so it can be opened straight
 * off disk and printed to PDF. Served at /underwriting-surveillance — with no
 * trailing slash — a browser resolves those against the site root and every
 * screenshot 404s. <base> pins them without touching the source, which keeps
 * the authored file printable.
 */

import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const REPO = resolve(HERE, '..')

const SRC = process.env.LANDING_SRC
  ? resolve(process.env.LANDING_SRC)
  : resolve(REPO, '../agentforge-demo/docs/marketing/vsc-landing')

const ROUTE = 'underwriting-surveillance'
const DEST = join(REPO, 'public', ROUTE)

if (!existsSync(join(SRC, 'index.html'))) {
  console.error(`No index.html under ${SRC}\nSet LANDING_SRC if the demo repo lives elsewhere.`)
  process.exit(1)
}

await rm(DEST, { recursive: true, force: true })
await mkdir(DEST, { recursive: true })

let html = await readFile(join(SRC, 'index.html'), 'utf8')
const base = `<base href="/${ROUTE}/">`

if (!html.includes('<head>')) {
  console.error('No <head> in the source page; cannot inject <base>.')
  process.exit(1)
}
html = html.replace(
  '<head>',
  `<head>\n<!-- injected by scripts/sync-landing.mjs — do not edit this copy -->\n${base}`,
)

await writeFile(join(DEST, 'index.html'), html)

/**
 * Only the screenshots the page actually references.
 *
 * The source folder is a working library — cropped variants, retired plates,
 * alternatives that were considered and dropped. Copying it wholesale shipped
 * 3.3MB to production, most of it screenshots of a dealer the page no longer
 * mentions. Parse the src attributes and take exactly those.
 */
const used = [...html.matchAll(/<img[^>]+src="img\/([^"]+)"/g)].map((m) => m[1])
if (used.length === 0) {
  console.error('No img/ references found in the page — refusing to sync an imageless copy.')
  process.exit(1)
}

await mkdir(join(DEST, 'img'), { recursive: true })
let bytes = 0
for (const name of new Set(used)) {
  const from = join(SRC, 'img', name)
  if (!existsSync(from)) {
    console.error(`Page references img/${name}, which does not exist in the source.`)
    process.exit(1)
  }
  await cp(from, join(DEST, 'img', name))
  bytes += (await readFile(from)).byteLength
}

console.log(
  `Synced ${SRC}\n     -> public/${ROUTE}/  (served at /${ROUTE} and /vsc)\n` +
    `     ${new Set(used).size} screenshots, ${(bytes / 1e6).toFixed(1)}MB`,
)
