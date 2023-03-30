import React from 'react'

export default function BackgroundDorm({children}) {
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full  md:mt-0 shadow-lg rounded-lg bg-gradient-to-br from-neutral-100 via-neutral-100 to-amber-100/30  border-0">{children}</div>
  )
}
