import React, { useEffect, useState } from 'react'
import './sidebar.css'
import profile_img from '../../public/icons/profile_light.png'
import SideBarButton from './sidebarButton.js'
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa"; 
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5"; 
import {TbPlaylist} from "react-icons/tb"; 
import {GiMicrophone} from "react-icons/gi"
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from '../../spotify';

export default function SideBar({setShowModal,setShowProp}) {

  const [image,setImage] = useState(profile_img);

  useEffect(()=>{
    // Make API call to get user's profile image
    apiClient.get("me").then((response)=>{
      // Update image state with received image URL
      setImage(response.data.images[0].url)
    })
  },[])

  const loginOut = ()=>{
    // Function to logout user
    // Remove token from localStorage and reload the page
    window.localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <div className='sidebar-container'>
        {/* Display user's profile image */}
        <img src= {image}
        className='profile-img'
        alt='profile'>
        </img>
        {/* Display navigation buttons */}
        <div>
          <SideBarButton title="Artist" to="/artist" icon={<GiMicrophone/>}/>
          <SideBarButton title="Trending" to="/trending" icon={<FaGripfire/>}/>
          <SideBarButton title="Player" to="/player" icon={<FaPlay/>}/>
          <SideBarButton title="Favorites" to="/favorites" icon={<MdFavorite/>}/>
          <SideBarButton title="Playlist" to="/" icon={<TbPlaylist/>}/>
        </div>
        {/* Display sign out button */}
        <SideBarButton title="Sign Out" to="" function={loginOut} icon={<FaSignOutAlt/>}/>
    </div>
  )
}
