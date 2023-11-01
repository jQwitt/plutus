/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/public/*.html", "src/client/**/*.tsx"],
  theme: {
    colors: {
      text: "#020308",
      background: "#e3e8fc",
      primary: "#465baf",
      secondary: "#abbaf7",
      accent: "#1236c4",
    },
    extend: {},
  },
  plugins: [],
};
