"use client";

import { Cpu, Target, Trophy, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass-card";
import { Section } from "@/components/section";
import { INTERESTS } from "@/lib/data";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

const ICONS = {
  wrench: Wrench,
  trophy: Trophy,
  target: Target,
  cpu: Cpu,
} as const;

export function Interests() {
  return (
    <Section
      id="interests"
      index="04"
      title="Beyond the Terminal"
      description="What I get into when I'm not writing code."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {INTERESTS.map((item) => {
          const Icon = ICONS[item.icon];

          return (
            <motion.article
              key={item.id}
              variants={fadeUp}
              className={cn(
                item.span === "wide" ? "md:col-span-2" : "md:col-span-1",
              )}
            >
              <GlassCard className="h-full">
                <div className="flex h-full flex-col p-5 sm:p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex size-9 items-center justify-center rounded-full border border-neutral-800 bg-white/5 text-[#ededed]">
                      <Icon size={16} />
                    </span>
                    <h3 className="text-lg font-medium tracking-tight text-[#ededed]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-6 text-[#b5b5b5]">
                    {item.details}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-neutral-800 bg-white/5 px-2.5 py-1 font-mono text-[11px] tracking-wide text-[#cfcfcf]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
