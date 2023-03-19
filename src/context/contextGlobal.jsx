import { create } from "zustand";
import { supabaseClient } from "../../backend/client";

const fetchData=async(set)=>{
    const uuid= (await supabaseClient.auth.getSession()).data.session.user.id
    try {
        const resultado=await supabaseClient.from('UserData').select().eq('uuid',uuid)
        set((state)=>(resultado))
        
    } catch (error) {
        console.log(error)
    }
}


export const estadoDatos = create((set) => ({
  name: "",
  apellido: "",
  email: "",
  razonSocial: "",
  fetchData:(set)=>fetchData(set)
}));


