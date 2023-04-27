/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    //cutom colors
    colors: {
      darkblue: "#191B34",
      lightgreen: "#42667D",
      darkred: "#FF3D00",
      white: "#FFFFFF",
      binaryblue: "#4999FE",
      bgblue: "#121212",
      lightblue: "#607191",
      bgblue1: "#21294B",
      binarypurple: "#191B34",
      binarypurpledark: "#0F1226",
      textsecondar: "#C5C6CC",
    },

    //cutom fonts
    fontFamily: {
      nunitoextralight: ["nunitoSansExtraLight", "Nunito Sans", "sans-serif"],
      nunitolight: ["nunitoSansLight", "Nunito Sans", "sans-serif"],
      nunitoregular: ["nunitoSansRegular", "Nunito Sans", "sans-serif"],
      nunitosemibold: ["nunitoSansSemibold", "Nunito Sans", "sans-serif"],
      nunitobold: ["nunitoSansBold", "Nunito Sans", "sans-serif"],
      nunitoextrabold: ["nunitoSansExtraBold", "Nunito Sans", "sans-serif"],
      barlow: ["Barlow", "sans-serif"],
    },
    extend: {
      gap: {
        13: "52px",
      },
      gridTemplateColumns: {
        ingestionxl: "40% 60%",
      },
    },
  },
  plugins: [],
};
