/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#686767",
        secondary: "#3B3B3B",
        danger: "#e74c3c",
      },
      fontFamily: {
        // sans: ["Inter", "sans-serif"],
      },
      height: {
        "1/10": "10vh",
        "7vh": "7vh",
      },
    },
  },
  plugins: [],
};
