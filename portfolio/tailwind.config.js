/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#F1E9F7", // light purple
        primary: "#342645", // grape purple
        secondary: "#C0EDEC", // frozen water
        accent: "#7DC3C2", // pearl aqua
      },
    },
  },
  plugins: [],
};
