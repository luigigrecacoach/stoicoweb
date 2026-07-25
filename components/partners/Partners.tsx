import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";
import PartnerLogo from "./PartnerLogo";
import Image from "next/image";

const PARTNERS = [
  { name: "Yamamoto Nutrition", src: "/images/partners/yamamoto-nutrition.png", href: "#" },
  { name: "All My DNA", src: "/images/partners/all-my-dna.png", href: "#" },
];

export default function Partners() {
  return (
    <section className="relative bg-black py-24 md:py-32">
      <Container className="flex flex-col items-center gap-12">
        <Reveal>
  <div className="relative mx-auto mb-6 h-14 w-14 sm:h-16 sm:w-16">
    <Image
      src="/images/logo-mark.webp"
      alt="STOICO"
      fill
      className="object-contain"
      style={{
        filter: "drop-shadow(0 0 20px rgba(156,122,82,0.2))",
      }}
    />
  </div>
</Reveal>
        <Reveal>
          <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Partner selezionati
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
            {PARTNERS.map((partner) => (
              <a key={partner.name} href={partner.href} target="_blank" rel="noopener noreferrer">
                <PartnerLogo name={partner.name} src={partner.src} />
              </a>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}