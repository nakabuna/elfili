"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Search, Shuffle } from "lucide-react";
import Reveal from "./Reveal";
import { spring } from "./motion";
import { characters } from "./data";
import { glossary, quotes, nodes, edges } from "./study";

const wrap = "mx-auto max-w-5xl px-6 py-28";

export function RelationshipMap() {
  const [sel, setSel] = useState<string | null>(null);
  const at = (id: string) => nodes.find((n) => n.id === id)!;
  const mine = edges.filter((e) => e.a === sel || e.b === sel);
  return (
    <section id="relationships" className={wrap}>
      <Reveal><h2 className="font-serif text-4xl text-white md:text-5xl">Relationship Map</h2>
        <p className="mt-3 text-neutral-400">Tap a character to see how they connect.</p></Reveal>
      <Reveal className="glass mt-10 rounded-3xl p-4">
        <svg viewBox="0 0 640 420" className="w-full">
          {edges.map((e) => {
            const a = at(e.a), b = at(e.b), on = e.a === sel || e.b === sel;
            return (
              <g key={e.a + e.b}>
                <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#c2a675" strokeWidth={on ? 3 : 1.5} opacity={sel ? (on ? 1 : 0.1) : 0.4} />
                {on && <text x={(a.x + b.x) / 2} y={(a.y + b.y) / 2 - 8} textAnchor="middle" fill="#c2a675" fontSize="14">{e.label}</text>}
              </g>
            );
          })}
          {nodes.map((n) => {
            const on = sel === n.id || mine.some((e) => e.a === n.id || e.b === n.id);
            return (
              <g key={n.id} onClick={() => setSel(sel === n.id ? null : n.id)} style={{ cursor: "pointer", opacity: !sel || on ? 1 : 0.3 }}>
                <circle cx={n.x} cy={n.y} r={sel === n.id ? 34 : 30} fill={sel === n.id ? "#a42c23" : "#631212"} stroke="#c2a675" strokeWidth="2" />
                <text x={n.x} y={n.y + 5} textAnchor="middle" fill="#fff" fontSize="15" fontWeight="600">{n.short}</text>
                <text x={n.x} y={n.y + 54} textAnchor="middle" fill="#d4d4d4" fontSize="14">{n.id}</text>
              </g>
            );
          })}
        </svg>
      </Reveal>
      <ul className="mt-6 space-y-1 text-center text-neutral-300">
        {sel ? mine.map((e) => <li key={e.a + e.b}><span className="text-gold">{sel === e.a ? e.b : e.a}</span>: {e.label}</li>)
          : <li className="text-neutral-500">No character selected.</li>}
      </ul>
    </section>
  );
}

export function KeyLines() {
  const [i, setI] = useState(0);
  const q = quotes[i];
  return (
    <section id="quotes" className="mx-auto max-w-3xl px-6 py-28">
      <Reveal><h2 className="font-serif text-4xl text-white md:text-5xl">Key Lines</h2></Reveal>
      <Reveal className="glass mt-10 min-h-[220px] rounded-[32px] p-8 text-center">
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={spring.smooth}>
            <p className="font-serif text-2xl leading-relaxed text-white md:text-3xl">“{q.text}”</p>
            <p className="mt-5 text-gold">{q.who}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-neutral-500">paraphrased</p>
          </motion.div>
        </AnimatePresence>
        <motion.button whileTap={{ scale: 0.95 }} onClick={() => setI((i + 1) % quotes.length)}
          className="glass mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-gold"><Shuffle size={16} /> Next line</motion.button>
      </Reveal>
    </section>
  );
}

export function Glossary() {
  const [q, setQ] = useState("");
  const list = glossary.filter((g) => (g.term + g.def).toLowerCase().includes(q.toLowerCase()));
  return (
    <section id="glossary" className={wrap}>
      <Reveal><h2 className="font-serif text-4xl text-white md:text-5xl">Glossary</h2></Reveal>
      <div className="glass mt-8 flex items-center gap-3 rounded-full px-5 py-3">
        <Search size={18} className="text-gold" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search terms" className="w-full bg-transparent text-white outline-none placeholder:text-neutral-500" />
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {list.map((g, i) => (
          <Reveal key={g.term} delay={(i % 2) * 0.08} className="glass rounded-3xl p-6">
            <h3 className="font-serif text-xl text-gold">{g.term}</h3>
            <p className="mt-2 text-neutral-300">{g.def}</p>
          </Reveal>
        ))}
        {list.length === 0 && <p className="text-neutral-500">No matching terms.</p>}
      </div>
    </section>
  );
}

const decks = {
  Characters: characters.map((c) => ({ q: c.name, a: `${c.role}. ${c.bio.split(". ")[0]}.` })),
  Terms: glossary.map((g) => ({ q: g.term, a: g.def })),
};

export function Flashcards() {
  const [deck, setDeck] = useState<keyof typeof decks>("Characters");
  const [cards, setCards] = useState(decks.Characters);
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);
  const pick = (d: keyof typeof decks) => { setDeck(d); setCards(decks[d]); setI(0); setFlip(false); };
  const go = (n: number) => { setFlip(false); setI((i + n + cards.length) % cards.length); };
  const mix = () => { setCards([...cards].sort(() => Math.random() - 0.5)); setI(0); setFlip(false); };
  const face = "absolute inset-0 flex items-center justify-center rounded-[32px] p-8 text-center [backface-visibility:hidden]";
  return (
    <section id="flashcards" className="mx-auto max-w-2xl px-6 py-28">
      <Reveal><h2 className="font-serif text-4xl text-white md:text-5xl">Flashcards</h2></Reveal>
      <div className="mt-8 flex gap-3">
        {(Object.keys(decks) as (keyof typeof decks)[]).map((d) => (
          <button key={d} onClick={() => pick(d)} className={`rounded-full px-5 py-2 text-sm ${deck === d ? "bg-crimson-bright text-white" : "glass text-gold"}`}>{d}</button>
        ))}
      </div>
      <div className="mt-8 h-72 cursor-pointer [perspective:1000px]" onClick={() => setFlip(!flip)}>
        <motion.div animate={{ rotateY: flip ? 180 : 0 }} transition={spring.smooth} style={{ transformStyle: "preserve-3d" }} className="relative h-full w-full">
          <div className={`${face} glass font-serif text-3xl text-white`}>{cards[i].q}</div>
          <div className={`${face} glass text-neutral-200`} style={{ transform: "rotateY(180deg)" }}>{cards[i].a}</div>
        </motion.div>
      </div>
      <p className="mt-3 text-center text-sm text-neutral-500">Tap the card to flip. {i + 1} / {cards.length}</p>
      <div className="mt-6 flex items-center justify-center gap-4">
        <button onClick={() => go(-1)} aria-label="Previous" className="glass rounded-full p-3 text-gold"><ChevronLeft /></button>
        <button onClick={mix} className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm text-gold"><Shuffle size={16} /> Shuffle</button>
        <button onClick={() => go(1)} aria-label="Next" className="glass rounded-full p-3 text-gold"><ChevronRight /></button>
      </div>
    </section>
  );
}