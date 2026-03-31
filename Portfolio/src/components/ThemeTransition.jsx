import React, { useMemo } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";

const COLS = 12;
const ROWS = 8;

const ThemeTransition = ({ isTransitioning, targetTheme }) => {
  const boxes = useMemo(
    () =>
      Array.from({ length: COLS * ROWS }, (_, index) => ({
        id: index,
        delay: ((index * 37) % 11) * 0.03,
      })),
    []
  );

  const tone = targetTheme === "dark" ? "#07111f" : "#f4ede2";

  return (
    <AnimatePresence>
      {isTransitioning && (
        <Motion.div
          className="fixed inset-0 z-[120] grid pointer-events-none"
          style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.72, duration: 0.35 } }}
        >
          {boxes.map((box) => (
            <Motion.div
              key={box.id}
              style={{ backgroundColor: tone }}
              initial={{ scaleY: 0, transformOrigin: "top" }}
              animate={{
                scaleY: 1.1,
                transition: {
                  duration: 0.55,
                  delay: box.delay,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              exit={{
                scaleY: 0,
                transformOrigin: "bottom",
                transition: {
                  duration: 0.35,
                  delay: box.delay * 0.45,
                  ease: [0.65, 0, 0.35, 1],
                },
              }}
            />
          ))}
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThemeTransition;
