module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        'soft-blue': 'hsl(215, 51%, 70%)',
        cyan: 'hsl(178, 100%, 50%)',
        main: 'hsl(217, 54%, 11%)',
        card: 'hsl(216, 50%, 16%)',
        line: 'hsl(215, 32%, 27%)',
      },
    },
  },
  plugins: [],
};
