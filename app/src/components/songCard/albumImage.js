import React from 'react'
import "./albumImage.css"

export default function AlbumImage({url}) {

  return (
    // Album Image component with shadow effect
    <div className='albumImage'>  
       <img src={url} alt='album art' className='alblumImage-art'/>
       <div className='albumImage-shadow'>
            <img src={url} alt='shadow' className='alblumImage-shadow'/>
        </div>
    </div>
  )
}
