"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass-card";
import { Section } from "@/components/section";
import { EXPERIENCE } from "@/lib/data";
import { fadeUp } from "@/lib/motion";

export function Experience() {
  return (
    <Section id="experience" index="01" title="Experience">
      <div className="relative">
        <div
          aria-hidden
          className="absolute top-3 bottom-3 left-[11px] w-px bg-neutral-800 sm:left-[15px]"
        />

        <div className="space-y-5">
          {EXPERIENCE.map((role) => (
            <motion.article
              key={role.id}
              variants={fadeUp}
              className="relative grid grid-cols-[24px_1fr] gap-4 sm:grid-cols-[32px_1fr] sm:gap-6"
            >
              <div className="relative pt-6">
                <span className="absolute top-6 left-1.5 size-2.5 rounded-full bg-neutral-700 ring-2 ring-neutral-500/30 sm:left-2.5" />
              </div>

              <GlassCard>
                <div className="p-5 sm:p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-medium tracking-tight text-[#ededed]">
                        {role.role}
                      </h3>
                      <p className="mt-1 text-sm text-[#c4c4c4]">{role.company}</p>
                    </div>
                    <p className="font-mono text-xs tracking-wide text-[#888888] uppercase">
                      {role.dates}
                    </p>
                  </div>

                  <ul className="mt-5 space-y-3 text-sm leading-6 text-[#b5b5b5]">
                    {role.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-neutral-600" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
