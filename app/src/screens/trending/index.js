import React, { useEffect, useState } from 'react'
import './trending.css';
import { TBody } from "./TBody";
import { SearchBar } from '../../components/searchBar';
import MyApi from '../../api';

export default function Trending() {
  const [tracks,setTracks] = useState([]);
  useEffect(()=>{

    MyApi("GET", "tracks", {}).then((res)=>{
      setTracks(res)
    })

},[]);
  return (
    <div className='screen-container'>
      <div className='trending-body'>
        <SearchBar type="tracks" setList={setTracks} />
        <div className='body_contents'>
          <TBody songs={tracks} setSongs={setTracks}/>
        </div>
      </div>


    </div>
  )
}
