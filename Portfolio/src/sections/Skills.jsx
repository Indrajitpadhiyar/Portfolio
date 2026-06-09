import React from "react";
import { motion as Motion } from "framer-motion";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiFramer, SiGithub, SiMongodb, SiTailwindcss } from "react-icons/si";

const skills = [
  {
    name: "React",
    description: "Component systems, modern rendering flows, and polished UI architecture.",
    icon: FaReact,
  },
  {
    name: "Tailwind CSS",
    description: "Fast styling with scalable tokens, custom surfaces, and responsive refinement.",
    icon: SiTailwindcss,
  },
  {
    name: "Framer Motion",
    description: "Narrative transitions, micro-interactions, and scroll-linked reveals.",
    icon: SiFramer,
  },
  {
    name: "Node.js",
    description: "Backend APIs and supporting services for full-stack project delivery.",
    icon: FaNodeJs,
  },
  {
    name: "MongoDB",
    description: "Practical data models for product catalogs, users, and content-driven apps.",
    icon: SiMongodb,
  },
  {
    name: "Git & Tooling",
    description: "Rapid iteration, clean version control, and fast front-end tooling.",
    icon: SiGithub,
  },
];

const marqueeRow1 = [
  "REACT", "TAILWIND", "FRAMER MOTION", "NODE.JS", "MONGODB", "JAVASCRIPT",
  "GSAP", "VITE", "GIT", "FIGMA", "TYPESCRIPT", "REST APIs",
];

const marqueeRow2 = [
  "UI DESIGN", "RESPONSIVE", "ANIMATIONS", "FULL-STACK", "PERFORMANCE",
  "ACCESSIBILITY", "SEO", "CLEAN CODE", "AGILE", "TESTING", "DEPLOYMENT", "CI/CD",
];

const Skills = () => {
  return (
    <div className="py-20 lg:py-32">
      {/* Section Header */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Skills & Tools</span>
          <h2
            className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[var(--text)] sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Tools are only useful when they create{" "}
            <span className="italic text-[var(--text-secondary)]">clarity, speed,</span>{" "}
            and style together.
          </h2>
        </Motion.div>
      </div>

      {/* Double Marquee */}
      <div className="mt-14 space-y-4">
        {/* Row 1 — Left */}
        <div className="overflow-hidden border-y border-[var(--line)] py-4">
          <div className="marquee-track marquee-left">
            {[...marqueeRow1, ...marqueeRow1, ...marqueeRow1].map((word, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-[clamp(2rem,5vw,4.5rem)] font-bold tracking-tight text-[var(--text)]/8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 — Right */}
        <div className="overflow-hidden border-b border-[var(--line)] py-4">
          <div className="marquee-track marquee-right">
            {[...marqueeRow2, ...marqueeRow2, ...marqueeRow2].map((word, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-[clamp(2rem,5vw,4.5rem)] font-bold tracking-tight text-[var(--text)]/8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="mx-auto max-w-[1400px] px-6 pt-16 lg:px-10 lg:pt-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <Motion.article
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                className="card group p-6 lg:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--line)] text-xl text-[var(--text)] transition-all duration-300 group-hover:border-[var(--black)] group-hover:bg-[var(--black)] group-hover:text-[var(--accent)]">
                    <Icon />
                  </span>
                  <span className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-[var(--text)]">
                  {skill.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                  {skill.description}
                </p>
              </Motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
