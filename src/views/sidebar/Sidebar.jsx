import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  fa0, fa1, faCarSide, faDashboard, faQrcode, faSprayCan, faUserPen} from "@fortawesome/free-solid-svg-icons";
import ButtonSidebar from "./componentes/ButtonSidebar";
export default function Sidebar() {
  return (
    <div className='w-28 absolute top-0 left-0 h-full bg-zinc-800 pt-20'>
        <div className=" md:w-20 mx-auto flex flex-col items-center justify-between gap-4">
        <ButtonSidebar
        link={'dashboard'}
        icon={faDashboard}>
            Dashboard
        </ButtonSidebar>
        <ButtonSidebar icon={faUserPen}>
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
