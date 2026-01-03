"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { heroImages, heroTaglines, siteTitle } from "@/content/copy";

const slideVariants = {
  enter: { opacity: 0, scale: 1.02 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 }
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
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [paused, slides.length]);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden md:min-h-[calc(100vh-88px)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].image}
          className="absolute inset-0"
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Image
            src={slides[index].image}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/30 to-transparent" />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-start gap-6 px-6 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          {siteTitle}
        </motion.h1>
        <motion.p
          key={slides[index].tagline}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg"
        >
          {slides[index].tagline}
        </motion.p>
      </div>
      <div className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Prev"
            onClick={handlePrev}
            className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-white/20"
          >
            Prev
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={handleNext}
            className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-white/20"
          >
            Next
          </button>
        </div>
        <div className="flex items-center gap-2">
          {slides.map((_, slideIndex) => (
            <button
              key={slideIndex}
              type="button"
              aria-label={`Slide ${slideIndex + 1}`}
              onClick={() => setIndex(slideIndex)}
              className={`h-2 w-2 rounded-full border border-white/70 transition ${
                slideIndex === index ? "bg-white" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50"
        >
          <span className="relative flex h-4 w-4">
            <span className="absolute inset-0 animate-bounce rounded-full border-b-2 border-r-2 border-white/80 rotate-45" />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
