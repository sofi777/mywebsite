## 1. CMS setup (user-owned)

- [ ] 1.1 User decides Sveltia CMS vs Decap CMS (see design.md decision) and confirms
- [ ] 1.2 User sets up GitHub OAuth (Sveltia hosted proxy, or a self-hosted proxy if Decap is chosen)
- [ ] 1.3 User confirms which GitHub collaborators should have write access (the actual save-permission gate)

## 2. Content extraction

- [ ] 2.1 Define a `business` collection schema (Zod) in `src/content.config.ts`, mirroring the current `Business`/`Service`/`Package` interfaces
- [ ] 2.2 Create `src/content/business/business.yaml` with the current `business.ts` object's data
- [ ] 2.3 Update `src/config/business.ts` to resolve the entry via a top-level `await getEntry('business', 'business')` and re-export `.data` as `business`, typed from the schema
- [ ] 2.4 Grep every `import { business } from` call site and verify no breakage
- [ ] 2.5 Confirm a deliberately malformed field in the YAML fails the build with a clear Zod error

## 3. CMS config

- [ ] 3.1 Add `public/admin/index.html` (CMS entry point) and `public/admin/config.yml`
- [ ] 3.2 Map `src/content/business/business.yaml` fields to CMS fields (name, tagline, services, founder story, trust points, packages name/description)
- [ ] 3.3 Add a blog folder collection pointing at `src/content/blog/*.md` with fields matching current frontmatter (title, date, excerpt, tags)
- [ ] 3.4 Configure the git-backed media library (`src/assets/uploads/`)

## 4. Deploy & verify

- [ ] 4.1 Push to a non-main branch, verify `/admin` loads on the Cloudflare preview deployment
- [ ] 4.2 Log in via GitHub OAuth, confirm unauthenticated visitors can't save
- [ ] 4.3 Edit a text field, save, verify the commit lands and triggers a deploy
- [ ] 4.4 Upload an image, verify it's committed and renders after deploy
- [ ] 4.5 Merge to main once verified, confirm production deploy
