import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";
import MarcusAureliusBanner from "@/components/ecosystem/MarcusAureliusBanner";

export default function MarcusAurelius() {
  return (
    <section id="marcus-aurelius" className="relative bg-black py-32 md:py-40">
      <Container>
        <Reveal>
          <MarcusAureliusBanner />
        </Reveal>
      </Container>
    </section>
  );
}
