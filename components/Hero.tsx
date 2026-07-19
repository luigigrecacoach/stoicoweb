"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { GoldButton } from "@/components/ui/GoldButton";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-6 pt-32 pb-20"
    >
      {/* Ambient gold glow backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-block rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold"
        >
          Metodo Greca
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl leading-[1.1] text-white sm:text-6xl md:text-7xl"
        >
          Costruisci la persona che{" "}
          <span className="text-gradient-gold">meriti di diventare</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-base text-white/60 sm:text-lg"
        >
          Un percorso settimanale, una community esclusiva e un metodo
          concreto per trasformare disciplina in risultati.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <GoldButton href="#cta" size="lg">
            Unisciti al percorso
          </GoldButton>
          <GoldButton href="#benefici" variant="outline" size="lg">
            Scopri di più
          </GoldButton>
        </motion.div>
      </div>

      {/* Video placeholder — swap the contents of this container with a
          <video> tag or embedded player once the hero video is ready. */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mt-16 w-full max-w-4xl"
      >
        <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-gold/20 bg-zinc-950 shadow-gold-glow">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-950" />
          <div className="bg-noise absolute inset-0 opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              aria-label="Riproduci video di presentazione"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-black shadow-gold-glow transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20"
            >
              <Play size={28} className="ml-1" fill="currentColor" />
            </button>
          </div>
          <span className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-white/30">
            Video in arrivo
          </span>
        </div>
      </motion.div>
    </section>
  );
}
