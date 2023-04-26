import React from "react";
import InputFormularioDatos from "../../DatosPersonales/InputFormularioDatos";

export default function MiEmpresa() {
  return (
    <div className="flex  flex-col w-full mx-auto py-10 px-5">
      <p className="my-4 font-semibold">
        Ingresa la descripción de tu Empresa o Servicio
      </p>
      <div className="flex w-full items-center justify-center">
        <div className="relative w-full mb-3">
          <textarea
            onChange={""}
            name="miEmpresa"
            type="text"
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            rows="15"
            placeholder="Has una  descripcion para mostrar en la seccion Empresa o Servicio de tu tarjeta"
          />{" "}
        </div>
      </div>
      {/* <ButtonGuardar/> */}
    </div>
  );
}
