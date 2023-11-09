import React, { useEffect, useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import MyApi from "../../api.js";
import { ArtistBanner } from "./artistBanner";
import { ShowArtist } from "./showArtist.js";
import { SearchBar } from '../../components/searchBar';

export default function Artist() {

//setArtists defination, used in search-bar to search artist by name
  const [artists,setArtists] = useState([]);

//Rest API GET function, get artists information map, push every items into init 
//init -> setArtists()

useEffect(()=>{
      MyApi("GET", "artists", {}).then((res)=>{
          let init=[];
          res.map((item)=>{
            init.push(item);
          })
          setArtists(init)
      })
  },[]);

//artist main page, including ArtistBanner, SearchbBar, ShowArtist
//import ArtistBanner, SearchbBar, ShowArtist components
  return( 
  <div className='screen-container'>
    <div className='artist-main-body'>
      <ArtistBanner />
      <div className='searchbar'>
        <SearchBar type="artists" setList={setArtists} />
      </div>
      <ShowArtist artists={artists} />
    </div> 
  </div>
  )
}
