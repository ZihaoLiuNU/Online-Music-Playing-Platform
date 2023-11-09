import React, { useState } from 'react'
import './searchBar.css';
import { FaSearch } from 'react-icons/fa';
import MyApi from "../../api";

// SearchBar component that takes in a "type" prop and a "setList" prop
export function SearchBar({type,setList}) {

  // Set the initial state of "target" to an empty string using the useState hook
  const [target,setTarget] = useState("");
  
  // Handle key down event when user hits the Enter key
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Send a POST request to the API with the search term and update the list with the response data
      MyApi("POST", `${type}/findByName`, {"key":target}).then((res)=>{
        console.log(res);
        setList(res);
    })      
    }
  };

  // Handle changes to the input value and update the state of "target"
  const handleInputChange = (event) => {
    const { value } = event.target;
    setTarget(value);
  };

  // Render the search bar component with the appropriate placeholder text and event handlers
  return (
    <div className='navbar_body' style={type=='artists' ? {"width": "366px","background-color": "rgb(153 153 153 / 45%)","position":"relative","top": "-28px","right": "39%"} : null }>
        <div className='search_bar' >
            <input type="text" placeholder={`Search ${type} Here...`} onKeyDown={handleKeyDown} onChange={handleInputChange} />
        </div>
    </div>
  )
}

