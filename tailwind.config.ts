import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        graphite: "#1a1a1f",
        "graphite-light": "#2a2a32",
        "win-blue": "#0a246a",
        "win-blue-light": "#1084d0",
        "win-gray": "#c0c0c0",
        "win-gray-dark": "#808080",
        "win-white": "#dfdfdf",
        "win-silver": "#ece9d8",
      },

      fontFamily: {
        typewriter: [
          "var(--font-typewriter)",
          "Courier New",
          "Courier",
          "monospace",
        ],

        sans: [
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],
      },

      maxWidth: {
        site: "1600px",
        content: "1400px",
      },

      animation: {
        "spin-slow": "spin 60s linear infinite",
        "fade-in": "fadeIn 0.8s ease-out forwards",
      },

      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(12px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },

  plugins: [],
};

export default config;