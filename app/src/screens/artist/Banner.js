import React from 'react';// Import the React library
import Artist from './imgs/artist.jpg';// Import the artist image file
import Check from "./imgs/check.png";// Import the check icon image file
import './artist.css';
import {FaEllipsisH, FaCheck, FaHeadphones} from 'react-icons/fa'
import { useNavigate } from 'react-router';// Import the useNavigate hook from react-router


// Create a functional component called Banner that takes in a prop called artist
export function Banner({artist}) {
    // Create a navigate constant using the useNavigate hook from react-router
    const navigate = useNavigate();
   
    // Create a function called playList
    // Use the navigate function to go to the '/player' page with a state object that includes the 'path' and 'artist_id' values
     const playList = ()=>{
        navigate('/player',{state:{path:"profile_list","artist_id":artist.id}});
     }


    let img = artist.images == undefined ? artist.image : artist.images[2].url ;

  return(
    // Create a div with a class of banner
    // Create a span with the artist's name
    // in middle : Create an image with a source of the img variable and a class of iden
    // Create an h3 with the artist's name
    // in right: Create a link with a class of playbutton and an onclick event that calls the playList function
    //If the artist's isFollowed property is true
    // Create a link with a class of followed and an icon
  <div className='banner'>
    <img src={Artist} alt="" className='bannerImg'></img>

    <div className='content'>
        <div className='breadCrump'>
            <p>
                <span>{artist.name}</span>
            </p>
            <i>
                <FaEllipsisH></FaEllipsisH>
            </i>
        </div>
        <div className='artist'>
            <div className='left'>
                <p>
                    <i>
                        <FaHeadphones />
                    </i>
                        109,000 <span>Weekly listeners</span>
                </p>
            </div>
            <div className='middle'>
                <img src={img} alt = "" className='iden' ></img>
                <div className='name'>      
                    <h3>{artist.name}</h3>
                    <img src={Check} alt = "" className='check'></img>
                </div>
            </div>
            <div className='right'>
                <a classname = "playbutton" href='#'  onClick = {()=>playList()} >Play</a>

                <div className='follow'>
                            {
                                artist?.isFollowed ?
                                (<a href='#' className='followed'><i><FaCheck /></i>Followed</a>):
                                (<a href='#' className='unfollowed'><i><FaCheck  /></i>Following</a>)
                            }
                </div>

            </div>
        </div>
    </div>
</div>
  );
}
