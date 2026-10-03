"use client";
import { useState } from "react";
import { AnimatePresence, motion, Reorder, useDragControls } from "framer-motion";
import { ChevronLeft, GripVertical, RotateCcw, Shuffle, Trophy } from "lucide-react";
import { spring } from "./motion";

type Level = "easy" | "medium" | "hard";
type MC = { kind: "mc"; q: string; options: string[]; answer: string };
type Ord = { kind: "order"; title: string; correct: string[]; start: string[] };
type Item = MC | Ord;

const bank: Record<Level, { q: string; a: string; wrong: string[] }[]> = {
  easy: [
    { q: "Who wrote El Filibusterismo?", a: "José Rizal", wrong: ["Andrés Bonifacio", "Marcelo H. del Pilar", "Graciano López Jaena"] },
    { q: "Who is Simoun really?", a: "Crisóstomo Ibarra", wrong: ["Basilio", "Padre Florentino", "Isagani"] },
    { q: "To whom did Rizal dedicate the novel?", a: "The Gomburza priests", wrong: ["His parents", "The Katipunan", "The Captain-General"] },
    { q: "Who throws the lamp into the river?", a: "Isagani", wrong: ["Basilio", "Simoun", "Kabesang Tales"] },
    { q: "Where does Simoun die?", a: "Padre Florentino's house", wrong: ["Bilibid Prison", "A Manila theatre", "The steamer Tabo"] },
    { q: "Which book is El Filibusterismo the sequel to?", a: "Noli Me Tángere", wrong: ["La Solidaridad", "Mi Último Adiós", "Sobre la Indolencia de los Filipinos"] },
  ],
  medium: [
    { q: "What did Simoun hide inside the pomegranate lamp?", a: "Nitroglycerin", wrong: ["Gold coins", "A secret letter", "Spanish documents"] },
    { q: "What outlaw name does Kabesang Tales take?", a: "Matanglawin", wrong: ["Elías", "Tandang Selo", "Pilosopo Tasio"] },
    { q: "Which priest exploits Juli?", a: "Padre Camorra", wrong: ["Padre Florentino", "Padre Salví", "Padre Irene"] },
    { q: "Who does Paulita Gómez marry?", a: "Juanito Pelaez", wrong: ["Isagani", "Basilio", "Simoun"] },
    { q: "In which city was the novel printed?", a: "Ghent", wrong: ["Berlin", "Madrid", "Manila"] },
    { q: "What is 'frailocracy'?", a: "Rule dominated by the friars", wrong: ["Rule by the military", "Rule by wealthy merchants", "Rule by Filipino councils"] },
  ],
  hard: [
    { q: "Who helped pay for printing when Rizal ran out of money?", a: "Valentin Ventura", wrong: ["Maximo Viola", "Marcelo H. del Pilar", "Antonio Luna"] },
    { q: "How many pages did Rizal cut from his planned manuscript?", a: "49 pages", wrong: ["25 pages", "79 pages", "120 pages"] },
    { q: "Where did Rizal finish writing the novel?", a: "Biarritz, France", wrong: ["Calamba", "Ghent", "London"] },
    { q: "What nickname fits Simoun as the power behind the Captain-General?", a: "The Brown Cardinal", wrong: ["The Red Baron", "The Iron Chancellor", "The Black Prince"] },
    { q: "What did the Academia de Castellano petition aim to do?", a: "Teach Spanish to Filipino students", wrong: ["Open a medical school", "Abolish friar rule", "Print a newspaper"] },
    { q: "Which event led to the Gomburza's execution?", a: "The Cavite Mutiny", wrong: ["The Katipunan uprising", "The Battle of Manila Bay", "The Calamba land case"] },
  ],
};

const plot = ["The steamer Tabo: Simoun is introduced", "Cabesang Tales loses his land", "The Academia de Castellano is stalled", "The wedding feast and the lamp", "Simoun's last confession"];
const history = ["1872: The Gomburza are executed", "Oct 1887: Rizal begins writing in Calamba", "1888: He continues in London, Paris and Belgium", "1891: He finishes the novel in Biarritz", "1891: The novel is printed in Ghent"];

const levels: { id: Level; label: string; desc: string; n: number }[] = [
  { id: "easy", label: "Easy", desc: "Core facts. Ordering rounds use 3 events.", n: 3 },
  { id: "medium", label: "Medium", desc: "Plot details. Ordering rounds use 4 events.", n: 4 },
  { id: "hard", label: "Hard", desc: "History and fine points. Ordering uses 5 events.", n: 5 },
];

