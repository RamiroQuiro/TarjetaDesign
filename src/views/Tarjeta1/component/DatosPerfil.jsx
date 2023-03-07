import celu from "../../../images/celuIcon.svg";
import mailIcon from "../../../images/mailIcon.svg";
import ubicacionIcon from "../../../images/ubicaionIcon.svg";
import ContactosComponente from "./ContactosComponente";

import TituloDescripcion from "./TituloDescripcion";

export default function DatosPerfil() {
  const contactos = [
    {id:1,
      type: "cel",
      descripcion: "+54 9 3856-771992",
      icon: celu,
    },
    {id:2,
      type: "email",
      descripcion: "rama.exe.13@gmail.com",
      icon: mailIcon,
    },
    {id:3,
      type: "ubicacion",
      descripcion: "La Banda - Santiago del Estero",
      icon: ubicacionIcon,
    },
  ];

  return (
    <div className="w-full mx-auto  h-full mt-24">
    <TituloDescripcion/>
      <ContactosComponente
      contactos={contactos}
      />
    </div>
  );
}
