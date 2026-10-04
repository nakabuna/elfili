"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Search } from "lucide-react";
import { characters, slugOf } from "./data";
import { filters, groups } from "./study";
import Reveal from "./Reveal";
import Portrait from "./Portrait";

const nameV: Variants = { rest: { opacity: 0, y: 24 }, hover: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } } };

export default function RosterGrid() {
  const [q, setQ] = useState("");
  const [f, setF] = useState("All");
  const list = characters.filter((c) =>
    (f === "All" || groups[c.name]?.includes(f)) && (c.name + c.role).toLowerCase().includes(q.toLowerCase()));
  return (
    <section id="roster" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <h2 className="font-serif text-4xl text-white md:text-5xl">Dramatis Personae</h2>
        <p className="mt-3 text-neutral-400">Hover a portrait to reveal the name, then click to open their profile.</p>
      </Reveal>
      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
        <div className="glass flex items-center gap-3 rounded-full px-5 py-3 md:w-72">
          <Search size={18} className="text-gold" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search characters" className="w-full bg-transparent text-white outline-none placeholder:text-neutral-500" />
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((x) => (
            <button key={x} onClick={() => setF(x)} className={`rounded-full px-4 py-2 text-sm ${f === x ? "bg-crimson-bright text-white" : "glass text-gold"}`}>{x}</button>
          ))}
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((c, i) => (
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
      {list.length === 0 && <p className="mt-10 text-neutral-500">No characters match.</p>}
    </section>
  );
}