/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    clipPath: {
      mypolygon: "polygon(0 0, 99% 0, 100% 100%, 50% 87%, 54% 100%, 0 88%)",
      mypolygon2: "polygon(0 0, 99% 0, 100% 100%, 25% 81%, 30% 94%, 0 81%)",
      myCirclue: "polygon(0% 63%, 8% 63%,11% 68%, 18% 70%, 23% 69%, 29% 67%, 33% 63%, 37% 59%, 41% 56%, 46% 55%, 49% 53%, 54% 53%, 60% 54%, 65% 56%, 70% 58%, 78% 60%, 82% 62%, 86% 64%, 91% 66%, 95% 67%, 99% 69%, 100% 1%, 1% 0%);",

  },
    extend: {
      colors:{
         // for 'primary' and'success'  - use the colorblind-friendly version (blue-grey, cyan-grey, green-grey, orange-grey, purple-grey, red-grey, yellow-grey and violet-grey) and use the hex value.  Also, check out the Color Wheel demo.  Also, check out the Palette demo for the 5 color version.  Also, check out the Paletton demo for the inverse of colors.  Also, check out the Color Wheel demo for the 5 color version.  Also, check out the Paletton demo for the inverse of colors
         'primary':{
          100:'#428BB3',
          200:'#419BCC',
          300:'#FF6B75',
          400:'#FFFC85',
          500:'#B33941',
          600:'#04A9BE'
         }
      },
      borderRadius:{
        borderRounded:'23% 77% 0% 100% / 0% 67% 33% 100%'
      },
      backgroundImage:{
        ruido1:'url(http://api.thumbr.it/whitenoise-361x370.png?) ',
        ruido2:'ffffffff&noise=a3d3e6&density=100&opacity=19',
        curva1:'radial-gradient(ellipse  at 45px 30px , transparent 50%, rgba(0, 255, 0, 0) 0%, #f0f000 0%)'
      }
      ,
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
        'shadowCaja1':'10px 10px 25px -7px rgba(66,66,66,0.7)',
        'xxxl': "5px 5px 5px rgba(0,0,0,0.1), 15px 15px 15px rgba(0,0,0,0.1), 20px 10px 20px rgba(0,0,0,0.1),50px 50px 80px rgba(0,0,0,0.25), inset 3px 3px 3px #fff  0vtzz5px 5px 5px rgba(0,0,0,0.1)5px 5px 5px rgba(0,0,0,0.1)5px 5px 5px rgba(0,0,0,0.1)5px 5px 5px rgba(0,0,0,0.1)AZ"
      }
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}