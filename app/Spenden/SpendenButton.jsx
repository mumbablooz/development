import React from 'react'
import Link from 'next/link'

export default function SpendenButton() {

  return (
    <Link 
    href={'/Spenden'} 
    className={'greenButton'}
       >Projekte unterstützen
    </Link>
  )
}
