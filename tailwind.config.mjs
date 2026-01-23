/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#ea2a33",
        "background-light": "#f8f6f6",
        "background-dark": "#211111",
        ink: "#000000",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        hard: "8px 8px 0px 0px #000000",
        "hard-sm": "4px 4px 0px 0px #000000",
        "hard-xl": "12px 12px 0px 0px #000000",
      },
      backgroundImage: {
        halftone: "radial-gradient(circle, #ea2a33 1.5px, transparent 2px)",
        "halftone-sm": "radial-gradient(circle, #000000 1px, transparent 1.5px)",
      },
      backgroundSize: {
        halftone: "20px 20px",
        "halftone-sm": "10px 10px",
      },
    },
  },
  plugins: [],
};
