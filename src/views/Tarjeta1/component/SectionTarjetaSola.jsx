import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { supabaseClient } from "../../../../backend/client";
import NavBarTarjeta from "../../components/NavBarTarjeta";
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
    <section className="bg-white border capitalize rounded-lg lg:w-[30vw]  md:w-[50vw] w-full md:h-[90%] shadow-shadowCaja1 relative h-full z-20 flex flex-col items-center justify-between ">
      
      <div className="absolute top-0 lef-0 text-xs text-gray-600 capitalize z-50 font-semibold py-2 ">
        <span> RamiroCode | Web Developer </span>
      </div>
     <Outlet context={datosUser}/>
      <NavBarTarjeta/>

    </section>
  );
}
