import React, { useRef } from "react";
import { motion as Motion, useScroll, useTransform } from "framer-motion";
import { FiArrowDownRight, FiGithub, FiLinkedin } from "react-icons/fi";

const highlights = [
  "Frontend experiences with motion-first thinking",
  "Responsive systems that stay polished on every screen",
  "Interfaces that feel cinematic without losing clarity",
];

const quickStats = [
  { value: "02+", label: "Shipped storefronts" },
  { value: "06", label: "Core tools in daily rotation" },
  { value: "24/7", label: "Iterations for the right feel" },
];

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div
      ref={ref}
      className="relative flex min-h-screen items-center px-5 pb-20 pt-28 sm:px-8 lg:px-12 lg:pt-16"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <Motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="story-chip">
            Chapter 01
            <span className="mx-2 text-[color:var(--muted)]">/</span>
            Building stories with code
          </span>

          <h1 className="mt-6 max-w-4xl text-5xl leading-[0.95] font-semibold tracking-[-0.04em] text-[color:var(--text)] sm:text-6xl lg:text-[6.7rem]">
            Portfolios should
            <span
              className="block italic text-[color:var(--accent)]"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              unfold,
            </span>
            not just load.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)] sm:text-xl">
            I am Indrajit, a frontend developer shaping immersive interfaces for
            brands, products, and local businesses. I combine sharp visual rhythm,
            clean implementation, and motion that gives each section a purpose.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span key={item} className="story-tag">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => window.__lenis?.scrollTo("#projects", { offset: -20, duration: 1.1 })}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--accent)] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-contrast)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore work
              <FiArrowDownRight />
            </button>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Indrajitpadhiyar"
                target="_blank"
                rel="noreferrer"
                className="story-icon-button"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/indajit-padhiyar-6901083a8/"
                target="_blank"
                rel="noreferrer"
                className="story-icon-button"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {quickStats.map((stat) => (
              <div key={stat.label} className="story-panel p-5">
                <p className="text-3xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[color:var(--muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Motion.div>

        <Motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-[color:var(--accent)]/20 blur-3xl" />
          <div className="absolute -right-8 bottom-6 h-36 w-36 rounded-full bg-[color:var(--accent-soft)]/25 blur-3xl" />

          <div className="story-portrait-frame relative overflow-hidden p-4 sm:p-6">
            <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface-soft)]">
              <img
                src="/indrajit.png"
                alt="Indrajit portrait"
                className="h-[440px] w-full object-cover object-top sm:h-[560px]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(3,7,18,0.05)_55%,rgba(3,7,18,0.38))]" />
            </div>

            <Motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55 }}
              className="story-floating-card left-0 top-6 sm:-left-10"
            >
              <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[color:var(--muted)]">
                Current focus
              </p>
              <p className="mt-2 text-lg font-medium text-[color:var(--text)]">
                Animated product UI
              </p>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="story-floating-card right-0 top-1/2 sm:-right-10"
            >
              <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[color:var(--muted)]">
                Based in
              </p>
              <p className="mt-2 text-lg font-medium text-[color:var(--text)]">
                India, building for the web
              </p>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.82 }}
              className="story-floating-card bottom-0 left-8 right-8 sm:bottom-4 sm:left-12 sm:right-12"
            >
              <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[color:var(--muted)]">
                Approach
              </p>
              <p className="mt-2 text-lg font-medium text-[color:var(--text)]">
                Strong layout, clear pacing, and motion that supports the story.
              </p>
            </Motion.div>
          </div>
        </Motion.div>
      </div>
    </div>
  );
};

export default Hero;
