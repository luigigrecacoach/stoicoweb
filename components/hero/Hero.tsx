"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/common/Container";

const HERO_PORTRAIT_SRC = "/images/hero-luigi.webp";
const EASE = [0.16, 1, 0.3, 1] as const;

// Soft elliptical fade so the portrait dissolves into the black background
// with no visible rectangular edge, instead of a hard image boundary.
const PORTRAIT_MASK =
  "radial-gradient(ellipse 64% 70% at 60% 40%, #000 52%, rgba(0,0,0,0.7) 72%, transparent 100%)";

const PRINCIPLES = [
  { highlight: "Mindset", rest: ", Disciplina, Carattere" },
  { highlight: "Allenamento", rest: ", Abitudini, Educazione Alimentare" },
  { highlight: "Principio Stoico", rest: ": il corpo è il tempio dell'anima" },
];

export default function Hero() {
  const [imageFailed, setImageFailed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex h-[100svh] w-full items-center overflow-x-hidden bg-black"
    >
      {/* Ambient bronze atmosphere — deep black canvas, generous negative space */}
      <div className="pointer-events-none absolute right-[6%] top-1/2 h-[58vh] w-[50vw] -translate-y-1/2 rounded-full bg-bronze/[0.08] blur-[140px]" />

      {/* Portrait — emerges from the black background via a soft feathered
          mask (no hard rectangular edge), sized to dominate the right side
          and allowed to bleed slightly past the section's bottom edge. */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute -bottom-[8vh] right-0 h-[86vh] w-[82vw] sm:right-[2%] sm:h-[92vh] sm:w-[50vw] lg:w-[46vw]"
      >
        {!imageFailed ? (
          <Image
            src={HERO_PORTRAIT_SRC}
            alt="Luigi Greca"
            fill
            priority
            sizes="(min-width: 640px) 48vw, 82vw"
            className="object-cover object-[85%_center]"
            style={{
              WebkitMaskImage: PORTRAIT_MASK,
              maskImage: PORTRAIT_MASK,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-bronze/[0.05]" />
        )}
      </motion.div>

      <Container className="relative z-10">
        <div className="flex max-w-lg flex-col items-start gap-7 text-left">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: EASE }}
            className="font-serif text-4xl font-normal leading-[1.12] text-white sm:text-5xl md:text-6xl lg:text-[3.4rem]"
          >
            LA TUA EVOLUZIONE INIZIA QUI
          </motion.h1>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
            className="flex flex-col gap-3.5"
          >
            {PRINCIPLES.map((principle) => (
              <li
                key={principle.highlight}
                className="flex items-start gap-2.5 text-sm leading-relaxed"
              >
                <span className="text-white/40">-</span>
                <span>
                  <span className="font-medium text-gold">
                    {principle.highlight}
                  </span>
                  <span className="text-white/70">{principle.rest}</span>
                </span>
              </li>
            ))}
          </motion.ul>

        </div>
      </Container>
    </section>
  );
}
