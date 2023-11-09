import React from 'react';
import artist_2 from "./imgs/artist_2.jpg";
import './artistBanner.css';

//Artist main page banner
//import artist_2 pic
export function ArtistBanner() {
    return(
    <div className='banner'>
        <img src ={artist_2} alt = "" className='bannerimg' />
    </div>
    )
}