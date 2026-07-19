"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full font-medium uppercase tracking-[0.15em] transition-colors duration-300 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-gold text-black hover:bg-gold-light shadow-gold-glow",
  secondary:
    "border border-white/25 text-white hover:border-gold/60 hover:text-gold bg-transparent",
  outline:
    "border border-gold/60 text-gold bg-black/20 hover:border-gold hover:bg-gold/10",
  ghost: "text-white/80 hover:text-gold underline-offset-4 hover:underline",
};

const sizes: Record<Size, string> = {
  md: "px-7 py-3.5 text-sm md:text-base",
  lg: "px-9 py-5 text-base md:text-lg",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const isExternal = href?.startsWith("http");
  const content = (
    <>
      {icon}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className={classes}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={classes}
    >
      {content}
    </motion.button>
  );
}
