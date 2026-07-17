## 1. Project setup

- [x] 1.1 Scaffold an Astro project in `mywebsite/` with TypeScript
- [x] 1.2 Add Tailwind CSS integration
- [x] 1.3 Add the Cloudflare adapter/output target (static output for now, keeping the option to switch routes to server-rendered later)
- [x] 1.4 Commit the initial scaffold

## 2. Design system

- [x] 2.1 Define the warm-autumn palette as Tailwind theme tokens (terracotta `#C1592B`, warm amber `#D98E3B`, espresso `#2B1B14`, warm brown `#3B241A`, blush sand `#F3E0D2`, warm cream `#FBF3E7`)
- [x] 2.2 Set base typography (serif display headings, sans/serif body) matching the warm, professional, reliable tone

## 3. Site shell

- [x] 3.1 Build shared layout component (nav + footer) used by all pages
- [x] 3.2 Build responsive navigation with links to Home, About/Services, Blog, Contact, and a CTA button to Contact
- [x] 3.3 Verify responsive behavior at mobile, tablet, desktop widths

## 4. Business content

- [x] 4.1 Create `src/config/business.ts` populated with content from the reference site:
  - Name: "Reliable Senior Home Care" · Tagline: "Reliable Support for Seniors at Home"
  - Services (6): Culturally Matched Companionship; Errands & Light Household Help; Tech Help & Online Safety; Help with Small Fixes Around the Home; Dementia-Safe Engagement; Post-Hospital Recovery Support (each with its full description, verbatim from the reference site)
  - Founder story: immigrant with elderly family living far away, inspired to build the kind of care they'd want for their own family
  - Trust points (5): consistent/familiar caregivers, weekly check-ins, cultural/language alignment, background-checked helpers, no long-term commitment (3–5 visit packages)
- [x] 4.2 Build home page (hero, services summary, trust points, CTA) reading from config
- [x] 4.3 Build about/services page (all 6 services + founder story) reading from config
- [x] 4.4 Build contact page embedding a Google Form (placeholder embed URL until the user provides their form's URL)

## 5. Blog

- [x] 5.1 Define blog content collection schema (title, date, excerpt, tags) in `src/content.config.ts`
- [x] 5.2 Build blog listing page, newest-first
- [x] 5.3 Build individual post page template
- [x] 5.4 Write one sample post to verify the end-to-end publishing flow (add file → commit → push → live) — verified locally through build; git push happens once a Cloudflare Pages project exists (task 6)

## 6. Deployment

- [ ] 6.1 Create a Cloudflare Pages project connected to this git repository
- [ ] 6.2 Configure build command/output directory for the Astro static build
- [ ] 6.3 Push to main and verify auto-deploy publishes the site
- [ ] 6.4 Verify a deliberately broken build does not replace the live deployment, then revert

## 7. Validation

- [ ] 7.1 Walk through every page on the deployed site and confirm content, palette, and navigation match specs
- [ ] 7.2 Confirm mobile responsiveness on the live deployment