const shuffle = <T,>(a: T[]) => {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; }
  return r;
};

function buildOrder(title: string, list: string[], n: number): Ord {
  const idx = shuffle(list.map((_, i) => i)).slice(0, n).sort((a, b) => a - b);
  const correct = idx.map((i) => list[i]);
  let start: string[];
  do { start = shuffle(correct); } while (start.every((v, i) => v === correct[i]));
  return { kind: "order", title, correct, start };
}

function build(level: Level): Item[] {
  const n = levels.find((l) => l.id === level)!.n;
  const mcs: MC[] = shuffle(bank[level]).slice(0, 5).map((b) => ({ kind: "mc", q: b.q, answer: b.a, options: shuffle([b.a, ...b.wrong]) }));
  return shuffle<Item>([...mcs, buildOrder("Put the plot events in order", plot, n), buildOrder("Put the historical events in order", history, n)]);
}

function Question({ item, onDone }: { item: MC; onDone: (ok: boolean) => void }) {
  const [picked, setPicked] = useState<string | null>(null);
  const tone = (o: string) =>
    picked === null ? "border-white/10 hover:bg-white/10"
    : o === item.answer ? "border-green-400 bg-green-500/25 text-green-200"
    : o === picked ? "border-red-400 bg-red-500/25 text-red-200" : "border-white/5 opacity-40";
  const pick = (o: string) => {
    if (picked !== null) return;
    setPicked(o);
    setTimeout(() => onDone(o === item.answer), 1100);
  };
  return (
    <>
      <h3 className="mt-3 font-serif text-2xl text-white">{item.q}</h3>
      <div className="mt-6 grid gap-3">
        {item.options.map((o) => (
          <motion.button key={o} onClick={() => pick(o)} disabled={picked !== null}
            whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.96 }} transition={spring.snappy}
            animate={picked === o && o !== item.answer ? { x: [0, -6, 6, -4, 0], transition: { duration: 0.4, ease: "easeInOut" } } : {}}
            className={`rounded-2xl border px-5 py-4 text-left transition-colors ${tone(o)}`}>{o}</motion.button>
        ))}
      </div>
    </>
  );
}

function Row({ value, tone, locked }: { value: string; tone: string; locked: boolean }) {
  const controls = useDragControls();
  return (
    <Reorder.Item value={value} dragListener={false} dragControls={controls} whileDrag={{ scale: 1.03 }}
      className={`flex select-none items-center gap-3 rounded-2xl border px-4 py-3 ${tone}`}>
      <span onPointerDown={(e) => !locked && controls.start(e)} className={`touch-none ${locked ? "opacity-30" : "cursor-grab active:cursor-grabbing"}`}>
        <GripVertical size={18} className="text-gold" />
      </span>
      <span className="text-sm md:text-base">{value}</span>
    </Reorder.Item>
  );
}

function Ordering({ item, onDone }: { item: Ord; onDone: (ok: boolean) => void }) {
  const [order, setOrder] = useState(item.start);
  const [checked, setChecked] = useState(false);
  const ok = order.every((v, i) => v === item.correct[i]);
  const tone = (v: string, i: number) =>
    !checked ? "border-white/10 bg-white/5"
    : v === item.correct[i] ? "border-green-400 bg-green-500/25 text-green-200" : "border-red-400 bg-red-500/25 text-red-200";
  return (
    <>
      <h3 className="mt-3 font-serif text-2xl text-white">{item.title}</h3>
      <p className="mt-1 text-sm text-neutral-400">Drag the grip handles. Earliest event on top.</p>
      <Reorder.Group axis="y" values={order} onReorder={setOrder} className="mt-6 grid gap-3">
        {order.map((v, i) => <Row key={v} value={v} tone={tone(v, i)} locked={checked} />)}
      </Reorder.Group>
      {checked && !ok && (
        <p className="mt-4 text-sm text-neutral-400"><span className="text-gold">Correct order: </span>{item.correct.join(" → ")}</p>
      )}
      <motion.button whileTap={{ scale: 0.96 }} transition={spring.snappy}
        onClick={() => (checked ? onDone(ok) : setChecked(true))}
        className="glass mt-6 w-full rounded-full px-6 py-3 text-gold">{checked ? "Continue" : "Check order"}</motion.button>
    </>
  );
}

