/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#6857E8",
        "light-primary": "#C2BAFF",
        white: "#fff",
        black: "#000",
      },
    },
  },
  plugins: [],
};
