import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "Project Alpha",
        category: "Frontend",
        image: "https://via.placeholder.com/600x400/0b0f14/3b82f6?text=Project+Alpha",
        description: "A high-performance dashboard with real-time data visualization.",
        tech: ["React", "D3.js", "Tailwind"],
        link: "#",
        github: "#",
    },
    {
        id: 2,
        title: "Neon Commerce",
        category: "E-Commerce",
        image: "https://via.placeholder.com/600x400/0b0f14/a855f7?text=Neon+Commerce",
        description: "Full-stack e-commerce platform with stripe integration.",
        tech: ["Next.js", "Stripe", "Prisma"],
        link: "#",
        github: "#",
    },
    {
        id: 3,
        title: "AI Chatbot",
        category: "AI / ML",
        image: "https://via.placeholder.com/600x400/0b0f14/10b981?text=AI+Chatbot",
        description: "Intelligent conversational agent powered by OpenAI GPT-4.",
        tech: ["Python", "React", "OpenAI"],
        link: "#",
        github: "#",
    },
    {
        id: 4,
        title: "TaskFlow",
        category: "Productivity",
        image: "https://via.placeholder.com/600x400/0b0f14/ef4444?text=TaskFlow",
        description: "Collaborative project management tool for remote teams.",
        tech: ["Vue.js", "Firebase", "Pinia"],
        link: "#",
        github: "#",
    },
];

const ProjectCard = ({ project, onClick }) => {
    return (
        <motion.div
            layoutId={`card-${project.id}`}
            onClick={() => onClick(project)}
            className="glass-card overflow-hidden cursor-pointer group relative h-64 md:h-80"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -10 }}
        >
            {/* Image Background */}
            <div className="absolute inset-0">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-darkBg/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-blue-400 text-sm font-medium uppercase tracking-wider mb-2 block">
                    {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.tech.map((t, i) => (
                        <span key={i} className="text-xs text-gray-300 bg-white/10 px-2 py-1 rounded">
                            {t}
                        </span>
                    ))}
                </div>
                <div className="text-blue-400 text-sm font-medium group-hover:underline">
                    View Details &rarr;
                </div>
            </div>
        </motion.div>
    );
};

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}>
            <motion.div
                layoutId={`card-${project.id}`}
                className="bg-[#111827] w-full max-w-3xl rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="absolute top-4 right-4 z-10">
                    <button
                        onClick={onClose}
                        className="p-2 bg-black/50 rounded-full text-white hover:bg-white/20 transition-colors"
                    >
                        <FaTimes />
                    </button>
                </div>

                <div className="h-64 md:h-80 relative">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent" />
                </div>

                <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">
                                {project.category}
                            </span>
                            <h2 className="text-3xl font-bold text-white mt-1">{project.title}</h2>
                        </div>
                        <div className="flex gap-4">
                            <a href={project.github} className="text-gray-400 hover:text-white text-2xl transition-colors"><FaGithub /></a>
                            <a href={project.link} className="text-blue-400 hover:text-blue-300 text-2xl transition-colors"><FaExternalLinkAlt /></a>
                        </div>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        {project.description}
                    </p>

                    <div>
                        <h4 className="text-white font-semibold mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t, i) => (
                                <span key={i} className="text-sm text-blue-200 bg-blue-900/30 border border-blue-500/30 px-3 py-1 rounded-full">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        Featured <span className="text-blue-500">Projects</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A selection of my recent work, featuring immersive web experiences and powerful applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={setSelectedProject}
                        />
                    ))}
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
        </section>
    );
};

export default Projects;
