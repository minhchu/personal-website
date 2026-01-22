/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1152d4',
        'background-light': '#ffffff',
        'background-dark': '#0f1115',
      },
      fontFamily: {
        serif: ['Newsreader', 'serif'],
      },
    },
  },
  plugins: [],
}
