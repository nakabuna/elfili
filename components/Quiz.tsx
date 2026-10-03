"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RotateCcw, Trophy } from "lucide-react";
import { questions } from "./data";

export default function KnowledgeCheck() {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const done = i >= questions.length;
  const q = questions[Math.min(i, questions.length - 1)];

  const answer = (idx: number) => {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === q.c) setScore((s) => s + 1);
    setTimeout(() => { setPicked(null); setI((n) => n + 1); }, 1100);
  };
  const reset = () => { setI(0); setScore(0); setPicked(null); };
  const tone = (idx: number) =>
    picked === null ? "border-white/10 hover:bg-white/10"
    : idx === q.c ? "border-green-400 bg-green-500/25 text-green-200"
    : idx === picked ? "border-red-400 bg-red-500/25 text-red-200" : "border-white/5 opacity-40";

  return (
    <section id="quiz" className="mx-auto max-w-2xl px-6 pb-40 pt-28 min-[900px]:pb-28">
      <h2 className="mb-10 font-serif text-4xl text-white md:text-5xl">Knowledge Check</h2>
      <div className="glass overflow-hidden rounded-[32px] p-8">
        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div key={i} initial={{ x: 80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -80, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Question {i + 1} / {questions.length}</p>
              <h3 className="mt-3 font-serif text-2xl text-white">{q.q}</h3>
              <div className="mt-6 grid gap-3">
                {q.a.map((opt, idx) => (
                  <motion.button key={opt} whileTap={{ scale: 0.97 }} animate={picked !== null && idx === picked && idx !== q.c ? { x: [0, -6, 6, -4, 0] } : {}}
                    onClick={() => answer(idx)} disabled={picked !== null}
                    className={`rounded-2xl border px-5 py-4 text-left transition-colors ${tone(idx)}`}>{opt}</motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="result" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }} className="py-6 text-center">
              <Trophy className="mx-auto text-gold" size={44} />
              <h3 className="mt-4 font-serif text-4xl text-white">{score} / {questions.length}</h3>
              <p className="mt-2 text-neutral-400">{score === questions.length ? "A flawless reading of Rizal." : score >= 3 ? "A fine grasp of the novel." : "The novel rewards a second reading."}</p>
              <button onClick={reset} className="glass mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-gold"><RotateCcw size={16} /> Try again</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
