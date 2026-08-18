import Image from "next/image";
import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";
import Button from "@/components/common/Button";

const STOIC_HALL_URL =
  "https://chat.whatsapp.com/FaZWTZI2WBp66pLuqCDVwn?s=cl&p=i&ilr=0";

export default function StoicHall() {
  return (
    <section id="stoic-hall" className="relative bg-black py-20 md:py-24">
      <Container className="flex flex-col items-center gap-8">
        <Reveal>
          <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border border-bronze/30 shadow-bronze-glow sm:h-32 sm:w-32">
            <Image
              src="/images/stoic-hall/stoic-hall-badge.webp"
              alt="Stoic Hall"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Button href={STOIC_HALL_URL} variant="primary" size="md">
            Entra nel Circuito
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
