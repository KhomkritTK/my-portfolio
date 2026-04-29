"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSection } from "@/context/section";

const PHRASES = [
  "Scalable Backend Systems",
  "High-Performance Go APIs",
  "Government E-Service Platforms",
  "Cloud-Native Microservices",
];

const stats = [
  { value: "2+", label: "Years Exp." },
  { value: "5+", label: "Gov. Platforms" },
  { value: "20K+", label: "Daily Req." },
  { value: "8+", label: "Tech Stacks" },
];

function TypewriterText() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [wait, setWait] = useState(false);

  useEffect(() => {
    if (wait) {
      const t = setTimeout(() => setWait(false), 1800);
      return () => clearTimeout(t);
    }
    const phrase = PHRASES[phraseIdx];
    if (!deleting) {
      if (displayed.length < phrase.length) {
        const t = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setDeleting(true), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setWait(true);
        setPhraseIdx((i) => (i + 1) % PHRASES.length);
      }
    }
  }, [displayed, deleting, phraseIdx, wait]);

  return (
    <span className="gradient-text-cyan">
      {displayed}
      <span className="animate-blink text-cyan-400 ml-0.5">|</span>
    </span>
  );
}

export default function Hero() {
  const { go } = useSection();
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#03070f]"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid-dark opacity-60 pointer-events-none" />

      {/* Radial gradient vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(6,182,212,0.08),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_80%,rgba(139,92,246,0.06),transparent)] pointer-events-none" />

      {/* Animated glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-violet-600/8 rounded-full blur-[140px] animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute top-2/3 left-1/3 w-[400px] h-[400px] bg-cyan-500/6 rounded-full blur-[100px] animate-blob animation-delay-4000 pointer-events-none" />

      {/* Scanline sweep — plays once on load */}
      <div className="scanline-overlay" />

      <div className="relative max-w-6xl w-full mx-auto px-6 flex flex-col items-center text-center pt-24 pb-16">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 glass border border-white/10 text-xs font-bold px-4 py-2 rounded-full mb-8 tracking-widest uppercase text-slate-300"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span>Available for Work</span>
          <span className="text-slate-600">•</span>
          <span className="text-cyan-400">Bangkok, Thailand</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-6"
        >
          <span className="text-white">I Build</span>
          <br />
          <TypewriterText />
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed mb-10"
        >
          Backend developer specializing in{" "}
          <span className="text-cyan-400 font-semibold">Go + Gin</span> APIs, microservice architecture,
          and delivering government-grade e-service platforms across Thailand.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <button
            onClick={() => go("projects")}
            className="btn-neon px-8 py-3.5 rounded-xl text-sm font-semibold shadow-xl shadow-cyan-500/20"
          >
            View My Work →
          </button>
          <button
            onClick={() => go("contact")}
            className="glass border border-white/10 text-white px-8 py-3.5 rounded-xl text-sm font-semibold hover:border-cyan-500/30 hover:bg-white/5 transition-all duration-300"
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center gap-6 mb-16"
        >
          <a
            href="https://github.com/tonklasocute"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-slate-500 hover:text-white transition-colors font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <span className="w-px h-4 bg-white/10" />
          <a
            href="https://www.linkedin.com/in/khomkrit-daengnuan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-slate-500 hover:text-cyan-400 transition-colors font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <span className="w-px h-4 bg-white/10" />
          <a
            href="mailto:khomkrit.d@outlook.com"
            className="flex items-center gap-2 text-xs text-slate-500 hover:text-violet-400 transition-colors font-medium"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="w-full max-w-2xl glass border border-white/8 rounded-2xl px-4 py-5 grid grid-cols-4 gap-4"
        >
          {stats.map((s, i) => (
            <div key={s.label} className={`text-center ${i < stats.length - 1 ? "border-r border-white/6" : ""}`}>
              <p className="text-xl md:text-2xl font-black gradient-text-static">{s.value}</p>
              <p className="text-[10px] text-slate-500 font-medium mt-1 uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => go("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-600 hover:text-cyan-400 transition-colors"
        aria-label="Go to About"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        <motion.svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>
    </section>
  );
}
