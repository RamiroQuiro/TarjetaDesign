import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { supabaseClient } from "../../../backend/client";
import InputFormularioDatos from "./InputFormularioDatos";

export default function FormularioDatos() {
  const [formEntry, setFormEntry] = useState(null);

  const handleOnChange = (e) => {
    console.log(e.target.name);
    setFormEntry({ ...formEntry, [e.target.name]: e.target.value });
  };

  const handleGaurdarDatos = async (e) => {
    e.preventDefault();
const uuid= (await supabaseClient.auth.getSession()).data.session.user.id
    try {
      const result = await supabaseClient.from("UserData").update({
        name: formEntry.name,
        apellido: formEntry.apellido,
        email: formEntry.email,
        razonSocial: formEntry.razonSocial,
     }).eq('uuid',uuid)
  
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleGaurdarDatos} className="py-10">
      <Toaster/>
      {/* info personal */}
      <div className="flex flex-wrap">
        <InputFormularioDatos
          onChange={handleOnChange}
          name={"razonSocial"}
          type={"text"}
          placeholder="Ramiro Code"
        >
          Nombre de Negocio | Razón Social | Nombre de Fantasía
        </InputFormularioDatos>
        <InputFormularioDatos
          onChange={handleOnChange}
          name={"name"}
          type={"text"}
          placeholder="Ramiro"
        >
          Nombre
        </InputFormularioDatos>
        <InputFormularioDatos
          onChange={handleOnChange}
          name={"apellido"}
          type={"text"}
          placeholder="Quiroga"
        >
          Apellido
        </InputFormularioDatos>
        <InputFormularioDatos
          onChange={handleOnChange}
          name={"email"}
          type={"email"}
          placeholder="ramiro@quiroga.com"
        >
          Email
        </InputFormularioDatos>
      </div>

      <hr className="mt-6 border-b-2 border-blueGray-300" />

      <h3 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
        Informacion de Contacto
      </h3>
      <div className="flex flex-wrap">
      <InputFormularioDatos
          onChange={handleOnChange}
          name={"celular"}
          type={"number"}
          placeholder="3856771992"
        >
          Celular o Tel
        </InputFormularioDatos>
        <InputFormularioDatos
          onChange={handleOnChange}
          name={"direccion"}
          type={"text"}
          placeholder="Mza 14 Lote 24 Barrio El Rincon"
        >
          Dirección
        </InputFormularioDatos>
        <InputFormularioDatos
          onChange={handleOnChange}
          name={"ciudad"}
          type={"text"}
          placeholder="La Banda - Santiago del Estero"
        >
          Ciudad - Provincia
        </InputFormularioDatos>
    
        <InputFormularioDatos
          onChange={handleOnChange}
          name={"pais"}
          type={"text"}
          placeholder="Argentina"
        >
          Pais
        </InputFormularioDatos>
      </div>

      <hr className="mt-6 border-b-2 border-blueGray-300" />

      <h3 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
        Descripción
      </h3>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlfor="grid-password"
            >
              Sobre Mi
            </label>
            <textarea
              onChange={handleOnChange}
              name="descripcion"
              type="text"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              rows="4"
              placeholder="Has una breve descripcion para mostrar en la presentación de tu tarjeta"
            />{" "}
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="bg-gray-700 rounded-sm px-3 py-1.5 text-gray-50 font-semibold"
      >
        Guardar
      </button>
    </form>
  );
}