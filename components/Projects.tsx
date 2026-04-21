"use client";

import { motion } from "framer-motion";

const featuredProject = {
  title: "E-Service Platform — Tourism Business & Guide Registry",
  subtitle: "Department of Tourism, Thailand",
  description:
    "A comprehensive government e-service platform enabling tour businesses, licensed tour guides, and tour leaders to submit applications, verify qualifications, and receive official licenses entirely online — eliminating paper-based bureaucracy and dramatically reducing processing time for thousands of applicants nationwide.",
  tags: ["Go", "Gin", "GORM", "React", "PostgreSQL", "Redis", "MinIO", "Docker"],
  highlights: [
    "High-throughput REST API with Go (Gin + GORM) handling concurrent license applications",
    "React SPA with role-based dashboards for applicants, officers, and administrators",
    "MinIO object storage for secure document management (PDFs, certificates, ID copies)",
    "Redis for session caching, rate limiting, and real-time application status pub/sub",
  ],
  github: "https://github.com/KhomkritTK",
  status: "Delivered",
};

const projects = [
  {
    title: "Intelligent Travel Guide (ITG)",
    subtitle: "Department of Tourism, Thailand",
    description:
      "Smart travel recommendation platform aggregating attractions, activities, accommodations, and routes across Thailand. Go microservices for high-speed data ingestion with NestJS for flexible content delivery.",
    tags: ["Go", "Gin", "GORM", "NestJS", "TypeScript", "PostgreSQL", "Redis"],
    github: "https://github.com/KhomkritTK",
    status: "Delivered",
    icon: "🗺️",
  },
  {
    title: "Marine Vessel Inspection System",
    subtitle: "Marine Department, Thailand",
    description:
      "Digital platform for vessel inspection covering license applications, renewals, and certificate replacements for chief engineers, ship officers, and maritime personnel.",
    tags: ["NestJS", "TypeScript", "PHP", "PostgreSQL", "MinIO", "Redis"],
    github: "https://github.com/KhomkritTK",
    status: "Delivered",
    icon: "⚓",
  },
  {
    title: "Controlled Energy Production System",
    subtitle: "Department of Energy, Thailand",
    description:
      "Online service for energy production license applications — Solar PV, Wind, VSPP, renewable sources. Rule engine validates applicant eligibility against regulatory requirements.",
    tags: ["Go", "Gin", "GORM", "NestJS", "TypeScript", "PostgreSQL"],
    github: "https://github.com/KhomkritTK",
    status: "Delivered",
    icon: "⚡",
  },
  {
    title: "Smart Service Platform",
    subtitle: "Royal Forest Department, Thailand",
    description:
      "Intelligent platform for forest land usage permits, timber notifications, and forestry licenses. Full audit trail records every action across the approval workflow.",
    tags: ["Go", "Gin", "GORM", "NestJS", "TypeScript", "PostgreSQL", "MinIO"],
    github: "https://github.com/KhomkritTK",
    status: "In Progress",
    icon: "🌲",
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Project",
    description:
      "This portfolio — built with Next.js 16, Tailwind CSS v4, Framer Motion, and TypeScript. Featuring dark-mode glassmorphism design and scroll-triggered animations.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS v4", "Framer Motion"],
    github: "https://github.com/KhomkritTK",
    status: "Live",
    icon: "💼",
  },
];

const statusStyles: Record<string, string> = {
  Delivered: "bg-green-500/10 text-green-400 border-green-500/20",
  "In Progress": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Live: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

function getTagColor(tag: string): string {
  const goTags = ["Go", "Gin", "GORM", "React", "Next.js", "TypeScript", "NestJS"];
  const violetTags = ["PostgreSQL", "Redis", "MinIO", "PHP", "Docker"];
  if (goTags.includes(tag)) return "tag-cyan";
  if (violetTags.includes(tag)) return "tag-violet";
  return "tag-slate";
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#050c1a]">
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
            What I&apos;ve Built
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Projects
          </h2>
          <div className="mt-4 w-16 h-px bg-gradient-to-r from-cyan-500 to-violet-500" />
        </motion.div>

        {/* Featured project */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="text-amber-400">★</span> Featured Project
          </p>

          <div className="relative group bento-card hover-glow-cyan overflow-hidden p-0">
            {/* Top gradient bar */}
            <div className="h-px bg-gradient-to-r from-cyan-500/80 via-violet-500/60 to-transparent" />

            <div className="p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-2xl">🏛️</span>
                    <h3 className="text-xl md:text-2xl font-black text-white">{featuredProject.title}</h3>
                  </div>
                  <p className="text-sm text-cyan-400 font-medium ml-9">{featuredProject.subtitle}</p>
                </div>
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${statusStyles[featuredProject.status]}`}>
                  {featuredProject.status}
                </span>
              </div>

              <p className="text-slate-400 leading-relaxed mb-7 text-sm md:text-base">{featuredProject.description}</p>

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-3 mb-7">
                {featuredProject.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3 text-sm text-slate-400 bg-white/3 rounded-xl p-3 border border-white/5">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0 font-bold">✓</span>
                    {h}
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-7">
                {featuredProject.tags.map((tag) => (
                  <span key={tag} className={`text-xs font-semibold px-3 py-1.5 rounded-full ${getTagColor(tag)}`}>
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors font-medium group/link"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span className="group-hover/link:text-cyan-400 transition-colors">View on GitHub</span>
                <svg className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-all translate-x-0 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Other projects grid */}
        <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-5">More Projects</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bento-card hover-glow-violet flex flex-col overflow-hidden group"
            >
              <div className="h-px bg-gradient-to-r from-violet-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{project.icon}</span>
                    <div>
                      <h3 className="text-sm font-bold text-white leading-tight">{project.title}</h3>
                      <p className="text-xs text-cyan-400/70 font-medium mt-0.5">{project.subtitle}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border flex-shrink-0 ${statusStyles[project.status]}`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 5).map((tag) => (
                    <span key={tag} className={`text-xs font-medium px-2.5 py-1 rounded-full ${getTagColor(tag)}`}>
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full tag-slate">
                      +{project.tags.length - 5}
                    </span>
                  )}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-cyan-400 font-medium transition-colors mt-auto"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/KhomkritTK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/30 px-6 py-3 rounded-xl text-sm font-medium transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            See all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

