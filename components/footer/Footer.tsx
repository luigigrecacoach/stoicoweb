import type { ReactNode } from "react";
import { Instagram, Youtube } from "lucide-react";
import Container from "@/components/common/Container";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import Logo from "@/components/layout/Logo";
import { getWhatsappUrl } from "@/lib/whatsapp";

// TODO: replace "#" with the real Instagram/YouTube profile URLs.
const SOCIAL_LINKS: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "Instagram",
    href: "#",
    icon: <Instagram className="h-4 w-4" strokeWidth={1.5} />,
  },
  {
    label: "YouTube",
    href: "#",
    icon: <Youtube className="h-4 w-4" strokeWidth={1.5} />,
  },
  {
    label: "WhatsApp",
    href: getWhatsappUrl(),
    icon: <WhatsAppIcon className="h-4 w-4" />,
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black py-16">
      <Container className="flex flex-col items-center gap-8 text-center">
        <Logo />

        <p className="max-w-sm text-base leading-relaxed text-neutral-400">
          Costruisci te stesso.
          <br />
          Tutto il resto viene di conseguenza.
        </p>

        <div className="flex items-center gap-5">
          {SOCIAL_LINKS.map((social) => {
            const isExternal = social.href.startsWith("http");
            return (
              <a
                key={social.label}
                href={social.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-neutral-400 transition-colors duration-300 hover:border-gold/50 hover:text-gold"
              >
                {social.icon}
              </a>
            );
          })}
        </div>

        <div className="w-full border-t border-white/10 pt-8 text-xs text-neutral-600">
          © {new Date().getFullYear()} STOICO. Tutti i diritti riservati.
        </div>
      </Container>
    </footer>
  );
}
