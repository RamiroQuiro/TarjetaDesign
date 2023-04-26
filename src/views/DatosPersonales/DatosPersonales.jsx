import {useEffect} from "react";
import { useOutletContext } from "react-router-dom";
import {shallow  } from "zustand/shallow";
import { supabaseClient } from "../../../backend/client";
// import { estadoDatos } from "../../context/contextGlobal";
import {useDataUser} from "../../context/contextGlobal";
import BackgroundDorm from "../components/BackgroundDorm";
import SectionOutlet from "../components/SectionOutlet";
import FormularioDatos from "./FormularioDatos";
import CabeceraContenedor from "../components/CabeceraContenedor";

export default function DatosPersonales() {
// const {name}=useDataUser((state)=>({name:state.name}),shallow)

const useDate=useOutletContext()


  return (
    <SectionOutlet>
     <BackgroundDorm>
        <CabeceraContenedor >
          <div className="text-center flex justify-between">
            <h3 className="text-blueGray-700 text-xl font-bold">Mis Datos</h3>
          </div>
        </CabeceraContenedor>
        <div className="flex-auto md:px-4 lg:px-4 py-10 pt-0">
          <FormularioDatos dateUser={useDate}/>
        </div>
      </BackgroundDorm>
    </SectionOutlet>
  );
}
