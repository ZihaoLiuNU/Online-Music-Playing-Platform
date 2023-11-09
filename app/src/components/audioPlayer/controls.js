import React from 'react'
import "./controls.css"
import { IconContext } from 'react-icons';
import {FaPause} from "react-icons/fa";
import { IoPlaySkipBack, IoPlay, IoPlaySkipForward } from 'react-icons/io5';

// Define controls component that receives props: isPlaying, setIsPlaying, handleNext, handlePrev
export default function Controls({isPlaying,setIsPlaying,handleNext,handlePrev}) {
  return (
    <IconContext.Provider value={{size:"35px",color:"#C4D8E3"}}>
        <div className='controls-wrapper'>
            <div className='action-btn' onClick={handlePrev}>
                <IoPlaySkipBack/>
            </div>
            <div className='play-pause-btn' onClick={()=>setIsPlaying(!isPlaying)}>
               { isPlaying ? <FaPause/> : <IoPlay/>}
            </div>
            <div className='action-btn' onClick={handleNext}>
                <IoPlaySkipForward/>
            </div>
        </div>
    </IconContext.Provider>
  )
}
