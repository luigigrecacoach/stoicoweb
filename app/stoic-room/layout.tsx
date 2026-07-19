import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "STOICO — Costruisci la persona che meriti di diventare",
  description:
    "L'ecosistema STOICO: Stoic Hall, Stoic Room, Metodo Greca e Coaching 1:1. Mentalità, allenamento e filosofia stoica guidati da Luigi Greca.",
  openGraph: {
    title: "STOICO — Costruisci la persona che meriti di diventare",
    description:
      "L'ecosistema STOICO: Stoic Hall, Stoic Room, Metodo Greca e Coaching 1:1.",
    type: "website",
    locale: "it_IT",
  },
};

export default function StoicRoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
