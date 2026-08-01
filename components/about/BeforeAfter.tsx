"use client";

import Image from "next/image";
import { useState } from "react";

function Frame({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative aspect-[3/4] w-full overflow-hidden ${
        failed ? "bg-black" : "bg-white/[0.02]"
      }`}
    >
      {!failed && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 25vw, 50vw"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
      <span className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/80 backdrop-blur-sm">
        {label}
      </span>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      <Frame
        src="/images/luigi-prima.jpg"
        alt="Luigi prima della trasformazione"
        label="Prima"
      />
      <Frame
        src="/images/luigi-dopo.jpg"
        alt="Luigi dopo la trasformazione"
        label="Dopo"
      />
    </div>
  );
}
