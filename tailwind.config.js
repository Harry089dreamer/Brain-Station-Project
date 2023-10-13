/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBackgroundColor: "#0F1A43",
        columnBackgroundColor: "rgba(30,139,195,1)",
      },
    },
  },
  plugins: [],
};
