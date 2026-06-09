import React, { useRef } from "react";
import { motion as Motion, useScroll, useTransform } from "framer-motion";

const milestones = [
  {
    year: "2023",
    title: "The Foundation",
    description:
      "Learned HTML, CSS, and JavaScript in college and built the first foundation for web work.",
    color: "#e8ff47",
  },
  {
    year: "2024",
    title: "Interface Building",
    description:
      "Focused on turning design ideas into clean, responsive interfaces with stronger visual polish.",
    color: "#c8df20",
  },
  {
    year: "2025",
    title: "Real Products",
    description:
      "Built commerce experiences for local businesses. Learned how real product priorities shape the UI.",
    color: "#a0b818",
  },
  {
    year: "2026",
    title: "Storytelling Style",
    description:
      "Pushing toward more cinematic presentation and stronger interaction design in every project.",
    color: "#88a010",
  },
];

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="py-20 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <span className="section-label">Journey</span>
            <h2
              className="mt-6 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[var(--text)] sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The path is still early, but the direction is{" "}
              <span className="italic text-[var(--text-secondary)]">
                getting sharper.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[var(--text-secondary)] lg:text-right">
            Less about titles, more about momentum — learning, building, and steadily
            improving.
          </p>
        </Motion.div>

        {/* Timeline Progress Line */}
        <div className="relative mb-10">
          <div className="h-px w-full bg-[var(--line)]" />
          <Motion.div
            style={{ width: lineWidth }}
            className="absolute left-0 top-0 h-px bg-[var(--black)]"
          />
        </div>

        {/* Timeline Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map((item, index) => (
            <Motion.article
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group relative overflow-hidden p-6 lg:p-8"
            >
              {/* Accent dot */}
              <div
                className="absolute -top-3 left-6 h-6 w-6 rounded-full border-4 border-[var(--bg)] transition-transform duration-300 group-hover:scale-125"
                style={{ background: item.color }}
              />

              <p
                className="mt-3 text-5xl font-bold tracking-tight text-[var(--text)]/10 lg:text-6xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.year}
              </p>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-[var(--text)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                {item.description}
              </p>
            </Motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
