import celu from "../images/celuIcon.svg";
import mailIcon from "../images/mailIcon.svg";
import ubicacionIcon from "../images/ubicaionIcon.svg";
import ItemsPerfilContacto from "./ItemsPerfilContacto";

export default function DatosPerfil() {

const contactos=[
    {
        type:'cel',descripcion:'+54 9 3856-771992',icon:celu,
    },
    {
        type:'email',descripcion:'rama.exe.13@gmail.com',icon:mailIcon,
    },
    {
        type:'ubicacion',descripcion:'La Banda - Santiago del Estero',icon:ubicacionIcon,
    },
]

  return (
    <div className="w-full mx-auto  h-full mt-24">
      <h1 className=" text-2xl font-bold text-transparent text-center bg-clip-text bg-gradient-to-r to-cyan-600 from-teal-800">
        Ramiro Exequiel Quiroga
      </h1>
      <h3 className=" text-base font-thin mt-2 text-center ">
        Web Developer - FrontEnd
      </h3>
      <div className=" pl-2 mt-5 w-full h-1/4 font-thin md:text-lg md:font-semibold text-left ">
        <ul className=" flex h-full w-10/12 md:8/12 md:6/12 md:ml-[15%] md:text-lg md:font-semibold mx-auto flex-col items-start justify-between font-thin text-left py-2">
        
        {
            contactos?.map((contact,i)=>(
                <ItemsPerfilContacto
                contact={contact}
                key={i}
                />

            ))
        }
       
       
         
        </ul>
      </div>
    </div>
  );
}
