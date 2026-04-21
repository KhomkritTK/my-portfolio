const highlights = [
  { icon: "🚀", label: "Years Experience", value: "3+" },
  { icon: "🛠️", label: "Projects Built", value: "10+" },
  { icon: "🌍", label: "Based In", value: "Thailand" },
  { icon: "📚", label: "Always Learning", value: "Cloud & AI" },
];

const education = [
  {
    degree: "Bachelor of Industrial Education (Second Class Honors)",
    field: "Computer Engineering",
    institution: "King Mongkut's Institute of Technology Ladkrabang",
    period: "2017 — 2022",
    icon: "🎓",
  },
];

const interests = ["Web Architecture", "Cloud Computing", "AI Integration", "Open Source", "UX Design", "DevOps"];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-sm font-medium text-indigo-600 tracking-widest uppercase mb-2">
            Who I Am
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Text content */}
          <div className="space-y-5 text-gray-600 leading-relaxed">
            <p>
              I&apos;m <strong className="text-gray-900">Khomkrit</strong>, a passionate Full Stack
              Developer from Thailand with a focus on building clean, performant, and user-friendly
              web applications.
            </p>
            <p>
              I specialize in the modern JavaScript ecosystem — from crafting responsive frontends
              with <strong className="text-gray-900">React</strong> and{" "}
              <strong className="text-gray-900">Next.js</strong> to building scalable backend APIs
              with <strong className="text-gray-900">Node.js</strong> and{" "}
              <strong className="text-gray-900">NestJS</strong>.
            </p>
            <p>
              I care deeply about code quality, great user experience, and team collaboration. I&apos;m
              currently focused on scalable web apps, e-service platforms, and exploring cloud
              architecture and AI integration.
            </p>

            {/* Interests */}
            <div className="pt-2">
              <p className="text-sm font-semibold text-gray-700 mb-3">Interests & Focus Areas</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1.5 rounded-full border border-indigo-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a
                href="mailto:khomkrit.d@outlook.com"
                className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:underline"
              >
                Let&apos;s work together
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:border-indigo-200 hover:shadow-sm transition-all"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-0.5">{item.value}</div>
                  <div className="text-xs text-gray-500">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Education</p>
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-2xl p-5 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{edu.icon}</span>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{edu.degree}</p>
                      <p className="text-indigo-600 text-sm font-medium">{edu.field}</p>
                      <p className="text-gray-500 text-xs mt-1">{edu.institution}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{edu.period}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
