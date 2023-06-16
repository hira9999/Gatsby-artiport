/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        fadeInDown: 'fadeInDown 1s',
        fadeInUp: 'fadeInUp 1s',
        fadeIn: 'fadeIn 1s',
      },
      keyframes: {
        fadeInDown: {
          '0%': {
            opacity: 0,
            transform: 'transition3d(0,-100%,0)',
          },
          '100%': {
            opacity: 1,
            transform: 'transitionZ(0)',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: 0,
            transform: 'transition3d(0,100%,0)',
          },
          '100%': {
            opacity: 1,
            transform: 'transitionZ(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
      colors: {
        darkNavy: '#020C1B',
        navy: '#0B192F',
        lightNavy: '#102240',
        darkGreen: '#58BB96',
        green: '#61E88C',
        gray: '#9FA8C7',
      },
    },
  },
  plugins: [],
}
