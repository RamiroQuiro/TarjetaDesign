import React from "react";

export default function CardDashboard({ descripcion, info, svg }) {
  return (
    <div class="flex flex- w-[48%] mx-auto  items-center p-4  rounded-lg shadow-xs bg-zinc-50">
      <div class=" mr-4 rounded-full">{svg}</div>
      <div>
        <p class="mb-2 text-sm font-medium text-gray-600 ">{descripcion}</p>
        <p class="text-lg font-semibold text-gray-700 ">{info}</p>
      </div>
    </div>
  );
}
