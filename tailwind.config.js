/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{js,jsx,ts,tsx}"],
 theme: {
  extend: {
   colors: {
    cyan: "hsl(180, 66%, 49%)",
    "dark-violet": "hsl(257, 27%, 26%)",
    "very-light-gray": "#f0f1f6",
    "error-red": "hsl(0, 87%, 67%)",
    "shortly-gray": "hsl(0, 0%, 75%)",
    "grayish-violet": "hsl(257, 7%, 63%)",
    "very-dark-violet": "hsl(260, 8%, 14%)",
    "very-dark-blue": "hsl(255, 11%, 22%)",
   },
  },
 },
 plugins: [],
};
