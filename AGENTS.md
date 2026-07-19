## Project status

Business site for a senior home care company, built to be reusable as a template for future client sites (an agency idea the user is exploring — see memory). Warm-autumn design system, config-driven content (`src/config/business.ts`), markdown blog, Stripe Checkout for fixed-price packages (in progress).

Read `openspec/specs/*/spec.md` for current behavior and `openspec/changes/archive/*/design.md` for why things were built this way before making changes. Deployed to Cloudflare Workers via Workers Builds (git push to `main` auto-deploys) — see `openspec/specs/deployment/spec.md`.

**Known constraint:** `astro dev` / `astro preview` do NOT work on this machine — the Cloudflare adapter needs `workerd`, which requires macOS 13.5+, and this machine is on 13.3. Use `astro build` + serve `dist/client` with a plain static server (e.g. `python3 -m http.server`) to preview static pages locally. Server-rendered routes (like `/api/checkout`) can only be tested via a Cloudflare preview deployment (push to a non-main branch), not locally.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
