import { useOutletContext } from "react-router-dom";
import SectionOutlet from "../components/SectionOutlet";
import SectionTarjetaSola from "../Tarjeta1/component/SectionTarjetaSola";
import InfoDasboard from "./componentes/InfoDasboard";

export default function DashboardHome() {
  const userData  =useOutletContext()
  console.log(userData)
  return (
   <SectionOutlet>
        <InfoDasboard />

        <div className="w-[450px]">
          <SectionTarjetaSola label={userData?.razonSocial} />
        </div>
    </SectionOutlet>
    );
}
