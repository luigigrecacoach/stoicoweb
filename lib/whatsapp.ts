const WHATSAPP_NUMBER = "393317404133";

export const whatsappMessage =
  "Ciao Luigi.\n\nHo scoperto STOICO.\n\nVorrei capire quale percorso è più adatto a me.";

export function getWhatsappUrl(message: string = whatsappMessage): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
