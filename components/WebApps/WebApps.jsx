'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {fetchWebApps} from '../fetchWebApps'
import styles from './styles.module.css'

export default function WebApps() {

const [ webApp, setWebApp ] = useState('')

useEffect(()=>{
  fetchWebApps(setWebApp)
},[])

  return (
    <div
    className={styles.mainContainer}>
        {webApp && webApp.map((app,index)=>{
    return (<div 
      key={'app-'+index}
      className={styles.container}
      style={{

    }}>
      <div className={styles.leftSideContainer}>
      <h3>{app?.name}</h3>
          <Link href={'https://'+app.link}>
    <p className={styles.button+' button'}
    >zur Web-App</p> 
    </Link>       
      </div>

      <div className={styles.infoContentContainer}>
 
    {app.description && <div><b>Beschreibung: </b>
    <p>{app.description}</p></div>}
    {app.content && <div><b>Inhalte: </b>
    <p>{app.content}</p></div>}
    {app.features && <div><b>Highlights: </b>
    <p>{app.features}</p></div>}

    {app.technologys && <div><b>Technologien: </b>
    <p className={styles.partCss}>{app.technologys.map((technology,index)=>{
      return technology+', '
    })}</p></div>}
    {app.github && <div><b>Github: </b>  
    <Link href={app.github}><p style={{color: 'white'}}>{app.github}</p></Link></div>}       
        </div>

    

      </div>)      
        })}

      </div>
  )
}
