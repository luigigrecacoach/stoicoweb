import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import Reveal from "@/components/common/Reveal";
import { GoldButton } from "@/components/ui/GoldButton";
import MarcusAureliusBanner from "./MarcusAureliusBanner";
import { ecosystemItems } from "./data";

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative bg-black py-32 md:py-40">
      <Container className="flex flex-col gap-16 md:gap-20">
        <Heading title="L'ecosistema STOICO" />

        <Reveal delay={0.1}>
          <MarcusAureliusBanner />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ecosystemItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-7 border border-white/10 bg-white/[0.02] p-8 transition-colors duration-500 hover:border-gold/30">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <item.icon className="h-5 w-5" strokeWidth={1.25} />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-serif text-2xl text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm italic text-neutral-500">
                    {item.tagline}
                  </p>
                </div>
                <div className="flex flex-col gap-1.5 pt-1">
                  {item.lines.map((line) => (
                    <p key={line} className="text-sm text-neutral-400">
                      {line}
                    </p>
                  ))}
                </div>

                <div className="mt-auto pt-4">
                  <GoldButton href={item.href} variant="primary" size="md" className="w-full">
                    {item.ctaLabel}
                  </GoldButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}