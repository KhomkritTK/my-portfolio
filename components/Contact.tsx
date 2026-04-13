const contactLinks = [
  {
    label: "Email",
    value: "khomkrit.d@outlook.com",
    href: "mailto:khomkrit.d@outlook.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    bg: "bg-red-50",
    iconColor: "text-red-500",
    color: "hover:border-red-200",
  },
  {
    label: "LinkedIn",
    value: "khomkrit-daengnuan",
    href: "https://www.linkedin.com/in/khomkrit-daengnuan/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    bg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    color: "hover:border-indigo-200",
  },
  {
    label: "GitHub",
    value: "@KhomkritTK",
    href: "https://github.com/KhomkritTK",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    bg: "bg-gray-100",
    iconColor: "text-gray-700",
    color: "hover:border-gray-300",
  },
  {
    label: "Facebook",
    value: "ton.kla.18488",
    href: "https://www.facebook.com/ton.kla.18488",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    color: "hover:border-blue-200",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-sm font-medium text-indigo-600 tracking-widest uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contact</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Left: message */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Open to new opportunities
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you have a project in mind, want to collaborate, or just want to say hi —
              feel free to reach out. I&apos;ll get back to you as soon as possible.
            </p>

            <a
              href="mailto:khomkrit.d@outlook.com"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200 mb-8"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send an Email
            </a>

            {/* Availability card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-bold text-green-700">Currently Available</span>
              </div>
              <p className="text-xs text-green-600 leading-relaxed">
                Open to full-time roles, freelance projects, and consulting opportunities in web development.
              </p>
            </div>
          </div>

          {/* Right: social links */}
          <div className="space-y-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-4 p-4 rounded-xl border border-slate-200 ${link.color} hover:shadow-sm transition-all group`}
              >
                <span className={`w-10 h-10 rounded-xl ${link.bg} ${link.iconColor} flex items-center justify-center flex-shrink-0`}>
                  {link.icon}
                </span>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-0.5">
                    {link.label}
                  </p>
                  <p className="text-sm text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                    {link.value}
                  </p>
                </div>
                <svg
                  className="w-4 h-4 ml-auto text-gray-300 group-hover:text-gray-500 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto mt-20 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>© 2025 Khomkrit TK — Built with Next.js & Tailwind CSS</p>
        <div className="flex items-center gap-4">
          <a href="#hero" className="hover:text-gray-600 transition-colors">Back to top ↑</a>
          <a
            href="https://github.com/KhomkritTK"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            @KhomkritTK
          </a>
        </div>
      </div>
    </section>
  );
}
