import React from 'react'
import "../../assets/styles/Popup.css"

const Molpopup = (props) => {
  return (props.trigger) ?(
    <div className='popup'>
      <div className='popup-inner'>
        <button className='popup-close' onClick={() => props.setTrigger(false)}>X</button>
        {props.children}
      </div>
    </div>
  ): "";
}

export default Molpopup