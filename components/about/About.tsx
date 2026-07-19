import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";
import PortraitImage from "./PortraitImage";

const STORY = [
  "Credevo che la disciplina potesse trasformare una persona. Poi la vita ha deciso di mettere alla prova questa convinzione. Nel 2020, dopo un incidente serio, sono stato costretto a ricostruire non solo il corpo, ma anche la mente.",
  "Quell'esperienza ha cambiato per sempre il mio modo di vedere la vita. Ogni ostacolo è diventato un'opportunità. Ogni abitudine è diventata intenzionale. Ogni azione ha avuto uno scopo.",
  "Da quel percorso è nato STOICO. Non semplicemente un brand di coaching, ma un ecosistema creato per aiutare le persone a costruire disciplina, carattere e responsabilità. Tutto ciò che insegno oggi, prima l'ho vissuto.",
];

export default function About() {
  return (
    <section id="birth" className="relative bg-black py-32 md:py-40">
      <Container className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
        <Reveal>
          <PortraitImage />
        </Reveal>

        <div className="flex flex-col gap-10">
          <Reveal>
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.3em] text-gold">
                Le origini
              </span>
              <h2 className="font-serif text-4xl text-white md:text-6xl">
                La nascita di STOICO
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6 border-l-2 border-bronze/30 pl-6 text-lg leading-relaxed text-neutral-400">
              {STORY.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-serif text-base italic leading-relaxed text-bronze-light">
              La disciplina non mi ha evitato il dolore.
              <br />
              Mi ha insegnato a trasformarlo.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
