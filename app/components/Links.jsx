import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {linkArray} from '../daten/linkArray'

export default function Links() {
  return (
    <section>
        <ul style={{margin: '0 1rem'}}>
        {linkArray.map((link,index)=>{
            return (
                <li key={'link-'+index}><Link href={link.link}>
                  <Image 
                  src={'/icons/'+link.icon} 
                  width={640} 
                  height={444} 
                  alt='Youtubekanal'
                  style={{
                    width: '5rem',
                    height: 'auto',
                  }}
                  />
                  </Link></li>
            )
        })}
        </ul>
        
    </section>
  )
}

