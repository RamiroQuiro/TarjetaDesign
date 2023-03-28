import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faKey,
  faLock,
  faQuestion,
  faUserPlus,
  faUserLock,
  faUserAlt,
  faUserCircle,
  faUserGear,
  faUserShield,
  faUsersCog,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { supabaseClient } from "../../../backend/client";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import Input from "./componentes/Input";

export default function Registrar() {
  const navigate = useNavigate();
  const [formulario, setFormulario] = useState({});

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleNavigator=()=>{
    navigate('/login')
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resultado = await supabaseClient.auth.signUp(formulario);
      const uuid=resultado.data.user.id
      const ingresarData=await supabaseClient.from("UserData").upsert({
        uuid:uuid,
        name:formulario.name,
        email:formulario.email,
        razonSocial:formulario.razonSocial,
      }).then(()=>{
          toast.success("Usuario Registrado con Exito");
          navigate("/dashboard");
      })

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen bg-rose-900 flex items-center justify-center overflow-hidden absolute">
        <Toaster/>
      {/* border y conbtenedor */}
      <section
        className="bg-white h-[600px] w-[400px]  relative flex items-center justify-center before:content-[' '] before:absolute before:top-0 before:left-0 before:w-6 before:h-full before:bg-gradient-to-t before:to-gray-50 before:from-gray-500 before:backdrop-blur-sm before:z-10
     after:content-[' '] after:absolute after:top-0 after:right-0 after:w-6 after:h-full after:bg-gradient-to-t after:to-gray-50 after:from-gray-500 after:backdrop-blur-sm after:z-10
     
     animate-aparecer
     "
        s
      >
        {/* sombra */}
        {/* <div
          className="absolute w-full h-full
      before:content-[' '] before:absolute before:top-0 before:left-[calc(100%+96px)] before:w-[120%] before:h-[240%] before:bg-gradient-to-b before:to-black/75 before:from-transparent before:skew-x-[45deg]
      after:content-[' '] after:absolute after:bottom-[-200%] after:left-[calc(100%+80px)] after:w-[100%] after:h-[200%] after:bg-gradient-to-t after:to-black/30 after:from-transparent after:skew-x-[45deg] animate-[aparecerCote_3s] duration-500
      "
        ></div> */}
        {/* fondo formulario */}
        <div className="w-full relative h-full bg-gradient-to-t to-gray-50 via-gray-300 from-gray-400 shadow-xxxl flex items-center justify-center">
          {/* formulario */}
          <form className="px-10 py-5  w-10/12 flex flex-col justify-between items-center h-full  ">
            <div className="bg-gray-700 rounded-full w-20  left-0 bottom-3 h-20  flex items-center justify-center mx-auto">
              <FontAwesomeIcon
                icon={faUserPlus}
                className="text-stone-50 w-10 h-10 flex items-center justify-center mx-auto"
              />
            </div>
            <h2>Bienvenido a Kaypi!</h2>
            <Input icon={faUser} name='razonSocial' type="text" handleChange={handleChange}>
              Razon Social | Nombre de Usuario
            </Input>
            <div className="flex gap-1">

            <Input icon={faUser} name='name' type="text" handleChange={handleChange}>
              Nombre
            </Input><Input icon={faUser} name='apellido' type="text" handleChange={handleChange}>
              Apellido
            </Input>
            </div>
            <Input icon={faUser} name='email' type="mail" handleChange={handleChange}>
              usermail@mail.com
            </Input>
            <Input handleChange={handleChange} name='password' type="password" icon={faLock}>
              Constraseña
            </Input>
            <Input handleChange={handleChange} type="password" icon={faLock}>
              Reingrese Constraseña
            </Input>

            <div
            onClick={handleNavigator}
            className="flex w-full  justify-center items-center gap-4 cursor-pointer">
              <p className="font-semibold text-xs ">Ya tienes una Cuenta</p>{" "}
                <p className="font-semibold text-xs">Ingresar</p>{" "}
                <FontAwesomeIcon
                  icon={faUserLock}
                  className="text-gray-700 h-3"
                />
            </div>
            <button
              onClick={handleSubmit}
              className="bg-gray-700 rounded-sm px-3 py-1.5 mt-2 text-gray-50 font-semibold"
            >
              Registrar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
