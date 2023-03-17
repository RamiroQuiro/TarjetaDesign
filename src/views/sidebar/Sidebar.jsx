import {   faDashboard, faQrcode, faSprayCan, faUserPen} from "@fortawesome/free-solid-svg-icons";
import ButtonSidebar from "./componentes/ButtonSidebar";
export default function Sidebar() {
  return (
    <div className='md:w-28 w-full absolute top-0 left-0 md:h-full py-2 max-h-fit bg-zinc-800 pt-20'>
        <div className="px-2 md:px-0 md:w-20 mx-auto flex md:flex-col items-center justify-between gap-4">
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
