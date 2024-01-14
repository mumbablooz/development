
export function fetchWebApps(setWebApps){

    fetch('https://api-gamma-topaz.vercel.app/webapps.json')
    .then(res =>res.json())
    .then(data=> {
        setWebApps(data.webapps)
    })

  }