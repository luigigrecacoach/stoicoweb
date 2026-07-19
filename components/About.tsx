import { Award, Target, Users2 } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const credentials = [
  { icon: Award, label: "Fondatore del Metodo Greca" },
  { icon: Users2, label: "Community di persone in crescita" },
  { icon: Target, label: "Focus su risultati concreti e misurabili" },
];

export function About() {
  return (
    <section id="chi-sono" className="relative bg-black px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <RevealOnScroll>
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-gold/20 bg-zinc-950 shadow-gold-glow lg:mx-0">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-950" />
            <div className="bg-noise absolute inset-0 opacity-40" />
            <span className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-white/30">
              Foto in arrivo
            </span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Chi sono
          </span>
          <h2 className="font-serif text-3xl text-white sm:text-4xl md:text-5xl">
            Luigi Greca
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/60">
            Da anni aiuto persone a costruire disciplina, chiarezza e
            direzione nella propria vita. Il Metodo Greca nasce
            dall&apos;esperienza diretta sul campo: non teoria astratta, ma un
            sistema testato per trasformare intenzioni in abitudini e abitudini
            in risultati.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Ogni sessione live, ogni contenuto della community, ogni step del
            metodo è pensato per una cosa sola: aiutarti a diventare la
            versione di te che hai sempre saputo di poter essere.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            {credentials.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-full border border-white/10 bg-zinc-950/60 px-4 py-2.5"
              >
                <Icon size={16} className="text-gold" />
                <span className="text-xs text-white/70">{label}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
