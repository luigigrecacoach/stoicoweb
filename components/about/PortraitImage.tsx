"use client";
import Image from "next/image";
import { useState } from "react";

export default function PortraitImage() {
  const [failedPrima, setFailedPrima] = useState(false);
  const [failedDopo, setFailedDopo] = useState(false);
  const failed = failedPrima && failedDopo;

  return (
    <div
      className={`relative aspect-[3/4] w-full overflow-hidden ${
        failed ? "bg-black" : "bg-white/[0.02]"
      }`}
    >
      {!failed ? (
        <div className="flex h-full w-full flex-col">
          {/* PRIMA */}
          <div className="relative w-full flex-1 overflow-hidden bg-black">
            {!failedPrima ? (
              <Image
                src="/images/luigi-prima.jpg"
                alt="Luigi Greca, prima — momento di difficoltà"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain object-center"
                onError={() => setFailedPrima(true)}
              />
            ) : (
              <div className="h-full w-full bg-black" />
            )}
          </div>

          {/* Divisore dorato */}
          <div className="h-px w-full bg-[#9c7a52]/40" />

          {/* DOPO */}
          <div className="relative w-full flex-1 overflow-hidden bg-black">
            {!failedDopo ? (
              <Image
                src="/images/luigi-dopo.jpg"
                alt="Luigi Greca, dopo — il percorso stoico"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain object-center"
                onError={() => setFailedDopo(true)}
              />
            ) : (
              <div className="h-full w-full bg-black" />
            )}
          </div>
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src="/images/logo-mark.webp"
            alt="STOICO"
            width={472}
            height={472}
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
