import Image from "next/image";
import { ArrowRight, ClipboardList, PlayCircle, Video } from "lucide-react";
import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";

const COACHING_URL = "https://coaching.luigigreca.com";
const COACHING_IMAGE = "/images/coaching/coaching.jpg";

const POINTS = [
  {
    icon: ClipboardList,
    title: "Percorso su misura",
    text: "Allenamento e alimentazione costruiti sulla persona, non su una scheda standard.",
  },
  {
    icon: PlayCircle,
    title: "Tecnica guidata",
    text: "Video degli esercizi con l'esecuzione corretta, in un'app dedicata.",
  },
  {
    icon: Video,
    title: "Controllo diretto",
    text: "Analisi dei progressi e call personali quando serve davvero.",
  },
];

export default function Coaching() {
  return (
    <section id="coaching" className="relative scroll-mt-24 bg-black py-24 md:py-32">
      <div className="pointer-events-none absolute left-0 top-1/3 h-[40vh] w-[40vw] rounded-full bg-gold/[0.05] blur-[160px]" />

      <Container className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Messaggio fisso del coaching */}
        <div>
          <Reveal>
            <div className="flex items-center gap-6">
              <span className="text-xs uppercase tracking-[0.35em] text-gold md:text-sm">
                Team Stoico · Metodo Greca
              </span>
              <span className="hidden h-px w-16 bg-gold/70 sm:block" />
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-6 font-serif text-5xl leading-none text-white sm:text-6xl md:text-7xl">
              COACHING{" "}
              <span className="bg-gold-gradient bg-clip-text text-transparent">1:1</span>
            </h2>
            <p className="mt-6 font-serif text-2xl leading-snug text-white md:text-3xl">
              Il fisico è il collante
              <br />
              della tua <span className="text-gold">integrità</span>.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-white/65">
              Quando il corpo segue ciò che la mente ha deciso, smetti di negoziare
              con te stesso. Ogni allenamento, ogni pasto, ogni abitudine diventa la
              prova quotidiana che sei una persona di parola. Il percorso tecnico del
              Team Stoico tiene insieme ciò che pensi, ciò che dici e ciò che fai.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {POINTS.map(({ icon: Icon, title, text }) => (
                <div key={title}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 text-gold">
                    <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-xs font-medium uppercase tracking-[0.25em] text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 border-t border-white/15 pt-8">
              <a
                href={COACHING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-4 rounded-sm bg-gold-gradient px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-black shadow-gold-glow transition-opacity duration-300 hover:opacity-90"
              >
                Scopri il Coaching
                <span className="sr-only"> (si apre in una nuova scheda)</span>
                <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative aspect-[1000/668] w-full overflow-hidden rounded-[1.75rem] border border-bronze/30 shadow-bronze-glow">
            <Image
              src={COACHING_IMAGE}
              alt="Luigi Greca a confronto con i ragazzi del Team Stoico in palestra"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 text-xs uppercase tracking-[0.35em] text-gold-light">
              Mente · Corpo · Parola
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
