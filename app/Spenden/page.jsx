import React from 'react'

import PayPalButton from '../components/spenden/PaypalSpendenButton'
import KontaktButton from '../components/KontaktButton'
import Image from 'next/image'
import PageHeader from '../components/main/PageHeader'

export default function Spenden() {

  return (
    <section>
<PageHeader pageName={'Meine Projekte unterstützen'} iconName={'spenden'} color={'/ffffff'}/>
      <br />
<PayPalButton />
<br />
<KontaktButton />
<br />
<p>Liebe Unterstützer,
</p>
<br />
<p>
Ich bin Blooz, ein leidenschaftlicher Webentwickler und Musiker. Ich habe einige spannende Webprojekte begonnen, die ich gerne weiterführen und ausbauen möchte. Um dies zu erreichen, benötige ich Ihre Unterstützung.
</p>
<br />
<p>
Eines meiner Projekte ist eine WebApp, die aus meiner Erfahrung als Musiker und Musikpädagoge entstanden ist. Diese App soll ein wertvolles Werkzeug für PädagogInnen, Musik-Dozenten, ErzieherInnen, Eltern und Kinder werden. Sie zielt darauf ab, die in jedem von uns schlummernden musikalischen Fähigkeiten zu wecken und zu fördern. 
</p>
<br />
<p>
Leider fehlen mir die Zeit und das Budget, um dieses umfangreiche Projekt alleine zu stemmen. Deshalb bitte ich Sie um Ihre Unterstützung. Mit Ihrer Hilfe kann ich diese App zum Leben erwecken und einen positiven Einfluss auf die musikalische Bildung vieler Menschen haben.
</p>
<br />
<p>
Die Entwicklung einer WebApp erfordert nicht nur Zeit und Know-how, sondern auch finanzielle Ressourcen. Es gibt viele Tools und Services, die ich zur Erstellung meiner Apps benötige. Einige davon sind kostenlos, aber viele erfordern eine Bezahlung. Darüber hinaus gibt es rechtliche Anforderungen, die ohne die Bezahlung eines Anwalts nicht erfüllt werden können.
</p>
<br />
<Image src={'https://cdn.pixabay.com/photo/2015/06/23/09/13/music-818459_1280.jpg'} width={1280} height={853} alt='music-818459_1280'
style={{
  maxWidth: '500px',
  height: 'auto'
}}/>
<p>
Ihre Spende würde dazu beitragen, dass ich die notwendigen Tools und Services bezahlen kann, um meine Apps zum Laufen zu bringen. Jeder Beitrag, egal wie klein, würde einen großen Unterschied machen.
</p>
<br />
<p>
Bitte unterstützen Sie mich bei dieser wichtigen Arbeit. Jede Spende hilft!
</p>
<br />
<p>
Vielen Dank für Ihre Großzügigkeit und Unterstützung.
</p>
<br />
<p>
Mit freundlichen Grüßen,
Blooz</p>
<br />
<PayPalButton />
<br />
<KontaktButton />
    </section>
  )
}
