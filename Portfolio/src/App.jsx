import React from "react";
import { motion as Motion, useScroll as usePageScroll } from "framer-motion";
import Navbar from "./components/Navbar";
import ClickSparks from "./components/ClickSparks";
import CustomCursor from "./components/CustomCursor";
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
    <div className="app-shell relative min-h-screen bg-[var(--bg)] text-[var(--text)]">
      {/* Scroll progress bar */}
      <Motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />

      <ClickSparks />
      <CustomCursor />
      <Navbar />

      <main>
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
  return <Content />;
}

export default App;
