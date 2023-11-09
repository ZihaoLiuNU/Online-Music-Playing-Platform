import React from 'react'
import "./addPlayList.css"
import { IconContext } from 'react-icons';
import {GrAdd} from "react-icons/gr"


export default function AddPlayList({setShowModal}) {

    const addNewList =()=>{
        setShowModal(true);
    }

  return (
    <div className= {"btn-body-add"}  onClick={addNewList}>
            <IconContext.Provider value={{size:"26px",className:"btn-icon"}}>
                <div className='add-btn'>
                  <GrAdd/>
                </div>
         </IconContext.Provider>
    </div>
  )
}
