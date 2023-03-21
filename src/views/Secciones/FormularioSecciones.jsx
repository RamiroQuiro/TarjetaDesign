import React from "react";
import { Outlet } from "react-router-dom";
import TabsSeccion from "./Component/TabsSeccion";

export default function FormularioSecciones() {
  return (
    <form className="relative flex flex-col min-w-0 break-words w-full mt-10 md:mt-0 shadow-lg rounded-lg bg-zinc-100 border-0">
      <div className="rounded-t bg-zinc-800 text-zinc-400 mb-0 px-6 py-6">
        <h2 className="text-blueGray-700 text-xl font-bold">
          Secciones a integrar en tu Tarjeta
        </h2>
      </div>
        <TabsSeccion/>
        <div>
            <Outlet/>
        </div>
    </form>
  );
}
