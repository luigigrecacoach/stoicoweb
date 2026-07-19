"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

type Direction = "up" | "none";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 1,
  direction = "up",
  distance = 28,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: direction === "up" ? distance : 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      transition={{ duration, delay, ease: LUXURY_EASE }}
    >
      {children}
    </motion.div>
  );
}
