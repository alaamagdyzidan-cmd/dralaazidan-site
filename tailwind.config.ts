import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#FAF4EC",
          100: "#F3E8D8",
          200: "#E6D6C2",
          300: "#D4B89A",
          400: "#C09872",
          500: "#A57A52",
        },
        ink: {
          900: "#2A1F1A",
          800: "#3D2E26",
          700: "#5A4538",
          600: "#7B6253",
          500: "#9C8470",
        },
        rose: {
          50: "#FBF3F0",
          100: "#F4E0D8",
          200: "#E5BFB2",
          300: "#CD8E7C",
          400: "#B36B58",
          500: "#8E4F3E",
        },
        gold: {
          300: "#E0C58F",
          400: "#C9A76B",
          500: "#B08D4F",
          600: "#8E7038",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "65ch",
      },
    },
  },
  plugins: [],
};

export default config;
