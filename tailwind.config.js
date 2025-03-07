import {heroui} from "@heroui/theme";

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
          background: "#F4F3F2", foreground: "#121212", primary: "#E75B37", default: "#121212"
        }
      }, dark: {
        colors: {
          background: "#121212", foreground: "#F4F3F2", primary: "#E75B37", default: "#F4F3F2"
        }
      }
    }
  })]
};
