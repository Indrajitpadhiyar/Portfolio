import React, { useEffect, useEffectEvent, useState } from "react";
import { AnimatePresence, motion as Motion, useReducedMotion } from "framer-motion";

const BURST_LIFETIME_MS = 650;
const SPARK_COUNT = 10;

const createBurst = (x, y) => {
  const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const sparks = Array.from({ length: SPARK_COUNT }, (_, index) => {
    const angle = (Math.PI * 2 * index) / SPARK_COUNT + (Math.random() * 0.35 - 0.175);
    const distance = 22 + Math.random() * 36;

    return {
      id: `${id}-${index}`,
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      rotation: (angle * 180) / Math.PI,
      length: 12 + Math.random() * 14,
      thickness: 1.5 + Math.random() * 2,
      scale: 0.85 + Math.random() * 0.6,
      delay: index * 0.008,
    };
  });

  return { id, x, y, sparks };
};

function ClickSparks() {
  const [bursts, setBursts] = useState([]);
  const reduceMotion = useReducedMotion();

  const handlePointerDown = useEffectEvent((event) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    const burst = createBurst(event.clientX, event.clientY);
    setBursts((current) => [...current, burst]);

    window.setTimeout(() => {
      setBursts((current) => current.filter((item) => item.id !== burst.id));
    }, BURST_LIFETIME_MS);
  });

  useEffect(() => {
    if (reduceMotion) {
      return undefined;
    }

    window.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [handlePointerDown, reduceMotion]);

  if (reduceMotion) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[95] overflow-hidden">
      <AnimatePresence>
        {bursts.map((burst) => (
          <Motion.div
            key={burst.id}
            className="absolute"
            style={{ left: burst.x, top: burst.y }}
            initial={{ scale: 0.4, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Center flash — monochrome */}
            <Motion.span
              className="absolute left-0 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.4) 50%, transparent 78%)",
                boxShadow:
                  "0 0 12px rgba(255,140,0,0.3), 0 0 24px rgba(255,140,0,0.15)",
              }}
              initial={{ scale: 0.25, opacity: 0.95 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />

            {/* Sparks — dark lines with subtle lime glow */}
            {burst.sparks.map((spark) => (
              <Motion.span
                key={spark.id}
                className="absolute left-0 top-0 block origin-left rounded-full"
                style={{
                  height: spark.thickness,
                  width: spark.length,
                  rotate: spark.rotation,
                  background:
                    "linear-gradient(90deg, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.3) 50%, transparent 100%)",
                  boxShadow: "0 0 8px rgba(255,140,0,0.2)",
                }}
                initial={{ x: 0, y: 0, opacity: 1, scaleX: spark.scale }}
                animate={{
                  x: spark.x,
                  y: spark.y,
                  opacity: 0,
                  scaleX: 0.65,
                  scaleY: 0.85,
                }}
                transition={{
                  duration: 0.48,
                  delay: spark.delay,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            ))}
          </Motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default ClickSparks;
