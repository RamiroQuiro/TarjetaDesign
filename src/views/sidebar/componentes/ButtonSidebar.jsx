import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonSidebar({icon,classNameIcon,children,link}) {

    
  return (
    <Link
    to={link || "#"}
    className="flex md:flex-col flex- w-full cursor-pointer group md:items-center text-zinc-100 md:justify-center pl-10 p-2 gap-5 md:gap-1 md:p-2 mx-auto hover:bg-gray-100 duration-150 hover:text-zinc-700 rounded ">
            <FontAwesomeIcon icon={icon} className= {`${classNameIcon} text-2xl w-1/12 md:w-full`}/>
            <button className="md:text-xs font-semibold ">{children}</button>
        </Link>
  )
}
