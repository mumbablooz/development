import React from 'react'
import Link from 'next/link'

export default function PayPalButton(){

    return (<Link 
    href={'https://paypal.me/markbortey?country.x=DE&locale.x=de_DE'}
    className='greenButton'
    style={{display: 'flex'}}>
      <p style={{
        marginRight: '0.5em'
      }}>über Paypal spenden</p>
      <img 
      width="48" 
      height="48" 
      src="https://img.icons8.com/fluency/48/paypal.png" 
      alt="paypal"/>  
      </Link>)
  }
