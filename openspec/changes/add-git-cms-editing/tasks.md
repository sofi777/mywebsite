## 1. CMS setup (user-owned)

- [x] 1.1 CMS tool decided: Sveltia CMS (see design.md decision)
- [x] 1.2 GitHub OAuth set up via Sveltia's Cloudflare Workers auth script — deployed at `https://sveltia-cms-auth.sofi777.workers.dev`, wired into `config.yml`'s `base_url`
- [ ] 1.3 User confirms which GitHub collaborators should have write access (the actual save-permission gate). For now, CMS backend points at `mywebsite` directly, used only by the repo owner — fine, since there's no one to protect code from yet.

## 1a. Content-only repo (deferred — do before inviting any non-owner CMS editor)

Private repos on GitHub Free can't do path-scoped branch protection, so a collaborator with CMS access also has full code write access. Decided approach: split content into a separate repo the editor gets access to instead, with zero app code in it — the strongest guarantee, no plan upgrade needed. Deferred until there's an actual editor to onboard; doesn't require redoing any work above (the content collection schema, `business.ts` loader, and CMS field mappings are repo-agnostic — they only care about file paths at build time).

- [ ] 1a.1 Create a new repo (e.g. `mywebsite-content`) containing `src/content/business/`, `src/content/blog/`, `public/uploads/`
- [ ] 1a.2 Add a sync mechanism: a GitHub Action in the content repo, triggered on push, that copies the changed paths into `mywebsite` using a machine credential (PAT or GitHub App install token) scoped to that sync job — the human editor never holds a credential with `mywebsite` access
- [ ] 1a.3 Update `public/admin/config.yml`'s `backend.repo` to point at the content repo instead of `mywebsite`
- [ ] 1a.4 Invite the content editor as a collaborator on the content repo only

## 2. Content extraction

- [x] 2.1 Define a `business` collection schema (Zod) in `src/content.config.ts`, mirroring the current `Business`/`Service`/`Package` interfaces
- [x] 2.2 Create `src/content/business/business.yaml` with the current `business.ts` object's data
- [x] 2.3 Update `src/config/business.ts` to resolve the entry via a top-level `await getEntry('business', 'business')` and re-export `.data` as `business`, typed from the schema
- [x] 2.4 Grep every `import { business } from` call site and verify no breakage
- [x] 2.5 Confirm a deliberately malformed field in the YAML fails the build with a clear Zod error

## 3. CMS config

- [x] 3.1 Add `public/admin/index.html` (Sveltia CMS entry point, loaded from its CDN script) and `public/admin/config.yml`
- [x] 3.2 Map `src/content/business/business.yaml` fields to CMS fields (name, tagline, services, founder story, trust points, packages name/description — `id`/`stripePriceId` included read-only so they survive saves)
- [x] 3.3 Add a blog folder collection pointing at `src/content/blog/*.md` with fields matching current frontmatter (title, date, excerpt, tags)
- [x] 3.4 Configure the git-backed media library (`public/uploads/`)

## 4. Deploy & verify

- [ ] 4.1 Push to a non-main branch, verify `/admin` loads on the Cloudflare preview deployment
- [ ] 4.2 Log in via GitHub OAuth, confirm unauthenticated visitors can't save
- [ ] 4.3 Edit a text field, save, verify the commit lands and triggers a deploy
- [ ] 4.4 Upload an image, verify it's committed and renders after deploy
- [ ] 4.5 Merge to main once verified, confirm production deploy
