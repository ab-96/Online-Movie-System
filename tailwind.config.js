/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    fontFamily: {
      nunito: ["Nunito Sans", "sans-serif"],
    },
    colors: {
      dBlue: "rgb(15,22,34)",
      vDBlue: "rgb(2,9,22)",
      lBlue : "rgb(86,92,103)",
      limeGreen: "rgb(94,201,5)",
      white: "hsl(0, 0%, 100%)",
      dGrey: " hsl(0, 0%, 52%)",
      lGrey: "hsl(0, 0%, 98%)",
    },
  },
  plugins: [],
}

