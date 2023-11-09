import React from 'react'
import "./sidebarbutton.css";
import {Link, useLocation} from 'react-router-dom';
import { IconContext } from 'react-icons';

export default function SideBarButton(props) {
    // Get the current location using useLocation() hook from react-router-dom
    const location = useLocation();

    // Determine if the current location matches the button's "to" prop to determine if the button should be active
    const isActive = location.pathname === props.to;

    // Create a CSS class for the button body based on whether or not it is active
    const btnClass = isActive ? "btn-body active":"btn-body"
    
    return (
    // Create a link to the button's "to" prop using the Link component from react-router-dom
    <Link to={props.to}>
        <div className= {btnClass} onClick={props.function}>
            <IconContext.Provider value={{size:"24px",className:"btn-icon"}}>
            {props.icon}
            <p className='btn-title'>{props.title}</p>
            </IconContext.Provider>
        </div>
    </Link>
  )
}
