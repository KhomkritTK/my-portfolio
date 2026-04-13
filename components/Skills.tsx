const skillGroups = [
  {
    category: "Languages",
    icon: "⚡",
    color: "from-blue-50 to-indigo-50",
    border: "border-blue-100 hover:border-blue-300",
    badge: "bg-blue-100 text-blue-700 border-blue-200",
    heading: "text-blue-700",
    skills: ["TypeScript", "JavaScript", "Python", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    icon: "🎨",
    color: "from-pink-50 to-purple-50",
    border: "border-pink-100 hover:border-pink-300",
    badge: "bg-pink-100 text-pink-700 border-pink-200",
    heading: "text-pink-700",
    skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Vite"],
  },
  {
    category: "Backend",
    icon: "🔧",
    color: "from-emerald-50 to-teal-50",
    border: "border-emerald-100 hover:border-emerald-300",
    badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
    heading: "text-emerald-700",
    skills: ["Node.js", "NestJS", "Express", "REST API", "GraphQL"],
  },
  {
    category: "Database",
    icon: "🗄️",
    color: "from-amber-50 to-orange-50",
    border: "border-amber-100 hover:border-amber-300",
    badge: "bg-amber-100 text-amber-700 border-amber-200",
    heading: "text-amber-700",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "TypeORM"],
  },
  {
    category: "DevOps & Cloud",
    icon: "☁️",
    color: "from-sky-50 to-cyan-50",
    border: "border-sky-100 hover:border-sky-300",
    badge: "bg-sky-100 text-sky-700 border-sky-200",
    heading: "text-sky-700",
    skills: ["Docker", "AWS", "GitHub Actions", "Linux", "Nginx"],
  },
  {
    category: "Tools & Design",
    icon: "🛠️",
    color: "from-violet-50 to-purple-50",
    border: "border-violet-100 hover:border-violet-300",
    badge: "bg-violet-100 text-violet-700 border-violet-200",
    heading: "text-violet-700",
    skills: ["Git", "Figma", "VS Code", "Postman", "Swagger"],
  },
];

const capabilities = [
  {
    icon: "🌐",
    title: "Web Applications",
    description: "Full-stack web apps with clean UI, authentication, role management, and real-time features — built to scale.",
    stack: ["Next.js", "React", "NestJS", "PostgreSQL"],
    gradient: "from-indigo-500 to-purple-500",
    bg: "from-indigo-50 to-purple-50",
    border: "border-indigo-100",
  },
  {
    icon: "⚙️",
    title: "REST APIs & Backend",
    description: "Robust, well-documented APIs with JWT auth, role-based access, pagination, and Swagger docs ready for production.",
    stack: ["NestJS", "Node.js", "TypeORM", "Swagger"],
    gradient: "from-emerald-500 to-teal-500",
    bg: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
  },
  {
    icon: "🏛️",
    title: "E-Service Systems",
    description: "Government e-service platforms with form management, document workflows, approval pipelines, and multi-department integration.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
    gradient: "from-amber-500 to-orange-500",
    bg: "from-amber-50 to-orange-50",
    border: "border-amber-100",
  },
  {
    icon: "📊",
    title: "Admin Dashboards",
    description: "Data-rich admin panels with charts, filters, export features, and user management — tailored for internal operations.",
    stack: ["React", "Chart.js", "Tailwind CSS", "REST API"],
    gradient: "from-sky-500 to-blue-500",
    bg: "from-sky-50 to-blue-50",
    border: "border-sky-100",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-sm font-medium text-indigo-600 tracking-widest uppercase mb-2">
            What I Use
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tech Stack & Skills</h2>
        </div>

        {/* Skill categories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className={`bg-gradient-to-br ${group.color} border ${group.border} rounded-2xl p-6 transition-all hover:shadow-md`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">{group.icon}</span>
                <h3 className={`font-bold text-sm uppercase tracking-wide ${group.heading}`}>
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full border ${group.badge}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* What I Build */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">What I Build</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className={`bg-gradient-to-br ${cap.bg} border ${cap.border} rounded-2xl p-6 hover:shadow-md transition-all`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cap.gradient} flex items-center justify-center text-xl shadow-sm`}>
                    {cap.icon}
                  </div>
                  <h3 className="font-bold text-gray-800">{cap.title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{cap.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cap.stack.map((s) => (
                    <span key={s} className="text-xs font-medium bg-white/80 text-gray-600 border border-white px-2.5 py-1 rounded-full shadow-sm">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
