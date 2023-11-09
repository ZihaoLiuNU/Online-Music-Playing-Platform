import React, { useState,useEffect } from 'react';
import './favorites.css';
import { Banner } from "./Banner";
import { AudioList } from "../../components/audioList";
import MyApi from "../../api.js";


export default function Favorites() {

  const [tracks,setTracks] = useState([]);
  const [total,setTotal] = useState(0);

  //index 0 as the default favorite play list
  useEffect(()=>{

    MyApi("POST", "playlists/findById", {"id": "0"}).then((res)=>{
      let init=[];
      res.items.map((item)=>{
        init.push(item.track);
      })
      setTracks(init)
      setTotal(init.length);
     })

},[]);

  return (
    <div className='screen-container'>
      <div className='favorite-body'>
        <Banner />
        <AudioList  songs={tracks} setTracks={setTracks} total={total} path={"favorite"}/>
      </div>
    </div>
  )
}
