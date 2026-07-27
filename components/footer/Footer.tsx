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
    href: "https://youtube.com/@luigigrecacoach?si
