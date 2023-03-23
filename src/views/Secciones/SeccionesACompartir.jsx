import React from "react";
import SectionOutlet from "../components/SectionOutlet";
import InputFormularioDatos from "../DatosPersonales/InputFormularioDatos";
import FormularioPrimerosLink from "./FormularioPrimerosLink";
import FormularioSecciones from "./FormularioSecciones";

export default function SeccionesACompartir() {
  return (
    <SectionOutlet>
      <div className="flex flex-col w-full gap-10">
        <div className="relative flex flex-col min-w-0 break-words w-full  md:mt-0 shadow-lg rounded-lg bg-zinc-100 border-0">
          <div className="rounded-t w-full bg-zinc-800 text-zinc-400 md:mb-0 md:p-6 p-3 ">
            <h2 className="text-blueGray-700 md:text-xl font-bold">
              Link a compartir en primer plano
            </h2>
          </div>
          <div className="flex-auto md:px-4 lg:px-4  pt-0">
            <FormularioPrimerosLink />
          </div>
        </div>
        <div className="relative flex flex-col min-w-0 break-words w-full  md:mt-0 shadow-lg rounded-lg bg-zinc-100 border-0">
          <div className="rounded-t w-full bg-zinc-800 text-zinc-400 md:mb-0 md:p-6 p-3 ">
            <h2 className="text-blueGray-700 text-xl font-bold">
              Secciones a integrar en tu Tarjeta
            </h2>
          </div>
          <div className="flex-auto md:px-4 lg:px-4  pt-0">
            <FormularioSecciones />
          </div>
        </div>
      </div>
    </SectionOutlet>
  );
}
