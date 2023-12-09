'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {fetchWebApps} from './fetchWebApps'
export default function WebApps() {

const [ webApp, setWebApp ] = useState('')

useEffect(()=>{
  fetchWebApps(setWebApp)
},[])


  return (
    <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0.4rem',
      }}>
        {webApp && webApp.map((app,index)=>{
    return (<div 
      key={'app-'+index}
      style={{
        width: '26rem',
      border: '1px solid white',
      padding: '0.4rem',
      margin: '0.6rem',
    }}><b>{app?.name}</b>
    <p><b>Beschreibung: </b>{app.description}</p>
    <Link href={'https://'+app.link}>
      <p className='button'>zur Web-App</p> 
    </Link>
      </div>)      
        })}

      </div>
  )
}
