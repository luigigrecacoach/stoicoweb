import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";
import PartnerLogo from "./PartnerLogo";

// Drop the real logo files at these paths — this component picks them up
// automatically, no code changes needed. Rendered white regardless of the
// source file's own colors.
const PARTNERS = [
  { name: "Yamamoto Nutrition", src: "/images/partners/yamamoto-nutrition.png" },
  { name: "All My DNA", src: "/images/partners/all-my-dna.png" },
];

export default function Partners() {
  return (
    <section className="relative bg-black py-24 md:py-32">
      <Container className="flex flex-col items-center gap-12">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Partner selezionati
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
            {PARTNERS.map((partner) => (
              <PartnerLogo key={partner.name} {...partner} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
