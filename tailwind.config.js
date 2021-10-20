module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FBA70B",
      },
    },
  },
  variants: {
    extend: {
      animation: ["active", "focus", "hover"],
      transform: ["active"],
      scale: ["active"],
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
