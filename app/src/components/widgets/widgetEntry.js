import React from 'react'
import"./widgetEntry.css"
// This component renders a single entry in a widget, which consists of an image,
// a title, and a subtitle. When the user clicks on the entry, it calls the `goWhere`
// function passed in as a prop with the `target` and `type` of the entry.

export default function WidgetEntry({title,subtitle,image,goWhere,target,type}) {

  return (
    <div className='entry-body' onClick={()=>goWhere(target,type)}>
        <img src={image} alt={title} className='entry-image'/>
        <div className='entry-right-body'>
            <p className='entry-title'>{title}</p>
            <p className='entry-subtitle'>{subtitle}</p>
        </div>
    </div>
  )
}
