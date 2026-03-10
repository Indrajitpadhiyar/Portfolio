import React, { useState, useEffect, useRef } from "react";

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

            {/* Shared Content Structure to ensure perfect alignment */}
            {[
                {
                    id: "base",
                    className: "opacity-20 text-gray-800",
                    h1Class: "text-5xl md:text-8xl font-bold",
                    p1Class: "mt-4 text-xl md:text-2xl font-light tracking-widest uppercase",
                    p2Class: "mt-8 text-2xl md:text-4xl font-medium max-w-4xl leading-relaxed opacity-0", // Keep space but hide text
                    hintClass: "mt-2 text-lg md:text-xl italic opacity-100",
                    style: {}
                },
                {
                    id: "spotlight",
                    className: "text-white",
                    h1Class: "text-6xl md:text-9xl font-bold drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]",
                    p1Class: "mt-4 text-2xl md:text-3xl font-bold text-blue-400 tracking-widest uppercase drop-shadow-md",
                    p2Class: "mt-8 text-3xl md:text-5xl font-medium text-gray-100 max-w-5xl leading-tight",
                    hintClass: "mt-2 text-lg md:text-xl italic opacity-0", // Hide hint in spotlight
                    style: {
                        maskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black 40%, transparent 100%)`,
                        WebkitMaskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black 40%, transparent 100%)`,
                    }
                }
            ].map((layer) => (
                <div
                    key={layer.id}
                    className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none px-4 text-center ${layer.className}`}
                    style={layer.style}
                >
                    {layer.id === "spotlight" && <div className="absolute inset-0 bg-blue-600/5" />}

                    <h1 className={layer.h1Class}>
                        Hi, I'm <span className={layer.id === "spotlight" ? "text-blue-500" : "text-gray-700"}>INDRAJIT</span>
                    </h1>

                    <p className={layer.p1Class}>
                        Creative Frontend Engineer
                    </p>

                    <p className={layer.p2Class}>
                        I build <span className="text-blue-400 font-bold underline decoration-blue-500/50 underline-offset-8">immersive</span> web experiences
                    </p>

                    <p className={layer.hintClass}>
                        hover to reveal the magic
                    </p>
                </div>
            ))}

            {/* Custom Cursor (The Light Source) */}
            <div
                className="pointer-events-none fixed w-[400px] h-[400px] rounded-full blur-[120px] bg-blue-600/20 z-10 transition-opacity duration-300"
                style={{
                    left: mousePos.x,
                    top: mousePos.y,
                    transform: 'translate(-50%, -50%)',
                    opacity: isHovered ? 1 : 0
                }}
            />

            <div
                className="pointer-events-none fixed w-4 h-4 rounded-full bg-white z-50 shadow-[0_0_15px_#fff]"
                style={{
                    left: mousePos.x,
                    top: mousePos.y,
                    transform: 'translate(-50%, -50%)',
                    opacity: isHovered ? 1 : 0
                }}
            />

            {/* Navigation Hint */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-pulse" />
                <span className="text-xs text-blue-400 tracking-[0.3em] uppercase">Scroll</span>
            </div>
        </section>
    );
};

export default Hero;
