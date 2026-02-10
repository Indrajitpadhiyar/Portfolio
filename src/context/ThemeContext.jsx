import React, { createContext, useContext, useEffect, useState } from "react";
import ThemeTransition from "../components/ThemeTransition";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "dark"
    );
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [targetTheme, setTargetTheme] = useState(theme);

    useEffect(() => {
        const root = window.document.documentElement;
        // We only apply the theme class AFTER transition covers screen
        // But for v4 we might need to manually toggle if we removed config
        if (!isTransitioning) {
            if (theme === "dark") {
                root.classList.add("dark");
            } else {
                root.classList.remove("dark");
            }
            localStorage.setItem("theme", theme);
        }
    }, [theme, isTransitioning]);

    const toggleTheme = () => {
        if (isTransitioning) return; // Prevent double click

        const nextTheme = theme === "dark" ? "light" : "dark";
        setTargetTheme(nextTheme);
        setIsTransitioning(true);

        // Timing:
        // 1. Boxes start zooming in (random delays up to 0.5s + 0.8s duration ~= 1.3s total)
        // We want to switch theme when screen is fully covered. 
        // Let's say around 1200ms is safe for full coverage.

        setTimeout(() => {
            setTheme(nextTheme); // Switch theme behind the boxes

            // Wait a bit more before starting exit animation?
            setTimeout(() => {
                setIsTransitioning(false); // Triggers 'exit' animation in Framer Motion
            }, 300);

        }, 1200);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
            <ThemeTransition isTransitioning={isTransitioning} targetTheme={targetTheme} />
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
