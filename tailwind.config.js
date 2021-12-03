module.exports = {
  mode: 'jit',
  purge: ['./components/**/*.vue', './pages/**/*.vue'],
  darkMode: 'media',
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ]
}
