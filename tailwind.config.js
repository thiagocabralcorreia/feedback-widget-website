module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#FFC30B',
        }
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
