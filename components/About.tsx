"use client";

import { useEffect, useRef, useState } from "react";

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
          const duration = 2000;
          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
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
  { target: 3, suffix: "+", label: "Years Experience", icon: "📅" },
  { target: 5, suffix: "", label: "Gov. Platforms Shipped", icon: "🏛️" },
  { target: 8, suffix: "+", label: "Tech Stacks", icon: "⚙️" },
  { target: 100, suffix: "K+", label: "Citizens Served", icon: "👥" },
];

const focusAreas = [
  { icon: "⚡", title: "Backend Performance", desc: "High-throughput Go APIs, Redis caching & GORM" },
  { icon: "☁️", title: "Cloud & DevOps", desc: "Docker, MinIO object storage, scalable infra" },
  { icon: "🤖", title: "AI Integration", desc: "LLMs embedded in government service workflows" },
];

const techTags = [
  { name: "Go (Golang)", color: "bg-sky-500/10 text-sky-300 border-sky-500/20" },
  { name: "Gin Framework", color: "bg-sky-500/10 text-sky-300 border-sky-500/20" },
  { name: "GORM", color: "bg-sky-500/10 text-sky-300 border-sky-500/20" },
  { name: "NestJS", color: "bg-red-500/10 text-red-300 border-red-500/20" },
  { name: "TypeScript", color: "bg-blue-500/10 text-blue-300 border-blue-500/20" },
  { name: "React", color: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20" },
  { name: "Next.js", color: "bg-slate-500/10 text-slate-300 border-slate-500/20" },
  { name: "PostgreSQL", color: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20" },
  { name: "Redis", color: "bg-orange-500/10 text-orange-300 border-orange-500/20" },
  { name: "MinIO", color: "bg-rose-500/10 text-rose-300 border-rose-500/20" },
  { name: "Docker", color: "bg-blue-500/10 text-blue-300 border-blue-500/20" },
  { name: "PHP", color: "bg-purple-500/10 text-purple-300 border-purple-500/20" },
  { name: "REST API", color: "bg-green-500/10 text-green-300 border-green-500/20" },
  { name: "Linux", color: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20" },
  { name: "Git", color: "bg-orange-500/10 text-orange-300 border-orange-500/20" },
];

export default function About() {
  return (
    <section id="about">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          DARK HERO INTRO
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="relative bg-[#050816] overflow-hidden">

        {/* Animated mesh gradient blobs */}
        <div className="absolute top-0 left-1/3 w-[650px] h-[650px] bg-indigo-600/25 rounded-full blur-[130px] animate-blob pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[110px] animate-blob animation-delay-2000 pointer-events-none" />
        <div className="absolute top-1/2 -left-20 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[90px] animate-blob animation-delay-4000 pointer-events-none" />

        {/* Dot grid overlay */}
        <div className="absolute inset-0 bg-dot-grid pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* ── Left: Text ── */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm text-indigo-400 text-xs font-bold px-4 py-2 rounded-full mb-8 tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                Who I Am
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                Building systems
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-sky-400">
                  that matter.
                </span>
              </h2>

              <p className="text-slate-400 text-base leading-relaxed mb-4">
                I&apos;m{" "}
                <span className="text-white font-semibold">Khomkrit</span>, a Full Stack
                Developer specializing in high-performance government e-service platforms.
                I design and build systems end-to-end — from{" "}
                <span className="text-indigo-400 font-medium">Go + Gin APIs</span> backed
                by Redis and MinIO, to{" "}
                <span className="text-violet-400 font-medium">React & NestJS frontends</span>{" "}
                that serve thousands of citizens every day.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-10">
                Every platform I ship handles real government workflows — licensing,
                inspections, and permit approvals — for real people across Thailand.
              </p>

              <div className="flex gap-3 flex-wrap">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-indigo-900/50 text-sm"
                >
                  Get in Touch
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-xl font-semibold transition-all text-sm"
                >
                  View Work
                </a>
              </div>
            </div>

            {/* ── Right: Avatar card ── */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">

                {/* Glow ring */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-600/50 to-violet-600/40 blur-3xl scale-110 glow-ring" />

                {/* Main card */}
                <div className="relative w-72 h-80 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center shadow-2xl overflow-hidden">
                  {/* Gradient top bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500" />

                  {/* Initials avatar */}
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-xl shadow-indigo-900/60 mb-5">
                    <span className="text-3xl font-black text-white tracking-tight">KT</span>
                  </div>

                  <p className="text-white font-bold text-lg">Khomkrit TK</p>
                  <p className="text-slate-400 text-sm mt-1">Full Stack Developer</p>
                  <p className="text-slate-600 text-xs mt-1">Thailand 🇹🇭</p>

                  {/* Status badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400 font-semibold">Available</span>
                  </div>
                </div>

                {/* Floating tech badges */}
                <div className="absolute -top-4 -left-12 bg-[#0f1629]/90 border border-white/10 backdrop-blur-sm rounded-xl shadow-xl px-3 py-2.5 flex items-center gap-2">
                  <span className="text-base">🐹</span>
                  <span className="text-xs font-bold text-white">Go / Gin</span>
                </div>
                <div className="absolute top-1/3 -right-14 bg-[#0f1629]/90 border border-white/10 backdrop-blur-sm rounded-xl shadow-xl px-3 py-2.5 flex items-center gap-2">
                  <span className="text-base">⚡</span>
                  <span className="text-xs font-bold text-white">NestJS</span>
                </div>
                <div className="absolute -bottom-4 -left-10 bg-[#0f1629]/90 border border-white/10 backdrop-blur-sm rounded-xl shadow-xl px-3 py-2.5 flex items-center gap-2">
                  <span className="text-base">⚛️</span>
                  <span className="text-xs font-bold text-white">React</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Stats row ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/[0.08] hover:border-white/20 transition-all group"
              >
                <span className="text-2xl mb-3 block group-hover:scale-110 transition-transform">{stat.icon}</span>
                <p className="text-3xl md:text-4xl font-black text-white tabular-nums mb-1">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </p>
                <p className="text-slate-500 text-xs font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          BENTO GRID — Education + Focus
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="bg-white px-6 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-5 items-start">

          {/* Education — large card */}
          <div className="md:col-span-3">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Education</p>
            <div className="relative rounded-2xl overflow-hidden border border-slate-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 group cursor-default">
              <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500" />
              <div className="p-7 bg-gradient-to-br from-slate-50 to-white">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-6-3.5l6 3.5 6-3.5" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-700 border border-amber-200 text-xs font-bold px-2.5 py-1 rounded-full mb-3">
                      🏅 Second Class Honors
                    </span>
                    <h3 className="text-gray-900 font-bold text-xl leading-tight mb-1">
                      Bachelor of Industrial Education
                    </h3>
                    <p className="text-indigo-600 font-semibold text-sm mb-1">Computer Engineering</p>
                    <p className="text-gray-500 text-sm">
                      King Mongkut&apos;s Institute of Technology Ladkrabang
                    </p>
                    <span className="inline-block mt-3 text-gray-400 text-xs font-mono bg-slate-100 px-3 py-1 rounded-full">
                      2017 — 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Focus areas — stacked small cards */}
          <div className="md:col-span-2">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Currently Focused On</p>
            <div className="space-y-3">
              {focusAreas.map((item) => (
                <div
                  key={item.title}
                  className="bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:shadow-md hover:-translate-y-0.5 rounded-xl p-4 flex items-start gap-3 transition-all duration-200 cursor-default"
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-lg flex-shrink-0 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">{item.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          DARK SCROLLING TECH MARQUEE
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="bg-[#050816] border-t border-white/5 py-5 overflow-hidden">
        <div className="flex gap-3 animate-marquee w-max will-change-transform">
          {[...techTags, ...techTags].map((tech, i) => (
            <span
              key={i}
              className={`inline-flex items-center text-xs font-semibold px-4 py-2 rounded-full border whitespace-nowrap ${tech.color}`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
