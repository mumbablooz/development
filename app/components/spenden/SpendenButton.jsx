import React from 'react'
import Link from 'next/link'
import ShowIcon from '../main/ShowIcon/ShowIcon'
export default function SpendenButton() {

  return (
    <Link 
    href={'/Spenden'} 
  
       ><div 
       className={'greenButton'}
       style={{display: 'flex', alignItems: 'center', padding: '0.6rem'}}>
        <ShowIcon iconName={'spenden'} size={'10'} color={'var(--firstColor)'}/>
       <p style={{marginLeft: '0.5rem'}}>Projekte unterstützen</p>        
        </div> 

    </Link>
  )
}
