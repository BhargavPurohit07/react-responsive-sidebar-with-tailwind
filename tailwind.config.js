/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const screens = {
  xs: "0px",
  sm: "640px", // phone rotated
  md: "768px", // tablet
  lg: "1024px", // tablet rotated / small desktop
  xl: "1280px", // big desktop
  "2xl": "1536px",
};
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0096C7",
        darkPrimary: "#023E8A",
        cultured: "#F5F5F5",
        lightSilver: "#D9D9D9",
        coralRed: "#FC3838",
        deepSaffron: "#FE9634",
        greenYellow: "#BAF639",
        arsenic: "#434343",
      },
      fontFamily: {
        Outfit: ["Outfit", ...defaultTheme.fontFamily.sans],
        DMSans: ["DM Sans", ...defaultTheme.fontFamily.sans],
        Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
        Poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      screens,
    },
  },
  plugins: [],
};
