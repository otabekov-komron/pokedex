/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "3rem",
      max: "100rem",
    },
    extend: {
      dropShadow: {
        card: "0 0 5px rgba(0, 0, 0, 0.2)",
      },
      boxShadow: {
        card: "0 0 20px 0 #00000",
        single: "0px -1px 25px 2px rgba(0, 0, 0, 0.16)",
      },
      colors: {
        primary: "#333",
        secondary: "hsla(0, 0%, 100%, 0.2)",
        rangeGreen: "#48d0b0",
        rangeRed: "#fb6c6c",
        rangeBlue: "#609fb5",
        titleColor: "#6c79db",
      },
      fontFamily: {
        montserrat: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "390px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  variants: ["responsive", "group-hover", "hover", "active", "focus"],
  plugins: [],
};
