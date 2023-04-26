import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

 function MoleculaLink({isActive,icon,className,children}) {
  return (
    <>
            <FontAwesomeIcon icon={icon} className= {`${className} text-2xl w-3/12   md:w-10 mr-5`}/>
            <p className={ isActive?'flex font-semibold md:text-xs ':'hidden md:text-xs md:opacity-0 w-full  invisible text-gray-700 font- text-center'}>{children}</p>
            </> 
  )
}


export default function ButtonSidebar({setToggle,icon,classNameIcon,children,link}) {
    
  return (
    <NavLink
    onClick={()=>setToggle(false)}
    to={link || "#"}
    className={ ({isActive})=>isActive?`bg-primary-400 relative border-none md:ml-7 shadow-lg rounded p-2 z-30 md:w-32 w-10/12  text-gray-600 flex h-10 items-center justify-center before:content-[' '] before:absolute before:w-2/3 before:right-0 before:opacity-1 before:h-full before:bg-primary-400/80 before:-z-20 before:translate-y-2 before:block before:rounded before:bottom-0 before:-rotate-12 before:duration-500 `
    :
    ` flex relative group md:hover:w-32 w-11/12 border-none z-30 ml-5 md:w-10 overflow-hidden cursor-pointer group md:items-center text-neutral-100 md:justify-between  p-2 gap-x-8 md:gap-1 md:p-2 mx-auto hover:bg-primary-400 duration-300 hover:text-gray-600 rounded h-10  before:content-[' '] before:absolute before:w-2/3 before:right-0 before:h-full before:bg-primary-400/80 before:-z-20 before:opacity-0 before:duration-300 before:rotate-0 `}>
      {(isActive)=>(
      <MoleculaLink
      icon={icon}
      isActive={isActive}
      className={classNameIcon}
      children={children}
      />
            )
            
            }
        </NavLink>
  )
}
