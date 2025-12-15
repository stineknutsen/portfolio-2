/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B4332", // dark green
        accent: "#FFC6FE", // soft pink
        lavender: "#CBB2FE", // soft purple
        background: "#FAF7F5", // off-white
        mist: "#CEE0DC",
        text: "#1A1A1A", // dark gray text
      },
      fontFamily: {
        heading: ["Raleway", "sans-serif"],
        body: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
};
