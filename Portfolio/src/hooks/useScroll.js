import { useEffect } from "react";
import Lenis from "lenis";

const useScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 1.4,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });

    let frameId;

    const raf = (time) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(raf);
    };

    frameId = window.requestAnimationFrame(raf);
    window.__lenis = lenis;
    document.documentElement.style.scrollBehavior = "auto";

    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        lenis.scrollTo(target, { offset: -24, duration: 1.2 });
      }
    }

    return () => {
      window.cancelAnimationFrame(frameId);
      lenis.destroy();

      if (window.__lenis === lenis) {
        delete window.__lenis;
      }
    };
  }, []);
};

export default useScroll;
