"use client";
import { motion } from "framer-motion";

const grain = `url("data:image/svg+xml;utf8,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>"
)}")`;

// Deterministic values so server and client render identically (no Math.random).
const dust = Array.from({ length: 26 }, (_, i) => ({
  left: (i * 37) % 100,
  size: 2 + (i % 3),
  duration: 20 + (i % 7) * 4,
  delay: -(i * 1.9),
  drift: (i % 2 ? 1 : -1) * (20 + (i % 5) * 12),
}));

export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black">
      <motion.div
        className="absolute -left-40 -top-40 h-[60vmax] w-[60vmax] rounded-full bg-crimson-deep/50 blur-[140px]"
        animate={{ x: [0, 120, 0], y: [0, 80, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-48 -right-40 h-[55vmax] w-[55vmax] rounded-full bg-gold/15 blur-[150px]"
        animate={{ x: [0, -100, 0], y: [0, -90, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/3 top-1/3 h-[40vmax] w-[40vmax] rounded-full bg-crimson-bright/15 blur-[160px]"
        animate={{ x: [0, 90, -60, 0], y: [0, -70, 60, 0] }}
        transition={{ duration: 46, repeat: Infinity, ease: "easeInOut" }}
      />

      {dust.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-gold/60"
          style={{ left: `${d.left}%`, width: d.size, height: d.size }}
          initial={{ y: "105vh", opacity: 0 }}
          animate={{ y: "-10vh", x: [0, d.drift, 0], opacity: [0, 0.7, 0] }}
          transition={{ duration: d.duration, delay: d.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}

      <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay" style={{ backgroundImage: grain }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,.75) 100%)" }} />
    </div>
  );
}