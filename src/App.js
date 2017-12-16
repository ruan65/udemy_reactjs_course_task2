import React, { Component } from 'react';
import './App.css';
import Validation from './Components/Validation'
import CharBox from './Components/CharComponent'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputedText: ""
    }
  }

  inputHandler = (event) => {
    this.setState({inputedText: event.target.value})
  }
  
  deleteLetterHandler = (i) => {
    console.log(i)
  }

  render() {

    const chars = <div>{
      
      this.state.inputedText.split('').map((ch, i) => {
        return <CharBox
          letter={ch}
          key={i}
          remove={() => this.deleteLetterHandler(i)}
        />
      })
      
    }</div>
    
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <br/>
        <br/>
        <div>
          <label>Input: </label>
          <input type='text' onChange={this.inputHandler} />
          <p>Input count: <strong>{this.state.inputedText.split('').length}</strong></p>
        </div>
        
        <Validation inputedText={this.state.inputedText}/>
        
        { chars }
      </div>
    );
  }
}

export default App;
