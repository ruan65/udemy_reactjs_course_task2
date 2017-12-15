import React from 'react'
import './CharFrame.css'

const charBox = (props) => {
  
  return <div className="CharsFrame">
    <p><strong>{props.letter}</strong></p>
  </div>
  
}

export default charBox