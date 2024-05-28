/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grass: '#538A18',
        ground: '#8C5637',
        fire: '#EC3434',
        dragon: '#B11717',
        ice: '#D8EDFF',
        ghost: '#E2E4FC',
        flying: '#AFD0BF',
        rock: '#808F87',
        steel: '#939D98',
        normal: '#698F3F',
        electric: '#FEE02D',
        water: '#02517B',
        highting: '#003651',
        psychic: '#011E2E',
        poison: '#01000E',
      },
      screens: {
        phone300: '300px',
        phone360: '360px',
        phone400: '400px',
        phone420: '420px',
        tablet500: '500px',
        tablet600: '600px',
        tablet650: '650px',
        tablet690: '690px',
        screen800: '800px',
        screen860: '860px',
        screen900: '900px',
        screen1050: '1050px',
        screen1400: '1400px',
        screen1500: '1500px',

      },
      boxShadow: {
        'component-sw': '0 5px 15px 5px rgba(0, 0, 0, 0.5)',
        'component-client': '5px 5px 15px 1px rgba(0, 0, 0, 0.2)',
        'component-header': '0px 0px 10px 20px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        'scale-anime': {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' }
        },
        wave: {
          '0%': { transform: 'translateX(0px)', opacity: '0' },
          '10%': { transform: 'translateX(10vw)', opacity: '1' },
          '50%': { transform: 'translateX(50vw)', opacity: '1' },
          '80%': { transform: 'translateX(100vw)', opacity: '1' },
          '100%': { transform: 'translateX(110vw)', opacity: '0' },
        },
      },
      animation: {
        'waving-hand-ten': 'wave 8s linear infinite',
      },
    },
  },
  plugins: [],
};
