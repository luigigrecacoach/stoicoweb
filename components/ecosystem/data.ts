import { Shield, Lock, BookOpen, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type IconComponent = LucideIcon;

export type EcosystemItem = {
  icon: IconComponent;
  title: string;
  tagline: string;
  lines: string[];
  href: string;
  ctaLabel: string;
};

export const ecosystemItems: EcosystemItem[] = [
  {
    icon: Shield,
    title: "Stoic Hall",
    tagline: "La community gratuita.",
    lines: ["Contenuti quotidiani.", "Mentalità.", "Disciplina."],
    href: "https://chat.whatsapp.com/FaZWTZI2WBp66pLuqCDVwn?mode=gi_t",
    ctaLabel: "Richiedi accesso",
  },
  {
    icon: Lock,
    title: "Stoic Room",
    tagline: "La community privata.",
    lines: [
      "Sala Mindset: confronto e crescita nel gruppo privato.",
      "Video lezioni esclusive, settimana dopo settimana.",
      "Libri e strategie segrete, quelle che nessuno ti racconta.",
      "Eleva te stesso: abitudini, disciplina, un fisico all'altezza della tua mente.",
    ],
    href: "https://stoicroom.netlify.app",
    ctaLabel: "Scopri di più",
  },
  {
    icon: BookOpen,
    title: "Metodo Greca",
    tagline: "Il corso completo.",
    lines: [
      "Mentalità.",
      "Allenamento.",
      "Alimentazione.",
      "Organizzazione.",
      "Applicazione pratica.",
    ],
    href: "https://metodogreca.com",
    ctaLabel: "Acquista il corso",
  },
  {
    icon: Target,
    title: "Coaching 1:1",
    tagline: "Percorso tecnico personalizzato.",
    lines: [
      "Allenamento.",
      "Alimentazione.",
      "Mindset.",
      "Check costanti.",
      "Supporto diretto.",
    ],
    href: "https://calendly.com/luigigrecacoach-info/30min",
    ctaLabel: "Prenota la tua call",
  },
];