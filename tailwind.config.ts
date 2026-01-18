import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F4F1EC",
        oxford: "#1F2A44",
        teal: "#2F5D62",
        brass: "#B08D57",
        charcoal: "#2B2B2B",
        stone: "#D6D1C8"
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
