import React, { useState } from 'react'
import "./modal.css"
import MyApi from '../../api';
import initTrack from './initTrack';
function generateNonRepeatingRandomNumbers(min, max) {
    const numbers = new Set();
    while (numbers.size < max - min + 1) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers.add(num);
    }
    return Array.from(numbers);
  }
  
const randomNumbers = generateNonRepeatingRandomNumbers(1, 10);
let indexImage = 0;
// display a modal
export default function Modal({show,prop,setShowModal,setPlaylists,playlists}) {
  //the name input
   const [target,setTarget] = useState("");
  //close the modal
    const closeFunction = () =>{
        setShowModal(false);
    };
     // Handle changes to the input value and update the state of "target"
    const handleInputChange = (event) => {
      const { value } = event.target;
      setTarget(value);
    };
  //submit new playlist
    const submitFunction = () =>{
        const { v4: uuidv4 } = require('uuid');
        const uuid = uuidv4();
        const listName = target;
        // const description = String(document.getElementById('details').value);
        const imagePath = `/picture/${randomNumbers[indexImage]}.jpg`;
        indexImage += 1;
  //new playlist object
        const newPlaylists = {
            id: uuid,
            name: listName,
            images: [{url: imagePath}],
            items: [initTrack],
            is_local:true
          }
          
        MyApi("POST", "playlists", newPlaylists).then((res)=>{
          setPlaylists([...playlists, newPlaylists]);
          setShowModal(false);
          })
    }
    let responseScreen = null;
    if(show){
        if(prop === "add"){
            responseScreen =  (
                <>
                    <div className="backdrop" ></div>
                    <div className="add-form" >
                        <div className="modal_content">

                          <div className='details'>
                            <div className='listname'>
                              {/* <div className='label'><span>Playlist Name:</span></div> */}
                              <input type="text" id='texts' className="playlistname" required name='title' onChange={handleInputChange} placeholder="Enter title"/>
                            </div>
                            <div className='listdes'>
                              {/* <div className='label'><span>Description:</span></div> */}
                              <input className="listdetails" id='details' required name='description' placeholder="Enter description"/>
                            </div>
                          </div>
                          <div id="btn">
                            <button id="submit" className="operator" onClick={submitFunction}>submit</button>
                            <button id="close"  className="operator" onClick={closeFunction}>close</button>
                          </div>
                        </div>
                    </div>
                </>  )
        }else if(prop === "out"){
            responseScreen =  (
                <>
                  <div className="backdrop" ></div>
                  <div>out</div>
                </>  )
        }
    }
  return responseScreen;
}
