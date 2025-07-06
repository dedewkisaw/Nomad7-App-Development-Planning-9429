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
        'nomad-blue': '#4A90E2',
        'nomad-purple': '#7B68EE',
        'nomad-green': '#50E3C2',
        'nomad-orange': '#F5A623',
      },
      boxShadow: {
        'neu-inset': 'inset 2px 2px 5px #babecc, inset -2px -2px 5px #ffffff',
        'neu-outset': '2px 2px 5px #babecc, -2px -2px 5px #ffffff',
        'neu-pressed': 'inset 3px 3px 7px #babecc, inset -3px -3px 7px #ffffff',
        'neu-hover': '4px 4px 8px #babecc, -4px -4px 8px #ffffff',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}