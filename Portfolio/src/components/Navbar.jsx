import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#timeline" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("hero");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Determine active section based on scroll position
            const sections = navLinks.map(link => document.querySelector(link.href));
            const scrollPos = window.scrollY + 100; // Offset

            sections.forEach(section => {
                if (section) {
                    const top = section.offsetTop;
                    const height = section.offsetHeight;
                    if (scrollPos >= top && scrollPos < top + height) {
                        const id = section.getAttribute('id');
                        if (id) setActiveSection(id);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            // Smooth scroll via Lenis or native if Lenis captures it
            target.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(href.substring(1));
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled
                ? "w-[90%] md:w-auto bg-black/60 backdrop-blur-md rounded-full border border-white/10 shadow-lg px-2 py-2"
                : "w-full md:w-auto bg-transparent px-4 py-4"
                }`}
        >
            <ul className="flex items-center justify-center gap-1 md:gap-2">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            className={`relative px-4 py-2 text-sm md:text-base font-medium transition-colors duration-300 rounded-full block ${activeSection === link.href.substring(1)
                                ? "text-white"
                                : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {activeSection === link.href.substring(1) && (
                                <motion.div
                                    layoutId="bubble"
                                    className="absolute inset-0 bg-white/10 dark:bg-white/20 backdrop-blur-lg rounded-full -z-10 border border-white/10 shadow-lg"
                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                />
                            )}
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
};

export default Navbar;
