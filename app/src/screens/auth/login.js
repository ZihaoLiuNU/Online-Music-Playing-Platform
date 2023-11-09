import React from 'react'
import {LoginEndpoint} from "../../spotify"// Importing LoginEndpoint from '../../spotify' module
import  "./login.css";//Importing the 'login.css' file

// Defining the Login component
// Returning JSX containing the login page
/* A container div with a class name of 'login-page' */
/* Alt text for the Spotify logo image */
/* A link to the Spotify login endpoint */
/* A button with a class name of 'login-btn' and a label of 'LOG IN' */
export default function Login() {
   return (
    <div className='login-page'>
        <img  
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alts="logo-spotify" 
        className="logo"
        />

        <a href= {LoginEndpoint}>
            <div className="login-btn">  LOG IN </div>
        </a>
   </div>)
    }