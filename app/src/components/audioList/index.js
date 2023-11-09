import React, { useState }from 'react'
import {FaHeadphones, FaRegClock, FaHeart, FaRegHeart} from 'react-icons/fa'
import "./audioList.css"
import { useNavigate } from 'react-router-dom';
import {msToMinSec} from "../../util"

import MyApi from "../../api";

// Defining the functional component AudioList
export function AudioList({songs,setTracks,total,path}) {

    // Toggle favorite/unfavorite of a track
    const changeFavorite = (track) => {
        const id = track.id;
        let value;
        // Looping through all tracks to update the favorite status of the selected track
        songs.forEach((song) => {
            if(song.id == id){
                value =  !song.favorite
                song.favorite = value;
            }
        });
        
        // Building request body to update the favorite status of the track in the backend
        const body = {
                        "filte":{
                                "id":0, "track_id": id 
                        },
                        "update":{
                            "value":value
                        }
                    };
        
        // Making API call to update the favorite status of the track in the backend
        MyApi("POST", "playlists/favorite", body).then((res)=>{
            setTracks([...songs]);
         })      

        // If track is made favorite, add it to favorite list
        if(value){
            MyApi("POST", "playlists/addItem", {"listId":0,"track":track}).then((res)=>{
                
            })
        }else{ // remove from favorite list
            MyApi("POST", "playlists/removeItem", {"listId":0,"trackId":id}).then((res)=>{
                
            }) 
        }
   };

    // Setting up react-router navigation hook
    const navigate = useNavigate();
   
    // Navigate to artist profile page
    const goProfile = (artist) => {
        navigate('/profile',{state:{"artist":artist}});
    }

    // Play selected playlist
    const playPlayList = (track,index) =>{
       if(path == "profile"){
        MyApi("POST", "playlists/findCurList", {"trackId": track.id,"listId":1}).then((res)=>{
           
                navigate('/player',{state:{path:path,track:track,index:res["index"]}});
           })
       } 
       navigate('/player',{state:{path:path,track:track,index:index}});
    }
    // Rendering the audio list component
  return(
    <div className='audioList'>
    <h2 className='title'>
        The List <span>{`${total} songs`}</span>
    </h2>

    <div className='songContainer'>
        {
            songs?.map((song, index) =>(
            <div className='songs'key = {song.id}>
                {/* <div className='count'>{`${index + 1}`}</div> */}
                <div className='song'>
                <div className='imgBox'>
                    <img src={song?.album?.images[0]?.url} alt="" />
                </div>

                <div className='section'>
                    <p className='songName' >
                        <span onClick={()=>playPlayList(song,index)}>{song?.name}</span>
                        {/* <span className='spanAritist'  onClick={()=>goProfile(song?.artists[0])}>{song?.album?.artists[0]?.name}</span> */}
                    </p>

                    <div className='spanAritist'  onClick={()=>goProfile(song?.artists[0])}>{song?.album?.artists[0]?.name}</div>

                    <div className='albums'>
                        <div className='album'>
                            {song?.album?.name}
                        </div>

                        <div className='s_duration'>
                            <i><FaRegClock /></i>{msToMinSec(song?.duration_ms)}
                        </div>

                        <div className='favourite' onClick = {()=>changeFavorite(song)}>
                            {
                                song?.favorite ?
                                (<i>
                                    <FaHeart />
                                </i>)
                                :
                                (<i>
                                    <FaRegHeart />
                                </i>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ))}    
    </div>
  </div>
  );
}
