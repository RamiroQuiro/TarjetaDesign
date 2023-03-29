import React from "react";
import { Outlet } from "react-router-dom";
import ButtonGuardar from "../components/buttonGuardar";
import TabsSeccion from "./Component/TabsSeccion";

export default function FormularioSecciones() {
  return (
    <form className="py-10 flex flex-col item-centar justify-between">
      <TabsSeccion />
      <div>
        <Outlet />
      </div>
      <ButtonGuardar />
    </form>
  );
}
