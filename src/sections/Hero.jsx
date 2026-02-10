import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const textRef = useRef(null);
    const [isVideoReady, setIsVideoReady] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const onLoaded = () => setIsVideoReady(true);

        if (video.readyState >= 1) {
            onLoaded();
        } else {
            video.addEventListener('loadedmetadata', onLoaded);
            return () => video.removeEventListener('loadedmetadata', onLoaded);
        }
    }, []);

    useLayoutEffect(() => {
        if (!isVideoReady || !containerRef.current || !videoRef.current || !textRef.current) return;

        // Use a context to easily revert all animations on unmount
        const ctx = gsap.context(() => {
            const video = videoRef.current;
            const texts = Array.from(textRef.current.children);
            const duration = video.duration || 10;

            // Create a timeline that pins the section and scrubs the video
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=500%", // Scroll distance (500vh)
                    scrub: 1,      // Smooth scrubbing
                    pin: true,     // Pin the container
                    anticipatePin: 1,
                }
            });

            // 1. Video Scrubbing
            tl.fromTo(video,
                { currentTime: 0 },
                { currentTime: duration, ease: "none" },
                0
            );

            // 2. Text Sequencing
            // Text 1
            tl.fromTo(texts[0], { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: duration * 0.1 }, 0);
            tl.to(texts[0], { opacity: 0, y: -50, duration: duration * 0.1 }, duration * 0.2);

            // Text 2
            tl.fromTo(texts[1], { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: duration * 0.1 }, duration * 0.25);
            tl.to(texts[1], { opacity: 0, y: -50, duration: duration * 0.1 }, duration * 0.45);

            // Text 3
            tl.fromTo(texts[2], { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: duration * 0.1 }, duration * 0.5);
            tl.to(texts[2], { opacity: 0, y: -50, duration: duration * 0.1 }, duration * 0.7);

            // Text 4 (Final CTA) -> Stays visible
            tl.fromTo(texts[3], { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: duration * 0.1 }, duration * 0.75);

        }, containerRef); // Scope selector to this component

        return () => ctx.revert();
    }, [isVideoReady]);

    return (
        <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
                <video
                    ref={videoRef}
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                >
                    <source src="video.realesrgan.mkv" type="video/mp4" />
                </video>
            </div>

            {/* Centered Text Overlay */}
            <div ref={textRef} className="relative z-20 w-full h-full flex flex-col justify-center items-center pointer-events-none">
                <h1 className="absolute text-5xl md:text-8xl font-bold text-white opacity-0 text-center px-4 w-full">
                    Hi, I'm <span className="text-blue-700 text-shadow-lg shadow-blue-500/50">INDRAJIT</span>
                </h1>
                <h2 className="absolute text-4xl md:text-7xl font-bold text-gray-200 opacity-0 text-center px-4 w-full">
                    Creative Frontend Engineer
                </h2>
                <h3 className="absolute text-3xl md:text-6xl font-bold text-gray-300 opacity-0 leading-tight max-w-5xl text-center px-4 w-full">
                    I build <span className="text-blue-700 text-shadow-lg shadow-blue/50">immersive</span> web experiences
                </h3>
                <div className="absolute bottom-20 opacity-0 w-full text-center">
                    <p className="text-xl md:text-2xl text-blue-400 font-light tracking-widest animate-pulse">
                        SCROLL TO EXPLORE
                    </p>
                </div>
            </div>

            {!isVideoReady && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black text-white">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
        </section>
    );
};

export default Hero;
