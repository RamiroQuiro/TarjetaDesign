import React from "react";
import DatosPerfil from "./component/DatosPerfil";
import ImagenPerfil from "./component/ImagenPerfil";
import LinksSquare from "./component/LinksSquare";
import SectionTarjetaSola from "./component/SectionTarjetaSola";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden min-h-screen h-screen md:rounded-lg bg-neutral-100 relative flex items-center justify-center">
      {/* <div className='absolute top-5 left-10 w-1/3 rounded-full bg-blue-300 backdrop-blur-[100px] h-1/2'></div>
        <div className='absolute bottom-10 rigth-5 w-1/2 bg-orange-300 rounded-full backdrop-blur-3xl h-1/3'></div> */}
   <SectionTarjetaSola/>
      <div className="absolute top-0 left-0 w-full bg-blue-200/70 z-10 backdrop-blur-sm h-full"></div>
    </div>
  );
}
