import React from 'react'

export default function CabeceraContenedor({children}) {
  return (
    <div className="rounded-t bg-gradient-to-tl from-primary-200 via-primary-100 to-primary-100 text-sky-50 mb-0 px-6 py-6">{children}</div>
  )
}
