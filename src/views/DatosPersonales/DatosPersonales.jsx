import React from "react";
import SectionOutlet from "../components/SectionOutlet";
import FormularioDatos from "./FormularioDatos";

export default function DatosPersonales() {
  return (
    <SectionOutlet>
      <div className="relative flex flex-col min-w-0 break-words w-full mt-10 md:mt-0 shadow-lg rounded-lg bg-zinc-100 border-0">
        <div className="rounded-t bg-zinc-800 text-zinc-400 mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h3 className="text-blueGray-700 text-xl font-bold">Mis Datos</h3>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <FormularioDatos/>
        </div>
      </div>
    </SectionOutlet>
  );
}
