import {
  faBabyCarriage,
  faBacon,
  faBars,
  faBarsStaggered,
  faBurger,
  faDashboard,
  faMarsAndVenus,
  faMedal,
  faQrcode,
  faSection,
  faSprayCan,
  faToggleOn,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ButtonSidebar from "./componentes/ButtonSidebar";
export default function Sidebar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="md:w-16 overflow-hidden hover:overflow-visible w-screen absolute top-0 left-0 md:h-full duration-300  md:bg-gradient-to-t md:from-orange-900 md:via-[#102533] md:to-cyan-900 bg-gradient-to-r from-primary-300 via-primary-100 to-primary-200 backdrop-blur-sm  mt-14  md:pt-20  z-20">
      <div
        className={`w-full md:hidden cursor-pointer py-2 flex items-center justify-end pr-10 text-sky-50 text-2xl  duration-300`}
        onClick={() => setToggle(!toggle)}
      >
        <FontAwesomeIcon
          className="duration-200 animate-aparecer"
          icon={!toggle ? faBars : faBarsStaggered}
        />
      </div>
      <div
        className={`${
          !toggle && "hidden md:flex"
          } animate-[sliceUp_.5s] md:px-0  mx-auto flex flex-col duration-300 items-center md:items-start justify-between gap-4`}
      >
        <ButtonSidebar link={"dashboard"} icon={faDashboard}>
          Dashboard
        </ButtonSidebar>
        <ButtonSidebar link={"/datosPersonales"} icon={faUserPen}>
          Info User
        </ButtonSidebar>
        <ButtonSidebar link={"/seccionesCompartir"} icon={faSection}>
          Secciones
        </ButtonSidebar>
        <ButtonSidebar link={"/diseños"} icon={faSprayCan}>Diseños</ButtonSidebar>
        <ButtonSidebar link={"/crearQR"} icon={faQrcode}>QR</ButtonSidebar>
      </div>
    </div>
  );
}
