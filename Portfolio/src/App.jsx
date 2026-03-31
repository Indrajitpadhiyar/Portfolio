import React from "react";
import { motion as Motion, useScroll as usePageScroll } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";
import useScroll from "./hooks/useScroll";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Timeline from "./sections/Timeline";
import Contact from "./sections/Contact";

const Content = () => {
  useScroll();
  const { scrollYProgress } = usePageScroll();

  return (
    <div className="app-shell">
      <Motion.div
        className="fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-[linear-gradient(90deg,var(--accent),var(--accent-soft),var(--accent-strong))]"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="story-orb story-orb-one" />
        <div className="story-orb story-orb-two" />
        <div className="story-orb story-orb-three" />
        <div className="story-grid" />
        <div className="story-noise" />
      </div>

      <Navbar />
      <ThemeToggle />

      <main className="relative z-10 pb-28 lg:pb-20 lg:pl-32">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="timeline">
          <Timeline />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

export default App;
