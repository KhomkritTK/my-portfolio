const stats = [
  { value: "3+", label: "Years Exp." },
  { value: "10+", label: "Projects" },
  { value: "5+", label: "Tech Stacks" },
  { value: "100%", label: "Passion" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-6"
    >
      {/* Animated blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-blob pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-sky-200 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000 pointer-events-none" />

      <div className="relative max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center gap-12 pt-20 pb-16">
        {/* Text */}
        <div className="flex-1 text-center md:text-left animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for work
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Hi, I&apos;m{" "}
            <span className="text-indigo-600">Khomkrit</span>
            <br />
            <span className="text-gray-400 text-4xl md:text-5xl font-medium">
              Full Stack Developer
            </span>
          </h1>

          <p className="text-lg text-gray-500 leading-relaxed max-w-lg mx-auto md:mx-0 mb-8">
            I build clean, fast, and scalable web applications using modern JavaScript
            ecosystems — from pixel-perfect frontends to robust backend APIs.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
            <a
              href="#projects"
              className="bg-indigo-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-gray-300 text-gray-700 px-7 py-3 rounded-xl font-semibold hover:border-indigo-400 hover:text-indigo-600 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Social links */}
          <div className="flex gap-5 justify-center md:justify-start">
            <a
              href="https://github.com/KhomkritTK"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/khomkrit-daengnuan/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors font-medium"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="mailto:khomkrit.d@outlook.com"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-500 transition-colors font-medium"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
          </div>
        </div>

        {/* Avatar card */}
        <div className="flex-shrink-0 animate-float">
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-400 to-purple-400 blur-2xl opacity-20 scale-110" />

            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-purple-50 border border-indigo-100 flex items-center justify-center shadow-xl shadow-indigo-100">
              <div className="text-center">
                <div className="text-7xl mb-3">👨‍💻</div>
                <p className="text-indigo-700 font-bold text-sm">Khomkrit TK</p>
                <p className="text-gray-400 text-xs mt-1">Thailand 🇹🇭</p>
              </div>

              {/* Available dot */}
              <span
                className="absolute top-4 right-4 flex items-center gap-1.5"
                title="Available for work"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-600 font-medium">Open</span>
              </span>
            </div>

            {/* Floating tech badge — top left */}
            <div className="absolute -top-4 -left-6 bg-white rounded-xl shadow-lg border border-slate-100 px-3 py-2 flex items-center gap-2">
              <span className="text-lg">⚡</span>
              <span className="text-xs font-semibold text-gray-700">Next.js 16</span>
            </div>

            {/* Floating tech badge — bottom right */}
            <div className="absolute -bottom-4 -right-6 bg-white rounded-xl shadow-lg border border-slate-100 px-3 py-2 flex items-center gap-2">
              <span className="text-lg">🔧</span>
              <span className="text-xs font-semibold text-gray-700">NestJS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="absolute bottom-16 left-0 right-0 px-6">
        <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm border border-slate-100 rounded-2xl shadow-sm px-8 py-4 flex flex-wrap justify-around gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-xl font-bold text-indigo-600">{s.value}</p>
              <p className="text-xs text-gray-500 font-medium mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 hover:text-indigo-600 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
