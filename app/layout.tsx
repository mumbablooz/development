import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import  Header  from './components/main/Header/Header'
import  Footer  from './components/Footer'

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
    <html lang="de">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
