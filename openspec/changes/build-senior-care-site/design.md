## Context

Static site now; must be reusable for a different business later; must support adding an intake/matching backend later without migrating hosts.

## Goals / Non-Goals

**Goals:**
- Static site on Cloudflare Pages free tier
- Business content in one config file, separate from templates
- Blog = markdown file + git push, no CMS/API
- Path to add serverless functions + DB later, same platform

**Non-Goals:**
- Intake questionnaire / matching logic (future change)
- Multi-tenant runtime — reuse means fork the repo and swap the config
- CMS or non-technical editing UI

## Decisions

- **Astro**: static by default; specific routes can switch to server-rendered later (`output: 'hybrid'`) for a future `/api/intake` endpoint, no host migration needed
- **Cloudflare Pages**: free static hosting; Pages Functions + D1 are the natural next step on the same platform
- **Content**: `src/config/business.ts` (typed) drives all page copy; `src/content/blog/*.md` collection for posts
- **Styling**: Tailwind, palette as theme tokens — terracotta `#C1592B`, amber `#D98E3B`, espresso `#2B1B14`, warm brown `#3B241A`, blush sand `#F3E0D2`, warm cream `#FBF3E7`
- **Initial content source**: business name, tagline, services, founder story, and trust points for `business.ts` come verbatim from the reference site (sites.google.com/view/reliable-senior-home-care) — see tasks.md 4.1 for full copy. Used as-is.
- **Contact method**: embedded Google Form (same pattern as the reference site), not `mailto:`/`tel:` links — no personal email/phone needs to be published, and no backend is required since Google Forms handles submission. The actual form URL is still needed from the user before the contact page is finished.
