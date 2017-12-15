import React from 'react'

const validation = (props) => {
  
  let input = ""
  
  if (props.inputedText) {
    input = props.inputedText
  }
  
  let result = input.length < 5 ? "Too short" : input.length > 10 ? "Too long" : "Just fine"
  
  return (
    <div>
      <h3>Input: {input}</h3>
      <br/>
      <h4>Valid or not: {result}</h4>
    </div>
  )
}

export default validation