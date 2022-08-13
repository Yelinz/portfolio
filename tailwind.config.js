/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color":" #241963",
        "main-color": "#f2ce83",
        "caret-color": "#d4ae50",
        "sub-color": "#446ad5",
        "sub-alt-color": "#2a277a",
        "text-color": "#fff",
      }
    },
    listStyleType: {
      pointer: "▹"
    }
  },
  plugins: [],
}
