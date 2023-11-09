import React from 'react';
import Jazz from "./imgs/jazz.jpg";
import {FaEllipsisH, FaHeadphonesm, FaCheck, FaHeadphones} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

export function Banner() {
    const navigate = useNavigate();

  
    const playFavorite = ()=>{
        navigate('/player',{state:{id:0,path:"favorite",index:0}});
    }
  return (
    <div className='banner'>
        <img src ={Jazz} alt = "" className='bannerImg_1' />

        <div className='content'>
            <div className='breadCrump'>
                <p>
                    <span>My Favorites</span>
                </p>
                <i>
                    <FaEllipsisH></FaEllipsisH>
                </i>
            </div>

            <div className='info'>
                <div className='left'>
                    <div className='name'>
                        <h2>My Favorites</h2>
                    </div>
                </div>
                <div className='right' onClick={()=>playFavorite()}>
                    <a href='#'>Play</a>
                </div>
            </div>
        </div>
        <div className='bottomLayer'></div>
    </div>
  )
}
