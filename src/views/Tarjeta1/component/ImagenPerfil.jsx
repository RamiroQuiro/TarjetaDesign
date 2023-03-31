import perfil from "../../../images/perfil.png";
export default function ImagenPerfil() {
  return (
    <div className="bg-gradient-to-tr md:rounded-t-lg from-orange-400 via-orange-300 to-cyan-200  w-full md:h-1/2 h-1/3 flex justify-center items-center p-0  ">
      <div className="md:w-[200px] w-[175px] h-[175px] md:h-[200px] rounded-full overflow-hidden translate-y-20 border-4 border-gray-100/80">
        <img
          src={perfil}
          alt="pefil"
          className="h-auto max-w-full object-contain rounded-3xl justify-center p-1"
        />
      </div>
    </div>
  );
  
}
