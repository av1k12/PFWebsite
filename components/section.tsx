"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  index,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      variants={staggerContainer}
      className={cn("scroll-mt-28 px-5 sm:px-8", className)}
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.div
          variants={fadeUp}
          className={cn(
            "flex items-end gap-4",
            description ? "mb-3" : "mb-8",
          )}
        >
          <span className="font-mono text-xs tracking-[0.22em] text-[#888888] uppercase">
            {index}
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-[#ededed] sm:text-3xl">
            {title}
          </h2>
        </motion.div>
        {description ? (
          <motion.p
            variants={fadeUp}
            className="mb-8 max-w-2xl text-sm leading-7 text-[#888888] sm:text-base"
          >
            {description}
          </motion.p>
        ) : null}
        {children}
      </div>
    </motion.section>
  );
}
