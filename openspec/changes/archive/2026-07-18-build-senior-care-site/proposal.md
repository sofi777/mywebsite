## Why

Ship a warm, professional senior home care website cheaply, on an architecture reusable for other businesses and extensible with a backend later.

## What Changes

- Static site (home, about/services, blog, contact) in warm-autumn palette (terracotta/espresso/cream)
- Business content in a config file, not hardcoded, so the codebase can be reused for a different business
- Markdown blog, published by git push (no CMS)
- Cloudflare Workers (Workers Builds), git-based auto-deploy
- Framework choice keeps a path open to add serverless functions + a database later, same host

## Capabilities

### New Capabilities
- `site-shell`: layout, nav, footer, warm-autumn theme tokens
- `business-content`: config-driven business info + home/about/contact pages
- `blog`: markdown posts, listing page, post pages
- `deployment`: Cloudflare Workers auto-deploy (Workers Builds)

### Modified Capabilities
- None (first change)

## Impact

New Astro codebase in `mywebsite/`. New Cloudflare Workers project. No backend/database in this change.
