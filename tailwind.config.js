/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: ['light', 'cupcake', 'dark', 'corporate'],
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
