"use client";
import { motion, type Variants } from "framer-motion";

const bounce = { type: "spring", stiffness: 170, damping: 12 } as const;

const item: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.92, filter: "blur(8px)", transition: { duration: 0.35, ease: "easeIn" } },
  show: (d: number = 0) => ({
    opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
    transition: {
      y: { ...bounce, delay: d }, scale: { ...bounce, delay: d },
      opacity: { duration: 0.7, ease: "easeOut", delay: d },
      filter: { duration: 0.7, delay: d },
    },
  }),
};

type P = { children: React.ReactNode; className?: string; delay?: number };

export default function Reveal({ children, className, delay = 0 }: P) {
  return (
    <motion.div className={className} variants={item} custom={delay}
      initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}>
      {children}
    </motion.div>
  );
}