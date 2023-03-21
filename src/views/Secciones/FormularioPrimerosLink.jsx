import React from 'react'
import ButtonGuardar from '../components/buttonGuardar'
import InputFormularioDatos from '../DatosPersonales/InputFormularioDatos'

export default function FormularioPrimerosLink() {
  return (
    <form className="relative flex flex-col min-w-0 break-words w-full mt-10 md:mt-0 shadow-lg rounded-lg bg-zinc-100 border-0">
    <div className="rounded-t bg-zinc-800 text-zinc-400 mb-0 px-6 py-6">
      <h2 className="text-blueGray-700 text-xl font-bold">
        Link a compartir en primer plano
      </h2>
    </div>
    <div className="flex flex-wrap md:flex-row flex-col w-full mx-auto py-10">
      <div className="flex md:w-1/2 items-center justify-center">
        <input
          type="checkbox"
          name="llamada"
          id="llamada"
          className="peer"
        />
        <span className=" font-semibold text-sm mx-2">Llamada</span>
        <InputFormularioDatos
          label={true}
          name={"llamada"}
          placeholder={"3856771992"}
        ></InputFormularioDatos>
      </div>
      <div className="flex md:w-1/2 items-center justify-center">
        <input
          type="checkbox"
          name="website"
          id="linkedin"
          className="peer "
        />
        <span className=" font-semibold text-sm mx-2">WebSite</span>
        <InputFormularioDatos
          label={true}
          name={"website"}
          placeholder={"ramiroquiroga.vercel.app"}
        ></InputFormularioDatos>
      </div>
      <div className="flex md:w-1/2 items-center justify-center">
        <input
          type="checkbox"
          name="linkedin"
          id="linkedin"
          className="peer"
        />
        <span className=" font-semibold text-sm mx-2">Email</span>
        <InputFormularioDatos
          label={true}
          name={"linkedin"}
          placeholder={"ramiryexe@hotmail.com"}
        ></InputFormularioDatos>
      </div>
      <div className="flex md:w-1/2 items-center justify-center">
        <input
          type="checkbox"
          name="linkedin"
          id="linkedin"
          className="peer"
        />
        <span className=" font-semibold text-sm mx-2">Linkedin</span>
        <InputFormularioDatos
          label={true}
          name={"linkedin"}
          placeholder={"https://www.linkedin.com/in/ramiro--quiroga/"}
        ></InputFormularioDatos>
      </div>
   
    </div>
<ButtonGuardar/>
  </form>
  )
}
