import { heroui } from "@heroui/theme";

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"], mono: ["var(--font-mono)"], sansSerif: ["var(--font-sans-serif)"]
      }
    }
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          background: "#FFFFFF", foreground: "#595960"
        }
      }, dark: {
        colors: {
          background: "#121212", foreground: "#A0A0A0"
        }
      }
    }
  })]
};
