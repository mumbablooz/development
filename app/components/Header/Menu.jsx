import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

export default function Menu({isOpen,setIsOpen}) {
  return (
    <div className={styles.menuContainer}>

    <img 
        width="12" 
        height="12" 
        src="https://img.icons8.com/material/24/var(--firstColor)/cancel--v1.png" 
        alt="cancel--v1"
        onClick={()=>setIsOpen(!isOpen)}
        style={{cursor: 'pointer',
        alignSelf: 'flex-end'}}/>

    <ul>
    <li className='menuButton'>
        <Link href={'/Spenden'}>
            Projekte unerstützen
        </Link></li>
      <li className='menuButton'>
        <Link href={'/Kontakt'}>
            Kontakt
        </Link></li>
   
    </ul>
    
    </div>
  )
}
