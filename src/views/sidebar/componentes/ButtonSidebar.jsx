import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function ButtonSidebar({icon,classNameIcon,children,link}) {

    
  return (
    <NavLink
    to={link || "#"}
    className={ ({isActive})=>isActive?'bg-amber-100  flex group w-36 md:ml-2  cursor-pointer group md:items-center md:justify-between  p-2 gap-x-8 md:gap-1 md:p-2 mx-auto  duration-300 text-zinc-700 rounded':` flex group w-36 md:hover:ml-2 ml-1 cursor-pointer group md:items-center text-zinc-100 md:justify-between  p-2 gap-x-8 md:gap-1 md:p-2 mx-auto hover:bg-amber-100 duration-300 hover:text-zinc-700 rounded`}>
      {(isActive)=>(
        <>
            <FontAwesomeIcon icon={icon} className= {`${classNameIcon} text-2xl w-1/12   md:w-1/3`}/>
            <button className={ isActive?'block':'hidden '+`md:text-xs hidden group-hover:block font-semibold text-center`}>{children}</button>
            </>  )}
        </NavLink>
  )
}
