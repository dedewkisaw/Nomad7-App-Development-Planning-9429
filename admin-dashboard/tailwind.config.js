/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'neu-bg': '#e6e7ee',
        'neu-light': '#ffffff',
        'neu-dark': '#d1d9e6',
        'neu-shadow-light': '#ffffff',
        'neu-shadow-dark': '#babecc',
      },
      boxShadow: {
        'neu-inset': 'inset 8px 8px 16px #d1d9e6, inset -8px -8px 16px #ffffff',
        'neu-outset': '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
        'neu-pressed': 'inset 12px 12px 24px #d1d9e6, inset -12px -12px 24px #ffffff',
        'neu-hover': '12px 12px 24px #d1d9e6, -12px -12px 24px #ffffff',
      },
    },
  },
  plugins: [],
}