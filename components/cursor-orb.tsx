"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { springSoft } from "@/lib/motion";

export function CursorOrb() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, springSoft);
  const springY = useSpring(y, springSoft);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      x.set(event.clientX - 10);
      y.set(event.clientY - 10);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-50 hidden size-5 rounded-full border border-white/25 bg-white/10 shadow-[0_0_24px_rgba(165,180,252,0.35)] backdrop-blur-sm md:block [@media(pointer:coarse)]:hidden [@media(prefers-reduced-motion:reduce)]:hidden"
      style={{ x: springX, y: springY }}
    />
  );
}
