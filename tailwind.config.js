/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E1B3A',
        'accent-blue': '#00E5FF',
        'accent-magenta': '#FF2D9E',
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
        ripple: 'ripple var(--duration,3s) ease calc(var(--i, 0)*.2s) infinite',
        slideDown: 'slideDown 0.3s ease-out forwards',
      },
      keyframes: {
        marquee: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(calc(-100% - var(--gap)))' }
        },
        'marquee-vertical': {
          'from': { transform: 'translateY(0)' },
          'to': { transform: 'translateY(calc(-100% - var(--gap)))' }
        },
        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
            opacity: "var(--opacity, 0.24)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
            opacity: "calc(var(--opacity, 0.24) * 0.8)",
          },
        },
        slideDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
}