import React from "react";
import { motion as Motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/indajit-padhiyar-6901083a8/",
    icon: FiLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/Indrajitpadhiyar",
    icon: FiGithub,
  },
  {
    name: "X / Twitter",
    href: "https://x.com/indajitpadhiyar",
    icon: BsTwitterX,
  },
];

const Contact = () => {
  return (
    <div className="py-20 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Full-width CTA block */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-[var(--black)] px-8 py-16 text-center sm:px-12 sm:py-20 lg:px-20 lg:py-28"
        >
          {/* Background accent glow */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--accent)]/20 blur-[120px]" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[var(--accent)]/15 blur-[120px]" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              <span className="inline-block h-px w-6 bg-white/30" />
              Get in touch
              <span className="inline-block h-px w-6 bg-white/30" />
            </span>

            <h2
              className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let's build the{" "}
              <span className="italic text-[var(--accent)]">next scene</span>{" "}
              together.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
              I'm open to internships, freelance work, and collaborations where
              frontend craft, storytelling, and strong user-facing design matter.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://www.linkedin.com/in/indajit-padhiyar-6901083a8/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-bold text-[var(--black)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,140,0,0.35)]"
              >
                Start on LinkedIn
                <FiArrowUpRight className="text-base" />
              </a>
              <button
                type="button"
                onClick={() =>
                  window.__lenis?.scrollTo("#hero", { offset: 0, duration: 1.1 })
                }
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
              >
                Back to top
              </button>
            </div>

            {/* Social Icons */}
            <div className="mt-12 flex items-center justify-center gap-4">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.08, duration: 0.5 }}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/50 transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    aria-label={social.name}
                  >
                    <Icon className="text-lg" />
                  </Motion.a>
                );
              })}
            </div>
          </div>
        </Motion.div>
      </div>
    </div>
  );
};

export default Contact;
