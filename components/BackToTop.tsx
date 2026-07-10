"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

const SHOW_AFTER_PX = 480;

export default function BackToTop() {
  const [scrolledPastThreshold, setScrolledPastThreshold] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolledPastThreshold(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { rootMargin: "0px 0px 0px 0px" }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const visible = scrolledPastThreshold && !footerVisible;

  const handleClick = () => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Volver arriba"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-navy text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-hover hover:shadow-lg md:bottom-8 md:right-8 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
    </button>
  );
}