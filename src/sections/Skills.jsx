import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMongodb, SiNextdotjs } from "react-icons/si";

const skills = [
    { name: "React", icon: <FaReact />, level: 90, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs />, level: 85, color: "#ffffff" },
    { name: "TypeScript", icon: <SiTypescript />, level: 80, color: "#3178C6" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 95, color: "#38B2AC" },
    { name: "Node.js", icon: <FaNodeJs />, level: 75, color: "#339933" },
    { name: "MongoDB", icon: <SiMongodb />, level: 70, color: "#47A248" },
    { name: "Python", icon: <FaPython />, level: 60, color: "#3776AB" },
    { name: "Git", icon: <FaGitAlt />, level: 85, color: "#F05032" },
];

const TiltCard = ({ children }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const relativeX = (clientX - left) / width - 0.5;
        const relativeY = (clientY - top) / height - 0.5;

        x.set(relativeX);
        y.set(relativeY);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full h-full"
        >
            <div style={{ transform: "translateZ(20px)" }} className="w-full h-full">
                {children}
            </div>
        </motion.div>
    );
};

const SkillCard = ({ skill }) => {
    return (
        <div className="perspective-1000 w-full h-40">
            <TiltCard>
                <div className="glass-card w-full h-full flex flex-col items-center justify-center p-6 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                    <div className="text-5xl mb-3 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg" style={{ color: skill.color }}>
                        {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{skill.name}</h3>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden mt-auto">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: skill.color }}
                        />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
            </TiltCard>
        </div>
    );
};

const Skills = () => {
    return (
        <section className="py-20 px-6 relative z-10 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
                        Tech <span className="text-blue-500">Stack</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        My arsenal of tools and technologies for building world-class web applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
