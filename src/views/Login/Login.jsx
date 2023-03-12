import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faKey,faLock,faQuestion,faUserPlus} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { supabaseClient } from "../../../backend/client";


export default function Login() {
const [formulario, setFormulario] = useState({})

const handleChange=(e)=>{
  setFormulario({...formulario,[e.target.name]:e.target.value})
}

const handleSubmit= async(e)=>{
  e.preventDefault()
  console.log(formulario)
  try {
    const resultado=await supabaseClient.auth.signInWithPassword(formulario)
    console.log(resultado)
  } catch (error) {
    console.error(error)
  }
}

  return (
    <div className="w-screen h-screen bg-rose-900 flex items-center justify-center overflow-hidden absolute">
      {/* border y conbtenedor */}
      <section
        className="bg-white h-[480px] w-[400px]  relative flex items-center justify-center before:content-[' '] before:absolute before:top-0 before:left-0 before:w-6 before:h-full before:bg-gradient-to-t before:to-gray-50 before:from-gray-500 before:backdrop-blur-sm before:z-10
     after:content-[' '] after:absolute after:top-0 after:right-0 after:w-6 after:h-full after:bg-gradient-to-t after:to-gray-50 after:from-gray-500 after:backdrop-blur-sm after:z-10
     
     animate-aparecer
     "
        s
      >
        {/* sombra */}
        <div
          className="absolute w-full h-full
      before:content-[' '] before:absolute before:top-0 before:left-[calc(100%+96px)] before:w-[120%] before:h-[240%] before:bg-gradient-to-b before:to-black/75 before:from-transparent before:skew-x-[45deg]
      after:content-[' '] after:absolute after:bottom-[-200%] after:left-[calc(100%+80px)] after:w-[100%] after:h-[200%] after:bg-gradient-to-t after:to-black/30 after:from-transparent after:skew-x-[45deg] animate-[aparecerCote_3s] duration-500
      "
        ></div>
        {/* fondo formulario */}
        <div
          className="w-full relative h-full bg-gradient-to-t to-gray-50 via-gray-300 from-gray-400 shadow-xxxl flex items-center justify-center"
        >
          {/* formulario */}
          <form className="px-10 py-5  w-10/12 flex flex-col justify-between items-center h-full  ">
              <div className="bg-gray-700 rounded-full w-20  left-0 bottom-3 h-20  flex items-center justify-center mx-auto"><FontAwesomeIcon icon={faKey} className="text-stone-50 w-10 h-10 flex items-center justify-center mx-auto" /></div>
              <h2>Hola de nuevo!</h2>
              <div className="flex flex-col  items-start justify-between w-full relative my-2">
                <input 
                onChange={handleChange}
                type="mail" name="email" id="email" required className="peer w-full py-3 pl-8 bg-transparent shadow-none border-0 border-b-2 text-gray-700 border-gray-500 outline-none focus:outline-none relative" />
                <FontAwesomeIcon icon={faUser} className="text-gray-700 absolute left-0 bottom-3 h-2/5" /> 
                <label htmlFor="mail" className=" peer-focus:bg-gray-700 peer-focus:text-gray-50  peer-focus:p-1 peer-focus:rounded-sm peer-focus:-translate-y-8 peer-valid:bg-gray-700 peer-valid:text-gray-50  peer-valid:p-1 peer-valid:rounded-sm peer-valid:text-xs peer-focus:text-xs peer-valid:-translate-y-8 duration-500 text-gray-700 absolute left-0 bottom-3 pl-8 ">usermail@mail.com</label>
              </div>
              <div className="flex flex-col  items-start justify-between w-full relative  my-2">
              <input
                onChange={handleChange}
              type="password" name="password" id="password"  required className="peer w-full py-3 pl-8 bg-transparent shadow-none border-0 border-b-2 text-gray-700 border-gray-500 outline-none focus:outline-none relative" />
                <FontAwesomeIcon icon={faLock} className="text-gray-700 absolute left-0 bottom-3 h-2/5" />
                <label htmlFor="userName" className="peer-focus:bg-gray-700 peer-focus:text-gray-50  peer-focus:p-1 peer-focus:rounded-sm  peer-focus:-translate-y-8 peer-valid:bg-gray-700  peer-valid:text-gray-50  peer-valid:p-1 peer-valid:rounded-sm peer-valid:text-xs peer-focus:text-xs peer-valid:-translate-y-8 duration-500 text-gray-700 absolute left-0 bottom-3 pl-8 " >Contraseña</label>
    
              </div>
              <div className="flex w-full  justify-center items-center gap-4">
                <div className="w-1/2 flex justify-between items-center gap-1 cursor-pointer">
                  <p className="font-semibold text-sm w-full">Resetear clave</p> <FontAwesomeIcon icon={faQuestion} className="text-gray-700 h-3"/>
                </div>
                <div className="w-1/2 flex  justify-between items-center gap-1 cursor-pointer">
                  <p className="font-semibold text-sm">Registrarse</p> <FontAwesomeIcon icon={faUserPlus} className="text-gray-700 h-3"/>
                </div>
              </div>
              <button
              onClick={handleSubmit}
              className="bg-gray-700 rounded-sm px-3 py-1.5 text-gray-50 font-semibold">Ingresar</button>
          </form>
        </div>
      </section>
    </div>
  );
}
