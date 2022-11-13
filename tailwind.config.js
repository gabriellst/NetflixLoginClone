/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./*.html"],
  theme: {
    screens: {
      xs: "440px",
      sm: "740px",
    },
    extend: {
      colors: {
        netflixRed: "#e50914",
        inputGray: "#333",
        inputGrayFocus: "#444",
        labelGray: "#999",
        lightGray: "#6f7373",
        lightestGray: "#b3b3b3",
        warning: "#D57800",
      },
    },
  },
  plugins: [],
};
