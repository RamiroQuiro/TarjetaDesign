import perfil from "../../../images/perfil.png";
export default function ImagenPerfil() {
  return (
    <div className="bg-gradient-to-tr shape relative md:rounded-t-lg from-primary-100 via-primary-100 to-primary-100  w-full md:h-1/2 h-1/3 flex justify-center items-center p-0  ">
      {/* <div className="absolute -bottom-14  left-5 w-11/12 h-full bg-curva1 ">
        
        </div> */}
      <div className="md:w-[200px] w-[175px] h-[175px] md:h-[200px] rounded-full overflow-hidden translate-y-20 border-4 border-gray-100/80">
        <img
          src={perfil}
          alt="pefil"
          className="h-auto max-w-full object-cover rounded-3xl justify-center "
        />
      </div>
    </div>
  );
  
}
