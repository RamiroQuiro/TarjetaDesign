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
    <div className="md:w-24 w-full absolute top-0 left-0 md:h-full py-2  md:bg-sky-900 bg-sky-900/95 backdrop-blur-sm  mt-14  md:pt-20 group z-20">
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
          } animate-[sliceUp_.5s] px-2 md:px-0 md:w-20 mx-auto flex flex-col duration-300 items-center justify-between gap-4`}
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
        <ButtonSidebar icon={faSprayCan}>Diseños</ButtonSidebar>
        <ButtonSidebar icon={faQrcode}>QR</ButtonSidebar>
      </div>
    </div>
  );
}
