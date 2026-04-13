const projects = [
  {
    title: "E-Service Platform",
    description:
      "A full-featured government e-service web application that streamlines citizen requests and administrative workflows. Built with a modern stack supporting role-based access, form management, and real-time status tracking.",
    tags: ["Next.js", "React", "NestJS", "PostgreSQL", "Docker", "Tailwind CSS"],
    highlights: [
      "Role-based access control (Admin / Staff / User)",
      "Dynamic form builder & application tracking",
      "REST API with NestJS backend",
      "Deployed with Docker on AWS",
    ],
    github: "https://github.com/KhomkritTK",
    demo: null,
    status: "In Progress",
    statusColor: "bg-amber-100 text-amber-700",
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

        <div className="grid gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-slate-200 rounded-2xl p-8 hover:border-indigo-200 hover:shadow-md transition-all"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                </div>
                <span className={`text-xs font-medium px-3 py-1.5 rounded-full ${project.statusColor}`}>
                  {project.status}
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

              {/* Highlights */}
              <ul className="space-y-2 mb-6">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-indigo-500 mt-0.5">✓</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1.5 rounded-full border border-indigo-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-400 text-center mt-10">
          More projects coming soon — stay tuned!
        </p>
      </div>
    </section>
  );
}
