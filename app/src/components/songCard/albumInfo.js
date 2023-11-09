import React from 'react'
import "./albumInfo.css"

export default function AlbumInfo({album}) {
  const artists = [];

  // Loop through the artists array and add their names to the artists array
  album?.artists?.forEach((element)=>{
    artists.push(element.name);
  })

  return (
    <div className='albumInfo-card'>
        <div className='albumName-container'>
           <div className='marquee'>
             <p>{album?.name + " - " + artists?.join(", ")}</p>
            </div>
        </div>
        <div className='album-info'>
            <p>{`${album?.name} is an album by ${artists?.join(
              ","
            )}`}</p>
        </div>
        <div className='album-release'>
            <p>Release Date: {album?.release_date}</p>
        </div>
    </div>
  )
}
