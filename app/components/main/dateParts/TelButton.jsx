'use client'
import React from 'react'

import styles from './styles.module.css'
import ShowIcon from '../ShowIcon/ShowIcon'
import { GetWindowSize } from '../GetWindowSize'

export default function TelButton({text,color}) {

const windowSize = GetWindowSize()
 const telefonName = process.env.NEXT_PUBLIC_CONTACT_TEL_NAME
 const telefonTitel = process.env.NEXT_PUBLIC_CONTACT_TEL_TITEL

  return (
  <a href={'tel:'+telefonName}>
  <li className={'button '+styles.TelButton} style={{marginRight: '0.4rem',height: '100%'}}>
<ShowIcon iconName={'tel'} size={'25'} />

    {text && <p style={{
      color: color,
      marginLeft: '0.2rem',
      fontSize: windowSize.width<768 && '1.2rem'
  }}>{telefonTitel}</p>}
    </li></a>
  )
}
