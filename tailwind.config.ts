import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#9B7BB0",
          light: "#C4A8D4",
          faint: "#F3EEF7",
          dark: "#7A5A90",
        },
        surface: "#F9F7FB",
        gray: {
          100: "#F5F3F7",
          200: "#EDEAF1",
          300: "#D9D4E0",
          500: "#9A949F",
          700: "#5C5560",
        },
        ink: "#1A1A1A",
        score: {
          high: "#5BB88A",
          mid: "#E8A43C",
          low: "#D96060",
          none: "#D9D4E0",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        pill: "999px",
      },
    },
  },
  plugins: [],
};

export default config;
