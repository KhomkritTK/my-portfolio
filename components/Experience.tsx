const experiences = [
  {
    role: "Full Stack Developer",
    company: "Current Position",
    period: "2023 — Present",
    description:
      "Developing scalable web applications and e-service platforms. Working across the full stack with React, Next.js, NestJS, and PostgreSQL. Collaborating with cross-functional teams to deliver clean, maintainable code.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
    current: true,
  },
  {
    role: "Frontend Developer",
    company: "Web Development",
    period: "2022 — 2023",
    description:
      "Built responsive UIs and SPAs using React and Vue.js. Collaborated with designers to implement pixel-perfect interfaces and improved performance through code optimization.",
    tags: ["React", "Vue.js", "Tailwind CSS", "Vite"],
    current: false,
  },
  {
    role: "Junior Developer",
    company: "Early Career",
    period: "2021 — 2022",
    description:
      "Started professional journey building web applications. Learned best practices in version control, code review, and agile development workflows.",
    tags: ["JavaScript", "HTML", "CSS", "Git"],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-sm font-medium text-indigo-600 tracking-widest uppercase mb-2">
            My Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-200 hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="md:pl-14 relative">
                {/* Dot */}
                <div
                  className={`absolute left-0 top-1.5 w-8 h-8 rounded-full border-2 items-center justify-center hidden md:flex ${
                    exp.current
                      ? "border-indigo-500 bg-indigo-50"
                      : "border-slate-300 bg-white"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      exp.current ? "bg-indigo-500" : "bg-slate-300"
                    }`}
                  />
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-indigo-200 hover:shadow-sm transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
                      <p className="text-indigo-600 font-medium text-sm">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {exp.current && (
                        <span className="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full">
                          Current
                        </span>
                      )}
                      <span className="text-sm text-gray-400 font-medium">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
