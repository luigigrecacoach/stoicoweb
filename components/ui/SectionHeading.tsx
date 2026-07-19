import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <RevealOnScroll className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-white">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base sm:text-lg text-white/60">{subtitle}</p>
      ) : null}
    </RevealOnScroll>
  );
}
