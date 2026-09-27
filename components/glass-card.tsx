"use client";

import type { ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { springSoft } from "@/lib/motion";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  const rotateX = useSpring(0, springSoft);
  const rotateY = useSpring(0, springSoft);
  const scale = useSpring(1, springSoft);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(240px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.06), transparent 70%)`;

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
        rotateX.set((py - 0.5) * -6);
        rotateY.set((px - 0.5) * 6);
      }}
      onPointerEnter={(event) => {
        if (event.pointerType !== "mouse") return;
        scale.set(1.015);
      }}
      onPointerLeave={reset}
      style={{
        rotateX,
        rotateY,
        scale,
        transformPerspective: 900,
      }}
      className={cn(
        "relative h-full overflow-hidden rounded-xl border border-neutral-800/80 bg-neutral-950/40 backdrop-blur-md transition-all duration-300",
        "hover:border-neutral-600 hover:bg-neutral-900/50 hover:shadow-[0_0_25px_rgba(255,255,255,0.04)]",
        className,
      )}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: spotlight }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}
