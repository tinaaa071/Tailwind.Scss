/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'green': '#B3CC59',
        'mint': '#E6EBD0',
        'yellow': '#FFF8DC',
      }
    },
    
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/container-queries')
  ],
}
