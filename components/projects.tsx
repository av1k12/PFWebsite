"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass-card";
import { Section } from "@/components/section";
import { PROJECTS } from "@/lib/data";
import { fadeUp } from "@/lib/motion";

export function Projects() {
  return (
    <Section id="projects" index="02" title="Featured Projects">
      <div className="grid gap-5 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <motion.article key={project.id} variants={fadeUp}>
            <GlassCard className="h-full">
              <div className="flex h-full flex-col p-5 sm:p-6">
                <h3 className="mb-6 text-xl leading-snug font-medium tracking-tight text-[#ededed]">
                  {project.title}
                </h3>

                <p className="text-sm leading-6 text-[#b5b5b5]">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-neutral-800 bg-white/5 px-2.5 py-1 font-mono text-[11px] tracking-wide text-[#cfcfcf]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
