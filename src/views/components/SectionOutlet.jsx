import React from 'react'

export default function SectionOutlet({children}) {
  return (
    <div className="w-full h-screen bg-zinc-50 ">
      <div className="w-10/12 mx-auto text-zinc-700 animate-[aparecer_1.5s] flex justify-center gap-20 items-center pt-10 pl-36">

      {children}</div>
      </div>
  )
}
