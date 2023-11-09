import React,{useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Library from "../library/index"
import Artist from '../artist/index';
import Trending from '../trending/index';
import Player from '../player/index';
import Favorites from '../favorites/index';
import './home.css'
import SideBar from '../../components/sidebar/index';
import Login from '../auth/login';
import { setClientToken } from '../../spotify';

import { Profile } from '../artist/profile';
import MyApi from '../../api';


export default function Home() {
  const [token,setToken] = useState("");
  const [showModal,setShowModal] = useState(false);
  const [showProp,setShowProp] = useState("add");
  useEffect(()=>{
    const _token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";

    if(!token && hash){
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token",_token);
      setToken(_token);
      setClientToken(_token);
    }else{
      setToken(_token);
      setClientToken(_token);
    }

    MyApi("GET", "playlists/init", {}).then((res)=>{
      console.log(res,"init!!!")
    })

  },[]);

  return !token ? (<Login />): (
    <Router>
        <div className='main-body'>
          
           <SideBar setShowModal={setShowModal} setShowProp={setShowProp}></SideBar> 
           <Routes>
              <Route path="/" element={<Library showModal={showModal} showProp={showProp} setShowModal={setShowModal}/>} />
              <Route path="/artist" element={<Artist/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/trending" element={<Trending/>} />
              <Route path="/player" element={<Player/>} />
              <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
    </Router>
  
  )
}
