"use client";

import Image from "next/image";
import { useState } from "react";

export default function MarcusAureliusBanner() {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <div className="relative h-[38vh] w-full overflow-hidden rounded-2xl border border-bronze/20 sm:h-[46vh]">
      <Image
        src="/images/marcus-aurelius.webp"
        alt="Busto di Marco Aurelio"
        fill
        sizes="100vw"
        className="object-cover"
        onError={() => setFailed(true)}
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-y-0 left-0 flex w-full max-w-sm flex-col justify-center gap-2 bg-gradient-to-r from-black/70 to-transparent px-8 sm:px-12">
        <span className="text-xs uppercase tracking-[0.35em] text-bronze-light">
          Il pensiero
        </span>
        <p className="font-serif text-xl italic leading-snug text-white sm:text-2xl">
          Il pensiero che guida ogni percorso.
        </p>
      </div>
    </div>
  );
}
