import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#002147",
        burgundy: "#800020",
        gold: "#B0903D",
        ivory: "#FFFFF0",
        charcoal: "#1A1A1A",
        graphite: "#121212",
        mist: "#F0F0F0",
        fog: "#F5F5F5",
        slate: "#2A2A2A"
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"],
        heading: ["var(--font-heading)", "ui-serif", "Georgia"]
      },
      boxShadow: {
        glow: "0 20px 60px rgba(0, 33, 71, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;
