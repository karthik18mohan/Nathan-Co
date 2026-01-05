"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { heroImages, heroTaglines, siteTitle } from "@/content/copy";

const AUTO_INTERVAL_MS = 4500;
const DRAG_THRESHOLD = 80;

const slideVariants = {
  enter: { opacity: 0, scale: 1.05 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.02 }
};

export function HeroCarousel() {
  const slides = useMemo(
    () =>
      heroImages.map((image, index) => ({
        image,
        tagline: heroTaglines[index]
      })),
    []
  );
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const startTimer = useCallback(() => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_INTERVAL_MS);
  }, [slides.length]);

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [startTimer]);

  const goTo = useCallback(
    (nextIndex: number) => {
      setIndex(nextIndex);
      startTimer();
    },
    [startTimer]
  );

  const handlePrev = () => {
    goTo((index - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    goTo((index + 1) % slides.length);
  };

  return (
    <section id="top" className="group relative flex min-h-screen w-full items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].image}
          className="absolute inset-0"
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1, ease: "easeOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (info.offset.x > DRAG_THRESHOLD) {
              handlePrev();
              return;
            }
            if (info.offset.x < -DRAG_THRESHOLD) {
              handleNext();
            }
          }}
        >
          <Image
            src={slides[index].image}
            alt=""
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/60" />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-start gap-6 px-6 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl font-semibold leading-tight tracking-[0.06em] sm:text-5xl lg:text-6xl"
        >
          {siteTitle}
        </motion.h1>
        <motion.p
          key={slides[index].tagline}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg md:text-xl"
        >
          {slides[index].tagline}
        </motion.p>
      </div>
      <div className="absolute inset-x-0 bottom-10 z-10 flex flex-col items-center gap-6 px-6">
        <div className="flex w-full items-center justify-between">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={handlePrev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/10 text-white transition hover:bg-white/20 md:opacity-0 md:group-hover:opacity-100"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={handleNext}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/10 text-white transition hover:bg-white/20 md:opacity-0 md:group-hover:opacity-100"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-2">
          {slides.map((_, slideIndex) => (
            <button
              key={slideIndex}
              type="button"
              aria-label={`Slide ${slideIndex + 1}`}
              onClick={() => goTo(slideIndex)}
              className={`h-2 w-2 rounded-full border border-white/70 transition ${
                slideIndex === index ? "bg-white" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <motion.a
          href="#who-we-are"
          aria-label="Scroll to Who We Are"
          className="flex h-10 w-10 items-center justify-center text-white"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
