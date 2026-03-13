import React, { useState, useRef } from "react";

const Hero = () => {
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-full h-screen bg-[#050505] overflow-hidden flex items-center justify-center cursor-none"
        >
            {/* Background Pattern (Subtle Grid) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Glowing Custom Cursor */}
            <div
                className="pointer-events-none fixed w-8 h-8 rounded-full border border-blue-400/50 flex items-center justify-center z-50 transition-opacity duration-300"
                style={{
                    left: mousePos.x,
                    top: mousePos.y,
                    transform: 'translate(-50%, -50%)',
                    opacity: isHovered ? 1 : 0
                }}
            >
                <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60A5FA]" />
            </div>

            {/* Shine effect behind text (follows cursor) */}
            <div
                className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.15), transparent 100%)`,
                    opacity: isHovered ? 1 : 0
                }}
            />

            {/* Spotlit Image Background */}
            <div
                className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 0.4 : 0,
                    maskImage: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`,
                    WebkitMaskImage: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`,
                }}
            >
                <img 
                    src="/indrajit.png" 
                    alt="Background Indrajit" 
                    className="w-full h-full object-cover object-center grayscale mix-blend-overlay"
                />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none select-none px-4 text-center">
                <h1 className="text-5xl md:text-8xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                    Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(59,130,246,0.6)] animate-pulse">INDRAJIT</span>
                </h1>

                <p className="mt-4 text-xl md:text-3xl font-bold text-blue-400 tracking-widest uppercase drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                    Creative Frontend Engineer
                </p>

                <p className="mt-8 text-2xl md:text-4xl font-medium text-gray-200 max-w-4xl leading-relaxed drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                    I build <span className="text-blue-400 font-bold underline decoration-blue-500/50 underline-offset-8 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)] animate-pulse">immersive</span> web experiences
                </p>

                <p className="mt-6 text-lg md:text-xl italic text-gray-400 drop-shadow-md">
                    Let's create the magic
                </p>
            </div>

            {/* Navigation Hint */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-pulse" />
                <span className="text-xs text-blue-400 tracking-[0.3em] uppercase drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]">Scroll</span>
            </div>
        </section>
    );
};

export default Hero;
