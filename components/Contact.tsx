"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useSection } from "@/context/section";

const socialLinks = [
  {
    label: "Phone",
    value: "063-140-9356",
    href: "tel:+66631409356",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    accent: "hover:border-green-500/30 hover:shadow-[0_0_20px_rgba(34,197,94,0.08)]",
    iconBg: "bg-green-500/10 text-green-400",
  },
  {
    label: "Email",
    value: "khomkrit.d@outlook.com",
    href: "mailto:khomkrit.d@outlook.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    accent: "hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.08)]",
    iconBg: "bg-cyan-500/10 text-cyan-400",
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
    accent: "hover:border-violet-500/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.08)]",
    iconBg: "bg-violet-500/10 text-violet-400",
  },
  {
    label: "GitHub",
    value: "@tonklasocute",
    href: "https://github.com/tonklasocute",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    accent: "hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.04)]",
    iconBg: "bg-white/5 text-slate-300",
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
    accent: "hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)]",
    iconBg: "bg-blue-500/10 text-blue-400",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const { go } = useSection();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:khomkrit.d@outlook.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[#03070f] relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] bg-cyan-600/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-violet-600/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-dark pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-bold text-cyan-500 tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Contact
          </h2>
          <div className="mt-4 w-16 h-px bg-gradient-to-r from-cyan-500 to-violet-500" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white mb-2">Send a message</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Have a project in mind, want to collaborate, or just say hi?
              I&apos;ll get back to you as soon as possible.
            </p>

            {sent ? (
              <div className="bento-card border border-green-500/20 p-8 text-center">
                <div className="text-4xl mb-4">✅</div>
                <p className="text-white font-bold mb-1">Message sent!</p>
                <p className="text-slate-500 text-sm">Your email client should have opened. I&apos;ll reply soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="input-dark w-full px-4 py-3 rounded-xl text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="input-dark w-full px-4 py-3 rounded-xl text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="input-dark w-full px-4 py-3 rounded-xl text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-neon w-full py-3.5 rounded-xl text-sm font-semibold shadow-xl shadow-cyan-500/20"
                >
                  Send Message →
                </button>
              </form>
            )}

            {/* Availability badge */}
            <div className="mt-6 bento-card border border-green-500/15 p-4 flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <span className="flex w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              </div>
              <div>
                <p className="text-sm font-bold text-green-400">Currently Available</p>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  Open to full-time roles, freelance projects, and consulting in backend/full-stack development.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Social links */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-white mb-2">Find me on</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Reach out through any of these channels. I&apos;m most responsive via email and LinkedIn.
            </p>

            <div className="space-y-3">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className={`flex items-center gap-4 p-4 rounded-2xl bento-card border border-white/7 ${link.accent} transition-all duration-300 group`}
                >
                  <span className={`w-11 h-11 rounded-xl ${link.iconBg} flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110`}>
                    {link.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-600 font-bold uppercase tracking-widest mb-0.5">
                      {link.label}
                    </p>
                    <p className="text-sm text-slate-300 font-medium group-hover:text-white transition-colors truncate">
                      {link.value}
                    </p>
                  </div>
                  <svg
                    className="w-4 h-4 text-slate-700 group-hover:text-slate-400 transition-all group-hover:translate-x-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            © 2025 <span className="text-slate-400 font-medium">Khomkrit TK</span> — Built with Next.js & Tailwind CSS
          </p>
          <div className="flex items-center gap-5 text-sm text-slate-600">
            <button onClick={() => go("hero")} className="hover:text-cyan-400 transition-colors">Back to top ↑</button>
            <a
              href="https://github.com/tonklasocute"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              @tonklasocute
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
