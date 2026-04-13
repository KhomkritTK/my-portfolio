const skillGroups = [
  {
    category: "Languages",
    icon: "⚡",
    skills: ["TypeScript", "JavaScript", "Python", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    icon: "🎨",
    skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Vite"],
  },
  {
    category: "Backend",
    icon: "🔧",
    skills: ["Node.js", "NestJS", "Express", "REST API", "GraphQL"],
  },
  {
    category: "Database",
    icon: "🗄️",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    category: "DevOps & Tools",
    icon: "🛠️",
    skills: ["Docker", "AWS", "GitHub Actions", "Linux", "Figma", "VS Code"],
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">{group.icon}</span>
                <h3 className="font-semibold text-gray-800">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-slate-100 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full border border-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
