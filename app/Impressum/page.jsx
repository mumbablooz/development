import React from 'react'
import KontaktDaten from '../components/dateParts/KontaktDaten'
import Image from 'next/image'
import Link from 'next/link'

export default function Impressum() {
  return (
    <section>

        <h2>Impressum</h2>
        <br />

        <KontaktDaten />
<br />
<Link href={'/Datenschutz'}><h3>Datenschutzerklärung</h3></Link>
<Link href={'/ExterneInhalte'}><h3>Externe Inhalte</h3></Link>
    </section>)
}
