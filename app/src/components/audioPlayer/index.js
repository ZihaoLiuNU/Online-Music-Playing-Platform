import React, { useEffect, useRef, useState } from 'react'
import ProgressCircle from './progressCircle'
import "./audioPlayer.css"
import Controls from './controls';
import WaveAnimation from './waveAnimation';
import {msToMinSec} from "../../util"
import { useNavigate } from 'react-router';

export default function AudioPlayer({currentTrack, currentIndex,setCurrentIndex,total}) {


  // state variables to control the player
  const [isPlaying,setIsPlaying] = useState(false);
  const [trackProgress,setTrackProgress]  = useState(0);
  // reference to the audio player
  const audioRef = useRef(new Audio("/music/4iJyoBOLtHqaGxP12qzhQI.mp3"));
  // const ok = new Audio( `${process.env.PUBLIC_URL}/music/1.mp3`);
  // console.log(ok)
  let audioSrc;
  // let audioRef = useRef(new Audio(total[0]?.track?.preview_url));
  if(total){
    audioSrc = total[currentIndex]?.track?.preview_url;
  }
 
  // reference to the timer interval
  const intervalRef = useRef();
  // reference to check if the audio is ready
  const isReady = useRef(false);
  // calculate the current percentage of the track that has been played
  const { duration }  = audioRef.current;
  const currentPercentage = duration ? (trackProgress/duration)*100:0; 


  // handle play/pause
  useEffect(()=>{
    if(audioRef.current.src){ //is playing and pause
      if(isPlaying){
        audioRef.current.play();
        //start timer
        startTimer();
      }else{
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    } else{   //new song to play
      if(isPlaying){
        audioRef.current = new Audio(audioSrc);
        audioRef.current.play();
        //start timer
        startTimer();
      }else{
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
    
  },[isPlaying]);
  // handle changing to a new track
  useEffect(()=>{
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);
    
    if(isReady.current){
       audioRef.current.play();
       setIsPlaying(true);
       startTimer();
    }else{
      isReady.current = true;
    }
  },[currentIndex]);
  // cleanup when the component is unmounted
  useEffect(()=>{
    return ()=>{
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    }
  },[]);
  
  // timer to update the progress bar
 const startTimer = ()=>{
  clearInterval(intervalRef.current);

  intervalRef.current = setInterval(()=>{
    if(audioRef.current.ended){
      handleNext();
    }else{
      setTrackProgress(audioRef.current.currentTime);
    }
  },[1000])

}
// handle going to the next track in the list
  const handleNext = ()=>{
    if(currentIndex<total.length-1){
        setCurrentIndex(currentIndex+1);
    }else{
      setCurrentIndex(0);
    }
  }
// handle going to the previous track in the list
  const handlePrev = ()=>{
    if(currentIndex -1 < 0){
        setCurrentIndex(total.length-1);
    }else{
        setCurrentIndex(currentIndex-1);
    }
  }
// function to add a leading zero to a number if it's a single digit
  const addZero=(n)=>{
    return n>9 ? ""+n: "0"+n;
  }
// extract the artist names from the track object
  const artists = [];
  currentTrack?.album?.artists.forEach((artist)=>{
    artists.push(artist.name);
  })
  // navigate to the artist's profile page
  const navigate = useNavigate();

  const goProfile = (artist) => {
    console.log("aaaaa")
    navigate('/profile',{state:{"artist":artist}});
  }
// render the component UI
  return (
    <div className='player-body'>
        <div className='player-left-body'>
          <ProgressCircle
              percentage={currentPercentage}
              isPlaying={true}
              image={currentTrack?.album?.images[0]?.url}
              size={435}
              color="#C96850"
          />
        </div>
        <div className='player-right-body'>
          <p className='song-title' >{currentTrack?.name}</p>
          <p className='song-artist' onClick={()=>goProfile(currentTrack?.album?.artists[0])}>{artists.join(" | ")}</p>
          <div className='player-right-bottom'>
            <div className='song-duration'>
              
              <p className='duration'>
              {(Math.round(trackProgress) - (Math.round(trackProgress) % 60)) / 60}
                :
              {addZero(Math.round(trackProgress) % 60)}
              </p> 

               <WaveAnimation isPlaying={isPlaying}/>
              <p className='duration'>{msToMinSec(currentTrack?.duration_ms)}</p>
            </div>
            <Controls 
              isPlaying={isPlaying}
              setIsPlaying = {setIsPlaying}
              handleNext = {handleNext}
              handlePrev = {handlePrev}
              total = {total}
            />
          </div>
        </div>
    </div>
  )
}
