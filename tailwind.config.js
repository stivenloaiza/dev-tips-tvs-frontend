module.exports = {
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // o 'media' o 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-bg': "url('/home/riwip4-012/dev-tips-tvs-frontend/public/stacked-waves-haikei.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
