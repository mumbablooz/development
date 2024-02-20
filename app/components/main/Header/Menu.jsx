import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './styles.module.css'

import ShowIcon from '../ShowIcon/ShowIcon'

export default function Menu({setIsOpen}) {

  function handleClick(){
    setIsOpen(false)
  }
  
  return (
    <div className={styles.menuContainer}>

    <Image 
        width="12" 
        height="12" 
        src="https://img.icons8.com/material/24/var(--firstColor)/cancel--v1.png" 
        alt="cancel--v1"
        onClick={()=>setIsOpen(false)}
        style={{cursor: 'pointer',
        alignSelf: 'flex-end'}}/>

    <ul>
      <li className='menuButton' onClick={handleClick}>
          <Link href={'./'}><div style={{display: 'flex', alignItems: 'center'}}>
            <ShowIcon iconName={'home'} size={'10'}/>
            <p style={{marginLeft: '0.3em', fontSize: '1rem'}}>Home</p>
            </div></Link></li>
      <li className='menuButton' onClick={handleClick}>
          <Link href={'./AboutMe'}><div style={{display: 'flex', alignItems: 'center'}}>
          <ShowIcon iconName={'face'} size={'10'}/>
            <p style={{marginLeft: '0.3em', fontSize: '1rem'}}>Blooz</p>
            </div></Link></li>
      <li className='menuButton' onClick={handleClick}>
          <Link href={'./Spenden'}><div style={{display: 'flex', alignItems: 'center'}}>
            <ShowIcon iconName={'spenden'} size={'10'} color={'var(--firstColor)'}/>
            <p style={{marginLeft: '0.3em', fontSize: '1rem'}}>Spenden</p>
            </div></Link></li>  

      <li className='menuButton' onClick={handleClick}>
          <Link href={'./Kontakt'}><div style={{display: 'flex', alignItems: 'center'}}>
            <ShowIcon iconName={'contact'} size={'10'} color={'var(--firstColor)'}/>
            <p style={{marginLeft: '0.3em', fontSize: '1rem'}}>Kontakt</p>
            </div></Link></li>
          <hr />

          
   
    </ul>
    
    </div>
  )
}
