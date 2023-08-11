/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      museo: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        // You may customize your own custom color here
        primary: "#008FFB",
        secondary: "#3F4348",
        tertiary: "#CFF0FF",
        black: "#000",
      },
    },
  },
  plugins: [],
};
