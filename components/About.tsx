const highlights = [
  { icon: "🚀", label: "Years Experience", value: "3+" },
  { icon: "🛠️", label: "Projects Built", value: "10+" },
  { icon: "🌍", label: "Based In", value: "Thailand" },
  { icon: "📚", label: "Always Learning", value: "Cloud & AI" },
];

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

        <div className="grid md:grid-cols-2 gap-14 items-center">
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

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-5">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:border-indigo-200 hover:shadow-sm transition-all"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{item.value}</div>
                <div className="text-sm text-gray-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
