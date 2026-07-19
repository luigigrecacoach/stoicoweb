import { Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section
      id="testimonianze"
      className="relative bg-zinc-950/40 px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Risultati"
          title="Chi ha scelto il metodo"
          subtitle="Le testimonianze di chi ha già iniziato il percorso."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <RevealOnScroll key={testimonial.id} delay={index * 0.1}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-black/60 p-8">
                <div>
                  <div className="mb-4 flex gap-1 text-gold">
                    {Array.from({ length: testimonial.rating }).map(
                      (_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      )
                    )}
                  </div>
                  <blockquote className="text-sm leading-relaxed text-white/70">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-gradient text-xs font-semibold text-black">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-white/40">{testimonial.role}</p>
                  </div>
                </figcaption>
              </figure>
            </RevealOnScroll>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/25">
          Testimonianze di esempio — sostituiscile con recensioni reali prima
          del lancio.
        </p>
      </div>
    </section>
  );
}
