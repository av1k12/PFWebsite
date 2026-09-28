"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";
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
        <motion.p
          variants={fadeUp}
          className="mb-5 font-mono text-xs tracking-[0.28em] text-[#888888] uppercase"
        >
          Portfolio / 2026
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex items-center gap-4 sm:gap-6"
        >
          <Image
            src="/avatar.jpg"
            alt="Portrait of Avaneesh Konda"
            width={96}
            height={96}
            preload
            className="h-[88px] w-[88px] shrink-0 rounded-full border-2 border-neutral-800 object-cover shadow-xl ring-4 ring-neutral-950/60 sm:h-24 sm:w-24"
          />
          <h1 className="shimmer-text text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Avaneesh Konda
          </h1>
        </motion.div>

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
