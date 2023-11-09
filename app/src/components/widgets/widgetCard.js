import React, { useState } from 'react'
import WidgetEntry from './widgetEntry.js'
import "./widgetCard.css"
import { IconContext } from 'react-icons'
import {FiChevronRight} from "react-icons/fi"
import MyApi from '../../api.js'

export default function WidgetCard({title,similar,featured,newRelease,type,setList,showSearch,handleKeyDown,goWhere}) {
    // console.log(similar,featured,newRelease)
  const [target,setTarget] = useState("");
  
   //handle the input data in box.
   const handleInputChange = (event) => {
    const { value } = event.target;
    setTarget(value);
    console.log(target)
  };
 
  return (
    <div className='widgetcard-body'>
        <div className='widget-top'>

             <p className='widget-title' onClick={()=>handleKeyDown(target,type)}>{title}</p>
             <input style={showSearch ? { display:"block" }:{ display:"none" }} type="text" placeholder={`Search ${type} Here...`} onChange={handleInputChange}></input>
        </div>
        {similar?
          similar.map((artist)=>{
            let img = artist.images == undefined ? artist.image : artist.images[2].url ;
            return (
                <WidgetEntry 
                title={artist?.name} 
                subtitle={artist?.followers + " Followers"} 
                image={img}
                artistID={artist?.id}
                goWhere={goWhere}
                target={artist}
                type={type}
                />
            )
          }
          
        ) 
        : featured ?
        featured.map((playlist)=>
            <WidgetEntry 
            title={playlist?.name} 
            subtitle={playlist?.tracks?.total + " Songs"} 
            image={playlist?.images[0]?.url}
            goWhere={goWhere}
            type={type}
            target={playlist.id}
            />
        ) 
        : newRelease ?
        newRelease.map((album)=>{
            let name = album.name;
            let target = album;
            if(album.album != undefined){
                album = album.album;
            }
            return (
                <WidgetEntry 
                title={name} 
                subtitle={album?.artists[0]?.name} 
                image={album?.images[2]?.url}
                goWhere={goWhere}
                type={type}
                target={target}
                />
            )
        } ) : null}
        {/* <div className='widget-fade'>
            <div className='fade-button'>
                <IconContext.Provider value={{size:"24px", color:"#c4d0e3"}}>
                    <FiChevronRight/>
                </IconContext.Provider>
            </div>
        </div> */}
    </div>
  )
}
