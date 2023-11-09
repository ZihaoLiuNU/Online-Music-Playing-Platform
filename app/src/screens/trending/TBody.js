import React, { useState }from 'react'
import Trend from "./imgs/trending.jpg";
import {FaHeadphones, FaRegClock, FaHeart, FaRegHeart} from 'react-icons/fa'
import './trending.css';
import MyApi from '../../api';
import { msToMinSec } from '../../util';
import { useNavigate } from 'react-router-dom';

export function TBody({songs,setSongs}) {
    const changeFavorite = (track) => {
        const id = track.id;
        let value;
        console.log("change!!")
        songs.forEach((song) => {
            if(song.id == id){
                value =  !song.favorite
                song.favorite = value;
            }
        });
        
        const body = {
                        "filte":{
                                "id":0, "track_id": id 
                        },
                        "update":{
                            "value":value
                        }
           };

        MyApi("POST", "playlists/favorite", body).then((res)=>{
            setSongs([...songs]);
        })     
        if(value){
            delete track._id;
            MyApi("POST", "playlists/addItem", {"listId":0,"track":track});
        }else{ 
            MyApi("POST", "playlists/removeItem", {"listId":0,"trackId":id});
        }    
   };
   const navigate = useNavigate();
   const goProfile = (artist) => {
    navigate('/profile',{state:{"artist":artist}});
     }

     const playPlayList = (track,index) =>{
       
         MyApi("POST", "playlists/findCurList", {"trackId": track.id,"listId":1}).then((res)=>{

            navigate('/player',{state:{path:"trending",track:track,index:res["index"]}});
          })
       
     } 

  return (
    <div className='trendinglist'>
        <div className='intro'>
            <img src ={Trend} alt = "" className='trendImg' />
            <div className='details'>
                <h1 className='title'>Trending List</h1>
            </div>
        </div>

        <div className='songlist'>{
             songs?.map((song, index) =>(
                <div className='row' key = {song.id}>
                    <div className='detail'>
                        <div className='image'>
                            <img src={song?.album?.images[0]?.url} alt="" />
                        </div>
                        <div className='info'>
                            <div className='name' onClick={()=>playPlayList(song,index)}>{song?.name}</div>
                            <div className='spanAritist'  onClick={()=>goProfile(song?.artists[0])}>{song?.album?.artists[0]?.name}</div>
                        </div>
                    </div>
                    <div className='album'>{song?.album?.name}</div>
                    <div className='s_duration'><i><FaRegClock /></i>{msToMinSec(song?.duration_ms)}</div>
                    <div className='favourite' onClick = {() => changeFavorite(song)}>
                            {
                                song?.favorite ?(<i><FaHeart /></i>):(<i><FaRegHeart /></i>)
                            }
                    </div>
                    
                </div>
            ))
        }

        </div>
    </div>
  )
}
