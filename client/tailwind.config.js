/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-bg": "#111111",
        "primary-text": "#FAFAFA",
        "secondary-text": "#A2A2A2",
        "wall-success": "#19ED7B",
        "wall-yellow": "#FFC148",
        "wall-yellow-bg": "#F8A9101A",
        "wall-green": "#FFC148",
        "wall-blue": "#4BDFFF",
      },
    },
  },
  plugins: [],
};
