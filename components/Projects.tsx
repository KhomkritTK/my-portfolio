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
  demo: null,
  status: "Delivered",
  statusColor: "bg-green-100 text-green-700",
};

const projects = [
  {
    title: "Intelligent Travel Guide (ITG)",
    subtitle: "Department of Tourism, Thailand",
    description:
      "A smart travel recommendation platform aggregating attractions, activities, accommodations, and travel routes across Thailand. Built with Go microservices for high-speed data ingestion and NestJS for flexible content delivery API — featuring dynamic filtering by region, season, and traveler interests alongside a full-featured admin content dashboard.",
    tags: ["Go", "Gin", "GORM", "NestJS", "TypeScript", "PostgreSQL", "Redis", "MinIO"],
    github: "https://github.com/KhomkritTK",
    demo: null,
    status: "Delivered",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    title: "Marine Vessel Inspection Institute System",
    subtitle: "Marine Department, Thailand",
    description:
      "A digital platform for the Marine Vessel Inspection Institute covering license applications, renewals, and certificate replacements for chief engineers, ship officers, and maritime personnel. Manages the full inspection and certification workflow with electronic document filing and automated qualification verification.",
    tags: ["NestJS", "TypeScript", "PHP", "PostgreSQL", "MinIO", "Redis", "Docker"],
    github: "https://github.com/KhomkritTK",
    demo: null,
    status: "Delivered",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    title: "Controlled Energy Production System",
    subtitle: "Department of Energy, Thailand",
    description:
      "An online service system for energy production license applications covering Solar PV, Wind, VSPP, and other renewable sources — along with inspector registration for energy system auditors. The Go backend handles complex business logic through a rule engine that automatically validates applicant eligibility against regulatory requirements.",
    tags: ["Go", "Gin", "GORM", "NestJS", "TypeScript", "PostgreSQL", "Redis", "MinIO"],
    github: "https://github.com/KhomkritTK",
    demo: null,
    status: "Delivered",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    title: "Smart Service Platform",
    subtitle: "Royal Forest Department, Thailand",
    description:
      "An intelligent service platform for the Royal Forest Department supporting online permit applications for forest land usage, timber notifications, and various forestry licenses. Reduces in-person visits and improves process transparency with a full audit trail that records every action across the approval workflow.",
    tags: ["Go", "Gin", "GORM", "NestJS", "TypeScript", "PostgreSQL", "Redis", "MinIO"],
    github: "https://github.com/KhomkritTK",
    demo: null,
    status: "In Progress",
    statusColor: "bg-amber-100 text-amber-700",
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Project",
    description:
      "Personal developer portfolio built with Next.js 15, Tailwind CSS v4, and TypeScript. Showcases projects, skills, and work experience with smooth UX and responsive design.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS v4"],
    github: "https://github.com/KhomkritTK",
    demo: null,
    status: "Live",
    statusColor: "bg-blue-100 text-blue-700",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-sm font-medium text-indigo-600 tracking-widest uppercase mb-2">
            What I&apos;ve Built
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Projects</h2>
        </div>

        {/* Featured project */}
        <div className="mb-8">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">⭐ Featured</p>
          <div className="border-2 border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-white rounded-2xl p-8 hover:border-indigo-300 hover:shadow-lg transition-all">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-1">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{featuredProject.title}</h3>
                <p className="text-sm text-indigo-500 font-medium">{featuredProject.subtitle}</p>
              </div>
              <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${featuredProject.statusColor}`}>
                {featuredProject.status}
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6 mt-4">{featuredProject.description}</p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-2 mb-6">
              {featuredProject.highlights.map((h) => (
                <div key={h} className="flex items-start gap-2 text-sm text-gray-600 bg-white rounded-xl p-3 border border-slate-100">
                  <span className="text-indigo-500 mt-0.5 flex-shrink-0">✓</span>
                  {h}
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {featuredProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-indigo-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={featuredProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>

        {/* Other projects grid */}
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">More Projects</p>
        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-slate-200 rounded-2xl p-6 hover:border-indigo-200 hover:shadow-md transition-all flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-1">
                <h3 className="text-base font-bold text-gray-900">{project.title}</h3>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${project.statusColor}`}>
                  {project.status}
                </span>
              </div>

              <p className="text-xs text-indigo-500 font-medium mb-3">{project.subtitle}</p>

              <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full border border-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 font-medium transition-colors mt-auto"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/KhomkritTK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-slate-300 text-gray-600 hover:border-indigo-400 hover:text-indigo-600 px-6 py-3 rounded-xl text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            See all projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
