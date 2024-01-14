import React from 'react'
import Link from 'next/link'
export default function PayPalButton(){
    return (<Link 
    href={'https://paypal.me/markbortey?country.x=DE&locale.x=de_DE'}
    className='greenButton'>
      über Paypal spenden
      </Link>)
  }
