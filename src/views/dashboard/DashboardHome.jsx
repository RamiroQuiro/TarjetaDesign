import SectionTarjetaSola from "../Tarjeta1/component/SectionTarjetaSola";
import Home from "../Tarjeta1/Home";
import InfoDasboard from "./componentes/InfoDasboard";


export default function DashboardHome() {

  return <div className="w-full h-screen bg-zinc-50">
    <div className="w-10/12  flex justify-center gap-20 items-center pt-10 pl-36">
  <InfoDasboard/>
   
      <div className="w-[450px]">
        <SectionTarjetaSola/>
      </div>
    </div>
  </div>;
}
