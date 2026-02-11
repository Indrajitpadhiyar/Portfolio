import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="w-full py-8 bg-gray-100 dark:bg-black text-center relative z-10 border-t border-white/10 transition-colors duration-300">
            <div className="container mx-auto px-6 flex flex-col items-center">
                <div className="flex gap-6 mb-4 text-2xl text-gray-600 dark:text-gray-400">
                    <a href="https://github.com/Indrajitpadhiyar" className="hover:text-blue-500 transition-colors"><FaGithub /></a>
                    <a href="https://x.com/indajitpadhiyar" className="hover:text-blue-400 transition-colors"><BsTwitterX /></a>
                    <a href="https://www.linkedin.com/in/indajit-padhiyar-6901083a8/" className="hover:text-blue-600 transition-colors"><FaLinkedin /></a>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                    © {new Date().getFullYear()} Cinematic Portfolio. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
