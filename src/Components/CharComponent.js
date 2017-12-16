import React from 'react'
import './CharFrame.css'

const charBox = (props) => {
  
  return <div className="CharFrame" onClick={props.remove}>
    <p><strong>{props.letter}</strong></p>
  </div>
  
}

export default charBox