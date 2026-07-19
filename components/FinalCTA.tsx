"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { pricingPlans } from "@/lib/content";
import { createPlaceholderSession } from "@/lib/stripe";
import { GoldButton } from "@/components/ui/GoldButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function FinalCTA() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const plan = pricingPlans[0];

  async function handleCheckout() {
    setLoading(true);
    setMessage(null);

    // TODO: replace with a real call to /api/checkout once Stripe is wired
    // up (see lib/stripe.ts and app/api/checkout/route.ts).
    const result = await createPlaceholderSession();

    if (result.url) {
      window.location.href = result.url;
      return;
    }

    setMessage(result.error ?? "Checkout non disponibile al momento.");
    setLoading(false);
  }

  return (
    <section id="cta" className="relative overflow-hidden bg-black px-6 py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <RevealOnScroll>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Inizia oggi
          </span>
          <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
            Diventa la persona che meriti di essere
          </h2>
          <p className="mt-4 text-base text-white/60">
            Sessioni live, community privata e Metodo Greca: tutto in un
            unico percorso.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="mt-12 rounded-3xl border border-gold/20 bg-zinc-950/60 p-8 shadow-gold-glow sm:p-10">
            <p className="text-sm uppercase tracking-widest text-white/40">
              {plan.name}
            </p>
            <div className="mt-3 flex items-end justify-center gap-1">
              <span className="font-serif text-4xl text-white sm:text-5xl">
                {plan.price}
              </span>
              <span className="mb-1 text-sm text-white/40">
                {plan.cadence}
              </span>
            </div>
            {/* Price is a placeholder — connect to a real Stripe Price and
                update lib/content.ts once pricing is finalized. */}

            <ul className="mx-auto mt-8 flex max-w-xs flex-col gap-3 text-left">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check size={16} className="shrink-0 text-gold" />
                  <span className="text-sm text-white/70">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <GoldButton
                size="lg"
                className="w-full"
                onClick={handleCheckout}
                disabled={loading}
              >
                {loading ? "Attendere..." : "Prenota il tuo posto"}
              </GoldButton>
            </div>

            {message ? (
              <p className="mt-4 text-xs text-white/40">{message}</p>
            ) : null}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
