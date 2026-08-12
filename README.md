# Reliable Senior Home Care — SMB Website Template

**🔗 Live site: [mywebsite.sofi777.workers.dev](https://mywebsite.sofi777.workers.dev)**

A production website built pro bono for a friend's senior home care business — and designed from the start as a reusable template for any small business, not a one-off.

## Why I built this

A friend starting a senior home care business needed a real site: something that could take payments, that she could update herself without calling a developer every time a price or a sentence changed, and that didn't come with a monthly hosting bill for a pre-revenue business. That's three product requirements, and the interesting part wasn't building a website — it was making those three work together without contradicting each other:

- **Take real payments** — Stripe Checkout for fixed-price service packages, without building or hosting a custom payment flow
- **Non-technical content editing** — she can rewrite copy, swap images, and add blog posts herself through a normal web UI, with zero code access
- **Zero infrastructure cost** — the entire stack (hosting, CMS auth, content storage) runs on free tiers
- **Reusable, not bespoke** — every business-specific detail (name, copy, palette, services, pricing) lives in one config layer, decoupled from the templates, so this becomes the starting point for the next client site rather than a rebuild

## What it does

- **Marketing site** — home, about/services, contact, blog — content-driven, not hardcoded
- **Payments** — Stripe Checkout for fixed-price packages, server-rendered session creation, verified success/cancel pages
- **Content editing** — a git-backed CMS ([Sveltia CMS](https://github.com/sveltia/sveltia-cms)) at `/admin`, authenticated via GitHub OAuth, lets an editor change any text or image without touching code; edits commit straight to GitHub and auto-deploy
- **$0 infrastructure** — [Cloudflare Workers](https://developers.cloudflare.com/workers/) for hosting (auto-deploy on git push) plus a small Worker relaying CMS login — all on free tiers

> The `/admin` CMS is gated behind GitHub OAuth (repo write access), so it isn't open for public preview — that's the point: it's the actual permission boundary between "anyone can view the site" and "only an authorized editor can change it."

## Stack

Astro + TypeScript + Tailwind, deployed to Cloudflare Workers via Workers Builds (push to `main` → auto-deploy). Content modeled as Astro Content Collections (schema-validated, git-backed) rather than hardcoded — see [`openspec/specs/`](openspec/specs/) for the full behavioral spec and [`openspec/changes/archive/`](openspec/changes/archive/) for the design decisions and trade-offs behind each major piece (Stripe integration, CMS architecture, tool selection).

## Using this as a template

Every business-specific detail lives in `src/content/business/business.yaml` (identity, services, packages) and `src/content/blog/` (posts) — fork the repo, swap that content and the design tokens in `openspec/config.yaml`, and the templates, payment flow, and CMS wiring all carry over unchanged.
