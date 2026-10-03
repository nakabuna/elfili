"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Scale, Flame, GraduationCap, Church, Gem, Droplets, Eye, Lamp, ArrowUp } from "lucide-react";
import Reveal from "./Reveal";

const arcs = [
  { range: "Ch. 1–10", title: "The Voyage and the Dispossessed", text: "Aboard the steamer Tabo, the mysterious jeweler Simoun and the town's talk set the tone. Cabesang Tales loses his land to the friars, and Basilio's and Juli's lives grow harder." },
  { range: "Ch. 11–19", title: "Students and Scheming", text: "Simoun deepens his influence over officials. Students such as Plácido Penitente and Isagani meet a stiff, humiliating education system while the Academia de Castellano campaign takes shape." },
  { range: "Ch. 20–26", title: "Manila's Stage", text: "The petition stalls, society parades through the theatre, and anonymous pasquinades appear, a sign that unrest is spreading beneath the surface." },
  { range: "Ch. 27–33", title: "Fear and Repression", text: "The authorities respond with arrests and terror. Innocent students are swept up, Basilio is jailed, and Juli's tragedy pushes him toward Simoun's side." },
  { range: "Ch. 34–36", title: "The Wedding Feast", text: "Paulita's wedding becomes the setting for Simoun's plot. The pomegranate lamp sits at the table until Isagani sees what it is." },
  { range: "Ch. 37–38", title: "Mystery and Fatality", text: "With the plan foiled, Simoun is ruined and dies at Padre Florentino's seaside house, and the story closes on conscience and hope." },
];

export function ChapterGuide() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="chapters" className="mx-auto max-w-3xl px-6 py-28">
      <Reveal><h2 className="font-serif text-4xl text-white md:text-5xl">Chapter Guide</h2>
        <p className="mt-3 text-neutral-400">The novel's 38 chapters in six movements.</p></Reveal>
      <div className="mt-10 space-y-3">
        {arcs.map((a, i) => (
          <Reveal key={a.title} className="glass overflow-hidden rounded-3xl">
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-6 text-left">
              <span><span className="text-xs uppercase tracking-[0.25em] text-gold">{a.range}</span>
                <span className="mt-1 block font-serif text-xl text-white">{a.title}</span></span>
              <motion.span animate={{ rotate: open === i ? 180 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
                <ChevronDown className="text-gold" /></motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 30 }} className="overflow-hidden">
                  <p className="px-6 pb-6 leading-relaxed text-neutral-300">{a.text}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const themes = [
  { icon: Scale, title: "Corruption", text: "Officials, friars and profiteers bend the law for private gain, and Simoun feeds the rot on purpose." },
  { icon: Flame, title: "Revolution vs. Reform", text: "Simoun's violence stands against Isagani's and Florentino's belief in change through conscience and education." },
  { icon: GraduationCap, title: "Education", text: "The Academia de Castellano fight shows how a system can block learning in the name of order." },
  { icon: Church, title: "Religious Hypocrisy", text: "Friar power is shown as self-serving, which Rizal contrasts with Florentino's honest faith." },
];

const symbols = [
  { icon: Lamp, title: "The Pomegranate Lamp", text: "A beautiful gift that hides a bomb, a symbol of violent revolution." },
  { icon: Eye, title: "Tinted Glasses", text: "Simoun's disguise: a mask over Ibarra's identity and grief." },
  { icon: Gem, title: "The Jewels", text: "Wealth used as a weapon, finally thrown into the sea by Florentino." },
  { icon: Droplets, title: "The Sea", text: "Where Florentino returns the jewels, trusting the future to the worthy." },
];

function Cards({ items }: { items: typeof themes }) {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2">
      {items.map(({ icon: I, title, text }, i) => (
        <Reveal key={title} delay={(i % 2) * 0.08} className="glass rounded-3xl p-7">
          <I className="text-gold" size={26} />
          <h3 className="mt-4 font-serif text-xl text-white">{title}</h3>
          <p className="mt-2 text-neutral-300">{text}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function Themes() {
  return (
    <section id="themes" className="mx-auto max-w-5xl px-6 py-28">
      <Reveal><h2 className="font-serif text-4xl text-white md:text-5xl">Themes</h2></Reveal>
      <Cards items={themes} />
      <Reveal><h2 className="mt-24 font-serif text-4xl text-white md:text-5xl">Symbols and Motifs</h2></Reveal>
      <Cards items={symbols} />
    </section>
  );
}

const rows = [
  ["Published", "1887, Berlin", "1891, Ghent"],
  ["Protagonist", "Crisóstomo Ibarra", "Simoun (Ibarra in disguise)"],
  ["Tone", "Romantic and satirical", "Darker and political"],
  ["Focus", "Social ills and abuse", "Revolution and its cost"],
  ["Ending", "Ibarra seemingly dies after Elías's sacrifice", "Simoun dies, hope rests on the youth"],
];

export function Compare() {
  return (
    <section id="compare" className="mx-auto max-w-4xl px-6 py-28">
      <Reveal><h2 className="font-serif text-4xl text-white md:text-5xl">Noli vs. Fili</h2></Reveal>
      <Reveal className="glass mt-10 overflow-x-auto rounded-3xl">
        <div className="min-w-[560px] divide-y divide-white/10">
          <div className="grid grid-cols-3 gap-4 p-5 text-xs uppercase tracking-[0.2em] text-gold">
            <span /><span>Noli Me Tángere</span><span>El Filibusterismo</span></div>
          {rows.map(([k, a, b]) => (
            <div key={k} className="grid grid-cols-3 gap-4 p-5 text-sm">
              <span className="font-serif text-white">{k}</span><span className="text-neutral-300">{a}</span><span className="text-neutral-300">{b}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 pb-40 pt-16 text-center min-[900px]:pb-16">
      <p className="font-serif text-2xl text-white">El Filibusterismo</p>
      <p className="mt-2 text-sm text-neutral-500">An interactive study guide to the novel by Dr. José Rizal (1891).</p>
      <motion.a href="#hero" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }} transition={{ type: "spring", stiffness: 320, damping: 30 }}
        className="glass mt-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-gold">
        <ArrowUp size={16} /> Back to top
      </motion.a>
    </footer>
  );
}