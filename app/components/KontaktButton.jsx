import React from 'react'
import Link from 'next/link'

export default function KontaktButton() {
  return (
    <Link href={'/Kontakt'}
    className='button'>        
        <p style={{
        marginRight: '0.5em'
      }}>Kontakt</p>
        <img 
        width="30" 
        height="30" 
        src="https://img.icons8.com/ios-glyphs/30/FFFFFF/mail-contact.png" 
        alt="mail-contact"/>
    </Link>
  )
}
