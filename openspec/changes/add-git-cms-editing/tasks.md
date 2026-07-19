## 1. CMS setup (user-owned)

- [x] 1.1 CMS tool decided: Sveltia CMS (see design.md decision)
- [ ] 1.2 User sets up GitHub OAuth via Sveltia's Cloudflare Workers auth script (`sveltia/sveltia-cms-auth`)
- [ ] 1.3 User confirms which GitHub collaborators should have write access (the actual save-permission gate)

## 2. Content extraction

- [x] 2.1 Define a `business` collection schema (Zod) in `src/content.config.ts`, mirroring the current `Business`/`Service`/`Package` interfaces
- [x] 2.2 Create `src/content/business/business.yaml` with the current `business.ts` object's data
- [x] 2.3 Update `src/config/business.ts` to resolve the entry via a top-level `await getEntry('business', 'business')` and re-export `.data` as `business`, typed from the schema
- [x] 2.4 Grep every `import { business } from` call site and verify no breakage
- [x] 2.5 Confirm a deliberately malformed field in the YAML fails the build with a clear Zod error

## 3. CMS config

- [ ] 3.1 Add `public/admin/index.html` (Sveltia CMS entry point, loaded from its CDN script) and `public/admin/config.yml`
- [ ] 3.2 Map `src/content/business/business.yaml` fields to CMS fields (name, tagline, services, founder story, trust points, packages name/description)
- [ ] 3.3 Add a blog folder collection pointing at `src/content/blog/*.md` with fields matching current frontmatter (title, date, excerpt, tags)
- [ ] 3.4 Configure the git-backed media library (`src/assets/uploads/`)

## 4. Deploy & verify

- [ ] 4.1 Push to a non-main branch, verify `/admin` loads on the Cloudflare preview deployment
- [ ] 4.2 Log in via GitHub OAuth, confirm unauthenticated visitors can't save
- [ ] 4.3 Edit a text field, save, verify the commit lands and triggers a deploy
- [ ] 4.4 Upload an image, verify it's committed and renders after deploy
- [ ] 4.5 Merge to main once verified, confirm production deploy
