/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whiteSmoke: "#f5f5f5",
        lightBlue: "#CAE1E0",
        darkBlue: "#06A19D",
        midnightBlue: "rgb(39, 42, 61)"
      },
      fontFamily: {
        mainFont: ["Poppins", "sans-serif"]
      },
    },
  },
  plugins: [],
}