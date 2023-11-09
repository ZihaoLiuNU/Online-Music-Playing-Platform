import React, { useEffect, useState } from 'react'
import apiClient from '../../spotify';
import WidgetCard from './widgetCard';
import "./widgets.css"
import MyApi from '../../api';
import { useNavigate } from 'react-router-dom';

export default function Widgets({artistID,listId,setCurrentIndex,setCurrentTrack,setTracks}) {
    const [similar,setSimilar] = useState([]);
    const [featured,setFeatured] = useState([]);
    const [newRelease,setNewRelease] = useState([]);

    useEffect(()=>{
        if(artistID){
            // Get similar artists
            MyApi("GET", `artists`, {}).then((res)=>{
                res = shuffleArray(res);
                const a = res?.slice(0,3);
                setSimilar(a);
            })   
            // Get new releases
            MyApi("GET", `tracks`, {}).then((res)=>{
                res = shuffleArray(res);
                const a = res?.slice(0,3);
                setNewRelease(a);
            })   
            // Get featured playlists
            apiClient.get(`/browse/featured-playlists`)
            .then((res)=>{
                const a = res.data?.playlists.items.slice(0,3);
                setFeatured(a);
            })
            .catch(err=>console.log(err))
        }
    },[artistID])

    const handleKeyDown = (target,type) => {
        if(type == "artists"){
            // Search for similar artists
            MyApi("POST", `${type}/findByName`, {"key":target}).then((res)=>{
                res = shuffleArray(res);
                const a = res?.slice(0,3);
                setSimilar(a);
            })   
        }else if(type== "tracks"){
            // Search for new releases
            MyApi("POST", `${type}/findByName`, {"key":target}).then((res)=>{
                res = shuffleArray(res);
                const a = res?.slice(0,3);
                setNewRelease(a);
            })   
        }   
   };

   // Shuffle the array
   function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
   }

   const navigate = useNavigate();

   const goWhere = (target,type) => {
       if(type == "artists"){
            // Navigate to the artist's profile page
            navigate('/profile',{state:{"artist":target}});
       }else if(type == "tracks"){
            // Navigate to the selected track in the current playlist
            if(listId == 0) listId = 1;
            MyApi("POST", "playlists/findCurList", {"listId": listId,"trackId": target.id}).then((res)=>{
                 console.log(res);
                 const index = res["index"];
                 setTracks(res["playList"]?.items);
                 setCurrentIndex(index);
                 setCurrentTrack(res["playList"]?.items[index]?.track);
            })
       }else if(type == "lists"){
            // Navigate to the selected playlist
            apiClient.get("playlists/" + target + "/tracks").then((res)=>{
                let items = res.data.items;
                setTracks(items);
                setCurrentIndex(0);
                setCurrentTrack(res.data.items[0].track);
            }) 
       }
  };

  return (
    <div className='widgets-body'>
        <WidgetCard title="Feeling More" similar={similar} handleKeyDown={handleKeyDown} goWhere={goWhere} type={"artists"}  showSearch={true}/>
        <WidgetCard title="Sweet Cake" newRelease={newRelease}  handleKeyDown={handleKeyDown} goWhere={goWhere} type={"tracks"} showSearch={true}/>
        <WidgetCard title="Made For You" featured={featured} goWhere={goWhere} handleKeyDown={handleKeyDown} type={"lists"} showSearch={false}/>
    </div>
  )
}
