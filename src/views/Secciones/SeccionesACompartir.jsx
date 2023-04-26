import React from "react";
import BackgroundDorm from "../components/BackgroundDorm";
import SectionOutlet from "../components/SectionOutlet";
import InputFormularioDatos from "../DatosPersonales/InputFormularioDatos";
import FormularioPrimerosLink from "./FormularioPrimerosLink";
import FormularioSecciones from "./FormularioSecciones";
import CabeceraContenedor from "../components/CabeceraContenedor";

export default function SeccionesACompartir() {
  return (
    <SectionOutlet>
      <div className="flex flex-col w-full mt-10 md:mt-0 gap-10">
       <BackgroundDorm>
          <CabeceraContenedor>
            <h2 className="text-blueGray-700 md:text-xl font-bold">
              Link a compartir en primer plano
            </h2>
          </CabeceraContenedor>
          <div className="flex-auto md:px-4 lg:px-4  pt-0">
            <FormularioPrimerosLink />
          </div>
          </BackgroundDorm>
          <BackgroundDorm>
          <CabeceraContenedor>
            <h2 className="text-blueGray-700 text-xl font-bold">
              Secciones a integrar en tu Tarjeta
            </h2>
          </CabeceraContenedor>
          <div className="flex-auto md:px-4 lg:px-4  pt-0">
            <FormularioSecciones />
          </div>
        </BackgroundDorm>
      </div>
    </SectionOutlet>
  );
}
