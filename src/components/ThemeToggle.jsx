import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-5 right-5 z-50 p-3 rounded-full bg-glass backdrop-blur-md border border-white/10 text-xl text-gray-800 dark:text-white transition-all duration-300 hover:scale-110 hover:shadow-glow"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? <FiMoon /> : <FiSun />}
        </button>
    );
};

export default ThemeToggle;
