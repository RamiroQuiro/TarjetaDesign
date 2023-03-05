import React from "react";
import DatosPerfil from "./component/DatosPerfil";
import ImagenPerfil from "./component/ImagenPerfil";

export default function Home() {
  return (
    <div className="w-full max-h-screen bg-neutral-100 relative flex items-center justify-center">
      {/* <div className='absolute top-5 left-10 w-1/3 rounded-full bg-blue-300 backdrop-blur-[100px] h-1/2'></div>
        <div className='absolute bottom-10 rigth-5 w-1/2 bg-orange-300 rounded-full backdrop-blur-3xl h-1/3'></div> */}
      <section className="bg-white border rounded-lg md:w-[800px] w-5/12 m-auto max-h-5/6 z-20 flex flex-col ">
        <div className="w-full rounded-lg flex flex-col my-3 items-center justify-between gap-3 ">
          <ImagenPerfil/>
          <DatosPerfil/>
        </div>
        <div className="w-2/3 flex ">
          <div className="w-1/3 rounded-lg bg-green-200">componente 1</div>
          <div className="w-2/3  rounded-lg flex bg-green-300">componetne 2</div>
          <div className="w-2/3  rounded-lg flex bg-green-500">componetne 4</div>
          <div className="w-1/3 rounded-lg bg-green-600">componetne 5</div>
        </div>
      </section>
      <div className="absolute top-0 left-0 w-full bg-gray-200/70 -z-10 backdrop-blur-sm h-full"></div>
    </div>
  );
}
