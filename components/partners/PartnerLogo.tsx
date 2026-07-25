"use client";

import Image from "next/image";
import { useState } from "react";

export default function PartnerLogo({
  name,
  src,
}: {
  name: string;
  src: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="text-sm uppercase tracking-[0.3em] text-neutral-400">
        {name}
      </span>
    );
  }

  return (
    <div className="relative h-16 w-16 sm:h-20 sm:w-20">
      <Image
        src={src}
        alt={name}
        fill
        sizes="80px"
        className="object-contain object-center"
        style={{ filter: "grayscale(1) sepia(0.75) saturate(4) brightness(0.95) hue-rotate(-8deg)" }}
        onError={() => setFailed(true)}
      />
    </div>
  );
}