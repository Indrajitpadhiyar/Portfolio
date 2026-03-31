import React, { useEffect, useRef, useState } from "react";
import ThemeTransition from "../components/ThemeTransition";
import { ThemeContext } from "./theme-context";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetTheme, setTargetTheme] = useState(theme);
  const timeoutRef = useRef([]);

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    return () => {
      timeoutRef.current.forEach((timeout) => window.clearTimeout(timeout));
    };
  }, []);

  const toggleTheme = () => {
    if (isTransitioning) return;

    const nextTheme = theme === "dark" ? "light" : "dark";
    setTargetTheme(nextTheme);
    setIsTransitioning(true);

    const switchTimeout = window.setTimeout(() => {
      setTheme(nextTheme);
    }, 320);

    const releaseTimeout = window.setTimeout(() => {
      setIsTransitioning(false);
    }, 980);

    timeoutRef.current = [switchTimeout, releaseTimeout];
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      <ThemeTransition
        isTransitioning={isTransitioning}
        targetTheme={targetTheme}
      />
    </ThemeContext.Provider>
  );
};
