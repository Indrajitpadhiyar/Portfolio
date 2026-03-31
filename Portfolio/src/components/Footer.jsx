import React from "react";

const Footer = () => {
  return (
    <footer className="relative z-10 px-5 pb-24 pt-4 sm:px-8 lg:px-12 lg:pb-10 lg:pl-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-[color:var(--line)] pt-6 text-sm text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>Designed to feel more like a story than a slide deck.</p>
        <p>(c) {new Date().getFullYear()} Indrajit Portfolio</p>
      </div>
    </footer>
  );
};

export default Footer;
