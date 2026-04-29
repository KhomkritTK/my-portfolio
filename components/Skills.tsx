"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Backend",
    icon: "🔧",
    accent: "cyan",
    border: "border-cyan-500/15 hover:border-cyan-500/35",
    bar: "bg-gradient-to-r from-cyan-500 to-cyan-400",
    badge: "tag-cyan",
    skills: [
      { name: "Golang / Gin", level: 90 },
      { name: "GORM", level: 88 },
      { name: "NestJS", level: 85 },
      { name: "RESTful API Design", level: 95 },
      { name: "Microservices Architecture", level: 85 },
      { name: "Node.js", level: 80 },
    ],
  },
  {
    category: "Frontend & Language",
    icon: "🎨",
    accent: "violet",
    border: "border-violet-500/15 hover:border-violet-500/35",
    bar: "bg-gradient-to-r from-violet-500 to-violet-400",
    badge: "tag-violet",
    skills: [
      { name: "TypeScript", level: 88 },
      { name: "React", level: 82 },
      { name: "Next.js", level: 80 },
      { name: "Clean Architecture", level: 88 },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    accent: "cyan",
    border: "border-cyan-500/15 hover:border-cyan-500/35",
    bar: "bg-gradient-to-r from-cyan-600 to-cyan-400",
    badge: "tag-cyan",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "Query Optimization", level: 88 },
      { name: "Indexing", level: 85 },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: "☁️",
    accent: "violet",
    border: "border-violet-500/15 hover:border-violet-500/35",
    bar: "bg-gradient-to-r from-violet-600 to-violet-400",
    badge: "tag-violet",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Git / CI/CD", level: 88 },
      { name: "Linux", level: 80 },
    ],
  },
];

const capabilities = [
  {
    icon: "🏛️",
    title: "E-Service Systems",
    desc: "Government e-service platforms with form management, document workflows, approval pipelines, and multi-department integration.",
    stack: ["Go", "NestJS", "PostgreSQL", "Docker"],
    accent: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/15",
  },
  {
    icon: "⚙️",
    title: "REST APIs & Backend",
    desc: "Robust, well-documented APIs with JWT auth, role-based access, pagination, and Swagger docs ready for production.",
    stack: ["Go", "NestJS", "GORM", "Redis"],
    accent: "from-violet-500/20 to-violet-500/5 border-violet-500/15",
  },
  {
    icon: "🌐",
    title: "Full-Stack Web Apps",
    desc: "End-to-end web applications with clean UI, authentication, role management, and real-time features built to scale.",
    stack: ["Next.js", "React", "NestJS", "PostgreSQL"],
    accent: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/15",
  },
  {
    icon: "📊",
    title: "Admin Dashboards",
    desc: "Data-rich admin panels with charts, filters, export features, and user management tailored for internal operations.",
    stack: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    accent: "from-violet-500/20 to-violet-500/5 border-violet-500/15",
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  const [animated, setAnimated] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={barRef} className="mb-3 last:mb-0">
      <div className="flex justify-between mb-1.5">
        <span className="text-xs text-slate-300 font-medium">{name}</span>
        <span className="text-xs text-slate-600 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
          initial={{ width: "0%" }}
          animate={{ width: animated ? `${level}%` : "0%" }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#03070f]">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-bold text-cyan-500 tracking-widest uppercase mb-3">
            My Arsenal
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Tech Stack & Skills
          </h2>
          <div className="mt-4 w-16 h-px bg-gradient-to-r from-cyan-500 to-violet-500" />
        </motion.div>

        {/* Skill groups with progress bars */}
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className={`bento-card border ${group.border} p-6 transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">{group.icon}</span>
                <h3 className="font-bold text-sm uppercase tracking-widest text-slate-300">
                  {group.category}
                </h3>
              </div>
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* What I Build */}
        <div>
          <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-6">What I Build</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-gradient-to-br ${cap.accent} bento-card p-6 hover:scale-[1.01] transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{cap.icon}</span>
                  <h3 className="font-bold text-white">{cap.title}</h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{cap.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {cap.stack.map((s) => (
                    <span key={s} className="text-xs font-medium tag-slate px-2.5 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
