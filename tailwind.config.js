/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      // custom컬러 모음
      colors: {
        "churead-black": "#101010",
        "churead-gray-800": "#1E1E1E",
        "churead-gray-600": "#777777", // input placeholder
        "churead-gray-500": "#4D4D4D", // nav
        "churead-gray-400": "#CCCCCC",
        "churead-gray-300": "#F3F5F7",
        "churead-blue": "#0095F6",
      },
    },
  },
  plugins: [],
};
