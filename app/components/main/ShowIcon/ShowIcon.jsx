'use client'
import React,{useState} from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import {icon_ARRAY} from './icon_ARRAY'
import {mainIcon_ARRAY} from './mainIcon_ARRAY'
import {GetWindowSize} from '../GetWindowSize'

export default function ShowIcon({iconName,size,color}) {

    const [ icon, setIcon ] = useState(null)
    const [ concatArray, setconcatArray ] = useState(mainIcon_ARRAY.concat(icon_ARRAY))
    const windowSize = GetWindowSize();
    
  useEffect(()=>{
    if(concatArray)setIcon(concatArray.find((theIcon)=>theIcon.name==iconName))
  },[concatArray,setIcon,iconName])

  return (
  icon && <Image 
    src={icon.group ? `https://img.icons8.com${icon.group}${icon.size}${color ? color : icon.color}${icon.dataName}` : icon.src} 
    width='50' 
    height='50'     
    alt={icon.alt}
    style={{
        width: (windowSize<768 ? size : size*2)+'px',
        height: 'auto',        
    }}
    />
  )
}
