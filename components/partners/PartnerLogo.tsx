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
    <div className="relative h-6 w-32 sm:h-7 sm:w-36">
      <Image
        src={src}
        alt={name}
        fill
        sizes="150px"
        className="object-contain object-center brightness-0 invert opacity-70"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
