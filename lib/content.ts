import { BookOpen, Radio, Users } from "lucide-react";
import type {
  Benefit,
  FaqItem,
  NavLink,
  PricingPlan,
  Testimonial,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Benefici", href: "#benefici" },
  { label: "Testimonianze", href: "#testimonianze" },
  { label: "Chi sono", href: "#chi-sono" },
  { label: "FAQ", href: "#faq" },
];

export const benefits: Benefit[] = [
  {
    id: "live-sessions",
    icon: Radio,
    title: "Sessioni live settimanali",
    description:
      "Ogni settimana un incontro dal vivo per lavorare insieme su obiettivi concreti, fare domande e ricevere feedback diretto.",
  },
  {
    id: "private-community",
    icon: Users,
    title: "Community privata",
    description:
      "Uno spazio riservato a chi ha scelto di crescere sul serio: confronto quotidiano, supporto reciproco e persone che remano nella tua stessa direzione.",
  },
  {
    id: "metodo-greca",
    icon: BookOpen,
    title: "Metodo Greca incluso",
    description:
      "Il framework completo passo dopo passo: percorso strutturato, esercizi pratici e strumenti per trasformare la teoria in azione.",
  },
];

// Placeholder testimonials — replace with real client reviews before launch.
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Marco R.",
    role: "Imprenditore",
    quote:
      "In pochi mesi ho ricostruito la mia disciplina quotidiana. Il metodo è chiaro, diretto, senza fronzoli.",
    rating: 5,
    initials: "MR",
  },
  {
    id: "t2",
    name: "Giulia F.",
    role: "Libera professionista",
    quote:
      "Le sessioni live sono il valore aggiunto: non è un corso registrato, c'è confronto reale e responsabilità.",
    rating: 5,
    initials: "GF",
  },
  {
    id: "t3",
    name: "Davide S.",
    role: "Manager",
    quote:
      "La community mi ha tenuto costante nei momenti difficili. Risultati concreti, non solo motivazione.",
    rating: 5,
    initials: "DS",
  },
];

export const faqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "Come funzionano le sessioni live settimanali?",
    answer:
      "Ogni settimana ci troviamo online in diretta per lavorare su obiettivi, sbloccare ostacoli e rispondere alle tue domande. Le sessioni vengono registrate e restano disponibili nell'area riservata.",
  },
  {
    id: "faq-2",
    question: "Il Metodo Greca è incluso nel percorso?",
    answer:
      "Sì. Il framework completo, con tutti gli esercizi e i materiali, è incluso fin dal primo giorno: non ci sono costi nascosti o upsell successivi.",
  },
  {
    id: "faq-3",
    question: "Quanto tempo devo dedicare ogni settimana?",
    answer:
      "Il percorso è pensato per essere sostenibile: bastano poche ore a settimana tra sessione live, community e pratica personale per vedere progressi reali.",
  },
  {
    id: "faq-4",
    question: "Posso disdire in qualsiasi momento?",
    answer:
      "Sì, la membership non ha vincoli di durata minima. Puoi gestire l'abbonamento in autonomia dalla tua area account.",
  },
  {
    id: "faq-5",
    question: "Il percorso è adatto anche a chi parte da zero?",
    answer:
      "Assolutamente. Il Metodo Greca è strutturato in step progressivi: chi parte da zero e chi ha già esperienza percorrono lo stesso framework, a ritmi diversi.",
  },
];

// Placeholder pricing — connect stripePriceId to real Stripe Price objects before go-live.
export const pricingPlans: PricingPlan[] = [
  {
    id: "membership-mensile",
    name: "Membership",
    price: "—",
    cadence: "/mese",
    description:
      "Accesso completo a sessioni live, community privata e Metodo Greca.",
    features: [
      "Sessioni live settimanali",
      "Community privata 24/7",
      "Metodo Greca incluso",
      "Disdici quando vuoi",
    ],
    highlighted: true,
    stripePriceId: undefined,
  },
];
