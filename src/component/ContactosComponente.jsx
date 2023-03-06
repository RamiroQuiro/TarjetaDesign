import ItemsPerfilContacto from "./ItemsPerfilContacto";

export default function ContactosComponente({contactos}) {
  return (
    <div className=" pl-2 mt-5 w-full h-1/4 font-thin md:text-lg md:font-semibold text-left ">
        <ul className=" flex h-full w-10/12 md:8/12 md:6/12 md:ml-[15%] md:text-lg md:font-semibold mx-auto flex-col items-start justify-between font-thin text-left py-2">
          {contactos?.map((contact, i) => (
            <ItemsPerfilContacto contact={contact} key={i} />
          ))}
        </ul>
      </div>
  )
}
