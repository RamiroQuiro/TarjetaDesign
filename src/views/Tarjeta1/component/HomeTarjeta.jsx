import React from "react";
import { useOutletContext } from "react-router-dom";
import DatosPerfil from "./DatosPerfil";
import ImagenPerfil from "./ImagenPerfil";
import LinksSquare from "./LinksSquare";

export default function HomeTarjeta() {
  const datosUser = useOutletContext();
  return (
    <>
      {" "}
      <ImagenPerfil />
      <DatosPerfil userData={datosUser} />
      <LinksSquare />
    </>
  );
}
