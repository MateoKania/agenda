// tailwind.config.js
const daisyui = require("daisyui");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./tailwind-preserve-classes.html",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#1E40AF",
      },
    },
  },
  plugins: [daisyui],
};
