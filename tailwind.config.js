/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'void-black': '#0A0F1C',
        'data-blue': '#0F172A', 
        'neon-cyan': '#00F0FF',
        'matrix-dim': 'rgba(0, 240, 255, 0.1)',
        'space-dark': '#050B23',
        'space-card': '#0A1438'
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'], 
      }
    },
  },
  plugins: [],
}