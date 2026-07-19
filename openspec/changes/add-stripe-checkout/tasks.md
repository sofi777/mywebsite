## 1. Stripe setup (user-owned)

- [x] 1.1 User confirms/creates a Stripe account (test mode)
- [x] 1.2 User creates a Product + Price in Stripe for each package to sell, notes the Price IDs
- [x] 1.3 User sets `STRIPE_SECRET_KEY` as a Cloudflare Worker secret (dashboard or `wrangler secret put`) — not entered by the agent

## 2. Config

- [x] 2.1 Add `packages` (name, description, priceDisplay, stripePriceId) and `currency` to `business.ts`
- [x] 2.2 Install the `stripe` package
- [x] 2.3 Add `.dev.vars.example` documenting `STRIPE_SECRET_KEY`; add `.dev.vars` to `.gitignore`

## 3. Checkout flow

- [x] 3.1 Build `src/pages/api/checkout.ts` (`prerender = false`) — resolves package server-side, creates a Stripe Checkout Session using the fetch-based HTTP client, redirects
- [x] 3.2 Build `/checkout/success` — verifies `payment_status === 'paid'` via the Stripe API before confirming
- [x] 3.3 Build `/checkout/cancel`
- [x] 3.4 Add a packages/pricing section (reading from config) with "Book this package" buttons wired to the checkout endpoint

## 4. Deploy & verify

- [x] 4.1 Push to a non-main branch, verify Cloudflare generates a preview deployment — done, but preview versions don't inherit dashboard-set secrets (Cloudflare limitation), so final verification happened on production instead (safe: test-mode keys, no real charges)
- [x] 4.2 On the preview URL, complete a real test-mode checkout end to end (Stripe test card) and confirm the success page only shows confirmation for the paid session — confirmed on production: real test-mode payment completed, success page showed correct confirmation
- [x] 4.3 Verify the cancel flow redirects correctly without charging — verified by code review (`cancel_url` correctly set, cancel page is static with no Stripe calls); not separately re-tested in browser after 4.2 passed
- [x] 4.4 Merge to main once verified, confirm production deploy — merged; production is the environment 4.2 was verified on
