import React, { useState }from 'react'
import {FaHeadphones, FaRegClock, FaHeart, FaRegHeart} from 'react-icons/fa'
import "./pAudioList.css"
import { useNavigate } from 'react-router-dom';
import {msToMinSec,changeFavorite} from "../../util"

import MyApi from "../../api";
export function PAudioList({songs,setTracks,total,path}) {
    // change the favorite of a track
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
            delete track._id;
            MyApi("POST", "playlists/addItem", {"listId":0,"track":track});
        }else{ 
            MyApi("POST", "playlists/removeItem", {"listId":0,"trackId":id});
        }   
   };

    // Setting up react-router navigation hook
    const navigate = useNavigate();
   
    // Navigate to artist profile page
    const goProfile = (artist) => {

        navigate('/profile',{state:{"artist":artist}});
    }

    // Play selected playlist
    const playPlayList = (track) =>{
        if(path == "profile"){
         MyApi("POST", "playlists/findCurList", {"trackId": track.id,"listId":1}).then((res)=>{
             navigate('/player',{state:{path:path,track:track,index:res["index"]}});

                 })
        } 
      
     }
    // Rendering the audio list component
  return(
    <div className='paudioList'>
    <h2 className='ptitle'>
        The List 
        <span>{`${total} songs`}</span>
    </h2>

    <div className='psongContainer'>
        {
            songs?.map((song, index) =>(
            <div className='psongs'key = {song.id}>
                {/* <div className='pcount'>{`${index + 1}`}</div> */}
                <div className='psong'>
                <div className='pimgBox'>
                    <img src={song?.album?.images[0]?.url} alt="" />
                </div>

                <div className='psection'>
                    <div className='psongName' >
                        <div onClick={()=>playPlayList(song,index)}>{song?.name}</div>
                    </div>

                    <div className='pspanAritist'  onClick={()=>goProfile(song?.artists[0])}>{song?.album?.artists[0]?.name}</div>

                    <div className='palbums'>
                        <div className='palbum'>
                            {song?.album?.name}
                        </div>

                        <div className='ps_duration'>
                            <i><FaRegClock /></i>{msToMinSec(song?.duration_ms)}
                        </div>

                        <div className='pfavourite' onClick = {()=>changeFavorite(song)}>
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
