/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-press-start-2p)',
      },

      colors: {
        mainBackground: '#dc0a2d',
        secondBackground: '#f2f2f2',
        mainScreen: '#98cb98',
        secondScreen: '#9e9d9d',
        mainButtons: '#585858',
        squareButtons: '#7ca9f7',
      },
    },
  },
  plugins: [],
}
