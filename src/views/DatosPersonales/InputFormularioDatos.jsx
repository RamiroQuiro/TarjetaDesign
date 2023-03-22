import React from 'react'

export default function InputFormularioDatos({value,children,type,name,placeholder,onChange,label}) {
  return (
    <div  className={`w-full lg:w-6/12 px-4 ${label&& "peer-checked:blur-0 blur-sm duration-200" } `}>
    <div className="relative w-full mb-3">
      <label
        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
        htmlFor={name}
      >
        {children}
      </label>
      <input
      value={value}
      name={name}
      onChange={onChange}
        type={type}
        className="border-0 px-3 py-3 font-semibold placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        placeholder={placeholder}
      />
    </div>
  </div>
  )
}
