import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import { wallysPictures_ARRAY } from '../../../DATEN/wallysPictures_ARRAY'
export default function ShowPictures() {
  
  return (
    <div className={styles.picturesContainer}>

{wallysPictures_ARRAY.map((picture,index)=>{
  return (<div key={'picture.name'+index}>
    <Image 
    src={'/'+picture.name} 
    width={picture.width} 
    height={picture.height} 
    alt={picture.describtion}
    style={{
      width: '10em',
      height: 'auto',
    }}/>
    </div>)
})}
    </div>
  )
}
