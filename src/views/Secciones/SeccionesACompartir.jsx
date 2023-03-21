import React from "react";
import SectionOutlet from "../components/SectionOutlet";
import InputFormularioDatos from "../DatosPersonales/InputFormularioDatos";
import FormularioPrimerosLink from "./FormularioPrimerosLink";
import FormularioSecciones from "./FormularioSecciones";

export default function SeccionesACompartir() {
  return (
    <SectionOutlet>
      <div className="flex flex-col gap-10">
        <FormularioPrimerosLink />
        <FormularioSecciones />
      </div>
    </SectionOutlet>
  );
}
