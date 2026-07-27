import type { ReactNode } from "react";
import { Instagram, Youtube } from "lucide-react";
import Container from "@/components/common/Container";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import Logo from "@/components/layout/Logo";
import { getWhatsappUrl } from "@/lib/whatsapp";

const SOCIAL_LINKS: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "Instagram Coach",
    href: "https://www.instagram.com/luigigreca_coach?igsh=eHg2dm1yNTkwYnJw&utm_source=qr",
    icon: <Instagram className="h-4 w-4" strokeWidth={1.5} />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/luigi_greca?igsh=MTdpcWt0b3NyaGYyaw%3D%3D&utm_source=qr",
    icon: <Instagram className="h-4 w-4" strokeWidth={1.5} />,
  },
  {
    label: "YouTube Stoico",
    href: "https://youtube.com/@luigigrecastoico?si=pVAjNstEAM14JEr_",
    icon: <Youtube className="h-4 w-4" strokeWidth={1.5} />,
  },
  {
    label: "YouTube Coach",
    href: "https://youtube.com/@luigigrecacoach",
    icon: <Youtube className="h-4 w-4" strokeWidth={1.5} />,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 text-white">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <Logo />

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-400/40 text-amber-400 transition hover:border-amber-400 hover:bg-amber-400 hover:text-black"
              >
                {link.icon}
              </a>
            ))}

            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-400/40 text-amber-400 transition hover:border-amber-400 hover:bg-amber-400 hover:text-black"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          </div>

          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} STOICO. Tutti i diritti riservati.
          </p>
        </div>
      </Container>
    </footer>
  );
}
