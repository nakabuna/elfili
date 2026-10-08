"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { spring } from "./motion";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 32, filter: "blur(8px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { default: spring.smooth, filter: { duration: 0.6 } } } };

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 160]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.12]);
  const fade = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">
      <motion.div style={{ y, scale, backgroundImage: "url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1920&q=70)" }} className="absolute inset-0 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
      <motion.div style={{ opacity: fade }} className="relative max-w-3xl">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">Dr. José Rizal · 1891</motion.p>
          <motion.h1 variants={item} className="font-serif text-5xl font-bold leading-tight text-white md:text-7xl">EL FILIBUSTERISMO</motion.h1>
          <motion.p variants={item} className="mx-auto mt-6 max-w-xl text-lg text-neutral-300">
            A sequel steeped in disillusion: the jeweler Simoun returns to ignite a revolution, and a nation weighs reform against rage.
          </motion.p>
          <motion.a variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#explore"
          className="glass mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-gold">
          Explore <ChevronDown size={16} />
         </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}