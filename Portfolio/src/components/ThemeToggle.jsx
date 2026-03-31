import React from "react";
import { motion as Motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../context/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="fixed right-4 top-4 z-[80] inline-flex items-center gap-3 rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-3 py-2.5 text-sm text-[color:var(--text)] shadow-[0_12px_50px_rgba(0,0,0,0.14)] backdrop-blur-xl transition-colors duration-300 lg:right-6 lg:top-6"
      aria-label="Toggle theme"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--accent)] text-[color:var(--accent-contrast)]">
        {isDark ? <FiMoon /> : <FiSun />}
      </span>
      <span className="hidden sm:block">
        <span className="block text-[0.62rem] uppercase tracking-[0.3em] text-[color:var(--muted)]">
          Mood
        </span>
        <span className="block font-medium">
          {isDark ? "Switch to Dawn" : "Switch to Noir"}
        </span>
      </span>
    </Motion.button>
  );
};

export default ThemeToggle;
