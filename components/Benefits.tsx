import { benefits } from "@/lib/content";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Benefits() {
  return (
    <section id="benefici" className="relative bg-black px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Cosa include"
          title="Tutto ciò che ti serve per fare sul serio"
          subtitle="Nessun contenuto passivo: un sistema pensato per farti agire ogni settimana."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <RevealOnScroll key={benefit.id} delay={index * 0.1}>
                <div className="group h-full rounded-2xl border border-white/10 bg-zinc-950/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold-glow">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold transition-colors duration-300 group-hover:bg-gold-gradient group-hover:text-black">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-serif text-xl text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {benefit.description}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
