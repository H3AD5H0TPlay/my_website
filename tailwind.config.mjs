/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff1744',
        secondary: '#b71c1c',
        cyber: {
          black: '#0a0a0a',
          darker: '#000000',
          red: '#ff1744',
          'red-glow': '#ff174420',
          'red-bright': '#ff4081',
        },
      },
      fontFamily: {
        cyber: ['Orbitron', 'system-ui', 'sans-serif'],
        sans: ['Rajdhani', 'system-ui', 'sans-serif'],
      },
      screens: {
        'xs': '300px',
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3840px',
        'ultra': '10000px',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glitch': 'glitch 1s ease-in-out infinite alternate',
        'flicker': 'flicker 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { 'text-shadow': '0 0 5px #ff1744, 0 0 15px #ff1744, 0 0 25px #ff1744' },
          '100%': { 'text-shadow': '0 0 10px #ff1744, 0 0 30px #ff1744, 0 0 50px #ff1744' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-5px, 2px)' },
          '66%': { transform: 'translate(5px, -2px)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}