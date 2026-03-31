import React, { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiX } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Bagify",
    type: "MERN Commerce Experience",
    image: "/bagify.png",
    description:
      "A storefront experience built to feel fast, clear, and conversion focused while still staying modern and visually polished.",
    detail:
      "Bagify brings frontend presentation and backend practicality together. The build focuses on clean product discovery, structured browsing, and a responsive flow that can support real users instead of only looking good in screenshots.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "https://bagify-z9wj.onrender.com/",
    github: "https://github.com/Indrajitpadhiyar/Bagify.git",
  },
  {
    id: 2,
    title: "Lucky Electronics",
    type: "Responsive Retail Frontend",
    image: "/luckyElectronics.png",
    description:
      "A storefront UI designed for product visibility, customer trust, and clear navigation across screen sizes.",
    detail:
      "This project sharpened the visual side of product presentation. The emphasis was on category structure, card hierarchy, and a shopping feel that remains approachable for everyday customers.",
    tech: ["React", "Tailwind CSS", "Responsive UI"],
    link: "https://luckyelectronics.onrender.com",
    github: "https://github.com/Indrajitpadhiyar/LuckyElectronics.git",
  },
];

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-[rgba(4,10,20,0.66)] px-4 py-8 backdrop-blur-md"
      onClick={onClose}
    >
      <Motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.98 }}
        transition={{ duration: 0.35 }}
        className="story-panel relative max-h-[90vh] w-full max-w-4xl overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] text-[color:var(--text)]"
          aria-label="Close project details"
        >
          <FiX />
        </button>

        <div className="grid max-h-[90vh] overflow-auto lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative min-h-[280px]">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,9,18,0.15),rgba(5,9,18,0.5))]" />
          </div>

          <div className="p-7 sm:p-10">
            <p className="text-[0.7rem] uppercase tracking-[0.34em] text-[color:var(--accent)]">
              {project.type}
            </p>
            <h3 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">
              {project.title}
            </h3>
            <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
              {project.detail}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span key={item} className="story-tag">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-contrast)]"
              >
                Live preview
                <FiArrowUpRight />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--surface-soft)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--text)]"
              >
                Source
                <FiGithub />
              </a>
            </div>
          </div>
        </div>
      </Motion.div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
          <span className="story-chip">Chapter 04 / Selected Work</span>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-[color:var(--text)] sm:text-5xl">
            Real projects, presented with more depth than a simple thumbnail grid.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
            Each project is framed like a case study preview so the portfolio feels
            curated instead of rushed.
          </p>
        </Motion.div>

        <div className="mt-12 space-y-6">
          {projects.map((project, index) => (
            <Motion.article
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="story-panel overflow-hidden"
            >
              <div className="grid gap-0 lg:grid-cols-2">
                <div
                  className={`relative min-h-[280px] overflow-hidden sm:min-h-[360px] ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.28))]" />
                </div>

                <div
                  className={`flex flex-col justify-between p-7 sm:p-10 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.34em] text-[color:var(--accent)]">
                      {project.type}
                    </p>
                    <h3 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[color:var(--text)]">
                      {project.title}
                    </h3>
                    <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
                      {project.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span key={item} className="story-tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-contrast)]"
                    >
                      Open project
                      <FiArrowUpRight />
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--surface-soft)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--text)]"
                    >
                      GitHub
                      <FiGithub />
                    </a>
                  </div>
                </div>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
