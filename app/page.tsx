import { BackgroundGlow } from "@/components/background-glow";
import { Contact } from "@/components/contact";
import { CursorOrb } from "@/components/cursor-orb";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Interests } from "@/components/interests";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundGlow />
      <CursorOrb />
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <div className="space-y-28">
          <Experience />
          <Projects />
          <Skills />
          <Interests />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
