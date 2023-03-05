import perfil from "../images/perfil.png";
export default function ImagenPerfil() {
  return (
    <div className="bg-gray-100 rounded-3xl w-10/12 h-1/2 flex justify-center items-center p-0 overflow-hidden ">
      <img
        src={perfil}
        alt="pefil"
        className="object-contain object-center  h-full"
      />
     
    </div>
  );
}
