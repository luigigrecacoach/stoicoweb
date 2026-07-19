"use client";

import Image from "next/image";
import { useState } from "react";

// Drop the real photo at public/images/luigi.webp — this component
// picks it up automatically, no code changes needed.
const PORTRAIT_SRC = "/images/luigi.webp";

export default function PortraitImage() {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative aspect-[3/4] w-full overflow-hidden ${
        failed ? "bg-black" : "bg-white/[0.02]"
      }`}
    >
      {!failed ? (
        <Image
          src={PORTRAIT_SRC}
          alt="Luigi Greca"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src="/images/logo-mark.webp"
            alt="STOICO"
            width={472}
            height={753}
            className="h-48 w-auto object-contain sm:h-64 md:h-72"
            style={{
              filter: "drop-shadow(0 0 32px rgba(156,122,82,0.15))",
            }}
          />
        </div>
      )}
    </div>
  );
}
