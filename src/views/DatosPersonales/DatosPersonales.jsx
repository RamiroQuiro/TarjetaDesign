import {useEffect} from "react";
import { useOutletContext } from "react-router-dom";
import {shallow  } from "zustand/shallow";
import { supabaseClient } from "../../../backend/client";
// import { estadoDatos } from "../../context/contextGlobal";
import {useDataUser} from "../../context/contextGlobal";
import BackgroundDorm from "../components/BackgroundDorm";
import SectionOutlet from "../components/SectionOutlet";
import FormularioDatos from "./FormularioDatos";

export default function DatosPersonales() {
// const {name}=useDataUser((state)=>({name:state.name}),shallow)

const useDate=useOutletContext()


  return (
    <SectionOutlet>
     <BackgroundDorm>
        <div className="rounded-t bg-gradient-to-tr from-sky-900 via-sky-800 to-sky-700 text-sky-50 mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h3 className="text-blueGray-700 text-xl font-bold">Mis Datos</h3>
          </div>
        </div>
        <div className="flex-auto md:px-4 lg:px-4 py-10 pt-0">
          <FormularioDatos dateUser={useDate}/>
        </div>
      </BackgroundDorm>
    </SectionOutlet>
  );
}
