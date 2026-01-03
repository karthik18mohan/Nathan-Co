"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteTitle } from "@/content/copy";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-stone opacity-90" />
        <div className="absolute -left-32 -top-40 h-80 w-80 rounded-full bg-slate-200/40 blur-3xl" />
        <div className="absolute -right-32 top-32 h-96 w-96 rounded-full bg-slate-300/30 blur-3xl" />
      </div>
      <div className="mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-6xl flex-col items-start justify-center gap-8 px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl"
        >
          {siteTitle}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/who-we-are"
            className="rounded-full border border-ink/20 bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-ink/90"
          >
            WHO WE ARE
          </Link>
          <Link
            href="/who-we-are/history"
            className="rounded-full border border-ink/20 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition hover:-translate-y-0.5 hover:bg-ink/5"
          >
            HISTORY
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 flex h-10 w-10 items-center justify-center rounded-full border border-ink/20"
        >
          <span className="relative flex h-4 w-4">
            <span className="absolute inset-0 animate-bounce rounded-full border-b-2 border-r-2 border-ink/70 rotate-45" />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
