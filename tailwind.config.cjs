/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
         // for 'primary' and'success'  - use the colorblind-friendly version (blue-grey, cyan-grey, green-grey, orange-grey, purple-grey, red-grey, yellow-grey and violet-grey) and use the hex value.  Also, check out the Color Wheel demo.  Also, check out the Palette demo for the 5 color version.  Also, check out the Paletton demo for the inverse of colors.  Also, check out the Color Wheel demo for the 5 color version.  Also, check out the Paletton demo for the inverse of colors
         'primary':{
          100:'#428BB3',
          200:'#419BCC',
          300:'#FF6B75',
          400:'#FFFC85',
          500:'#B33941'
         }
      },
      keyframes: {
        abrirCat: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        sliceDown: {
          "0%": { maxHeight: "300px",opacity:"1" },
          "100%": { maxHeight: "0px",opacity:"0" },
        },
        sliceUp: {
          "0%": { maxHeight: "0px", opacity: "0" },
          "100%": { maxHeight: "300px", opacity: "1" },
        },
        aparecer: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        hoverFilter:{
          "0%": { Height: "50px", },
          "100%": { Height: "auto",},
        },
        aparecerDeAbajo: {
          "0%": { opacity: "0",transform:"translateY(50%)" },
          "100%": { opacity: "1",transform:"translateY(0%) "},
        },
        desaparecer: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        aparecerCote: {
          "0%": { transform: "scale(0%) translateX(-20%) translateY(-20%)"},
          "100%": { transform: "scale(100%) translateX(0%) translateY(0%)" }
        },
        desaparecerCote: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(150%)" },
        },
      },
      animation: {
        "waving-hand": "abrirCat 2s linear infinite",
        aparecer: "aparecer 1s ease-out ",
        aparecerCostado: "aparecerCote .3s ease-in ",
        desaparecerCostado: "desaparecerCote .3s ease-in ",
      },
      boxShadow:{
        'xxxl': "5px 5px 5px rgba(0,0,0,0.1), 15px 15px 15px rgba(0,0,0,0.1), 20px 10px 20px rgba(0,0,0,0.1),50px 50px 80px rgba(0,0,0,0.25), inset 3px 3px 3px #fff  0vtzz5px 5px 5px rgba(0,0,0,0.1)5px 5px 5px rgba(0,0,0,0.1)5px 5px 5px rgba(0,0,0,0.1)5px 5px 5px rgba(0,0,0,0.1)AZ"
      }
    },
  },
  plugins: [],
}