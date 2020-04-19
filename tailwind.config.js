module.exports = {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["Poppins", "sans-serif"],
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px",
    },
    inset: {
      "0": "0",
      "2": "2px",
      auto: "auto",
      "1/2": "50%",
      "-1/2": "-50%",
    },
    extend: {
      colors: {
        primary: "#031761",
        gray: {
          default: "#242424",
          dark: "#1B1B1C",
        },
      },
      spacing: {
        "96": "24rem",
        "128": "32rem",
      },
      height: {
        "1/2": "50%",
        "screen-1/2": "50vh",
      },
      width: {
        "3px": "3px",
      },
    },
  },
  variants: {},
  plugins: [],
}
