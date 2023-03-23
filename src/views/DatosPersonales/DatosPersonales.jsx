import {useEffect} from "react";
import { useOutletContext } from "react-router-dom";
import {shallow  } from "zustand/shallow";
import { supabaseClient } from "../../../backend/client";
// import { estadoDatos } from "../../context/contextGlobal";
import {useDataUser} from "../../context/contextGlobal";
import SectionOutlet from "../components/SectionOutlet";
import FormularioDatos from "./FormularioDatos";

export default function DatosPersonales() {
// const {name}=useDataUser((state)=>({name:state.name}),shallow)

const useDate=useOutletContext()


  return (
    <SectionOutlet>
      <div className="relative flex flex-col min-w-0 break-words w-full mt-10 md:mt-0 shadow-lg rounded-lg bg-zinc-100 border-0">
        <div className="rounded-t bg-zinc-800 text-zinc-400 mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h3 className="text-blueGray-700 text-xl font-bold">Mis Datos</h3>
          </div>
        </div>
        <div className="flex-auto md:px-4 lg:px-4 py-10 pt-0">
          <FormularioDatos dateUser={useDate}/>
        </div>
      </div>
    </SectionOutlet>
  );
}