export default function KnowledgeCheck() {
  const [level, setLevel] = useState<Level | null>(null);
  const [quiz, setQuiz] = useState<Item[]>([]);
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState<string[]>([]);
  const [best, setBest] = useState<Partial<Record<Level, number>>>({});

  const start = (l: Level) => { setLevel(l); setQuiz(build(l)); setI(0); setScore(0); setMissed([]); };
  const retry = () => { setI(0); setScore(0); setMissed([]); };
  const menu = () => { setLevel(null); setQuiz([]); };

  const done = (ok: boolean) => {
    const item = quiz[i];
    const final = score + (ok ? 1 : 0);
    if (ok) setScore(final);
    else setMissed((m) => [...m, item.kind === "mc" ? `${item.q} → ${item.answer}` : `${item.title}: ${item.correct.join(" → ")}`]);
    if (i + 1 >= quiz.length && level) setBest((b) => ({ ...b, [level]: Math.max(b[level] ?? 0, final) }));
    setI(i + 1);
  };

  const finished = level !== null && i >= quiz.length;
  const pct = quiz.length ? score / quiz.length : 0;
  const passed = pct >= 0.6;

  return (
    <section id="quiz" className="mx-auto max-w-2xl px-6 pb-40 pt-28 min-[900px]:pb-28">
      <h2 className="mb-10 font-serif text-4xl text-white md:text-5xl">Knowledge Check</h2>
      <div className="glass overflow-hidden rounded-[32px] p-8">
        <AnimatePresence mode="wait">
          {level === null ? (
            <motion.div key="menu" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={spring.smooth}>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Choose a difficulty</p>
              
              <div className="mt-6 grid gap-3">
                {levels.map((l) => (
                  <motion.button key={l.id} onClick={() => start(l.id)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} transition={spring.snappy}
                    className="rounded-2xl border border-white/10 px-5 py-4 text-left hover:bg-white/10">
                    <span className="flex items-center justify-between">
                      <span className="font-serif text-xl text-white">{l.label}</span>
                      {best[l.id] !== undefined && <span className="text-xs text-gold">Best {best[l.id]}/7</span>}
                    </span>
                                     </motion.button>
                ))}
              </div>
            </motion.div>
          ) : !finished ? (
            <motion.div key={i} initial={{ x: 80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -80, opacity: 0 }} transition={spring.smooth}>
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">{level} · {i + 1} / {quiz.length}</p>
                <button onClick={menu} className="flex items-center gap-1 text-xs text-neutral-400 hover:text-gold"><ChevronLeft size={14} /> Levels</button>
              </div>
              {quiz[i].kind === "mc"
                ? <Question item={quiz[i] as MC} onDone={done} />
                : <Ordering item={quiz[i] as Ord} onDone={done} />}
            </motion.div>
          ) : (
            <motion.div key="result" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={spring.bouncy} className="py-4 text-center">
              <Trophy className="mx-auto text-gold" size={44} />
              <h3 className="mt-4 font-serif text-4xl text-white">{score} / {quiz.length}</h3>
              <p className="mt-2 text-neutral-400">
                {pct === 1 ? "A flawless reading of Rizal." : passed ? "A fine grasp of the novel." : "Not quite there yet. Retry the same quiz and beat your score."}
              </p>
              {missed.length > 0 && (
                <div className="mt-6 rounded-2xl border border-white/10 p-4 text-left">
                  <p className="text-xs uppercase tracking-[0.25em] text-gold">Review</p>
                  <ul className="mt-2 space-y-2 text-sm text-neutral-300">{missed.map((m) => <li key={m}>{m}</li>)}</ul>
                </div>
              )}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <motion.button whileTap={{ scale: 0.96 }} onClick={retry}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 ${passed ? "glass text-gold" : "bg-crimson-bright text-white"}`}>
                  <RotateCcw size={16} /> Retry this quiz
                </motion.button>
                <motion.button whileTap={{ scale: 0.96 }} onClick={() => start(level!)} className="glass inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-gold">
                  <Shuffle size={16} /> New random quiz
                </motion.button>
              </div>
              <button onClick={menu} className="mt-5 text-sm text-neutral-400 hover:text-gold">Change difficulty</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}