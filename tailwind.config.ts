import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F1D999",
          dark: "#9C7A1E",
        },
        bronze: {
          DEFAULT: "#9C7A52",
          light: "#C9A876",
          dark: "#6B4F32",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #F1D999 0%, #D4AF37 45%, #9C7A1E 100%)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.12), transparent 60%)",
      },
      boxShadow: {
        "gold-glow": "0 0 40px -8px rgba(212,175,55,0.45)",
        "gold-glow-lg": "0 0 80px -12px rgba(212,175,55,0.55)",
        "bronze-glow": "0 0 60px -10px rgba(156,122,82,0.4)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease forwards",
        shimmer: "shimmer 2.5s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
