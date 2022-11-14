/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#4a2191",

          "secondary": "#f4aea6",

          "accent": "#da02f2",

          "neutral": "#1C1E27",

          "base-100": "#E2E2E9",

          "info": "#92B4E7",

          "success": "#1ACB9C",

          "warning": "#A66108",

          "error": "#DA2F5F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
