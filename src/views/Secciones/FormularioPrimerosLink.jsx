import React from "react";
import ButtonGuardar from "../components/buttonGuardar";
import InputFormularioDatos from "../DatosPersonales/InputFormularioDatos";

export default function FormularioPrimerosLink() {
  return (
    <form
    onSubmit={(e)=>{
e.preventDefault()
    }}
    className="py-5 flex flex-col item-centar justify-between">
      <div className="flex md:flex-row flex-col items-center justify-evenly md:text-center">
        <div className="flex md:w-full items-center justify-center">
          <input type="checkbox" name="llamada" id="llamada" className="peer" />
          <label
            htmlFor="llamada"
            className="cursor-pointer font-semibold text-sm mx-2"
          >
            Llamada
          </label>
          <InputFormularioDatos
            label={true}
            name={"llamada"}
            placeholder={"3856771992"}
          ></InputFormularioDatos>
        </div>
        <div className="flex md:w-full items-center justify-center">
          <input
            type="checkbox"
            name="website"
            id="website"
            className="peer "
          />
          <label
            htmlFor="website"
            className="cursor-pointer font-semibold text-sm mx-2"
          >
            WebSite
          </label>
          <InputFormularioDatos
            label={true}
            name={"website"}
            placeholder={"ramiroquiroga.vercel.app"}
          ></InputFormularioDatos>
        </div>
        <div className="flex md:w-full  items-center justify-center">
          <input type="checkbox" name="mail" id="mail" className="peer" />
          <label
            htmlFor="mail"
            className="cursor-pointer font-semibold text-sm mx-2"
          >
            Email
          </label>
          <InputFormularioDatos
            label={true}
            name={"mail"}
            placeholder={"ramiryexe@hotmail.com"}
          ></InputFormularioDatos>
        </div>
        <div className="flex md:w-full items-center justify-center">
          <input
            type="checkbox"
            name="linkedin"
            id="linkedin"
            className="peer"
          />
          <label
            htmlFor="linkedin"
            className="cursor-pointer font-semibold text-sm mx-2"
          >
            Linkedin
          </label>
          <InputFormularioDatos
            label={true}
            name={"linkedin"}
            placeholder={"https://www.linkedin.com/in/ramiro--quiroga/"}
          ></InputFormularioDatos>
        </div>
      </div>
      <ButtonGuardar />
    </form>
  );
}
