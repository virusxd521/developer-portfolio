module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        shine: 'shine 3s infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        shine: {
          from: { 'mask-position': '150%' },
          to: { 'mask-position': '-50%' },
        },
      },
    },
  },
}