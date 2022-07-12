/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto , sans-serif",
      },
      colors: {
        darkGreen: {
          300: "#00B37E",
          500: "#00875F",
          700: "#015f43",
        },
        darkBlue: {
          500: "#81D8F7",
        },
        darkWarning: {
          500: "#FBA94C",
        },
        darkError: {
          500: "#F75A68",
        },
        darkGray: {
          100: "#E1E1E6",
          200: "#C4C4CC",
          300: "#8D8D99 ",
          500: "#323238 ",
          600: "#29292E",
          700: "#121214",
          900: "#09090A",
        },
      },
      backgroundImage: {
        blur: "url(/src/assets/blurbg.png)",
      },
    },
  },
  plugins: [],
};
