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

      <div className={styles.infoContentContainer}   >
    {app.description && <b>Beschreibung: </b>}
    {app.description && <p>{app.description}</p>}

    {app.content && <b>Inhalte: </b>}
    {app.content && <p>{app.content}</p>}

    {app.features && <b>Highlights: </b>}
    {app.features && <p>{app.features}</p>}

    {app.technologys && <b>Technologien: </b>}
    {app.technologys && <p className={styles.partCss}>{app.technologys.map((technology,index)=>{
      return technology+', '
    })}</p>}

    {app.github && <b>Github: </b>}
    {app.github && <div>
    <Link href={app.github}><p style={{color: 'white'}}>{app.github}</p></Link></div>}       
        </div>

    

      </div>)      
        })}

      </div>
  )
}
