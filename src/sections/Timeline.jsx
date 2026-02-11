import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const milestones = [
    {
        year: "2023",
        title: "Learninig face",
        description: "starting from the collage learn Html , JavaScript , CSS",
    },
    {
        year: "2024",
        title: "Frontend Developer",
        description: "Started career specializing in UI/UX implementation and animation.",
    },
    {
        year: "2025",
        title: "Full-Stack Developer",
        description: "Developed e-commerce platforms using MERN stack for Local level shops",
    },
    {
        year: "2026",
        title: "CS Graduate",
        description: "Graduated with honors in Computer Science & Engineering.",
    }
];

const TimelineItem = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`flex w-full mb-12 relative ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
        >
            {/* Center Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 z-10 box-content border-4 border-white dark:border-darkBg transition-colors duration-300" />

            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="glass-card p-6 relative hover:shadow-glow transition-shadow duration-300">
                    <span className="text-4xl font-bold text-blue-500/10 dark:text-blue-500/20 absolute top-2 right-4 z-0 pointer-events-none select-none">{item.year}</span>
                    <div className="relative z-10">
                        <span className="text-blue-500 dark:text-blue-400 font-mono text-sm mb-1 block">{item.year}</span>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Timeline = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section className="py-20 relative overflow-hidden" ref={ref}>
            <div className="container mx-auto max-w-5xl px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        My <span className="text-blue-500">Journey</span>
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Central Line Background */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 -translate-x-1/2" />

                    {/* Scroll Progress Line */}
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-500 -translate-x-1/2"
                    />

                    <div className="py-10">
                        {milestones.map((item, index) => (
                            <TimelineItem key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
