import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function KontaktButton() {
  return (
    <Link href={'/Kontakt'}
    className='button'>        
        <p style={{
        marginRight: '0.5em'
      }}>Kontakt</p>
        <Image 
        className='icon'
        width={30} 
        height={30} 
        src="https://img.icons8.com/ios-glyphs/30/var(--firstColor)/mail-contact.png" 
        alt="mail-contact"/>
    </Link>
  )
}
