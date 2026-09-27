"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass-card";
import { Section } from "@/components/section";
import { SKILL_GROUPS } from "@/lib/data";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <Section id="skills" index="03" title="Technical Arsenal & Coursework">
      <div className="grid gap-4 md:grid-cols-3">
        {SKILL_GROUPS.map((group) => (
          <motion.div
            key={group.id}
            variants={fadeUp}
            className={cn(
              group.span === "wide" ? "md:col-span-2" : "md:col-span-1",
              group.id === "coursework" && "md:col-span-3",
            )}
          >
            <GlassCard className="h-full">
              <div className="p-5 sm:p-6">
                <h3 className="mb-4 font-mono text-xs tracking-[0.2em] text-[#888888] uppercase">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-neutral-800 bg-white/5 px-3 py-1.5 text-sm text-[#ededed]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
