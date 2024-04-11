/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '__main_dark': '#0d0d0d',
        '__shadow_gray': '#353535',
        '__section_gray': '#161616',
        '__dark_blue': '#00417b',
        '__footer_white_blue': '#23a6f0',
        '__white_blue': '#42bdec',
        '__purple': '#b4a9fd',
        '__blue_cards': '#1e313f',
        '__external_section_dark': '#262626',
        '__enternal_section_dark': '#1f1d1d',
        '__text_gray': '#525151',
        '__green': '#3b7c1d',
        '__service_purple': '#504cff',
        '__service_dark': '#171c1d',
      }
    },
    fontFamily: {
      'ABeeZee': '"ABeeZee", sans-serif'
    }
  },
  plugins: [],
}

