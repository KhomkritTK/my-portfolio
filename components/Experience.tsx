"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Nettec Co., Ltd.",
    period: "2023 — Present",
    description:
      "Developing scalable government e-service platforms end-to-end. Building high-throughput Go + Gin APIs with GORM, Redis caching, and MinIO storage. Leading frontend development with React and NestJS for multi-department systems serving thousands of citizens across Thailand.",
    tags: ["Go", "Gin", "GORM", "React", "NestJS", "PostgreSQL", "Redis", "MinIO", "Docker"],
    current: true,
    icon: "🏢",
    accentColor: "border-cyan-500/60 bg-cyan-500/8",
    dotColor: "bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.6)]",
  },
  {
    role: "Frontend Developer",
    company: "Web Development",
    period: "2022 — 2023",
    description:
      "Built responsive UIs and SPAs using React and Vue.js. Collaborated with designers to implement pixel-perfect interfaces and improved performance through code optimization and lazy loading strategies.",
    tags: ["React", "Vue.js", "Tailwind CSS", "Vite", "TypeScript"],
    current: false,
    icon: "💻",
    accentColor: "border-violet-500/30",
    dotColor: "bg-violet-500/60",
  },
  {
    role: "Junior Developer",
    company: "Early Career",
    period: "2021 — 2022",
    description:
      "Started professional journey building web applications. Learned best practices in version control, code review, and agile development workflows. Contributed to team projects and improved debugging skills.",
    tags: ["JavaScript", "HTML", "CSS", "Git", "PHP"],
    current: false,
    icon: "🌱",
    accentColor: "border-slate-500/20",
    dotColor: "bg-slate-500/50",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#050c1a]">
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
            My Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Experience
          </h2>
          <div className="mt-4 w-16 h-px bg-gradient-to-r from-cyan-500 to-violet-500" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Glowing vertical line */}
          <div className="absolute left-4 top-4 bottom-4 w-px timeline-glow-line hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="md:pl-14 relative"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-6 w-8 h-8 rounded-full border-2 items-center justify-center hidden md:flex ${exp.accentColor}`}>
                  <div className={`w-2.5 h-2.5 rounded-full ${exp.dotColor}`} />
                </div>

                {/* Card */}
                <div className={`bento-card border ${exp.accentColor} hover-glow-cyan group overflow-hidden`}>
                  <div className="h-px bg-gradient-to-r from-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="p-6 md:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex items-start gap-3">
                        <span className="text-xl mt-0.5">{exp.icon}</span>
                        <div>
                          <h3 className="text-lg font-black text-white">{exp.role}</h3>
                          <p className="text-cyan-400 font-semibold text-sm">{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {exp.current && (
                          <span className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold px-3 py-1.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Current
                          </span>
                        )}
                        <span className="text-sm text-slate-500 font-mono">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-5 ml-8">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 ml-8">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="tag-slate text-xs font-medium px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
