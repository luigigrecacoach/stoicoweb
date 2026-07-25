"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";

// Video di presentazione reale: parte solo al click (con audio e controlli),
// non in autoplay muto, perché è un video parlato e non un loop di sottofondo.
const PRESENTATION_VIDEO_SRC = "/videos/presentation.mp4";
const PRESENTATION_POSTER_SRC = "/images/presentation-poster.jpg";

export default function Presentation() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="presentation" className="relative bg-black py-32 md:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[50vh] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/[0.06] blur-[160px]" />

      <Container className="relative z-10 flex flex-col items-center gap-10">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.5em] text-white/70">
            The <span className="text-gold">World</span> Is Yours
          </span>
        </Reveal>

        <Reveal delay={0.1} className="w-full">
          <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-[1.75rem] border border-bronze/30 bg-white/[0.03] shadow-bronze-glow backdrop-blur-sm">
            {isPlaying ? (
              <video
                className="h-full w-full object-cover"
                src={PRESENTATION_VIDEO_SRC}
                poster={PRESENTATION_POSTER_SRC}
                autoPlay
                controls
                playsInline
              />
            ) : (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                aria-label="Riproduci il video di presentazione"
                className="group relative flex h-full w-full items-center justify-center"
              >
                <Image
                  src={PRESENTATION_POSTER_SRC}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 56rem, 100vw"
                  className="object-cover"
                  priority={false}
                />
                <div className="absolute inset-0 bg-black/35 transition-colors duration-300 group-hover:bg-black/25" />
                <motion.span
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex h-20 w-20 items-center justify-center rounded-full border border-bronze-light/60 bg-black/40 text-bronze-light backdrop-blur-sm transition-colors duration-300 group-hover:border-gold group-hover:text-gold sm:h-24 sm:w-24"
                >
                  <Play size={30} strokeWidth={1} className="ml-1" />
                </motion.span>
              </button>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="max-w-md text-center text-base leading-relaxed text-neutral-400">
            Tutto inizia con una decisione.
            <br />
            Guarda la presentazione e scopri la filosofia dietro STOICO.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
