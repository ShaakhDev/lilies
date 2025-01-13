/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0B0D17",
        white: "#F4F5F7",
        white2: "#EEEFF4",
      },
    },
  },
  plugins: [],
};
