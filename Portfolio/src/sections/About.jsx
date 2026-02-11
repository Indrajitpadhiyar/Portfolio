import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="relative w-full py-20 px-6 overflow-hidden bg-gray-50 dark:bg-darkBg transition-colors duration-300">
            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    {/* Text Content */}
                    <div className="order-2 md:order-1 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
                            Behind the <span className="text-blue-500">Code</span>
                        </h2>
                        <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-blue-500/10 blur-3xl -z-10 group-hover:bg-blue-500/20 transition-all duration-500"></div>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                I'm a passionate developer who bridges the gap between design and technology.
                                With a keen eye for detail and a love for clean, efficient code, I build
                                web applications that not only look beautiful but perform flawlessly.
                            </p>
                            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                When I'm not coding, you can find me exploring new tech stacks, optimizing
                                performance, or refining my digital workspace.
                            </p>
                        </div>
                    </div>

                    {/* Image / Visual */}
                    <motion.div
                        className="order-1 md:order-2 flex justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer">
                                {/* Placeholder for Profile Image */}
                                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center border border-white/10">
                                    <span className="text-gray-500 text-xl font-mono">
                                        <img src="apple.jpg" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none"></div>
        </section>
    );
};

export default About;
