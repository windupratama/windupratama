/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone'   : {max: "576px"},
        'tablet'  : {min: "577px", max: "980px"},
        'desktop' : {min: "2000px"},
      },
      fontFamily: {
        felidae: ["Felidae"],
        manrope: ["Manrope"],
        helvetica: ["Helvetica"],
        DT: ['DT'],
        kudri: ['Kudri'],
        happytime: ['Happy Time'],
        nyghtserif: ['Nyght Serif']
      },
      fontSize: {
        'main-title': "clamp(1rem, 25.5vw, 33rem)"
      },
      colors: {
        strongblue: "#0500EF",
        softblue: "F0F0F0",
        avana: "#ecece4",
        // #ecece4
        // #EAE8E4
        yellow: {
          '450': "yellow",
        }
      },
      backgroundImage: {
      },
      backgroundSize: {
        'from-x' : '100% 0',
        'from-y': '0 100%',
        'to-full' : '100% 100%',
        
        'from-left-thin' : '0 1.5px',
        'to-right-thin' : '100% 1.5px',
      },
    },
  },
  plugins: [],
}