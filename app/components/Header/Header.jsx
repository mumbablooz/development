'use client'
import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import MenuButton from './MenuButton'
import styles from './styles.module.css'
import Image from 'next/image'

export default function Header() {

  const [ isOpen, setIsOpen ] = useState(false)
  const [ content, setContent ] = useState(null)
  const [ opacityTitelLogoNav, setOpacityTitelLogoNav ] = useState(0)
  const [ opacityContent, setOpacityContent ] = useState(0)
  const contentHtml = (<ul className={styles.menuContainer}>
    <Link href={'/Kontakt'} className='button'><li style={{marginRight: '1rem'}}>Kontakt</li></Link>
    </ul>)
    
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
        <ul>
<li> 


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
</li>

<Link href={'/'}>
  <li className='button' style={{marginRight: '1rem'}}><img 
  width="24" 
  height="24" 
  src="https://img.icons8.com/glyph-neue/64/var(--firstColor)/home--v2.png" 
  alt="home--v5"/></li></Link>
        <MenuButton isOpen={isOpen} setIsOpen={setIsOpen}/>
        </ul>  
        </nav>
</div>

<div style={{opacity: opacityContent}}
className={styles.menuContainer}>
  {content}
</div>

    </header>
  )
}
