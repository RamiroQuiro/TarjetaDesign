import React, { useState } from "react";
import { supabaseClient } from "../../../backend/client";
import ButtonGuardar from "../components/buttonGuardar";
import InputFormularioDatos from "../DatosPersonales/InputFormularioDatos";

export default function FormularioPrimerosLink({ dataUser }) {
  const [formEntry, setFormEntry] = useState(dataUser);

  const handleChange = (e) => {
    setFormEntry({ ...formEntry, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uuid = (await supabaseClient.auth.getSession()).data.session.user.id;
    try {
      const result = await supabaseClient.from("target").update({
        website: formEntry.website,
        llamada: formEntry.llamada,
        email: formEntry.mail,
        linkedin: formEntry.linkedin,
        miEmpresa: formEntry.miEmpresa,
        ubicacion: formEntry.ubicacion,
      }).eq('uuid',uuid);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="py-5 flex flex-col item-centar justify-between"
    >
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
           value={formEntry?.llamada}
            onChange={handleChange}
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
               value={formEntry?.website}
            onChange={handleChange}
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
               value={formEntry?.mail}
            onChange={handleChange}
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
               value={formEntry?.linkedin}
            onChange={handleChange}
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
