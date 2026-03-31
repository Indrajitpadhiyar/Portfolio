import React, { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { FiArrowDownRight } from "react-icons/fi";
import {
  HiMiniSparkles,
  HiOutlineUserCircle,
  HiOutlineLightBulb,
  HiOutlineFolder,
  HiOutlineRocketLaunch,
  HiOutlineEnvelope,
} from "react-icons/hi2";

const navLinks = [
  { name: "Intro", href: "#hero", icon: HiMiniSparkles },
  { name: "Story", href: "#about", icon: HiOutlineUserCircle },
  { name: "Stack", href: "#skills", icon: HiOutlineLightBulb },
  { name: "Work", href: "#projects", icon: HiOutlineFolder },
  { name: "Path", href: "#timeline", icon: HiOutlineRocketLaunch },
  { name: "Connect", href: "#contact", icon: HiOutlineEnvelope },
];

const scrollToTarget = (href) => {
  const target = document.querySelector(href);
  if (!target) return;

  if (window.__lenis) {
    window.__lenis.scrollTo(target, {
      offset: window.innerWidth >= 1024 ? -30 : -16,
      duration: 1.15,
    });
    return;
  }

  target.scrollIntoView({ behavior: "smooth", block: "start" });
};

const NavButton = ({ link, activeSection, compact = false }) => {
  const Icon = link.icon;
  const isActive = activeSection === link.href.slice(1);

  return (
    <button
      type="button"
      onClick={() => scrollToTarget(link.href)}
      className={`group relative flex items-center gap-3 rounded-full px-4 py-3 text-left transition-all duration-300 ${
        compact
          ? "justify-center px-3 py-2.5"
          : "w-full border border-transparent hover:border-[color:var(--line)]"
      }`}
      aria-label={link.name}
    >
      {isActive && (
        <Motion.span
          layoutId={compact ? "mobile-active-pill" : "desktop-active-pill"}
          className="absolute inset-0 rounded-full border border-[color:var(--line-strong)] bg-[color:var(--surface-strong)] shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
        />
      )}
      <span
        className={`relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border text-base transition-colors duration-300 ${
          isActive
            ? "border-transparent bg-[color:var(--accent)] text-[color:var(--accent-contrast)]"
            : "border-[color:var(--line)] bg-[color:var(--surface-soft)] text-[color:var(--text)]/70 group-hover:text-[color:var(--text)]"
        }`}
      >
        <Icon />
      </span>
      {!compact && (
        <span className="relative z-10 flex items-center gap-2">
          <span className="text-sm font-medium tracking-[0.18em] uppercase text-[color:var(--text)]">
            {link.name}
          </span>
          {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />}
        </span>
      )}
    </button>
  );
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Motion.aside
        initial={{ opacity: 0, x: -36 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-5 top-1/2 z-50 hidden -translate-y-1/2 lg:block"
      >
        <div className="story-panel flex w-[220px] flex-col gap-3 p-4">
          <div className="mb-2 flex items-center justify-between">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.36em] text-[color:var(--muted)]">
                Portfolio
              </p>
              <h2 className="mt-2 text-xl font-semibold text-[color:var(--text)]">
                Indrajit
              </h2>
            </div>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--surface-soft)] text-[color:var(--accent)]">
              <HiMiniSparkles />
            </span>
          </div>

          {navLinks.map((link) => (
            <NavButton
              key={link.href}
              link={link}
              activeSection={activeSection}
            />
          ))}

          <button
            type="button"
            onClick={() => scrollToTarget("#contact")}
            className="mt-3 inline-flex items-center justify-between rounded-full border border-[color:var(--line)] bg-[color:var(--surface-soft)] px-4 py-3 text-sm font-medium text-[color:var(--text)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Start a project
            <FiArrowDownRight className="text-base text-[color:var(--accent)]" />
          </button>
        </div>
      </Motion.aside>

      <Motion.nav
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-3 bottom-4 z-50 lg:hidden"
      >
        <div className="story-panel mx-auto flex max-w-md items-center justify-between gap-1 px-2 py-2">
          {navLinks.map((link) => (
            <NavButton
              key={link.href}
              link={link}
              activeSection={activeSection}
              compact
            />
          ))}
        </div>
      </Motion.nav>
    </>
  );
};

export default Navbar;
