export const spring = {
  smooth: { type: "spring", stiffness: 158, damping: 25 }, // iOS default: response 0.5, no bounce
  snappy: { type: "spring", stiffness: 320, damping: 30 }, // taps, small UI
  bouncy: { type: "spring", stiffness: 200, damping: 17 }, // playful pops
} as const;