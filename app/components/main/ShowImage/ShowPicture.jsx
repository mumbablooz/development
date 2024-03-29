import React from 'react'
import Image from 'next/image'

export default function ShowPicture({array,index}){

    return (<Image 
      src={'/'+array[index].name} 
      width={array[index].width} 
      height={array[index].height} 
      alt={array[index].describtion}
      style={{
        width: 'auto',
        height: '3em',
      }}/> )
        }
