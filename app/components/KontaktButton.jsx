import React from 'react'
import Link from 'next/link'

export default function KontaktButton() {
  return (
    <Link href={'/Kontakt'}
    className='greenButton'>
        Kontakt
    </Link>
  )
}
