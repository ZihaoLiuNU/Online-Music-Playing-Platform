import React from 'react';
import "./album.css";
import MyApi from "../../api";// Importing MyApi from the api file located in the parent folder
import { FcHeadset,FcInternal, FcDatabase } from "react-icons/fc";// Importing FcHeadset, FcInternal, and FcDatabase icons from react-icons library
import { IconContext } from 'react-icons';// Importing IconContext from react-icons library

export function ArtistAlbum({albums,setShowAlbums,total,setTracks}) {
// Defining a functional component named ArtistAlbum with props
// Defining a function named showTracks that fetches tracks from the backend using MyApi, 
// sets the fetched tracks to setTracks state and shows the tracks component by setting 
// setShowAlbums to false

  const showTracks = (id) =>{
    MyApi("POST", "tracks/findByAlbum", {"id":id})
                .then((res)=>{
                  setTracks(res);
                  setShowAlbums(false);
     })
  }
  // Mapping through the albums array and rendering album cards for each album
  /* On clicking an album card, showTracks function is called with album id */
  return (
    <div className='albums'>
    {
      albums?.map((album)=>
        <div className='album-card' onClick={()=>showTracks(album.id)}>
          <img
            src={album.images[0].url}
            className='album-image'
            alt='album-Art'
          />
          <div className='albuminfo'>
            <div className='leftinfo'>
              <p className='album-title'>{album.name}</p>
              <p className='album-subtitle'>{`${total} songs`}</p>
            </div>
            <i className='rightinfo'>
              <FcDatabase />
            </i>
          </div>
          <div className='album-fade'>
              <div className='play-icon'>
                <IconContext.Provider value={{ size:"50px",color:"rgba(233, 107, 147, 0.8)"}}>
                </IconContext.Provider>
              </div>
          </div>
        </div>
      )
    } 
    </div>
  )
    
  ;
}
