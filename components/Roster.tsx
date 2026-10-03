"use client";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { characters, slugOf } from "./data";
import Reveal from "./Reveal";
import Portrait from "./Portrait";

const nameV: Variants = { rest: { opacity: 0, y: 24 }, hover: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } } };

export default function RosterGrid() {
  return (
    <section id="roster" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <h2 className="font-serif text-4xl text-white md:text-5xl">Dramatis Personae</h2>
        <p className="mt-3 text-neutral-400">Hover a portrait to reveal the name, then click to open their profile.</p>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {characters.map((c, i) => (
          <Reveal key={c.name} delay={(i % 4) * 0.08}>
            <Link href={`/characters/${slugOf(c.name)}`} className="block">
              <motion.article initial="rest" whileHover="hover" whileTap="hover"
                variants={{ rest: { scale: 1 }, hover: { scale: 1.04 } }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
                <Portrait src={c.image} className="absolute inset-0" />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/75" />
                <motion.div variants={nameV} className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-serif text-2xl font-bold text-crimson-bright">{c.name}</h3>
                  <p className="text-sm text-gold">{c.role}</p>
                </motion.div>
              </motion.article>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}