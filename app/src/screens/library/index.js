import React, { useEffect,useState} from 'react'
import apiClient from '../../spotify';
import "./library.css"
import { IconContext } from 'react-icons';
import { AiFillPlayCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import AddPlayList from './addPlayList';
import Modal from '../../components/modal';
import MyApi from '../../api';

export default function Library({showModal, showProp, setShowModal}) {
const [playlists,setPlaylists] = useState(null);


 useEffect(()=>{
    let playList = [];
    //fetch data from spotify api
    try{
      apiClient.get("me/playlists").then(function(response){
        response.data.items.map((e)=>{
          playList.push(e);
        }) 
        getLocalPlayList(playList)
      });
    }catch(e){
      //if don't login, fetch data from local
      console.log("don't login yet")
      getLocalPlayList(playList);
    }  
 },[]);

 
  //fetch data from local api
 const getLocalPlayList=(playList)=>{
   MyApi("GET", "playlists/getPlayList", {}).then((res)=>{
    res.map((e)=>{
      playList.push(e);
    })
     setPlaylists(playList);
   })
 }
const navigate = useNavigate();

const playPlayList = (id) =>{
  navigate('/player',{state:{id:id}});
}

  return (
    <div className='screen-container'>
      <div className='library-body'>
        <Modal show={showModal} prop={showProp} setShowModal={setShowModal} playlists={playlists} setPlaylists={setPlaylists}/>
        {playlists?.map((playlist)=> {
            let total = playlist.tracks == undefined ? playlist.items.length :playlist.tracks.total ;
            
         return (
            <div className='playlist-card' key={playlist.id} onClick={()=>playPlayList(playlist.id)}>
              <img 
              src={playlist.images[0]?.url}
              className='playlist-image'
              alt='Playlist-Art'
              />
              <p className='playlist-title'>{playlist.name}</p>
              <p className='playlist-subtitle'>{total} Songs</p>
              <div className='playlist-fade'>
                  <div className='play-icon'>
                    <IconContext.Provider value={{ size:"50px",color:"#7bb0d3"}}>
                      <AiFillPlayCircle/>
                    </IconContext.Provider>
                  </div>
              </div>
            </div>
            )
        })}
        <AddPlayList setShowModal={setShowModal}/>
      </div>
    </div>
  )
}
