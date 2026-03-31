import React from "react";
import { motion as Motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

const links = [
  {
    title: "LinkedIn",
    copy: "Best place for project conversations and professional contact.",
    href: "https://www.linkedin.com/in/indajit-padhiyar-6901083a8/",
    icon: FiLinkedin,
  },
  {
    title: "GitHub",
    copy: "Explore source code, experiments, and working builds.",
    href: "https://github.com/Indrajitpadhiyar",
    icon: FiGithub,
  },
  {
    title: "X / Twitter",
    copy: "A lighter channel for updates, thoughts, and creative energy.",
    href: "https://x.com/indajitpadhiyar",
    icon: BsTwitterX,
  },
];

const Contact = () => {
  return (
    <div className="story-section px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="story-panel relative overflow-hidden px-6 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-16"
        >
          <div className="absolute -right-16 top-0 h-56 w-56 rounded-full bg-[color:var(--accent)]/15 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[color:var(--accent-soft)]/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-end">
            <div className="max-w-3xl">
              <span className="story-chip">Final Chapter / Connect</span>
              <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-[color:var(--text)] sm:text-5xl lg:text-6xl">
                If the product needs more presence, let's build the next scene.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
                I am open to internships, freelance work, and collaborations where
                frontend craft, storytelling, and strong user-facing design matter.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/indajit-padhiyar-6901083a8/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-contrast)]"
                >
                  Start on LinkedIn
                  <FiArrowUpRight />
                </a>
                <button
                  type="button"
                  onClick={() => window.__lenis?.scrollTo("#hero", { offset: 0, duration: 1.1 })}
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--surface-soft)] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--text)]"
                >
                  Back to top
                </button>
              </div>
            </div>

            <div className="grid gap-4">
              {links.map((link, index) => {
                const Icon = link.icon;

                return (
                    <Motion.a
                      key={link.title}
                      href={link.href}
                      target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="story-panel flex items-start justify-between gap-4 p-5 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--accent)]">
                        {link.title}
                      </p>
                      <p className="mt-3 max-w-md text-base leading-7 text-[color:var(--muted)]">
                        {link.copy}
                      </p>
                    </div>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--surface-soft)] text-[color:var(--accent)]">
                      <Icon />
                    </span>
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
