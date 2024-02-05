/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Kufam",
    },
    extend: {
      colors: {
        fill: "#F4F4F4",
        stroke: "#302020",
        background: "#6FD2B4",
      },
      backgroundImage: {
        background: "url('/src/data/Background.jpg')",
        background1: "url('/src/data/Background1.jpg')",
        background2: "url('/src/data/Background2.jpg')",
        background3: "url('/src/data/Background3.jpg')",
        background4: "url('/src/data/Background4.jpg')",
      },
    },
  },
  plugins: [],
};
