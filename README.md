# Reliable Senior Home Care — SMB Website Template

**🔗 Live site: [mywebsite.sofi777.workers.dev](https://mywebsite.sofi777.workers.dev)**

A test website built for a friend that wanted to start a senior home care business.
Designed from as a reusable template for any small business, in case I would want to build it for a real business.

## What it does

- **Marketing site** — home, about/services, contact, blog 
- **Payments** — Stripe Checkout for fixed-price packages, server-rendered session creation, verified success/cancel pages
- **Content editing** — a git-backed CMS ([Sveltia CMS](https://github.com/sveltia/sveltia-cms)) at `/admin`, authenticated via GitHub OAuth, lets an editor change any text or image without touching code; edits commit straight to GitHub and auto-deploy
- **$0 infrastructure** — [Cloudflare Workers](https://developers.cloudflare.com/workers/) for hosting (auto-deploy on git push) plus a small Worker relaying CMS login — all on free tiers

> The `/admin` CMS is gated behind GitHub OAuth (repo write access), so it isn't open for public preview — that's the point: it's the actual permission boundary between "anyone can view the site" and "only an authorized editor can change it."

## Stack

Astro + TypeScript + Tailwind, deployed to Cloudflare Workers via Workers Builds (push to `main` → auto-deploy). Content modeled as Astro Content Collections (schema-validated, git-backed) rather than hardcoded — see [`openspec/specs/`](openspec/specs/) for the full behavioral spec and [`openspec/changes/archive/`](openspec/changes/archive/) for the design decisions and trade-offs behind each major piece (Stripe integration, CMS architecture, tool selection).

## Using this as a template

Every business-specific detail lives in `src/content/business/business.yaml` (identity, services, packages) and `src/content/blog/` (posts) — fork the repo, swap that content and the design tokens in `openspec/config.yaml`, and the templates, payment flow, and CMS wiring all carry over unchanged.
