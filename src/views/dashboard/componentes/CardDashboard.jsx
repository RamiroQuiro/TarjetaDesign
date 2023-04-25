import React from "react";

export default function CardDashboard({ descripcion, info, svg }) {
  return (
    <div className="flex shadow-lg w-36 mx-auto  items-center p-4  text-gray-100 rounded-lg shadow-xs bg-gradient-to-tl  from-primary-100 via-primary-200 to-primary-200/50">
      <div className=" mr-4 rounded-full bg-gray-50 p-2">{svg}</div>
      <div className="flex-col flex items-center justify-center flex-grow">
        <p className="mb-2 text-sm font-medium ">{descripcion}</p>
        <p className="text-lg md:text-2xl md:font-bold font-semibold ">{info}</p>
      </div>
    </div>
  );
}
