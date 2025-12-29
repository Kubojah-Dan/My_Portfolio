/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'void-black': '#000000',
        'data-blue': '#050B23', 
        'neon-cyan': '#00F0FF',
        'matrix-dim': 'rgba(0, 240, 255, 0.1)'
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'], 
      }
    },
  },
  plugins: [],
}