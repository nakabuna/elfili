"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, GitCommitVertical, BookOpen, Lightbulb, Columns2, HelpCircle, Landmark } from "lucide-react";
import Reveal from "./Reveal";
import { spring } from "./motion";

const items = [
  { icon: Users, label: "Characters", desc: "Meet Simoun, Basilio, Isagani and the rest of the cast.", href: "#roster" },
  { icon: GitCommitVertical, label: "Plot Timeline", desc: "Follow the major events of the story.", href: "#timeline" },
  { icon: BookOpen, label: "Chapter Guide", desc: "The 38 chapters in six movements.", href: "#chapters" },
  { icon: Lightbulb, label: "Themes", desc: "Corruption, reform, revolution and the symbols behind them.", href: "#themes" },
  { icon: Columns2, label: "Noli vs. Fili", desc: "How Rizal's two novels compare.", href: "#compare" },
  { icon: Landmark, label: "History", desc: "The real events and issues behind the novel.", href: "/history" },
  { icon: HelpCircle, label: "Quiz", desc: "Test what you know about the book.", href: "#quiz" },
];

export default function Explore() {
  const jump = (e: React.MouseEvent, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="explore" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Start here</p>
        <h2 className="mt-2 font-serif text-4xl text-white md:text-5xl">What would you like to explore?</h2>
        <p className="mt-3 text-neutral-400">Pick a place to begin. You can come back to any of them.</p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, label, desc, href }, i) => (
          <Reveal key={label} delay={(i % 4) * 0.08}>
            <motion.div whileHover={{ scale: 1.04, y: -4 }} whileTap={{ scale: 0.96 }} transition={spring.snappy} className="h-full">
              <Link href={href} onClick={(e) => jump(e, href)}
                className="glass group flex h-full flex-col rounded-3xl p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-crimson-bright/20 ring-1 ring-gold/30 transition-colors group-hover:bg-crimson-bright/40">
                  <Icon size={22} className="text-gold" />
                </span>
                <h3 className="mt-5 font-serif text-xl text-white">{label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{desc}</p>
              </Link>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}