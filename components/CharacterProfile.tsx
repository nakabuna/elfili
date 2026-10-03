"use client";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { characters, slugOf } from "./data";
import Reveal from "./Reveal";

type C = (typeof characters)[number];

export default function CharacterProfile({ character, others }: { character: C; others: C[] }) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 md:py-16">
      <Link href="/#roster" className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-gold">
        <ArrowLeft size={16} /> All characters
      </Link>

      <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
        <div className="md:sticky md:top-10">
          <Reveal>
            <div className="aspect-[3/4] overflow-hidden rounded-[32px] border border-white/10 bg-neutral-950 bg-cover bg-center"
              style={{ backgroundImage: `url(${character.image})` }} />
          </Reveal>
        </div>

        <div className="space-y-6 md:py-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{character.role}</p>
            <h1 className="mt-2 font-serif text-5xl text-white md:text-6xl">{character.name}</h1>
          </Reveal>
          <Reveal className="glass rounded-3xl p-7">
            <h2 className="mb-3 font-serif text-xl text-gold">Biography</h2>
            <p className="leading-relaxed text-neutral-300">{character.bio}</p>
          </Reveal>
          <Reveal className="glass rounded-3xl p-7">
            <h2 className="mb-3 flex items-center gap-2 font-serif text-xl text-gold"><Sparkles size={18} /> Modern Connection</h2>
            <p className="leading-relaxed text-neutral-300">{character.modern}</p>
          </Reveal>
          <Reveal className="glass rounded-3xl p-7">
            <h2 className="mb-4 font-serif text-xl text-gold">Meet the others</h2>
            <div className="grid grid-cols-3 gap-3">
              {others.map((o) => (
                <Link key={o.name} href={`/characters/${slugOf(o.name)}`} className="group">
                  <div className="aspect-[3/4] rounded-2xl border border-white/10 bg-cover bg-center transition-transform group-hover:scale-105"
                    style={{ backgroundImage: `url(${o.image})` }} />
                  <p className="mt-2 truncate text-xs text-neutral-400 group-hover:text-gold">{o.name}</p>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}