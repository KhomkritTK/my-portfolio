"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const duration = 1800;
          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={spanRef}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { target: 2, suffix: "+", label: "Years Experience", icon: "📅" },
  { target: 5, suffix: "+", label: "Gov. Platforms Shipped", icon: "🏛️" },
  { target: 20, suffix: "K+", label: "Daily Requests", icon: "📊" },
  { target: 8, suffix: "+", label: "Tech Stacks", icon: "⚙️" },
];

const focusAreas = [
  {
    icon: "⚡",
    title: "Backend Performance",
    desc: "High-throughput Go APIs, Redis caching & GORM query optimization",
    color: "border-cyan-500/20 hover:border-cyan-500/40",
    iconBg: "bg-cyan-500/10 text-cyan-400",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    desc: "Docker containerization, MinIO object storage, scalable infra",
    color: "border-violet-500/20 hover:border-violet-500/40",
    iconBg: "bg-violet-500/10 text-violet-400",
  },
  {
    icon: "🤖",
    title: "AI Integration",
    desc: "LLMs embedded in government service workflows and automation",
    color: "border-amber-500/20 hover:border-amber-500/40",
    iconBg: "bg-amber-500/10 text-amber-400",
  },
];


const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function About() {
  return (
    <section id="about" className="bg-[#03070f]">

      {/* ── Hero intro ── */}
      <div className="relative overflow-hidden bg-[#050c1a] border-t border-b border-white/5">
        {/* Blobs */}
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[130px] animate-blob pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-violet-600/8 rounded-full blur-[110px] animate-blob animation-delay-2000 pointer-events-none" />
        <div className="absolute inset-0 bg-dot-dark pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left: Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 glass border border-white/10 text-cyan-400 text-xs font-bold px-4 py-2 rounded-full mb-8 tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Who I Am
              </motion.div>

              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                Building systems
                <br />
                <span className="gradient-text-cyan">that matter.</span>
              </motion.h2>

              <motion.p variants={fadeUp} className="text-slate-400 text-base leading-relaxed mb-4">
                I&apos;m{" "}
                <span className="text-white font-semibold">Khomkrit</span>, a Backend Engineer
                specializing in{" "}
                <span className="text-cyan-400 font-medium">Golang and Microservices Architecture</span>,
                building scalable platforms for national-scale government sectors.
                Highly skilled in designing high-performance{" "}
                <span className="text-violet-400 font-medium">RESTful APIs</span>{" "}
                and optimizing PostgreSQL to deliver reliable, robust backend systems.
              </motion.p>
              <motion.p variants={fadeUp} className="text-slate-600 text-sm leading-relaxed mb-10">
                Every platform I ship serves real government workflows — tourism registration,
                energy production, and forestry management — across Thailand.
              </motion.p>

              <motion.div variants={fadeUp} className="flex gap-3 flex-wrap">
                <a
                  href="#contact"
                  className="btn-neon inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold shadow-lg shadow-cyan-500/20"
                >
                  Get in Touch
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#projects"
                  className="glass border border-white/10 text-white inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold hover:border-white/20 transition-all"
                >
                  View Work
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Profile card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/30 to-violet-600/25 blur-3xl scale-110 animate-glow-pulse" />

                {/* Main card */}
                <div className="relative w-72 h-80 rounded-3xl glass border border-white/10 flex flex-col items-center justify-center shadow-2xl overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />

                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center shadow-xl shadow-cyan-900/60 mb-5">
                    <span className="text-3xl font-black text-white tracking-tight">KT</span>
                  </div>

                  <p className="text-white font-bold text-lg">Khomkrit TK</p>
                  <p className="text-slate-400 text-sm mt-1">Backend Engineer</p>
                  <p className="text-slate-600 text-xs mt-1">Thailand 🇹🇭</p>

                  {/* Status */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400 font-semibold">Available</span>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -left-12 glass-dark border border-white/10 rounded-xl shadow-xl px-3 py-2.5 flex items-center gap-2">
                  <span className="text-base">🐹</span>
                  <span className="text-xs font-bold text-white">Go / Gin</span>
                </div>
                <div className="absolute top-1/3 -right-14 glass-dark border border-white/10 rounded-xl shadow-xl px-3 py-2.5 flex items-center gap-2">
                  <span className="text-base">⚡</span>
                  <span className="text-xs font-bold text-white">NestJS</span>
                </div>
                <div className="absolute -bottom-4 -left-10 glass-dark border border-white/10 rounded-xl shadow-xl px-3 py-2.5 flex items-center gap-2">
                  <span className="text-base">🐳</span>
                  <span className="text-xs font-bold text-white">Docker</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bento-card p-6 text-center group cursor-default"
              >
                <span className="text-2xl mb-3 block group-hover:scale-110 transition-transform">{stat.icon}</span>
                <p className="text-3xl font-black gradient-text-static tabular-nums mb-1">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </p>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Education + Focus bento ── */}
      <div className="bg-[#03070f] px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-5 items-start">

          {/* Education — large card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-4">Education</p>
            <div className="bento-card hover-glow-cyan overflow-hidden">
              <div className="h-px bg-gradient-to-r from-cyan-500/60 via-violet-500/60 to-transparent" />
              <div className="p-7">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-900/50 group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-6-3.5l6 3.5 6-3.5" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className="inline-flex items-center gap-1 bg-amber-400/10 text-amber-400 border border-amber-400/20 text-xs font-bold px-2.5 py-1 rounded-full mb-3">
                      🏅 Second Class Honors
                    </span>
                    <h3 className="text-white font-bold text-xl leading-tight mb-1">
                      Bachelor of Industrial Education
                    </h3>
                    <p className="text-cyan-400 font-semibold text-sm mb-1">Computer Engineering</p>
                    <p className="text-slate-500 text-sm">
                      King Mongkut&apos;s Institute of Technology Ladkrabang
                    </p>
                    <span className="inline-block mt-3 text-slate-600 text-xs font-mono bg-white/5 border border-white/8 px-3 py-1 rounded-full">
                      2017 — 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Focus areas */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-2"
          >
            <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-4">Currently Focused On</p>
            <div className="space-y-3">
              {focusAreas.map((item) => (
                <div
                  key={item.title}
                  className={`bento-card border ${item.color} p-4 flex items-start gap-3 transition-all duration-200 cursor-default`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0 ${item.iconBg}`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{item.title}</p>
                    <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
