import {   faDashboard, faQrcode, faSprayCan, faUserPen} from "@fortawesome/free-solid-svg-icons";
import ButtonSidebar from "./componentes/ButtonSidebar";
export default function Sidebar() {
  return (
    <div className='w-28 absolute top-0 left-0 h-full max-h-fit bg-zinc-800 pt-20'>
        <div className=" md:w-20 mx-auto flex md:flex-col items-center justify-between gap-4">
        <ButtonSidebar
        link={'dashboard'}
        icon={faDashboard}>
            Dashboard
        </ButtonSidebar>
        <ButtonSidebar link={'/datosPersonales'} icon={faUserPen}>
            Info User
        </ButtonSidebar>
        <ButtonSidebar icon={faSprayCan}>
            Diseños
        </ButtonSidebar>
        <ButtonSidebar icon={faQrcode}>
            QR
        </ButtonSidebar>
   
        </div>
    </div>
  )
}
