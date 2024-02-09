/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto",
        mono: "cascadia mono"
      }
      , colors: {
        bgPrimary: "#003950",
        bgSecondary: "#014961",
        textPrimary: "#6DEAFF",
        textSecondary: "#FFCEFB",
      }
    },
  },
  plugins: [],
}