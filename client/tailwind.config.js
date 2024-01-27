/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#05C7AA",
        "dark-green": "#10BE94",
        "color-lightgreen": "#F4FAFF",
        "background-color": "#006089",
        "light-gray": "#F4FAFF",
        "venue-text": "#B9B9B9",
        "venue-card": "#976467",
      },
      // container: {
      //   center: true,
      //   padding: {
      //     DEFAULT: "20px",
      //     md: "50px",
      //   },
      // },
    },
  },
  plugins: [],
};
