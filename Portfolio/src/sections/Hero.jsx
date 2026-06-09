import React, { useRef } from "react";
import { motion as Motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax / Scroll Animations for premium depth
  const asteriskY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const asteriskRotate = useTransform(scrollYProgress, [0, 1], [25, 45]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

  return (
    <div
      ref={ref}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#f4eee8] pt-20"
    >
      {/* ─── Giant Orange Asterisk Shape (Background Ornament) ─── */}
      <Motion.div
        style={{ y: asteriskY, rotate: asteriskRotate }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[15%] md:left-[24%] top-[50%] -translate-y-1/2 z-[1] select-none pointer-events-none"
      >
        <svg
          width="420"
          height="420"
          viewBox="0 0 100 100"
          fill="none"
          className="text-[#ff8c00] w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px]"
        >
          <g transform="rotate(25 50 50)">
            <rect x="42" y="5" width="16" height="90" rx="8" fill="currentColor" />
            <rect x="5" y="42" width="90" height="16" rx="8" fill="currentColor" />
            <rect x="42" y="5" width="16" height="90" rx="8" fill="currentColor" transform="rotate(45 50 50)" />
            <rect x="42" y="5" width="16" height="90" rx="8" fill="currentColor" transform="rotate(-45 50 50)" />
          </g>
        </svg>
      </Motion.div>

      {/* ─── Content Wrapper ─── */}
      <div className="relative flex flex-col justify-center items-center w-full h-full max-w-[1400px] px-6">

        {/* ─── Massive Text Container ─── */}
        {/* z-index is removed here to allow global stacking context between layers */}
        <div className="relative w-full flex flex-col items-center justify-center mb-10">

          {/* Lower Text Layer (Filled Black) - Behind Portrait (Stacks at default z-index) */}
          <Motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hero-text-line flex flex-col items-center text-center select-none relative z-10"
          >
            <span>I'M A FULLSTACK</span>
            <span>DEVELOPER</span>
          </Motion.div>

          {/* Upper Text Layer (White Outline) - In Front of Portrait */}
          <Motion.div
            style={{ y: textY }}
            className="absolute inset-0 flex flex-col items-center text-center select-none pointer-events-none z-30"
          >
            <span className="hero-text-line opacity-0">I'M A FULLSTACK</span>
            <span className="hero-text-line">
              <span className="opacity-0">DE</span>
              <span className="text-stroke-white">VELOP</span>
              <span className="opacity-0">ER</span>
            </span>
          </Motion.div>

        </div>

        {/* ─── Portrait Image (B&W) ─── */}
        {/* Positioned at z-20 (sandwiched between solid text at 0 and outlined text at z-30) */}
        <Motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none flex justify-center items-end"
          style={{
            width: "clamp(940px, 58vw, 1200px)",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            y: imageY,
            scale: imageScale,
            WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%)",
            maskImage: "linear-gradient(to top, transparent 0%, black 15%)",
          }}
        >
          {/* Note: We use WebkitMaskImage to smoothly fade the bottom of the photo into the background */}
          <img
            src="/indrajit.png"
            alt="Indrajit Padhiyar"
            className="h-auto w-full object-cover object-top filter grayscale contrast-[1.08] brightness-[1.02]"
            style={{
              dropShadow: "0 25px 50px rgba(0,0,0,0.15)",
              WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 18%)",
              maskImage: "linear-gradient(to top, transparent 0%, black 18%)",
            }}
          />
        </Motion.div>

        {/* ─── Rotating Circular Scroll Badge ─── */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[35] flex items-center justify-center w-[104px] h-[104px] md:w-[120px] md:h-[120px] cursor-pointer"
          onClick={() => {
            const target = document.querySelector("#about");
            if (target) {
              if (window.__lenis) {
                window.__lenis.scrollTo(target, { offset: -80, duration: 1.1 });
              } else {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }
          }}
        >
          {/* Rotating text */}
          <div className="absolute inset-0 animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="badgeTextPath"
                d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                fill="none"
              />
              <text className="text-[7.2px] font-bold tracking-[0.24em] fill-[#0a0a0a] uppercase">
                <textPath href="#badgeTextPath" startOffset="0%">
                  • scroll down • scroll down • scroll down
                </textPath>
              </text>
            </svg>
          </div>
          {/* Center orange circle with mouse icon */}
          <div className="w-[44px] h-[44px] md:w-[48px] md:h-[48px] rounded-full bg-[#ff8c00] flex items-center justify-center z-10 shadow transition-transform duration-300 hover:scale-115">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="5" y="2" width="14" height="20" rx="7" />
              <line x1="12" y1="6" x2="12" y2="10" />
            </svg>
          </div>
        </Motion.div>

      </div>

      {/* ─── Bottom Fade Gradient (Transitions smoothly into next section) ─── */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f4eee8] via-[#f4eee8]/80 to-transparent pointer-events-none z-[25]" />
    </div>
  );
};

export default Hero;
