# Metodo Greca — Landing Page

Landing page premium (Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion).

## Avvio locale

```bash
npm install
npm run dev
```

Apri http://localhost:3000

## Build di produzione

```bash
npm run build
npm start
```

## Struttura

```
app/
  layout.tsx        Root layout, font, metadata SEO
  page.tsx           Compone tutte le sezioni della landing
  globals.css        Tailwind + stili base (scrollbar, selection, gradient gold)
  api/checkout/route.ts   Stub endpoint per Stripe Checkout
components/
  Header.tsx         Nav sticky con menu mobile
  Hero.tsx           Hero + placeholder video
  Benefits.tsx       Le 3 card dei benefici
  Testimonials.tsx   Testimonianze (contenuti di esempio)
  About.tsx          Sezione "Chi sono" — Luigi Greca
  FAQ.tsx            Accordion FAQ
  FinalCTA.tsx       CTA finale + card prezzo + hook Stripe
  Footer.tsx
  ui/                Componenti riutilizzabili (bottone gold, reveal on scroll, heading)
lib/
  content.ts         Tutti i contenuti testuali (benefici, faq, testimonianze, pricing)
  stripe.ts          Placeholder per l'integrazione Stripe
types/
  index.ts           Interfacce condivise
```

## Cose da personalizzare prima del lancio

1. **Video hero** — sostituisci il placeholder in `components/Hero.tsx` (cerca il commento
   "Video placeholder") con un tag `<video>` o un embed (es. Mux, YouTube, Cloudflare Stream).
2. **Foto di Luigi Greca** — sostituisci il placeholder in `components/About.tsx`.
3. **Testimonianze reali** — aggiorna l'array `testimonials` in `lib/content.ts`.
4. **Prezzo** — aggiorna `pricingPlans` in `lib/content.ts` con il prezzo reale.
5. **Stripe**:
   - `npm install stripe`
   - Aggiungi `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PRICE_ID`, `NEXT_PUBLIC_SITE_URL` in `.env.local`
   - Completa `lib/stripe.ts` (implementazione già abbozzata e commentata)
   - Aggiorna `app/api/checkout/route.ts` per chiamare `createCheckoutSession`
   - Aggiorna `handleCheckout` in `components/FinalCTA.tsx` per chiamare `/api/checkout`
6. **Dominio** — aggiorna `metadataBase` in `app/layout.tsx`.

## Note tecniche

- Font caricati con `next/font/google` (Inter + Playfair Display) per performance e zero layout shift.
- Animazioni con Framer Motion, basate su `whileInView` per attivarsi solo quando le sezioni entrano nel viewport (basso impatto sulle performance).
- Palette colori (`tailwind.config.ts`): nero (`bg-black`) + oro (`gold`, `gold-light`, `gold-dark`).
- Nessuna dipendenza pesante oltre a `framer-motion` e `lucide-react`.
# stoicoweb
