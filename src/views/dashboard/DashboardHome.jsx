import SectionOutlet from "../components/SectionOutlet";
import SectionTarjetaSola from "../Tarjeta1/component/SectionTarjetaSola";
import InfoDasboard from "./componentes/InfoDasboard";

export default function DashboardHome() {
  return (
   <SectionOutlet>
        <InfoDasboard />

        <div className="w-[450px]">
          <SectionTarjetaSola />
        </div>
    </SectionOutlet>
    );
}
