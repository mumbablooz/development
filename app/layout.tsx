import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'

import './globals.css'
import {bildLinksArray} from './bildLinks'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blooz Development',
  description: 'WebApp Entwicklung mit Javascript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}
      style={{
        padding: '0.4rem'
      }}>
        <header style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          borderBottom: '0.1rem solid white',
          paddingBottom: '1rem',
        }}>
        <h1>Blooz Development</h1>
        <Image 
        src={'/bloozLogo.jpg'}
        width={900}
        height={900}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          margin: '0.5rem'
        }}
        alt={'Avatar Blooz Logo'}/>
 <Image 
        src={'/AI_Generated_Image_2023-12-26_441272743032201.png'}
        width={1024}
        height={1024}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          margin: '0.5rem'
        }}
        alt={'Entwickler beim programieren'}/>
        <p>{'<'}Meine Webanwendung, programmiert mit Javascript{'/>'}</p>
        </header>

        {children}
        </body>
    </html>
  )
}
