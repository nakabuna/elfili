"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, Church, Wheat, GraduationCap, Flame } from "lucide-react";
import Reveal from "./Reveal";

const background = [
  { year: "1872", title: "The Gomburza and the Word 'Filibustero'", text: "Rizal first hears the word 'filibustero' during the execution of the Gomburza, and his father would not let them utter it for fear of retaliation. To the Spanish it meant a dangerous educated Filipino; to Rizal and the people it became a symbol of patriotism. The novel is dedicated to the three martyr priests." },
  { year: "Oct 1887", title: "Writing Begins in Calamba", text: "Rizal starts the novel in Calamba despite the backlash his family faced after the Noli and the agrarian troubles in the town." },
  { year: "1888", title: "London, Paris and Belgium", text: "Leaving his homeland again for his family's safety, he keeps writing across London, Paris, and Belgium." },
  { year: "1891", title: "Finished in Biarritz", text: "Rizal completes the novel in Biarritz, France." },
  { year: "1891", title: "Printing in Ghent", text: "He funds the printing by pawning his belongings. When printing halts for lack of money, his friend Valentin Ventura steps in, but Rizal still has to cut 49 pages from the planned 279-page manuscript." },
  { year: "After", title: "The Manuscript", text: "To thank Ventura, Rizal gave him the original manuscript, pen, and an autographed copy, which now rest in the National Library in Ermita, Manila." },
];

const issues = [
  { icon: Church, title: "Sickly Clerics and the Frailocracy", novel: "The religious orders held great political, economic, and moral power, a system called 'frailocracy'. Juli's encounter with Padre Camorra shows the exploitation, while Padre Florentino stands for integrity.", today: "Abuse of power and institutional impunity, where officials meant to protect the powerless exploit or neglect them." },
  { icon: GraduationCap, title: "Suppression and Injustice in Education", novel: "The colonial government feared an educated population, labeling it 'filibustero'. Basilio's and Isagani's push for a Spanish academy met distrust and discrimination.", today: "Deep inequalities in education, underfunded schools, and students sacrificing studies for family finances." },
  { icon: Wheat, title: "Agrarian Injustice and Land Dispossession", novel: "Inspired by the Calamba land conflict, Kabesang Tales loses the land he cleared to arbitrary rent and a biased court, which leads to Juli's servitude and his rise as Matanglawin.", today: "Smallholder farmers and indigenous communities displaced, with little legal protection." },
  { icon: Flame, title: "Radical Revolution vs. Moral Reform", novel: "Simoun, the 'Brown Cardinal', stirs rebellion through greed, driven by personal vengeance. Padre Florentino answers that freedom is won through virtue, education, and honorable sacrifice.", today: "The same debate between radicalism and cynicism versus moral government and democratic engagement." },
];

export default function History() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const draw = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  return (
    <main className="mx-auto max-w-4xl px-6 py-10 md:py-16">
      <Link href="/" className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-gold">
        <ArrowLeft size={16} /> Back home
      </Link>

      <Reveal>
        <p className="mt-14 text-xs uppercase tracking-[0.3em] text-gold">The world behind the novel</p>
        <h1 className="mt-2 font-serif text-5xl text-white md:text-6xl">Historical Background</h1>
      </Reveal>

      <Reveal className="glass mt-8 rounded-3xl p-7">
        <p className="leading-relaxed text-neutral-300">
          El Filibusterismo is the direct sequel to Noli Me Tángere. Both books expose corruption, social injustice, and ineffective governance, and aim to awaken Filipinos' political consciousness against Spanish oppression. Rizal dedicated it to the three patriot priests of the Gomburza.
        </p>
      </Reveal>

      <div ref={ref} className="relative mt-14 pl-14">
        <div className="absolute bottom-0 left-[19px] top-0 w-px bg-white/10" />
        <motion.div style={{ scaleY: draw }} className="absolute bottom-0 left-[19px] top-0 w-px origin-top bg-gradient-to-b from-crimson-bright to-gold" />
        {background.map((b) => (
          <div key={b.title} className="relative pb-12 last:pb-0">
            <motion.span initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, margin: "-15% 0px" }} transition={{ type: "spring", stiffness: 500, damping: 12 }}
              className="absolute -left-14 top-1 h-10 w-10 rounded-full border border-gold bg-crimson-deep" />
            <Reveal className="glass rounded-3xl p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-gold">{b.year}</p>
              <h3 className="mt-1 font-serif text-xl text-white">{b.title}</h3>
              <p className="mt-2 leading-relaxed text-neutral-300">{b.text}</p>
            </Reveal>
          </div>
        ))}
      </div>

      <Reveal>
        <h2 className="mt-28 font-serif text-4xl text-white md:text-5xl">Socio-Political Issues</h2>
        <p className="mt-3 text-neutral-400">What the novel criticises, and why it still matters.</p>
      </Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {issues.map(({ icon: I, title, novel, today }, i) => (
          <Reveal key={title} delay={(i % 2) * 0.08} className="glass rounded-3xl p-7">
            <I className="text-gold" size={26} />
            <h3 className="mt-4 font-serif text-xl text-white">{title}</h3>
            <p className="mt-2 text-neutral-300">{novel}</p>
            <p className="mt-3 border-t border-white/10 pt-3 text-sm text-neutral-400"><span className="text-gold">Today: </span>{today}</p>
          </Reveal>
        ))}
      </div>
    </main>
  );
}