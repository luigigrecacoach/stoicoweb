import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";
import Button from "@/components/common/Button";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { getWhatsappUrl } from "@/lib/whatsapp";

export default function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-black py-40 md:py-56">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[36vw] w-[36vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.05] blur-[140px]" />

      <Container className="relative z-10 flex flex-col items-center gap-8 text-center">
        <Reveal>
          <h2 className="max-w-2xl font-serif text-4xl leading-[1.15] text-white sm:text-5xl md:text-6xl">
            Non sai da dove iniziare?
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="max-w-md text-lg leading-relaxed text-neutral-400">
            Raccontami dove ti trovi oggi. Ti aiuterò personalmente a
            scegliere il percorso migliore.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <Button
            href={getWhatsappUrl()}
            size="lg"
            icon={<WhatsAppIcon />}
            className="mt-4 px-12 py-6 text-lg"
          >
            Parla con Luigi
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
