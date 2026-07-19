import { NextResponse } from "next/server";

/**
 * Stripe Checkout placeholder endpoint.
 *
 * Once Stripe is configured (see lib/stripe.ts), replace the body of this
 * handler with a call to `createCheckoutSession(priceId)` and return the
 * resulting session URL for the client to redirect to.
 */
export async function POST() {
  return NextResponse.json(
    {
      error:
        "Stripe checkout non è ancora configurato. Aggiungi STRIPE_SECRET_KEY e completa lib/stripe.ts.",
    },
    { status: 501 }
  );
}
