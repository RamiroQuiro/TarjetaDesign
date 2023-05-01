import React from "react";

export default function ItemsPerfilContacto({ contact }) {
  return (
    <li className={`flex w-full items-center justify-start  animate-[aparecer_2s] delay-300 py-1 gap-5`}>
      <img src={contact.icon} alt={contact.type} className="w-8" />
      <p>{contact.descripcion}</p>
    </li>
  );
}
