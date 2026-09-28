"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { SOCIALS } from "@/lib/data";
import { fadeUp, springSoft, staggerContainer } from "@/lib/motion";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: SOCIALS.github,
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: SOCIALS.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: "Email",
    href: `mailto:${SOCIALS.email}`,
    icon: Mail,
  },
] as const;

export function Hero() {
  return (
    <section id="about" className="relative scroll-mt-28 px-5 pt-36 pb-20 sm:px-8 sm:pt-44">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mx-auto flex w-full max-w-5xl flex-col items-start"
      >
        <motion.div variants={fadeUp} className="mb-8">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/40 px-4 py-2 text-sm text-[#ededed] backdrop-blur-md"
          >
            <span className="status-dot size-2 rounded-full bg-green-400" />
            <span>Seeking SWE Internships (Summer 2027)</span>
          </motion.div>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mb-3 font-mono text-xs tracking-[0.28em] text-[#888888] uppercase"
        >
          Portfolio / 2026
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="shimmer-text max-w-4xl text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-7xl"
        >
          Avaneesh Konda
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-5 text-lg text-[#ededed] sm:text-xl"
        >
          CS & Mathematics at Purdue University
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-base leading-7 text-[#888888] sm:text-lg sm:leading-8"
        >
          Focusing on systems programming, distributed backend architectures,
          and machine learning infrastructure. Currently continuing as an AI
          &amp; Automation SWE Intern at Cincinnati Insurance Company, building
          distributed cloud hosting layers at The Data Mine, and researching
          neural quantum states in Prof. Datta&apos;s Lab.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
          {SOCIAL_LINKS.map((item) => {
            const Icon = item.icon;
            const external = item.href.startsWith("http");

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                transition={springSoft}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#ededed] backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/10"
              >
                <Icon className="size-4" />
                {item.label}
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
