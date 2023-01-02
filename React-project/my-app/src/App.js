import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = {
    persons: [
      {name: "Sunday", age: 20},
      {name: "Mark", age: 25},
      {name: "Rose", age: 18},
    ]
  };

  switchNameHandle = () => {
    //console.log("Was Clicked");
    this.setState({
      persons: [
        {name: "Nwaeze", age: 20},
        {name: "Mark", age: 24},
        {name: "Rose", age: 19},
      ]
    })
  };

  render(){
    return (
      <div className="App">
        <h1> I'm Learning React </h1>
        <p> This will work </p>
        <button onClick={this.switchNameHandle}> Switch Name </button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} />
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} />
      </div>
    );
  }
}

export default App; 
