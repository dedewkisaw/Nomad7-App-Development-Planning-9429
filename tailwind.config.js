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
        'neu-inset': 'inset 8px 8px 16px #d1d9e6, inset -8px -8px 16px #ffffff',
        'neu-outset': '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
        'neu-pressed': 'inset 12px 12px 24px #d1d9e6, inset -12px -12px 24px #ffffff',
        'neu-hover': '12px 12px 24px #d1d9e6, -12px -12px 24px #ffffff',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradientShift 4s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}