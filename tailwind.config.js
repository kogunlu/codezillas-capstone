/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'yellow-white': '#FEE89E',
        'main-background': '#EAF8F9',
      },
    },
  },
  plugins: [
    // ...
    // eslint-disable-next-line import/no-extraneous-dependencies, global-require
    require('tailwind-scrollbar')
],
variants: {
  scrollbar: ['rounded']
}
};
