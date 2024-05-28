/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'component-sw': '0 5px 15px 5px rgba(0, 0, 0, 0.5)',
        'component-client': '5px 5px 15px 1px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}

