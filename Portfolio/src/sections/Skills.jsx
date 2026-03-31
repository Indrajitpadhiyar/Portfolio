import React from "react";
import { motion as Motion } from "framer-motion";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiFramer, SiGithub, SiMongodb, SiTailwindcss, SiVite } from "react-icons/si";

const skills = [
  {
    name: "React",
    description: "Component systems, modern rendering flows, and polished UI architecture.",
    icon: FaReact,
    level: "Advanced",
  },
  {
    name: "Tailwind",
    description: "Fast styling with scalable tokens, custom surfaces, and responsive refinement.",
    icon: SiTailwindcss,
    level: "Advanced",
  },
  {
    name: "Framer Motion",
    description: "Narrative transitions, micro interactions, and scroll-linked reveals.",
    icon: SiFramer,
    level: "Strong",
  },
  {
    name: "Node",
    description: "Backend APIs and supporting services for full-stack project delivery.",
    icon: FaNodeJs,
    level: "Strong",
  },
  {
    name: "MongoDB",
    description: "Practical data models for product catalogs, users, and content driven apps.",
    icon: SiMongodb,
    level: "Working",
  },
  {
    name: "Git + Vite",
    description: "Rapid iteration, clean version control, and fast front-end tooling.",
    icon: SiGithub,
    level: "Daily",
  },
];

const lanes = [
  {
    title: "Motion Systems",
    copy: "Page pacing, focus transitions, reveal choreography, and section-to-section continuity.",
  },
  {
    title: "Responsive UI",
    copy: "Layouts that keep their character across phone, tablet, laptop, and wide screen.",
  },
  {
    title: "Product Thinking",
    copy: "Balancing aesthetics, performance, and trust so the design still works for users.",
  },
];

const Skills = () => {
  return (
    <div className="story-section px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="story-chip">Chapter 03 / Stack</span>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-[color:var(--text)] sm:text-5xl">
            Tools are only useful when they create clarity, speed, and style together.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
            My workflow is centered on fast frontend iteration with animation,
            practical full-stack support, and careful visual tuning.
          </p>
        </Motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <Motion.article
                  key={skill.name}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className="story-panel group p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface-soft)] text-xl text-[color:var(--accent)]">
                      <Icon />
                    </span>
                    <span className="text-[0.65rem] uppercase tracking-[0.28em] text-[color:var(--muted)]">
                      {skill.level}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-[color:var(--text)]">
                    {skill.name}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
                    {skill.description}
                  </p>
                </Motion.article>
              );
            })}
          </div>

          <div className="story-panel p-7 sm:p-8">
            <div className="flex items-center justify-between">
              <p className="text-[0.7rem] uppercase tracking-[0.34em] text-[color:var(--muted)]">
                Working lanes
              </p>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--surface-soft)] text-[color:var(--accent)]">
                <SiVite />
              </span>
            </div>

            <div className="mt-8 space-y-6">
              {lanes.map((lane, index) => (
                <div key={lane.title} className="relative pl-7">
                  <span className="absolute left-0 top-0 h-full w-px bg-[linear-gradient(180deg,var(--accent),transparent)]" />
                  <span className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" />
                  <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--muted)]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[color:var(--text)]">
                    {lane.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
                    {lane.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
