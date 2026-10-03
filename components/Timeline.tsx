"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { events } from "./data";
import Reveal from "./Reveal";

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const draw = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  return (
    <section id="timeline" className="mx-auto max-w-3xl px-6 py-28">
      <Reveal>
        <h2 className="font-serif text-4xl text-white md:text-5xl">Timeline of Events</h2>
      </Reveal>
      <div ref={ref} className="relative mt-14 pl-12">
        <div className="absolute bottom-0 left-[15px] top-0 w-px bg-white/10" />
        <motion.div style={{ scaleY: draw }} className="absolute bottom-0 left-[15px] top-0 w-px origin-top bg-gradient-to-b from-crimson-bright to-gold" />
        {events.map((e, i) => (
          <div key={e.title} className="relative pb-16 last:pb-0">
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, margin: "-15% 0px" }}
              transition={{ type: "spring", stiffness: 500, damping: 12 }}
              className="absolute -left-12 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-gold bg-crimson-deep text-xs font-semibold text-gold">
              {i + 1}
            </motion.span>
            <Reveal className="glass rounded-3xl p-6">
              <h3 className="font-serif text-xl text-gold">{e.title}</h3>
              <p className="mt-2 text-neutral-300">{e.text}</p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}