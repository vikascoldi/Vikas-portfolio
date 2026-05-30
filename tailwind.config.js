/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#080808',
        surface: '#111111',
        border: '#2e2e2e',
        accent: '#7c3aed',
        accent2: '#ec4899',
        muted: '#a0a0a0',
        text: '#e8e8e8',
      },
    },
  },
  plugins: [],
}
