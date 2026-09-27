"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { springSoft } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const ids = NAV_LINKS.map((link) => link.href.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.35, 0.55] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-5">
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={springSoft}
        className="pointer-events-auto w-full max-w-3xl"
      >
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-lg sm:px-5">
          <a
            href="#about"
            className="font-mono text-sm tracking-[0.18em] text-[#ededed] uppercase"
          >
            AK
          </a>

          <div className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActive(link.href)}
                className={cn(
                  "rounded-full px-2.5 py-1.5 text-sm transition-colors",
                  active === link.href
                    ? "bg-white/10 text-[#ededed]"
                    : "text-[#888888] hover:text-[#ededed]",
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 text-[#ededed] lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-3 overflow-hidden rounded-3xl border border-white/10 bg-black/70 p-3 backdrop-blur-xl lg:hidden"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-2xl px-4 py-3 text-sm",
                    active === link.href
                      ? "bg-white/10 text-[#ededed]"
                      : "text-[#888888]",
                  )}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
