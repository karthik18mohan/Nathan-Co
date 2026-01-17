"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [resolvedTheme, setResolvedTheme] = useState<Theme>("light");
  const [hasPreference, setHasPreference] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      document.documentElement.dataset.theme = stored;
      setResolvedTheme(stored);
      setHasPreference(true);
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => {
      setResolvedTheme(mediaQuery.matches ? "dark" : "light");
    };

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const handleToggle = () => {
    const nextTheme: Theme = resolvedTheme === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    setResolvedTheme(nextTheme);
    setHasPreference(true);
  };

  const label = resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-subtle bg-surface text-primary shadow-sm transition hover:-translate-y-0.5"
      title={hasPreference ? label : `${label} (system)`}
    >
      {resolvedTheme === "dark" ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 109.8 9.8z" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M17.66 17.66l1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M6.34 17.66l-1.41 1.41" />
          <path d="M19.07 4.93l-1.41 1.41" />
        </svg>
      )}
    </button>
  );
}
