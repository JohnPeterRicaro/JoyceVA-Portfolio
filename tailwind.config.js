/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  screens:{
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px'
  },
  theme: {
    extend: {
      fontFamily:{
        OpenSans: ['Open Sans', 'sans-serif'],
        Cookie: ['Cookie', 'cursive'],
      },
    },
  },
  plugins: [],
}
