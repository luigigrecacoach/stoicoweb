import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "STOICO — Costruisci la persona che meriti di diventare",
  description:
    "L'ecosistema STOICO: Stoic Hall, Stoic Room, Metodo Greca e Coaching 1:1. Mentalità, allenamento e filosofia stoica guidati da Luigi Greca.",
  metadataBase: new URL("https://example.com"), // TODO: sostituire con il dominio reale
  openGraph: {
    title: "STOICO — Costruisci la persona che meriti di diventare",
    description:
      "L'ecosistema STOICO: Stoic Hall, Stoic Room, Metodo Greca e Coaching 1:1.",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-black font-sans">{children}</body>
    </html>
  );
}
