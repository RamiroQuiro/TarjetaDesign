import React from 'react'
import CardDashboard from './CardDashboard'

export default function CardsDasboard({children}) {
  return (
    <ul className="pt-1 pb-2 px-3 overflow-y-auto">
{children}
</ul>
  )
}
