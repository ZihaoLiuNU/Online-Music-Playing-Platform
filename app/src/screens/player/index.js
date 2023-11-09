import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import  apiClient  from '../../spotify';
import MyApi from "../../api.js";
import SongCard from '../../components/songCard';
import Queue from '../../components/queue';
import "./player.css"
import AudioPlayer from '../../components/audioPlayer';
import Widgets from '../../components/widgets';
export default function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);//当前歌单下的所有歌曲，只有这里涉及到歌单。
  const [currentTrack, setCurrentTrack] = useState({});//当前播放歌曲
  const [currentIndex, setCurrentIndex] = useState(0);//当前播放歌曲的序号。
  const [listId, setListId] = useState(-1);

  useEffect(()=>{
      if(location.state){
        if(location.state.path === "favorite"){
          console.log("123");
          MyApi("POST", "playlists/findById", {"id": 0}).then((res)=>{
               setListId(0);
               setTracks(res?.items);
               setCurrentTrack(res?.items[0]?.track);
               setCurrentIndex(location.state.index);
          })
        }else if(location.state.path === "profile" || location.state.path === "trending" ){
          const track = location.state.track;
          const index = location.state.index;
          console.log(index,"index");
          const trackId = track?.id;
          setListId(1);
              MyApi("POST", "playlists/find", {"id": 1}).then((res)=>{
                setTracks(res[0]?.items);
                setCurrentTrack(res[0]?.items[index]?.track);
                setCurrentIndex(index);
          })
        }else if(location.state.path === "profile_list"){

           MyApi("POST", "playlists/find", {"id": 1}).then((res)=>{
            setListId(1);
            setTracks(res[0]?.items);
            setCurrentTrack(res[0]?.items[0]?.track);
            setCurrentIndex(0);
           })

        }else{
          let id = location.state?.id;
          MyApi("POST", "playlists/findById", {"id": id}).then((res)=>{
            if(res != null){
              console.log(res);
              setTracks(res.items);
              setListId(res.id);
              setCurrentIndex(0);
              setCurrentTrack(res.items[0]?.track); 
            }else{
              apiClient
              .get("playlists/" +id  + "/tracks")
              .then((res)=>{
                console.log(res.data,"total");//当前歌单。
                console.log(res.data.items,"items")
                let items = res.data.items;
                setTracks(items);
                setCurrentTrack(res.data.items[0].track);
              }) 
            }
          })  
        }
      }else {
          MyApi("POST", "playlists/find", {"id": 1}).then((res)=>{
            setListId(1);
            setTracks(res[0]?.items);
            setCurrentTrack(res[0]?.items[0]?.track);
            setCurrentIndex(0);
           })
      }
           
  },[]);

  useEffect(()=>{
    if(tracks)
     setCurrentTrack(tracks[currentIndex]?.track);
  },[currentIndex,tracks])



  return (
    <div className='player-screen-container'>
      <div className='left-player-body'>
        <AudioPlayer currentTrack={currentTrack} total={tracks} currentIndex={currentIndex}  setCurrentIndex={setCurrentIndex}/>
        <Widgets artistID={currentTrack?.album?.artists[0]?.id} listId={listId} setTracks={setTracks} setCurrentTrack={setCurrentTrack} setCurrentIndex = {setCurrentIndex}/>
      </div>
      <div className='right-player-body'>
        <SongCard album={currentTrack?.album}/>
        <Queue tracks={tracks} setTracks={setTracks} listId={listId} setCurrentIndex = {setCurrentIndex}/>
      </div>
    </div>
  )
}
