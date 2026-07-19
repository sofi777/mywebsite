## Why

Businesses need a way to take payment for fixed-price service packages online. Stripe Checkout (hosted, pay-per-transaction, no monthly fee) is the standard fit and keeps this reusable across future client sites — swap package data and Stripe keys, same flow.

## What Changes

- Add fixed-price packages to the business config (name, description, price, Stripe Price ID)
- Add a packages/pricing section to the site with a "Book this package" button per package
- Add a server-rendered checkout endpoint that creates a Stripe Checkout Session and redirects
- Add success and cancel pages for the post-checkout redirect
- Stripe secret key stored as a Cloudflare Worker secret, never exposed client-side or committed to the repo

## Capabilities

### New Capabilities
- `payments`: Stripe Checkout Session creation and the success/cancel redirect pages

### Modified Capabilities
- `business-content`: config gains a `packages` list; add a packages/pricing section to the site

## Impact

New server-rendered route (`export const prerender = false`), first use of the Cloudflare adapter's on-demand rendering in this project. Requires a Stripe account and a `STRIPE_SECRET_KEY` secret set on the Cloudflare Worker (set directly by the user, not through this change).
