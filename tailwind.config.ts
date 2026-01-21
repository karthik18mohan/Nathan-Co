import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        paper: "var(--paper)",
        muted: "var(--muted)",
        rule: "var(--rule)",
        gold: "var(--gold)"
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"],
        heading: ["var(--font-heading)", "ui-serif", "Georgia"]
      },
      boxShadow: {
        glow: "0 20px 60px rgba(11, 27, 59, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;
