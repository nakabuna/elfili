"use client";
import { motion, useScroll, useSpring } from "framer-motion";
export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const s = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });
  return (
    <>
      <motion.div style={{ scaleX: s }} className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left bg-gradient-to-r from-crimson-bright to-gold min-[900px]:hidden" />
      <motion.div style={{ scaleY: s }} className="fixed right-0 top-0 z-50 hidden h-screen w-[3px] origin-top bg-gradient-to-b from-crimson-bright to-gold min-[900px]:block" />
    </>
  );
}
