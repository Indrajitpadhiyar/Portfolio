import React, { useRef } from "react";
import { motion as Motion, useScroll, useTransform } from "framer-motion";

const milestones = [
  {
    year: "2023",
    title: "Started with the frontend basics",
    description: "Learned HTML, CSS, and JavaScript in college and built the first foundation for web work.",
  },
  {
    year: "2024",
    title: "Moved into interface building",
    description: "Focused on turning design ideas into clean, responsive interfaces with stronger visual polish.",
  },
  {
    year: "2025",
    title: "Built projects for local business needs",
    description: "Worked on commerce-oriented experiences and learned how real product priorities shape the UI.",
  },
  {
    year: "2026",
    title: "Sharpening the storytelling style",
    description: "Pushing my portfolio and product work toward more cinematic presentation and stronger interaction design.",
  },
];

const Timeline = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="story-section px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="lg:sticky lg:top-24 lg:self-start"
        >
          <span className="story-chip">Chapter 05 / Journey</span>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-[color:var(--text)] sm:text-5xl">
            The path is still early, but the direction is getting sharper.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-8 text-[color:var(--muted)]">
            My timeline is less about titles and more about momentum: learning,
            building, and steadily improving the quality of the experience.
          </p>
        </Motion.div>

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute bottom-0 left-2 top-0 w-px bg-[color:var(--line)] sm:left-3" />
          <Motion.div
            style={{ scaleY: lineScale, originY: 0 }}
            className="absolute bottom-0 left-2 top-0 w-px bg-[linear-gradient(180deg,var(--accent),var(--accent-soft),transparent)] sm:left-3"
          />

          <div className="space-y-6">
            {milestones.map((item, index) => (
              <Motion.article
                key={item.year}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="story-panel relative p-6 sm:p-8"
              >
                <span className="absolute -left-[33px] top-8 inline-flex h-5 w-5 items-center justify-center rounded-full border border-[color:var(--line-strong)] bg-[color:var(--surface-strong)] sm:-left-[41px]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" />
                </span>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <span className="text-sm uppercase tracking-[0.34em] text-[color:var(--accent)]">
                    {item.year}
                  </span>
                  <div className="max-w-2xl">
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[color:var(--text)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-8 text-[color:var(--muted)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
