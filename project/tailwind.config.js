/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#050506',
          900: '#0a0a0c',
          800: '#101013',
          700: '#16161a',
          600: '#1d1d22',
          500: '#26262c',
        },
        lead: {
          900: '#1a1a1f',
          800: '#222228',
          700: '#2c2c34',
          600: '#3a3a44',
        },
        copper: {
          50: '#fdf6ee',
          100: '#f9e6d2',
          200: '#f0c89a',
          300: '#e6a862',
          400: '#d98a3a',
          500: '#c4711f',
          600: '#a35a16',
          700: '#7d4513',
          800: '#5a3411',
          900: '#3d240c',
        },
        gold: {
          400: '#e8c878',
          500: '#d4af37',
          600: '#b8941f',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        'shine': 'shine 1.2s ease',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shine: {
          '0%': { transform: 'translateX(-120%) skewX(-12deg)' },
          '100%': { transform: 'translateX(220%) skewX(-12deg)' },
        },
      },
    },
  },
  plugins: [],
};
