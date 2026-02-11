import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Navbar from './components/Navbar';
import useScroll from './hooks/useScroll';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Timeline from './sections/Timeline';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const Content = () => {
  useScroll();

  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-darkBg text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <ThemeToggle />

      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="timeline">
        <Timeline />
      </div>
      <div id="contact">
        <Contact />
      </div>

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
