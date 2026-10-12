import Image from "next/image";
import { ArrowRight, BookOpen, Users, Video } from "lucide-react";
import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";

const STOIC_ROOM_URL = "https://mindset.luigigreca.com";

const FEATURES = [
  {
    icon: Video,
    title: "Live settimanale",
    subtitle:
      "Ogni giovedì alle 22:00, un incontro diretto dedicato alla crescita personale.",
  },
  {
    icon: Users,
    title: "Community riservata",
    subtitle:
      "Un ambiente di confronto, supporto e responsabilità condivisa.",
  },
  {
    icon: BookOpen,
    title: "Applicazione pratica",
    subtitle:
      "Obiettivi settimanali, abitudini e strumenti per costruire una nuova identità.",
  },
];

export default function StoicRoom() {
  return (
    <section
      id="stoic-room"
      className="relative overflow-hidden bg-black py-24 md:py-32"
    >
      {/* Statua: in alto su mobile, a destra su desktop */}
      <div className="relative mx-auto mb-12 aspect-[772/941] w-full max-w-sm lg:absolute lg:inset-y-0 lg:right-0 lg:mb-0 lg:aspect-auto lg:w-[46%] lg:max-w-none">
        <Image
          src="/images/stoic-room/stoic-room-statue.webp"
          alt="Statua di un filosofo stoico in meditazione"
          fill
          sizes="(min-width: 1024px) 46vw, 384px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:bg-gradient-to-r lg:from-black lg:via-black/30 lg:to-transparent" />
      </div>

      <Container className="relative">
        <div className="max-w-2xl lg:max-w-[52%]">
          <Reveal>
            <div className="flex items-center gap-6">
              <span className="text-xs uppercase tracking-[0.35em] text-gold md:text-sm">
                Ecosistema Stoico / Mindset
              </span>
              <span className="hidden h-px w-16 bg-gold/70 sm:block" />
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-6 font-serif text-5xl leading-none text-white sm:text-6xl md:text-7xl">
              STOIC{" "}
              <span className="bg-gold-gradient bg-clip-text text-transparent">
                ROOM
              </span>
            </h2>
            <p className="mt-4 font-serif text-2xl text-white md:text-3xl">
              Dalla conoscenza all&apos;azione.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-white/65">
              Un ambiente riservato a chi ha deciso di lavorare concretamente
              sulla propria evoluzione. Ogni settimana trasformiamo disciplina,
              consapevolezza e conoscenza in azioni quotidiane.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {FEATURES.map(({ icon: Icon, title, subtitle }) => (
                <div key={title}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 text-gold">
                    <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-xs font-medium uppercase tracking-[0.25em] text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {subtitle}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-serif text-white">
                <span className="text-5xl">50€</span>
                <span className="ml-3 text-2xl text-white/60">/ mese</span>
              </p>
              <a
                href={STOIC_ROOM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-4 rounded-sm bg-gold-gradient px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-black shadow-gold-glow transition-opacity duration-300 hover:opacity-90"
              >
                Scopri la Stoic Room
                <span className="sr-only"> (si apre in una nuova scheda)</span>
                <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
