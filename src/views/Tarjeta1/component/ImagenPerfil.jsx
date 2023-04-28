import perfil from "../../../images/perfil.png";
export default function ImagenPerfil() {
  return (
    <div className=" relative md:rounded-t-lg  w-full md:h-1/2 h-1/3 flex justify-center items-center p-0  ">
      <svg
        className="absolute top-10  fill-primary-100 left-0 w-full drop-shadow-lg h-full"
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1640 664"
        width="100%"
        height="864"
      >
        <path
          id="Forma 1"
          class="s0"
          d="m0 437.8c-33.8 0 0-437.8 0-437.8h1640v415.8c0 0-231 254.6-842-33.8-492-232.2-650 55.8-798 55.8z"
        />
      </svg><div className="absolute top-0  left-0 w-full h-1/2 bg-gradient-to-t from-primary-100 to-primary-200 "></div>
      
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
