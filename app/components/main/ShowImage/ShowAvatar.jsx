import React from 'react'
import Image from 'next/image'

export default function ShowAvatar({width}) {
  return (
        <Image src={'/'+process.env.NEXT_PUBLIC_OWNER_AVATAR} 
        width={process.env.NEXT_PUBLIC_OWNER_AVATAR_WIDTH}
        height={process.env.NEXT_PUBLIC_OWNER_AVATAR_HEIGHT}
        alt={process.env.NEXT_PUBLIC_OWNER_AVATAR_ALT} 
        style={{
          maxWidth: width,
          height: 'auto',
          borderRadius: '50%',
          margin: '0.5rem'
        }} 
        priority={true}/>
  )
}
