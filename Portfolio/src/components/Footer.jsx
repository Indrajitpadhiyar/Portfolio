import React from "react";
import { motion as Motion } from "framer-motion";
import { FiArrowUp, FiGithub, FiLinkedin } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1400px] px-6 py-10 lg:px-10 lg:py-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Logo + tagline */}
          <div>
            <span
              className="text-2xl font-bold tracking-tight text-[var(--text)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Indrajit<span className="text-[var(--accent)]">.</span>
            </span>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Designed to feel more like a story than a slide deck.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { href: "https://github.com/Indrajitpadhiyar", icon: FiGithub, label: "GitHub" },
              { href: "https://www.linkedin.com/in/indajit-padhiyar-6901083a8/", icon: FiLinkedin, label: "LinkedIn" },
              { href: "https://x.com/indajitpadhiyar", icon: BsTwitterX, label: "Twitter" },
            ].map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--text-muted)] transition-all duration-300 hover:border-[var(--black)] hover:text-[var(--text)]"
                  aria-label={social.label}
                >
                  <Icon className="text-base" />
                </a>
              );
            })}
          </div>

          {/* Scroll to top */}
          <button
            type="button"
            onClick={() =>
              window.__lenis?.scrollTo("#hero", { offset: 0, duration: 1.1 })
            }
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--text)]"
          >
            Back to top
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--line)] transition-all duration-300 hover:border-[var(--black)] hover:-translate-y-1">
              <FiArrowUp className="text-xs" />
            </span>
          </button>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-2 border-t border-[var(--line)] pt-6 text-xs text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Indrajit Padhiyar. All rights reserved.</p>
          <p>Built with React, Framer Motion & ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
