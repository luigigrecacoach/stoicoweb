import { ArrowDown } from "lucide-react";
import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";

// Bottoni rapidi sotto il video: portano ognuno al punto giusto della pagina.
const LINKS = [
  { label: "Le origini", href: "#birth" },
  { label: "Coaching 1:1", href: "#coaching" },
  { label: "Stoic Room", href: "#stoic-room" },
  { label: "Corsi", href: "#shop" },
  { label: "Community gratuita", href: "#stoic-hall" },
]

export default function QuickNav() {
  return (
    <section aria-label="Scegli il servizio" className="relative bg-black pb-20 md:pb-28">
      <Container className="flex flex-col items-center gap-8">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.35em] text-white/60">
            Scegli da dove <span className="text-gold">iniziare</span>
          </span>
        </Reveal>
        <Reveal delay={0.05} className="w-full">
          <nav className="mx-auto flex w-full max-w-5xl flex-wrap justify-center gap-3 sm:gap-4">
            {LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="group flex min-w-[46%] flex-1 items-center justify-center gap-2 rounded-full sm:min-w-[30%] lg:min-w-0 border border-gold/50 px-4 py-4 text-xs font-medium uppercase tracking-[0.2em] text-gold transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-black sm:text-sm"
              >
                {label}
                <ArrowDown size={16} strokeWidth={1.5} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            ))}
          </nav>
        </Reveal>
      </Container>
    </section>
  );
}
