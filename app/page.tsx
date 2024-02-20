import Image from 'next/image'
import WebApps from './components/WebApps/WebApps'

export default function Home() {

  return (
    <main 
      className="flex min-h-screen flex-col items-center p-2"
      style={{
      width: '100vw'
    }}>
        <div style={{
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
        </div>
<h3>Meine Web Apps:</h3>
<WebApps />

    </main>
  )
}
