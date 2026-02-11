import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section className="py-20 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-12 relative z-10"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-600 mb-4">Let's Work Together</h2>
                        <p className="text-gray-400">
                            Have a project in mind? Fill out the form below or send me an email.
                        </p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative group">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                />
                            </div>
                            <div className="relative group">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                />
                            </div>
                        </div>

                        <div className="relative group">
                            <textarea
                                rows="5"
                                placeholder="Message"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-blue-500/30 transition-all"
                            >
                                Send Message
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>

            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};

export default Contact;
