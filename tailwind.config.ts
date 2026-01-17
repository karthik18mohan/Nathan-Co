import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#121212",
        ivory: "#F7F2E8",
        brass: "#B08D57",
        "deep-green": "#143A2C",
        fog: "#E7E0D6"
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"],
        heading: ["var(--font-heading)", "ui-serif", "Georgia"]
      },
      boxShadow: {
        glow: "0 20px 60px rgba(15, 23, 42, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;
