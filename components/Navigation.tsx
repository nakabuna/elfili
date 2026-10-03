"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { sections } from "./data";
import { spring } from "./motion";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => { const el = document.getElementById(s.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  const go = (e: React.MouseEvent, id: string, href?: string) => {
    e.preventDefault();
    if (href) return router.push(href);
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav aria-label="Sections"
      className="glass fixed bottom-4 left-1/2 z-40 flex max-w-[95vw] -translate-x-1/2 gap-1 rounded-[28px] p-2
                 min-[900px]:bottom-auto min-[900px]:left-5 min-[900px]:top-1/2 min-[900px]:-translate-y-1/2 min-[900px]:translate-x-0 min-[900px]:flex-col">
      {sections.map((s) => {
        const Icon = (Icons as any)[s.icon] ?? Icons.Circle;
        const href = "href" in s ? s.href : undefined;
        const on = active === s.id;
        return (
          <motion.a key={s.id} href={href ?? `#${s.id}`} onClick={(e) => go(e, s.id, href)} aria-label={s.label} title={s.label}
            whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.88 }} transition={spring.snappy}
            className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
            {on && <motion.span layoutId="nav-pill" transition={spring.snappy}
              className="absolute inset-0 rounded-2xl bg-crimson-bright/30 ring-1 ring-gold/40" />}
            <Icon size={20} className={`relative ${on ? "text-gold" : "text-neutral-400"}`} />
          </motion.a>
        );
      })}
    </nav>
  );
}