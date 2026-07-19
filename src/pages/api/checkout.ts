export const prerender = false;

import type { APIRoute } from "astro";
import Stripe from "stripe";
import { env } from "cloudflare:workers";
import { business } from "../../config/business";

interface Env {
  STRIPE_SECRET_KEY: string;
}

export const GET: APIRoute = async ({ url, redirect }) => {
  const packageId = url.searchParams.get("packageId");
  const pkg = business.packages.find((p) => p.id === packageId);

  if (!pkg) {
    return new Response("Unknown package", { status: 400 });
  }

  const typedEnv = env as unknown as Env;
  const stripe = new Stripe(typedEnv.STRIPE_SECRET_KEY, {
    httpClient: Stripe.createFetchHttpClient(),
  });

  // Currency is determined by the Stripe Price object itself (set when the
  // price was created in the dashboard), not passed here.
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: pkg.stripePriceId, quantity: 1 }],
    success_url: `${url.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${url.origin}/checkout/cancel`,
  });

  if (!session.url) {
    return new Response("Could not create checkout session", { status: 500 });
  }

  return redirect(session.url, 303);
};
