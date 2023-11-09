import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyApi from "../../api.js";
import './showArtist.css';


export function ShowArtist({artists}) {

  const navigate = useNavigate();

  //navigate function, redirect page by artist   
  const goProfile = (artist) => {
    navigate('/profile',{state:{"artist":artist}});
  }

    return(
        <div className='showArtist'>
            {
                artists?.map((artist)=>
                //when click artistCard, The goProfile function is triggered, redirect page to /profile
                //singer img and singer name in artist card 
                <div className='artistCard' onClick={()=>goProfile(artist)}>
                    <img src={artist.image} alt=""></img>
                    <p className='name'><b>{artist.name}</b></p>
                    <div className='artist-fade'></div>
                </div>
                )
            } 
      </div>
    )
}