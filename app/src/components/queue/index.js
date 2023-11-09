import React from 'react';
import "./queue.css"; // Importing the styles for the component

import {FaHeadphones, FaRegClock, FaHeart, FaRegHeart} from 'react-icons/fa'; // Importing the Font Awesome icons used in the component
import MyApi from '../../api'; // Importing the API module used to make API calls


// This is a functional component that receives the following props: tracks, setCurrentIndex, setTracks, listId
export default function Queue({tracks,setCurrentIndex,setTracks,listId}) {

  // This function toggles the favorite status of a track
  const changeFavorite = (track) => {
    const id = track.id;
    let value;
    tracks.forEach((song) => {
        if(song.track.id == id){
            value =  !song.track.favorite;
            song.track.favorite = value;
        }
    });
    setTracks([...tracks]);

    // Making a POST request to the API to change the favorite status of the track
    MyApi("POST", "playlists/favorite", {"filte":{"id":0, "track_id": id },"update":{"value":value}});   
   
    // If the track is being marked as a favorite, add it to the listId playlist
    if(value){
        MyApi("POST", "playlists/addItem", {"listId":0,"track":track}).then((res)=>{
          
        })
    }else{ // If the track is being marked as not favorite, remove it from the listId playlist
        MyApi("POST", "playlists/removeItem", {"listId":0,"trackId":id}).then((res)=>{
          
        }) 
    }
  };

  // This component renders a list of tracks in a queue
  return (
    <div className='queue-container'>
      <div className='queue'>
        <p className='upNext'>Up Next</p>
        <div className='queue-list'>
          {tracks?.map((track,index)=>{
             return(
            <div className='queue-items'> 
              <p className='track-name' onClick={()=>setCurrentIndex(index)}>{track?.track?.name}</p>

              <div className='play_favourite' onClick={()=>changeFavorite(track?.track)}>
              {
                // Render a filled heart icon if the track is a favorite, otherwise render an empty heart icon
                track?.track?.favorite ?(<i><FaHeart /></i>):(<i><FaRegHeart /></i>)
              }
              </div>
            </div>)

          })}
        </div>
      </div>
    </div>
  )
}

