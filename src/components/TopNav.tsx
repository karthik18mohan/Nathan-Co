"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MenuOverlay } from "@/components/MenuOverlay";

const NAV_ITEMS = [
  { label: "Home", id: "#home" },
  { label: "WHO WE ARE", id: "#about" },
  { label: "WHAT WE DO", id: "#services" }
];

export function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleNavigate = useCallback((id: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("heritage:navigate", { detail: { id } }));
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
        className={`fixed left-0 right-0 top-0 z-40 border-b transition ${
          isScrolled ? "border-rule bg-paper/95 backdrop-blur-md" : "border-transparent bg-paper/70"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <button
            type="button"
            onClick={() => handleNavigate("#home")}
            className="text-sm font-medium uppercase tracking-[0.35em] text-ink"
          >
            Nathan &amp; Co.
          </button>
          <div className="flex items-center gap-4">
            <span className="hidden text-[0.6rem] uppercase tracking-[0.3em] text-ink/60 sm:block">
              {NAV_ITEMS.find((item) => item.id === activeSection)?.label}
            </span>
            <span className="hidden h-px w-6 bg-rule sm:block" aria-hidden="true" />
            <button
              type="button"
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-md border border-rule bg-paper/90 text-ink transition hover:bg-paper"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
              <div className="flex flex-col gap-1.5">
                <span
                  className={`h-0.5 w-5 rounded bg-ink transition ${isOpen ? "translate-y-2 rotate-45" : ""}`}
                />
                <span className={`h-0.5 w-5 rounded bg-ink transition ${isOpen ? "opacity-0" : ""}`} />
                <span
                  className={`h-0.5 w-5 rounded bg-ink transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
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
