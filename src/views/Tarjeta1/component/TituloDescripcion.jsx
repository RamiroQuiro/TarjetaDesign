import React from 'react'

export default function TituloDescripcion({userData}) {
  return (
    <>
    <h1 className=" text-3xl font-bold text-transparent text-center bg-clip-text bg-gradient-to-r to-cyan-600 from-teal-800 animate-[sliceUp_3s] delay-100">
 {userData?.name  }  {userData?.apellido}
  </h1>
  <h3 className=" text-base font-thin mt-2 text-center animate-[sliceUp_3s] delay-200">
    {userData?.descripcion}
  </h3>
  </>
  )
}
