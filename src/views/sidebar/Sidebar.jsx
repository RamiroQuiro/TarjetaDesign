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
    <div className="md:w-20 md:border-r border-primary-300/50 w-screen absolute top-0 left-0 md:h-full duration-300  md:bg-gradient-to-t md:from-primary-300 md:via-primary-200 md:to-primary-100 bg-gradient-to-r from-primary-100/80 via-primary-100/80 to-primary-200/80 backdrop-blur-sm  mt-14  md:pt-20 shadow-lg md:shadow-none z-20">
      <div
        className={`bg-gradient-to-r from-primary-100 via-primary-200 to-primary-200 w-full md:hidden cursor-pointer py-3 flex items-center justify-end pr-10 text-sky-50 text-2xl  duration-300`}
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
          }  mx-auto flex flex-col py-2 duration-300 items-center md:items-start justify-between gap-4 relative z-30`}
      >
        <ButtonSidebar link={"dashboard"} icon={faDashboard} setToggle={setToggle}>
          Dashboard
        </ButtonSidebar>
        <ButtonSidebar link={"/datosPersonales"} icon={faUserPen} setToggle={setToggle}>
          Info User
        </ButtonSidebar>
        <ButtonSidebar link={"/seccionesCompartir"} icon={faSection} setToggle={setToggle}>
          Secciones
        </ButtonSidebar>
        <ButtonSidebar link={"/diseños"} icon={faSprayCan} setToggle={setToggle}>Diseños</ButtonSidebar>
        <ButtonSidebar link={"/crearQR"} icon={faQrcode} setToggle={setToggle}>QR</ButtonSidebar>
      </div>
    </div>
  );
}
