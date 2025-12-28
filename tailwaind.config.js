/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'max-sm': {'max': '340px'},
      md: "700px",
      lg: "1000px",
      xl: "1200px",
    },
    extend: {
       keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee var(--duration, 40s) linear infinite",
      },
      textShadow: {
        '4xs': '0px 1px 0px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const shadows = theme('textShadow');
      const utilities = {};

      for (const key in shadows) {
        utilities[`.text-shadow-${key}`] = {
          textShadow: shadows[key],
        };
      }

      addUtilities(utilities);
    },
  ],
};
