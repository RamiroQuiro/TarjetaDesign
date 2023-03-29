import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabaseClient } from "../../../../backend/client";
import DatosPerfil from "./DatosPerfil";
import ImagenPerfil from "./ImagenPerfil";
import LinksSquare from "./LinksSquare";

export default function SectionTarjetaSola({label}) {
  const [datosUser, setDatosUser] = useState(null);
  const params = useParams();
  useEffect(() => {
    const traerData = async () => {
      const usuario = await supabaseClient
        .from("UserData")
        .select()
        .eq("razonSocial", !label?(params.userName.toLowerCase()):label);
        // console.log(usuario?.data[0])
        setDatosUser(usuario?.data[0]);
      };
      traerData();
    return () => {};
  }, []);

  return (
    <section className="bg-white border rounded-lg md:max-w-[40vw]  w-full md:h-[95%] h-full z-20 flex flex-col items-center justify-between ">
      <ImagenPerfil />
      <DatosPerfil userData={datosUser} />
      <LinksSquare />
      <div className="text-sm font-extralight pb-5">
        <span>{datosUser?.descripcion}</span>
      </div>
    </section>
  );
}
