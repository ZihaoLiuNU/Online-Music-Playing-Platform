import React, { useEffect, useState } from 'react';
import { Banner } from "./Banner";
import { PAudioList } from "../../components/pAudioList";
import { ArtistAlbum } from './ArtistAlbum';
import { FaUsers } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'
import './artist.css';
import MyApi from "../../api.js";

export function Profile() {
  //function defination setTracks, setAlbums, setCurArtist, setShowAlbums
  const location = useLocation();
  const [tracks,setTracks] = useState([]);
  const [albums,setAlbums] = useState([]);
  const [curArtist,setCurArtist] = useState({});
  const [showAlbums, setShowAlbums] = useState(false);

  //getTracks by artist.id
  //Pass the specified artist information into CurArtist
  useEffect(()=>{
          if(location.state){
                const artist = location.state.artist;
                setCurArtist(artist);
                getTracks(artist.id);
          }
    },[])

//judge albums or songs, turn to different page
const handleMenuClick = (view) => {
    if (view === 'albums') {
      setShowAlbums(true);
    } else {
      getTracks(curArtist.id);
      setShowAlbums(false);
    }
  };

//Rest API POST, information about the artist's albums or songs write in
  function getTracks(id){
  MyApi("POST", "tracks/findByArt", {"id":id})
                .then((res)=>{
                  if(albums.length == 0){
                      let album = [];
                      res.map(item=>{
                      album.push(item.album);
                    })
                    const uniqueAlbums = album.filter((album, index, array) => {
                      return index === array.findIndex((a) => a.id === album.id);
                    });
                    setAlbums(uniqueAlbums);
                  }
                  setTracks(res);
                
      })
}
//artist-body: Banner imported, menulist-albums/songs,showAlbums/PAudioList
//change when click different button
//showAlbums properties: albums, total, setShowAlbums, setTracks
//PAudioList properties: songs, total, setTracks path

  return (
    <div className='screen-container'>
      <div className='artist-body'>
        <Banner artist={curArtist} tracks={tracks}/>
        <div className='menuList'>
          <ul>
            <li onClick={() => handleMenuClick('albums')}><a href="#">Albums</a></li>
            <li onClick={() => handleMenuClick('songs')}><a href="#">Songs</a></li>
          </ul>
          <p>
            <i>
              <FaUsers />
            </i>
          {curArtist.followers}<span>Followers</span>
          </p>
        </div>
        {showAlbums ? <ArtistAlbum albums={albums} total = {albums.length} setShowAlbums={setShowAlbums} setTracks={setTracks}/> : <PAudioList songs={tracks} total={tracks.length} setTracks={setTracks} path={"profile"}/>}
      </div>
    </div>
  )
}