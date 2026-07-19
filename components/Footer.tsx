import { navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <a href="#top" className="font-serif text-base text-white">
          Metodo <span className="text-gold">Greca</span>
        </a>

        <nav className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-white/40 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} Metodo Greca. Tutti i diritti
          riservati.
        </p>
      </div>
    </footer>
  );
}
