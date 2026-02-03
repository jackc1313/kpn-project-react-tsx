/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Helvetica Neue"', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      spacing: {
        // Spaziature personalizzate
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '0.75rem',
      },
    },
  },
  plugins: [
    // Plugin per utilities personalizzate
    function({ addUtilities }) {
    addUtilities({
      '.maintext': {
        'font-family': '"Helvetica Neue"',
        'font-size': '1.25rem', // text-xl
        'color': '#a3e635', // text-lime-400
        'font-weight': '600', // font-semibold
        'font-style': 'italic',
        'text-transform': 'uppercase',
      },
    });
    },
  ],
};