"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { Observer, ScrollToPlugin } from "gsap/all";
import {
  aboutBody,
  aboutLabel,
  aboutPanelBullets,
  heroHeading,
  heroSubheading,
  heroTagline,
  services,
  servicesLabel
} from "@/content/copy";

gsap.registerPlugin(Observer, ScrollToPlugin);

const SECTION_IDS = ["home", "about", "services"] as const;

const serviceIcons = [
  <svg key="audit" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h7" />
  </svg>,
  <svg key="tax" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="8" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M12 8v8" />
  </svg>,
  <svg key="law" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 7h14M5 12h14M5 17h14" />
  </svg>,
  <svg key="books" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 4h8a4 4 0 014 4v12H10a4 4 0 00-4 4V4z" />
  </svg>,
  <svg key="fp" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 18h16M6 14l4-4 4 3 4-5" />
  </svg>,
  <svg key="cfo" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="8" r="3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c2-4 6-6 8-6s6 2 8 6" />
  </svg>,
  <svg key="other" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
  </svg>
];

export function HeritageLanding() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isAnimatingRef = useRef(false);
  const currentIndexRef = useRef(0);
  const prefersReducedMotion = useRef(false);

  const aboutParagraphs = useMemo(() => aboutBody.split("\n\n"), []);

  const updateIndex = useCallback((index: number) => {
    currentIndexRef.current = index;
    setActiveIndex(index);
  }, []);

  const scrollToSection = useCallback(
    (index: number) => {
      const sections = gsap.utils.toArray<HTMLElement>("[data-section]");
      if (index < 0 || index >= sections.length) {
        return;
      }
      if (isAnimatingRef.current) {
        return;
      }

      const currentIndex = currentIndexRef.current;
      const direction = index > currentIndex ? 1 : -1;
      const currentSection = sections[currentIndex];
      const nextSection = sections[index];

      if (!currentSection || !nextSection) {
        return;
      }

      isAnimatingRef.current = true;

      const exitTargets = currentSection.querySelectorAll<HTMLElement>("[data-animate]");
      const enterTargets = nextSection.querySelectorAll<HTMLElement>("[data-animate]");
      const nextBackground = nextSection.querySelector<HTMLElement>("[data-bg]");
      const reduceMotion = prefersReducedMotion.current;

      const timeline = gsap.timeline({
        onComplete: () => {
          updateIndex(index);
          isAnimatingRef.current = false;
        }
      });

      if (!reduceMotion) {
        timeline.to(
          exitTargets,
          {
            opacity: 0,
            y: direction > 0 ? -12 : 12,
            duration: 0.25,
            stagger: 0.04,
            ease: "power1.out"
          },
          0
        );
      }

      timeline.to(
        window,
        {
          scrollTo: { y: nextSection, autoKill: false },
          duration: reduceMotion ? 0.45 : 1,
          ease: reduceMotion ? "power1.out" : "power2.inOut"
        },
        0
      );

      if (!reduceMotion) {
        timeline.fromTo(
          enterTargets,
          { opacity: 0, y: direction > 0 ? 24 : -24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
          },
          0.35
        );

        if (nextBackground) {
          timeline.fromTo(
            nextBackground,
            { scale: 1.05 },
            { scale: 1, duration: 1.1, ease: "power2.out" },
            0
          );
        }
      } else {
        gsap.set(enterTargets, { opacity: 1, y: 0 });
      }
    },
    [updateIndex]
  );

  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>("[data-section]");
    if (!sections.length) {
      return;
    }

    prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const currentScroll = window.scrollY;
    const closest = sections.reduce(
      (result, section, index) => {
        const distance = Math.abs(section.offsetTop - currentScroll);
        if (distance < result.distance) {
          return { index, distance };
        }
        return result;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY }
    );

    updateIndex(closest.index);

    sections.forEach((section, index) => {
      const targets = section.querySelectorAll<HTMLElement>("[data-animate]");
      gsap.set(targets, { opacity: index === closest.index ? 1 : 0, y: index === closest.index ? 0 : 24 });
    });

    const observer = Observer.create({
      type: "wheel,touch,pointer",
      preventDefault: true,
      allowClicks: true,
      tolerance: 12,
      onDown: () => scrollToSection(currentIndexRef.current + 1),
      onUp: () => scrollToSection(currentIndexRef.current - 1)
    });

    const handleNavigate = (event: Event) => {
      const detail = (event as CustomEvent<{ id: string }>).detail;
      if (!detail?.id) {
        return;
      }
      const targetIndex = SECTION_IDS.findIndex((id) => `#${id}` === detail.id || id === detail.id);
      if (targetIndex !== -1) {
        scrollToSection(targetIndex);
      }
    };

    window.addEventListener("heritage:navigate", handleNavigate as EventListener);

    return () => {
      observer.kill();
      window.removeEventListener("heritage:navigate", handleNavigate as EventListener);
    };
  }, [scrollToSection, updateIndex]);

  return (
    <main className="relative">
      <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 sm:flex">
        {SECTION_IDS.map((id, index) => {
          const roman = ["I", "II", "III"][index];
          const label = id === "home" ? "HOME" : id === "about" ? "WHO WE ARE" : "WHAT WE DO";
          const isActive = activeIndex === index;
          return (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(index)}
              className="group flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.4em]"
            >
              <span className={`text-sm transition ${isActive ? "text-ink" : "text-ink/50"}`}>{roman}</span>
              <span className={`h-px w-8 transition ${isActive ? "bg-ink" : "bg-rule"}`} />
              <span className="translate-x-2 text-[0.55rem] text-ink/70 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
                {label}
              </span>
            </button>
          );
        })}
      </nav>

      <section id="home" data-section className="relative flex min-h-screen w-full items-center">
        <div
          data-bg
          className="absolute inset-0 bg-[url('/1.jpg')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink/80" aria-hidden="true" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-24 text-paper">
          <p data-animate className="text-xs uppercase tracking-[0.5em] text-paper/70">
            Heritage Ledger
          </p>
          <h1
            data-animate
            className="text-4xl font-semibold leading-tight tracking-[0.04em] sm:text-5xl lg:text-6xl"
          >
            {heroHeading}
          </h1>
          <p data-animate className="text-lg uppercase tracking-[0.35em] text-paper/80 sm:text-xl">
            {heroSubheading}
          </p>
          <p data-animate className="max-w-2xl text-base leading-relaxed text-paper/80 sm:text-lg">
            {heroTagline}
          </p>
          <div data-animate className="flex flex-wrap gap-4 pt-4">
            <button
              type="button"
              onClick={() => scrollToSection(2)}
              className="rounded-full border border-paper/40 bg-paper px-7 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-ink transition hover:-translate-y-0.5 hover:bg-paper/90"
            >
              What We Do
            </button>
            <button
              type="button"
              onClick={() => scrollToSection(1)}
              className="rounded-full border border-paper/50 px-7 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-paper transition hover:-translate-y-0.5 hover:bg-paper/10"
            >
              Who We Are
            </button>
          </div>
        </div>
      </section>

      <section id="about" data-section className="relative flex min-h-screen w-full items-center">
        <div
          data-bg
          className="absolute inset-0 bg-[url('/2.jpg')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/80 via-paper/70 to-paper/90" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 px-6 py-24 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6">
            <p data-animate className="text-xs font-semibold uppercase tracking-[0.45em] text-muted">
              {aboutLabel}
            </p>
            <h2 data-animate className="text-4xl font-semibold text-ink sm:text-5xl">
              A heritage of elevated service and discretion.
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-muted sm:text-lg">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph} data-animate className="whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div data-animate className="flex items-center">
            <div className="w-full rounded-3xl border border-rule bg-paper/80 p-8 shadow-glow">
              <p className="text-xs uppercase tracking-[0.4em] text-muted">Heritage Panel</p>
              <div className="mt-6 space-y-3 text-lg font-semibold text-ink">
                {aboutPanelBullets.map((item) => (
                  <p key={item} className="flex items-center gap-3">
                    <span className="h-1 w-10 bg-gold" aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" data-section className="relative flex min-h-screen w-full items-center">
        <div
          data-bg
          className="absolute inset-0 bg-[url('/3.jpg')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/90 via-paper/85 to-paper/95" aria-hidden="true" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-24">
          <div className="space-y-4">
            <p data-animate className="text-xs font-semibold uppercase tracking-[0.45em] text-muted">
              {servicesLabel}
            </p>
            <h2 data-animate className="text-4xl font-semibold text-ink sm:text-5xl">
              Precision-led advisory across every financial frontier.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service.title}
                data-animate
                className="group rounded-2xl border border-rule bg-paper/85 p-6 shadow-[0_20px_50px_rgba(11,27,59,0.08)] transition hover:-translate-y-0.5 hover:border-ink/40"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-rule text-ink/70 transition group-hover:border-ink/40 group-hover:text-ink">
                    {serviceIcons[index % serviceIcons.length]}
                  </span>
                  <h3 className="text-xl font-semibold text-ink">{service.title}</h3>
                </div>
                <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-muted">
                  {service.body}
                </p>
                {service.groups ? (
                  <div className="mt-5 space-y-4 text-sm text-muted">
                    {service.groups.map((group) => (
                      <div key={group.subheading} className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/70">
                          {group.subheading}
                        </p>
                        <ul className="space-y-1.5">
                          {group.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ink/70" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}
                {service.bullets ? (
                  <ul className="mt-5 space-y-1.5 text-sm text-muted">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ink/70" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
