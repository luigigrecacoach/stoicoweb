import { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Heading({
  eyebrow,
  title,
  description,
  align = "center",
  size = "md",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  size?: "sm" | "md" | "lg";
}) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  const titleSize = {
    sm: "text-3xl md:text-5xl",
    md: "text-4xl md:text-6xl lg:text-7xl",
    lg: "text-5xl md:text-7xl lg:text-8xl",
  }[size];

  return (
    <div className={`flex flex-col gap-6 max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <Reveal>
          <span className="text-xs md:text-sm uppercase tracking-[0.35em] text-gold font-medium">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className={`font-serif font-normal leading-[1.08] text-white ${titleSize}`}>
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-2xl">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
