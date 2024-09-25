/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter',
      },
      backgroundImage: {
        'hero': "url('./assets/bg-hero.png')",
      },
      keyframes: {
        downarrow: {
          '0%': { transform: 'translateY(0)', opacity: '0.2' },
          '100%': { transform: 'translateY(0.4em)', opacity:'0.9' },
        },
      },
      animation: {
        downarrow: 'downarrow 0.9s infinite alternate ease-in-out'
      }
    },
  },
  plugins: [],
}