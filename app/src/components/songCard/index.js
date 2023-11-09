import React from 'react'
import AlbumImage from './albumImage'
import AlbumInfo from './albumInfo'
import"./songCard.css"
/**
 * A component that displays an album's cover art, album name, artists, and release date.
 * @param {Object} album - The album object containing album details, such as name, artists, and images.
 * @returns {JSX.Element} - A JSX element containing album cover art, album name, artists, and release date.
 */
export default function SongCard({album}) {
 
  return (
    <div className='songCard-body'> 
        <AlbumImage url={album?.images[0].url}></AlbumImage>
        <AlbumInfo album={album}></AlbumInfo>
    </div>
  )
}
