/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#121214',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    },
  plugins: [],
}

