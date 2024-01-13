import React from 'react'
import Image from 'next/image'
import KontaktDaten from '../components/KontaktDaten'
import KontaktFormular from '../components/KontaktFormular/KontaktFormular'

export default function Kontakt() {
  return (
    <section>
        <h2>Kontakt</h2>
<KontaktFormular />    

<KontaktDaten />
        <br />
     </section>
  )
}
