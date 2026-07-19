import { Shield, Lock, BookOpen, Target } from "lucide-react";
import type { ComponentType } from "react";

export type IconComponent = ComponentType<{
  className?: string;
  strokeWidth?: number;
}>;

export type EcosystemItem = {
  icon: IconComponent;
  title: string;
  tagline: string;
  lines: string[];
};

export const ecosystemItems: EcosystemItem[] = [
  {
    icon: Shield,
    title: "Stoic Hall",
    tagline: "La community gratuita.",
    lines: ["Contenuti quotidiani.", "Mentalità.", "Disciplina."],
  },
  {
    icon: Lock,
    title: "Stoic Room",
    tagline: "La community privata.",
    lines: [
      "Live settimanali.",
      "Slam Mindset.",
      "Corsi esclusivi.",
      "Community.",
    ],
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
  },
];
