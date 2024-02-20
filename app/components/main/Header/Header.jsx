'use client'
import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import MenuButton from './MenuButton'
import styles from './styles.module.css'

import Menu from './Menu'

import ShowIcon from '../ShowIcon/ShowIcon'
import {GetWindowSize} from '../GetWindowSize'
import ShowLogo from '../ShowImage/ShowLogo'
import ShowImage from '../ShowImage/ShowImage'
import ShowAvatar from '../ShowImage/ShowAvatar'
import SpendenButton from '../../spenden/SpendenButton'

export default function Header() {

  const [ isOpen, setIsOpen ] = useState(false)
  const [ content, setContent ] = useState(null)
  const [ opacityTitelLogoNav, setOpacityTitelLogoNav ] = useState(0)
  const [ opacityContent, setOpacityContent ] = useState(0)
  const [contentHtml, setContetnHtml] = useState(<Menu setIsOpen={setIsOpen} />)
  const windowSize = GetWindowSize();

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
    },[isOpen,setContent,contentHtml,setOpacityContent]) 


  return (
    <header className={styles.headerContainer}> 

<div className={styles.titelLogoNavContainer}
style={{opacity: opacityTitelLogoNav}}>

<div className={styles.titelContainer}>
  {windowSize && (windowSize.width<768 && <h1>BLOOZ DEVELOPMENT</h1>)}
    </div>   

        <nav>
        <div className={styles.navLeft}>

          <div style={{marginRight: '0.5rem',display:'flex'}}>
            <ShowAvatar width={'5rem'} />
  {windowSize && (windowSize.width>768 ? <ShowLogo width={'25rem'} /> : <ShowLogo width={'5rem'} /> )}
          </div>

{windowSize && (windowSize.width>768 && <h1 style={{margin: '0 0.5rem'}}>BLOOZ DEVELOPMENT</h1>)}

          </div>
     
       <div className={styles.navRight}>
 <SpendenButton />    
<Link href={'./'} className='iconButton' style={{marginRight: '0.5em'}}>
<ShowIcon iconName={'home'} size={'25'} /></Link>

<MenuButton isOpen={isOpen} setIsOpen={setIsOpen}/> 
       </div>

        </nav>
</div>

{content && <div style={{opacity: opacityContent}}
className={styles.menuContainer}>
  {content}
</div>}

    </header>
  )
}
