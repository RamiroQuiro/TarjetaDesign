import celu from "../../../images/celuIcon.svg";
import mailIcon from "../../../images/mailIcon.svg";
import ubicacionIcon from "../../../images/ubicaionIcon.svg";
import ContactosComponente from "./ContactosComponente";

import TituloDescripcion from "./TituloDescripcion";

export default function DatosPerfil({userData}) {
  const contactos = [
    { id: 1, type: "cel", descripcion: userData?.celular, icon: celu },
    {
      id: 2,
      type: "email",
      descripcion: userData?.email,
      icon: mailIcon,
    },
    {
      id: 3,
      type: "ubicacion",
      descripcion: userData?.direccion,
      icon: ubicacionIcon,
    },
    {
      id: 3,
      type: "ciudad",
      descripcion: userData?.ciudad,
      icon: ubicacionIcon,
    },
  ];

  return (
    <div className="w-full mx-auto  h-full mt-24">
      <TituloDescripcion userData={userData} />
      <ContactosComponente contactos={contactos} />
    </div>
  );
}
