import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOX_COUNT = 20; // Number of boxes to cover screen (adjust based on grid)

const ThemeTransition = ({ isTransitioning, targetTheme }) => {
    // Generate a grid of random delay boxes
    const [boxes, setBoxes] = useState([]);

    useEffect(() => {
        // Generate grid items
        // Calculate how many we roughly need. Let's do a 10x10 grid for coverage
        const cols = 10;
        const rows = 10;
        const newBoxes = [];

        for (let i = 0; i < cols * rows; i++) {
            newBoxes.push({
                id: i,
                delay: Math.random() * 0.5, // Random delay for "random position" feel
            });
        }
        setBoxes(newBoxes);
    }, []);

    return (
        <AnimatePresence>
            {isTransitioning && (
                <motion.div
                    className="fixed inset-0 z-[100] grid grid-cols-10 grid-rows-10 pointer-events-none"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { delay: 1, duration: 0.5 } }} // Fade out container after boxes exit
                >
                    {boxes.map((box) => (
                        <motion.div
                            key={box.id}
                            className={`w-full h-full ${targetTheme === 'dark' ? 'bg-darkBg' : 'bg-white'}`}
                            initial={{ scale: 0, borderRadius: "50%" }}
                            animate={{
                                scale: 1.5, // Overlap slightly to cover gaps
                                borderRadius: "0%",
                                transition: {
                                    duration: 0.8,
                                    delay: box.delay,
                                    ease: [0.22, 1, 0.36, 1]
                                }
                            }}
                            exit={{
                                scale: 0,
                                borderRadius: "50%",
                                transition: {
                                    duration: 0.5,
                                    delay: box.delay * 0.5, // Exit faster
                                    ease: "backIn"
                                }
                            }}
                        />
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ThemeTransition;
