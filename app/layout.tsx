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
  title: "Metodo Greca — Costruisci la persona che meriti di diventare",
  description:
    "Sessioni live settimanali, community privata e il Metodo Greca incluso. Un percorso per trasformare disciplina in risultati.",
  metadataBase: new URL("https://example.com"), // TODO: replace with production domain
  openGraph: {
    title: "Metodo Greca — Costruisci la persona che meriti di diventare",
    description:
      "Sessioni live settimanali, community privata e il Metodo Greca incluso.",
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
