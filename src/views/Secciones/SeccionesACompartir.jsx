import React from "react";
import BackgroundDorm from "../components/BackgroundDorm";
import SectionOutlet from "../components/SectionOutlet";
import InputFormularioDatos from "../DatosPersonales/InputFormularioDatos";
import FormularioPrimerosLink from "./FormularioPrimerosLink";
import FormularioSecciones from "./FormularioSecciones";

export default function SeccionesACompartir() {
  return (
    <SectionOutlet>
      <div className="flex flex-col w-full mt-10 md:mt-0 gap-10">
       <BackgroundDorm>
          <div className="rounded-t w-full bg-gradient-to-tr from-sky-900 via-sky-800 to-sky-700 text-sky-50 md:mb-0 md:p-6 p-3 ">
            <h2 className="text-blueGray-700 md:text-xl font-bold">
              Link a compartir en primer plano
            </h2>
          </div>
          <div className="flex-auto md:px-4 lg:px-4  pt-0">
            <FormularioPrimerosLink />
          </div>
          </BackgroundDorm>
          <BackgroundDorm>
          <div className="rounded-t w-full bg-gradient-to-tr from-sky-900 via-sky-800 to-sky-700 text-sky-50 md:mb-0 md:p-6 p-3 ">
            <h2 className="text-blueGray-700 text-xl font-bold">
              Secciones a integrar en tu Tarjeta
            </h2>
          </div>
          <div className="flex-auto md:px-4 lg:px-4  pt-0">
            <FormularioSecciones />
          </div>
        </BackgroundDorm>
      </div>
    </SectionOutlet>
  );
}
