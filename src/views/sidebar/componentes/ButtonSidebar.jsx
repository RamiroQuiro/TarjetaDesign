import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonSidebar({icon,classNameIcon,children,link}) {

    
  return (
    <Link
    to={link || "#"}
    className="flex flex-col w-full cursor-pointer group items-center text-zinc-700 justify-center gap-1 p-2 mx-auto border rounded bg-gray-50">
            <FontAwesomeIcon icon={icon} className= {`${classNameIcon} text-2xl  w-full`}/>
            <button className="text-xs font-semibold ">{children}</button>
        </Link>
  )
}
