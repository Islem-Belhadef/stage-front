/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#383EBE",
        secondary: "#7CDF64",
        text: "#272937",
        lightText: "#9D9CAC",
        grayText: "#616373",
        lightGray: "#CED3E1",
        ring: "#BABCF2",
      },
      fontFamily: {
        header: ["Nunito", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
