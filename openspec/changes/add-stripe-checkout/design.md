## Context

First server-rendered route in this project — everything so far has been fully static. Stripe Checkout needs a server-side call (create a Checkout Session) that can't happen at build time.

## Goals / Non-Goals

**Goals:**
- One-time payment for fixed-price packages via Stripe Checkout (hosted), reusable across future client sites
- Prices resolved server-side from trusted config — never trust a client-submitted amount
- Secrets never committed to the repo or exposed client-side

**Non-Goals:**
- Webhook-based payment confirmation/fulfillment tracking — needs persistent storage (D1), which doesn't exist yet. For now, the business owner checks the Stripe dashboard for orders; the success page only confirms the redirect, it doesn't persist a booking record.
- Subscriptions, custom quotes, or Stripe Connect (multi-business payouts) — out of scope for this change.

## Decisions

- **Checkout route**: `src/pages/api/checkout.ts`, `export const prerender = false` — this is the on-demand rendering capability the Cloudflare adapter was configured for from the start (see the original `build-senior-care-site` design). Accepts a `packageId` in the request, looks up the matching Stripe Price ID from `business.ts`, and creates the Checkout Session — never accepts a price/amount from the client.
- **Stripe SDK HTTP client**: must construct the Stripe client with `Stripe.createFetchHttpClient()` — the SDK's default Node `https`-based client doesn't run in the Workers runtime. Getting this wrong fails at runtime, not at build time, so it's called out explicitly here.
- **Secrets**: `STRIPE_SECRET_KEY` set as a Cloudflare Worker secret (dashboard or `wrangler secret put`), read at runtime via `context.locals.runtime.env.STRIPE_SECRET_KEY`. Local dev uses a gitignored `.dev.vars` file with a test-mode key; `.dev.vars.example` is committed to document the required var for future client sites.
- **Packages config**: `business.ts` gains a `packages` array (name, description, priceDisplay, stripePriceId) and a `currency` field (default `usd`).
- **Success page verification**: `/checkout/success` retrieves the Checkout Session by `session_id` (query param Stripe appends on redirect) and confirms `payment_status === 'paid'` before showing confirmation — prevents showing a false "you're booked" if someone just visits the URL directly.
- **Local testing**: `astro dev`/`astro preview` can't run locally on this machine (same macOS 13.5+ / workerd constraint as the original deployment work). This route will be tested via a Cloudflare preview deployment (push to a non-main branch) rather than locally.

## Risks / Trade-offs

- [No webhook/persistence] → Business owner relies on Stripe's own dashboard for order records until the D1-backed booking capability exists. Acceptable for a first version; flagged as the natural next step.
- [Can't test the live Stripe flow locally] → Test via a Cloudflare preview branch deployment before merging to main.
- [Stripe secret key handling] → Never logged, never sent to the client, only read server-side from the Worker secret store.
