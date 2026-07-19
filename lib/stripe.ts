/**
 * Stripe integration placeholder.
 *
 * This file intentionally does NOT import the `stripe` package yet, so the
 * project builds and runs without any payment keys configured. When you're
 * ready to go live:
 *
 * 1. `npm install stripe`
 * 2. Add STRIPE_SECRET_KEY and NEXT_PUBLIC_STRIPE_PRICE_ID to your .env.local
 * 3. Uncomment the implementation below and remove `createPlaceholderSession`.
 * 4. Wire the FinalCTA button (components/FinalCTA.tsx) to POST to
 *    /api/checkout and redirect the browser to the returned session URL.
 */

export interface CheckoutSessionResult {
  url: string | null;
  error?: string;
}

// import Stripe from "stripe";
//
// export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
//   apiVersion: "2024-06-20",
// });
//
// export async function createCheckoutSession(
//   priceId: string
// ): Promise<CheckoutSessionResult> {
//   const session = await stripe.checkout.sessions.create({
//     mode: "subscription",
//     line_items: [{ price: priceId, quantity: 1 }],
//     success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
//     cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
//   });
//   return { url: session.url };
// }

export async function createPlaceholderSession(): Promise<CheckoutSessionResult> {
  return {
    url: null,
    error: "Stripe non è ancora configurato. Aggiungi le chiavi API per abilitare i pagamenti.",
  };
}
