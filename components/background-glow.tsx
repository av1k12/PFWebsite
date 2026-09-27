"use client";

import { useEffect, useRef } from "react";

export function BackgroundGlow() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    let frame = 0;
    let targetX = window.innerWidth * 0.5;
    let targetY = window.innerHeight * 0.22;
    let currentX = targetX;
    let currentY = targetY;

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      layer.style.setProperty("--mx", `${currentX}px`);
      layer.style.setProperty("--my", `${currentY}px`);
      frame = window.requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={layerRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="mouse-glow absolute inset-0 transition-opacity duration-500" />
      <div className="bg-grid absolute inset-0" />
      <div className="absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_60%)]" />
    </div>
  );
}
