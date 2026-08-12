import Image from "next/image";
import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import Reveal from "@/components/common/Reveal";
import Button from "@/components/common/Button";

const SHOP_URL = "https://metodogreca.com";

const PRODUCTS = [
  {
    name: "Protocollo Greca 90",
    tagline: "Il percorso completo di trasformazione in 90 giorni.",
    image: "/images/shop/protocollo-greca-90.webp",
  },
  {
    name: "Nutrizione Essenziale",
    tagline: "Le basi. La scienza. I risultati.",
    image: "/images/shop/nutrizione-essenziale.webp",
  },
];

export default function ShopPreview() {
  return (
    <section id="shop" className="relative bg-black py-32 md:py-40">
      <Container className="flex flex-col items-center gap-14">
        <Heading
          eyebrow="Metodo Greca Shop"
          title="Scegli il tuo percorso"
          description="Protocolli e guide pratiche per allenare mente, corpo e nutrizione, un passo alla volta."
        />

        <Reveal delay={0.1} className="w-full">
          <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[1.75rem] border border-bronze/30 bg-white/[0.02] shadow-bronze-glow">
            <div className="relative aspect-[1320/927] w-full">
              <Image
                src="/images/shop/shop-banner.webp"
                alt="Metodo Greca Shop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div className="grid w-full max-w-4xl gap-8 sm:grid-cols-2">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.name} delay={0.15 + i * 0.08}>
              <div className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-bronze/30 bg-white/[0.02] shadow-bronze-glow">
                <div className="relative aspect-[564/854] w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col items-center gap-4 px-6 py-8 text-center">
                  <h3 className="font-serif text-2xl text-white">
                    {product.name}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-neutral-400">
                    {product.tagline}
                  </p>
                  <Button href={SHOP_URL} variant="outline" size="md">
                    Scopri di più
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <Button href={SHOP_URL} variant="ghost">
            Vai allo shop completo →
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
