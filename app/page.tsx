import WebApps from './components/WebApps'
export default function Home() {

  return (
    <main 
      className="flex min-h-screen flex-col items-center p-2"
      style={{
      width: '100vw'
    }}>

<h3>Meine Web Apps:</h3>
<WebApps />

    </main>
  )
}
