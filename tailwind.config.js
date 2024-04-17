/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "425px",
      },
      backgroundColor: {
        "dark-purple": "#0A0118",
        primary: "#B47CFD",
        secondary: "#FF7FC2",
        extra: "#FFB07B",
        off: "#2B2338",
      },
      colors: {
        primary: "#B47CFD",
        secondary: "#FF7FC2",
        extra: "#FFB07B",
        off: "#2B2338",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
