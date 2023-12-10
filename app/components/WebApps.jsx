'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {fetchWebApps} from './fetchWebApps'
export default function WebApps() {

const [ webApp, setWebApp ] = useState('')

const partCss ={
  margin: '0.6rem'
}
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
        maxWidth: '50rem',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
      border: '1px solid white',
      borderRadius: '2rem',
      padding: '0.8rem',
      margin: '0.6rem',
    }}><h3 style={{
      alignSelf: 'center',
    marginRight: '1rem',}}>{app?.name}</h3>
    {app.description && <p><b>Beschreibung: </b>{app.description}</p>}
    {app.content && <p><b>Inhalte: </b>{app.content}</p>}
    {app.features && <p><b>Highlights: </b>{app.features}</p>}
    {app.technologys && <p style={partCss}><b>Technologien: </b>{app.technologys.map((technology,index)=>{
      console.log(index)
      return technology+', '
    })}</p>}
    <Link href={'https://'+app.link}>
      <p className='button'
      style={{
        width: '16rem'
      }}>zur Web-App</p> 
    </Link>
      </div>)      
        })}

      </div>
  )
}
