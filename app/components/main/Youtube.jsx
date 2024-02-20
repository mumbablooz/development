import React from 'react'

export default function Youtube({videoId}) {
  return (
    <iframe 
    width="560" 
    height="315" 
    style={{
        width: '100%',
        height: 'auto'
    }}
    src={"https://www.youtube.com/embed/"+videoId} 
    title="YouTube video player" 
    frameBorder="0" 
   /* allow="accelerometer; autoPlay; clipboardWrite; encryptedMedia; gyroScope; pictureInPicture; webShare" */
    allowFullScreen></iframe>
  )
}
