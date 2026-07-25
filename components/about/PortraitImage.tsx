 "use client";

import Image from "next/image";
import { useState } from "react";

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
          src="/images/luigi-cutout.png"
          alt="Statua di guerriero romano"
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