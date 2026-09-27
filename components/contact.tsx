"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GlassCard } from "@/components/glass-card";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Section } from "@/components/section";
import { SOCIALS } from "@/lib/data";
import { fadeUp, springSoft } from "@/lib/motion";

export function Contact() {
  return (
    <Section id="contact" index="05" title="Contact" className="pb-8">
      <motion.div variants={fadeUp}>
        <GlassCard>
          <div className="flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="font-mono text-xs tracking-[0.22em] text-[#888888] uppercase">
                Open to opportunities
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#ededed] sm:text-3xl">
                Let&apos;s build something rigorous.
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#b5b5b5] sm:text-base">
                I&apos;m seeking software engineering internships for Summer
                2027. If you&apos;re hiring for systems, backend, or ML
                infrastructure roles, I&apos;d like to hear from you.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <motion.a
                href={`mailto:${SOCIALS.email}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={springSoft}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ededed] px-5 py-3 text-sm font-medium text-[#080808]"
              >
                <Mail size={16} />
                {SOCIALS.email}
              </motion.a>
              <div className="flex gap-3">
                <a
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-neutral-800 bg-white/5 px-4 py-2.5 text-sm text-[#ededed] backdrop-blur-md hover:bg-white/10"
                >
                  <GitHubIcon className="size-4" />
                  GitHub
                </a>
                <a
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-neutral-800 bg-white/5 px-4 py-2.5 text-sm text-[#ededed] backdrop-blur-md hover:bg-white/10"
                >
                  <LinkedInIcon className="size-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </Section>
  );
}
