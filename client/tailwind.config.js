/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'google': {
          blue: '#4285F4',
          red: '#EA4335',
          yellow: '#FBBC05',
          green: '#34A853'
        },
        'amazon': {
          orange: '#FF9900',
          dark: '#232F3E'
        },
        'salesforce': {
          blue: '#00A1E0',
          dark: '#032D60'
        },
        'uber': {
          black: '#000000',
          green: '#3DDB85'
        }
      },
      animation: {
        'pulse-red': 'pulse-red 1s ease-in-out infinite',
        'countdown': 'countdown 1s linear infinite'
      },
      keyframes: {
        'pulse-red': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(239, 68, 68, 0.7)' },
          '50%': { boxShadow: '0 0 0 10px rgba(239, 68, 68, 0)' }
        }
      }
    },
  },
  plugins: [],
}
