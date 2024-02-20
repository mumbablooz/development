'use client'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'

export default function Akkordeon({contentHtml,isOpenBooleen}) {
    const [ isOpen, setIsOpen ] = useState(isOpenBooleen)
    const [ content, setContent ] = useState(null)

useEffect(()=>{
    if(isOpen){
        setContent(contentHtml)
    } else {
        setContent(null)
    }
},[isOpen,setIsOpen,setContent,contentHtml])

   function handleOnClick(){
setIsOpen(!isOpen)
    }

  return (
    <div style={{marginBottom: '1.6rem'}}>
        <div className={styles.buttonContainer}>
        <button className='button'
        style={{
            color: 'black',
            marginRight: '0.3rem',
            width: '5rem'
        }}
        onClick={handleOnClick}>{isOpen ? 'schließen' : 'öffnen'}</button>
        {isOpen ? <div>
            <Image
        width={50} 
        height={50}  
        src="https://img.icons8.com/ios-filled/50/000000/smiling-mouth.png" 
        alt="smiling-mouth"
        onClick={handleOnClick}
        style={{cursor: 'pointer'}}
        /></div> : <div><Image 
        width={50} 
        height={50} 
        src="https://img.icons8.com/ios-filled/50/000000/lips.png" 
        alt="lips"
        onClick={handleOnClick}
        style={{cursor: 'pointer'}}/></div>}
        </div>
 
<div>{content}</div>
    </div>
  )
}
