import type { LucideIcon } from "lucide-react";

export interface Benefit {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number; // 1-5
  initials: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  stripePriceId?: string; // TODO: populate with real Stripe Price ID
}
