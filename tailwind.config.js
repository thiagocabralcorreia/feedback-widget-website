module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#fcce00',
        }
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
