/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-primary": "#FF907C",
        "custom-bg": "#EFEEE6",
        dark: "#252322",
        lighter: "#6A6966",
        light: "#464646",
      },
    },
  },
  plugins: [],
};
