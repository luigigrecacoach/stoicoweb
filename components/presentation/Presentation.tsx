"use client";

import { Play } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";

// Set this once the real presentation is ready, e.g. "/videos/presentation.mp4".
// Left empty on purpose: the luxury placeholder ships until then.
const PRESENTATION_VIDEO_SRC = "";

export default function Presentation() {
  return (
    <section id="presentation" className="relative bg-black py-32 md:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[50vh] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/[0.06] blur-[160px]" />

      <Container className="relative z-10 flex flex-col items-center gap-10">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.5em] text-gold">
            STOICO presenta
          </span>
        </Reveal>

        <Reveal delay={0.1} className="w-full">
          <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-[1.75rem] border border-bronze/30 bg-white/[0.03] shadow-bronze-glow backdrop-blur-sm">
            {PRESENTATION_VIDEO_SRC ? (
              <video
                className="h-full w-full object-cover"
                src={PRESENTATION_VIDEO_SRC}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <div
                aria-hidden="true"
                className="group flex h-full w-full items-center justify-center"
              >
                <motion.span
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex h-20 w-20 items-center justify-center rounded-full border border-bronze-light/60 text-bronze-light transition-colors duration-300 group-hover:border-gold group-hover:text-gold sm:h-24 sm:w-24"
                >
                  <Play size={30} strokeWidth={1} className="ml-1" />
                </motion.span>
              </div>
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
