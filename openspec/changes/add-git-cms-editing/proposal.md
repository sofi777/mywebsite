## Why

Content edits (text, and eventually images) currently require touching code — editing `src/config/business.ts` or committing markdown directly. Non-technical editing through a UI, without touching code, is needed for this site — and needs to be reusable as-is when this codebase is forked into a template for future client sites.

## What Changes

- Add a git-backed CMS admin UI (Sveltia CMS, Decap-compatible) at `/admin`, authenticated via GitHub OAuth
- Add a CMS config (`public/admin/config.yml`) mapping every editable field to its source file
- Extract currently-hardcoded content out of `src/config/business.ts` into a CMS-editable data file (YAML/JSON); `business.ts` becomes a typed loader over that data so templates keep type safety
- Wire the existing blog markdown collection (`src/content/blog/`) into the CMS as a folder collection with a matching frontmatter schema
- Saving in the CMS commits directly to GitHub, flowing through the existing Cloudflare Workers Builds auto-deploy pipeline — no new deploy mechanism
- Add a git-backed media library for image uploads, even though the current site has no content images yet — needed for template reuse

## Capabilities

### New Capabilities
- `content-editing`: CMS admin UI, field-to-source mapping, auth, git-backed media library

### Modified Capabilities
- `business-content`: content source moves from a hardcoded TS object to a CMS-editable data file
- `blog`: existing markdown collection gets a CMS-editable frontmatter schema (no change to rendering)

## Impact

- New static route `/admin` (CMS bundle)
- `business.ts` internal structure changes (data extracted to YAML/JSON); every template's `import { business } from '~/config/business'` call site is unaffected
- Requires a GitHub OAuth setup (App, or Sveltia's hosted proxy) before the CMS can save — external account setup, not code
- Independent of `add-stripe-checkout` (in progress in parallel) — touches `business.ts` structure, not the `packages`/Stripe fields it's adding; reconcile on merge if both land close together
