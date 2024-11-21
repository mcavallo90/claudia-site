/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cr-purple": "#6d509b",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
