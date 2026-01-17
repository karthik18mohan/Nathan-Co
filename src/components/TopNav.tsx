"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MenuOverlay } from "@/components/MenuOverlay";

const NAV_ITEMS = [
  { label: "Home", id: "#top" },
  { label: "WHO WE ARE", id: "#who-we-are" },
  { label: "History", id: "#history" }
];

export function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#top");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleNavigate = useCallback((id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.querySelector(item.id)).filter(
      (section): section is Element => Boolean(section)
    );
    if (!sections.length) {
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observerRef.current?.observe(section));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-40 transition ${
          isScrolled
            ? "bg-ivory/80 backdrop-blur-md shadow-[0_10px_30px_rgba(0,33,71,0.12)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <button
            type="button"
            onClick={() => handleNavigate("#top")}
            className="text-sm font-medium uppercase tracking-[0.35em] text-navy"
          >
            Nathan &amp; Co.
          </button>
          <div className="flex items-center gap-4">
            <span className="hidden text-[0.6rem] uppercase tracking-[0.3em] text-charcoal/60 sm:block">
              {NAV_ITEMS.find((item) => item.id === activeSection)?.label}
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-gold/70 sm:block" aria-hidden="true" />
            <button
              type="button"
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 bg-ivory/80 text-navy transition hover:bg-ivory"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
              <div className="flex flex-col gap-1.5">
                <span
                  className={`h-0.5 w-5 rounded bg-navy transition ${isOpen ? "translate-y-2 rotate-45" : ""}`}
                />
                <span
                  className={`h-0.5 w-5 rounded bg-navy transition ${isOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`h-0.5 w-5 rounded bg-navy transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>
      <MenuOverlay open={isOpen} onClose={() => setIsOpen(false)} onNavigate={handleNavigate} />
    </>
  );
}
