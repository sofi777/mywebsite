## Context

Everything today is either a compiled TS object (`business.ts`) or plain markdown (`src/content/blog/`), edited directly in a code editor and deployed via git push. There's no way for a non-technical editor to change text or (in future sites) images without opening the codebase. The project already treats business content as decoupled config (see `openspec/config.yaml` context and the original `build-senior-care-site` design); this change extends that one step further — from "a code editor can edit a config file" to "a UI can edit it, and the same git-based deploy pipeline picks it up."

## Goals / Non-Goals

**Goals:**
- Non-technical editing of text and images through a UI, no code touched
- Saves commit straight to GitHub, reusing the existing Cloudflare Workers Builds pipeline — no parallel deploy path
- Reusable as a template: forking for a new client site means swapping the data file + CMS config, not rebuilding the CMS wiring
- Keep `business.ts`'s type safety for templates — only the data source moves, not the contract

**Non-Goals:**
- Rich structured content beyond current site sections (no page-builder/drag-drop layout editing)
- Multi-user roles/permissions beyond whatever GitHub repo collaborator permissions already provide
- Editing Stripe Price IDs through the CMS — package name/description yes, but wiring new Stripe products stays in the `add-stripe-checkout` flow; keep the two changes independent

## Decisions

- **CMS tool: Sveltia CMS** (confirmed) — Decap CMS is effectively unmaintained (hundreds of open issues, no active development) and its simplest auth path (`git-gateway`) requires Netlify Identity, which doesn't exist on Cloudflare; a plain GitHub backend on Decap means self-hosting an OAuth proxy from scratch. Sveltia CMS is actively maintained, ships a ready-made Cloudflare Workers script for GitHub OAuth (`sveltia/sveltia-cms-auth`), is a fraction of the bundle size, and works on mobile. Config format is Decap-compatible, so this isn't a lock-in decision either way.
- **Content source**: model business identity as an Astro Content Collection (`src/content/business/business.yaml`, schema in `src/content.config.ts`) rather than a plain YAML import — the same pattern the blog already uses. Reason over a plain YAML+manual-interface extraction: a Zod schema gives build-time validation (a bad CMS edit fails the build with a clear error instead of shipping `undefined` to a page) and auto-derived types instead of a hand-maintained interface that can drift from the data shape. `business.ts` resolves the entry once via a top-level `await getEntry(...)` at module scope, so every existing `import { business } from '~/config/business'` call site is unaffected.
- **Blog**: no structural change — CMS points a folder collection at `src/content/blog/*.md` with a field schema matching existing frontmatter (title, date, excerpt, tags). Already git-based markdown; the CMS is just a form on top.
- **Media**: CMS media library writes to `public/uploads/`, committed to git like everything else. Reason over `src/assets/`: files there are served as-is at a stable URL path (`/uploads/...`), matching how a CMS field stores a plain path string — `src/assets/` requires each image to be imported and run through Astro's build-time image pipeline, which doesn't fit an arbitrary CMS-uploaded path.
- **Auth boundary**: the `/admin` route itself is unauthenticated static HTML (standard for Decap/Sveltia) — the real gate is GitHub OAuth requiring repo write access. Anyone can open `/admin`, only a GitHub collaborator can save.

## Risks / Trade-offs

- [TS → content collection extraction touches `business.ts`'s internals] → mechanical (schema + one `getEntry` call), but should be its own task with a full grep-and-verify pass across every `import { business }` call site, not a side effect of another task.
- [Sveltia CMS is a smaller project than Decap, pre-1.0] → actively maintained (1.0 expected 2026) unlike Decap; drop-in config compatibility means switching later is a config change, not a rewrite.
- [No local preview of `/admin`] → same `astro dev`/workerd constraint as `add-stripe-checkout`; verify via a Cloudflare preview deployment.
