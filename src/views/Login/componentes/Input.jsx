import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Input({handleChange,icon,children,type,name}) {
  return (
    <div className="flex flex-col text-sm items-start justify-between w-full relative my-2">
                <input 
                onChange={handleChange}
                type={type} name={name} id={name} required className="peer w-full py-3 pl-8 bg-transparent shadow-none border-0 border-b-2 text-gray-700 border-gray-500 outline-none focus:outline-none relative z-10" />
                <FontAwesomeIcon icon={icon} className="text-gray-700 absolute left-0 bottom-3 h-2/5" /> 
                <label htmlFor={name} className=" peer-focus:bg-gray-700 peer-focus:text-gray-50  peer-focus:p-1 peer-focus:rounded-sm peer-focus:-translate-y-8 peer-valid:bg-gray-700 peer-valid:text-gray-50  peer-valid:p-1 peer-valid:rounded-sm peer-valid:text-xs peer-focus:text-xs peer-valid:-translate-y-8 duration-500 text-gray-700 absolute left-0 bottom-3 pl-8 ">{children}</label>
              </div>
  )
}
