"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useSection } from "@/context/section";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  const { active } = useSection();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.35 } }}
        exit={{ opacity: 0, y: -12, transition: { duration: 0.2 } }}
      >
        {active === "hero" && <Hero />}
        {active === "about" && (
          <>
            <About />
            <Skills />
          </>
        )}
        {active === "projects" && <Projects />}
        {active === "experience" && <Experience />}
        {active === "contact" && <Contact />}
      </motion.div>
    </AnimatePresence>
  );
}
