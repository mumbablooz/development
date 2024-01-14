'use client'
import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import MenuButton from './MenuButton'
import styles from './styles.module.css'
import Image from 'next/image'
import SpendenButton from '../spenden/SpendenButton'

export default function Header() {

  const [ isOpen, setIsOpen ] = useState(false)
  const [ content, setContent ] = useState(null)
  const [ opacityTitelLogoNav, setOpacityTitelLogoNav ] = useState(0)
  const [ opacityContent, setOpacityContent ] = useState(0)
  const contentHtml = (<div className={styles.menuContainer}>

    <img 
        width="12" 
        height="12" 
        src="https://img.icons8.com/material/24/var(--firstColor)/cancel--v1.png" 
        alt="cancel--v1"
        onClick={()=>setIsOpen(!isOpen)}
        style={{cursor: 'pointer',
        alignSelf: 'flex-end'}}/>

    <ul>
    <Link href={'/Kontakt'}>
      <li className={styles.liCss+' button'} 
    style={{
    marginRight: '1rem',
    backgroundColor: 'transparent',
    color: 'var(--firstColor)',
    }}>Kontakt</li>
    </Link>
    </ul>
    
    </div>)
    
useEffect(()=>{
setTimeout(()=>{
setOpacityTitelLogoNav(1)
},0)
},[])

    useEffect(()=>{
        if(isOpen){
            setContent(contentHtml)
            setOpacityContent(1)
        } else {
            setContent(null)
            setOpacityContent(0)
        }
    },[isOpen,setIsOpen,setContent])

  return (
    <header 
    className={styles.headerContainer}> 
<div className={styles.titelLogoNavContainer}
style={{opacity: opacityTitelLogoNav}}>
<div className={styles.titelContainer}>
  <h1 style={{color: 'var(--firstColor)'}}>Blooz Development</h1>
    </div>   

        <nav>
        <div>



<Image 
src={'/bloozLogo.jpg'} 
width={900} 
height={900} 
alt='blooz avatar'
style={{
  width: '3rem',
  height: 'auto',
  borderRadius: '50%'
}}/>

  <SpendenButton />

<Link href={'/'} className='button' style={{marginRight: '1rem'}}><img 
  width="24" 
  height="24" 
  src="https://img.icons8.com/glyph-neue/64/var(--firstColor)/home--v2.png" 
  alt="home--v5"/></Link>
        <MenuButton isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>  
        </nav>
</div>

<div style={{opacity: opacityContent}}
className={styles.menuContainer}>
  {content}
</div>

    </header>
  )
}
