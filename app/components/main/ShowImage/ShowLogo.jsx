import React from 'react'
import Image from 'next/image'

export default function ShowLogo({width}) {
  return (
        <Image src={'/'+process.env.NEXT_PUBLIC_OWNER_LOGO} 
        width={process.env.NEXT_PUBLIC_OWNER_LOGO_WIDTH}
        height={process.env.NEXT_PUBLIC_OWNER_LOGO_HEIGHT}
        alt={process.env.NEXT_PUBLIC_OWNER_LOGO_ALT} 
        style={{
          maxWidth: width,
          height: 'auto'
        }} 
       
        priority={true}/>
  )
}
