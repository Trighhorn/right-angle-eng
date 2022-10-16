/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      slate: "#161C24",
      black: "#000000",
      orange: "#FF9800",
      white: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [
    require("tailwind-typewriter")({
      wordsets: {
        home: {
          words: [
            "Simplified",
            "Automated",
            "Modernized",
            "Reinvented",
            "Streamlined",
          ],
          delay: 0,
        },
      },
    }),
  ],
};
