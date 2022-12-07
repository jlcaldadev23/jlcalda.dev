/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        charcoal: "#424b54",
        flax: "#e1ce7a",
        "desert-sand": "#ebcfb2",
        "pale-silver": "#c5baaf",
        white: "#ffffff",
        "honey-yellow": "#F7B32B",
        "dark-purple": "#2D1E2F",
        cultured: "#F0F3F5",
      },
      fontFamily: {
        abel: ["Abel", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "760px",
        lg: "1020px",
        xl: "1260px",
      },
    },
  },
  plugins: [],
};

// // {"Charcoal":"424b54","Flax":"e1ce7a","Desert Sand":"ebcfb2","Pale Silver":"c5baaf","White":"ffffff"}
// font-family: 'Abel', sans-serif;
// // font-family: 'Nunito', sans-serif;
//    'sm': '640px',
//       // => @media (min-width: 640px) { ... }

//       'md': '768px',
//       // => @media (min-width: 768px) { ... }

//       'lg': '1024px',
//       // => @media (min-width: 1024px) { ... }

//       'xl': '1280px',
//       // => @media (min-width: 1280px) { ... }

//       '2xl': '1536px',
