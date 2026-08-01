"use client";

import Script from "next/script";
import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import Reveal from "@/components/common/Reveal";

const CALENDLY_URL =
  "https://calendly.com/luigigrecacoach-info/candidatura-ecosistema-stoico?background_color=000000&text_color=ffffff&primary_color=d4af37&locale=it";

export default function Calendly() {
  return (
    <section id="calendly" className="relative bg-black py-32 md:py-40">
      <Container className="flex flex-col items-center gap-14">
        <Heading
          eyebrow="Candidatura"
          title="Entra nell'Ecosistema STOICO"
          description="Non è un acquisto d'impulso: è una scelta. Prenota una call conoscitiva per raccontarmi dove ti trovi oggi e valutare insieme, con calma, il percorso più adatto a te."
        />

        <Reveal delay={0.1} className="w-full">
          <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[1.75rem] border border-bronze/30 bg-white/[0.02] shadow-bronze-glow">
            <div
              className="calendly-inline-widget"
              data-url={CALENDLY_URL}
              style={{ minWidth: "320px", height: "780px" }}
            />
          </div>
        </Reveal>
      </Container>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
