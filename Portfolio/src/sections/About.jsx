import React from "react";
import { motion as Motion } from "framer-motion";

const chapters = [
  {
    index: "01",
    title: "From static pages to crafted experiences",
    body: "I started by learning the fundamentals in college, then moved quickly toward interactive UI where layout, animation, and usability all need to work together.",
  },
  {
    index: "02",
    title: "Design-aware frontend thinking",
    body: "My best work happens where visual taste meets engineering discipline. I enjoy building interfaces that feel premium without becoming confusing or heavy.",
  },
  {
    index: "03",
    title: "Shipping for real businesses",
    body: "I have already built storefront and product experiences for local businesses, which taught me to balance polish, speed, trust, and conversion.",
  },
];

const principles = [
  "Every section should have a narrative job.",
  "Animation should guide attention, not distract from content.",
  "Responsive design is part of the concept, not the afterthought.",
];

const About = () => {
  return (
    <div className="story-section px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr]">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="lg:sticky lg:top-24 lg:self-start"
        >
          <span className="story-chip">Chapter 02 / Story</span>
          <h2 className="mt-6 max-w-md text-4xl font-semibold tracking-[-0.04em] text-[color:var(--text)] sm:text-5xl">
            I build web stories that feel considered from first scroll to final click.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-8 text-[color:var(--muted)]">
            The goal is not more effects. The goal is better rhythm, clearer focus,
            and a visual identity strong enough to be remembered.
          </p>

          <div className="story-panel mt-10 p-6">
            <p className="text-[0.7rem] uppercase tracking-[0.34em] text-[color:var(--muted)]">
              Principles
            </p>
            <div className="mt-5 space-y-4">
              {principles.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" />
                  <p className="text-base leading-7 text-[color:var(--text)]/82">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Motion.div>

        <div className="space-y-5">
          {chapters.map((chapter, index) => (
            <Motion.article
              key={chapter.index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="story-panel relative overflow-hidden p-7 sm:p-9"
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-[linear-gradient(180deg,var(--accent),transparent)]" />
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <span className="text-sm uppercase tracking-[0.34em] text-[color:var(--accent)]">
                  {chapter.index}
                </span>
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[color:var(--text)] sm:text-3xl">
                    {chapter.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[color:var(--muted)] sm:text-lg">
                    {chapter.body}
                  </p>
                </div>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
