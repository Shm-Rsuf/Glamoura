/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#19191B",
        light: "#FFFCFA",
        gray: "#E2E0DF",
        red: "#C3315D",
        green: "#00B79F",
        blue: "#32B8CB",
        pink: "#ED7DC0",
        voilet: "#7A60B3",
        orange: "#FF7A42",
      },
    },
  },
  plugins: [],
};
