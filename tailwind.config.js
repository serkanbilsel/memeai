/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
      },
      fontFamily: {
        sans: ['Russo One', 'Rajdhani', 'Poppins', 'Graphik', 'sans-serif'], // Öncelikli font 'Poppins'
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}
