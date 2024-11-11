/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
    colors: {
      "blue": "#0a327b",
      "red": "#f65552",
      "very-dark-grey-blue": "#1c202b",
      "dark-grey-blue": "#5e6778",
      "grey-blue": "#939cad",
      "light-grey-blue": "#e5effa",
      "very-light-grey-blue": "#dde7ee",
      "snow": "#f7fafd",
      "white": "#f7fafd",
      "black": "#000000"
    }
  },
  plugins: [],
}