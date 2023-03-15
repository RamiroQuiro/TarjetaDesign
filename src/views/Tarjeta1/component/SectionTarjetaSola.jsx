import React from 'react'
import DatosPerfil from './DatosPerfil'
import ImagenPerfil from './ImagenPerfil'
import LinksSquare from './LinksSquare'

export default function SectionTarjetaSola() {
  return (
    <section className="bg-white border rounded-lg md:max-w-[40vw]  w-full md:h-[95%] h-full z-20 flex flex-col items-center justify-between ">
    <ImagenPerfil />
    <DatosPerfil />
    <LinksSquare/>
  <div className="text-sm font-extralight pb-5">
    <span>tarjetaDesign | ramiroCode</span>
  </div>
  </section>
  )
}
