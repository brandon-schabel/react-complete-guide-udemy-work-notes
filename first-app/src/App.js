import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Brandon', age: 21 },
      { name: 'Beanz', age: 1.2 }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log("Was Clicked!");
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Brandon', age: 21 },
        { name: 'Beanz', age: 1.4 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    // console.log("Was Clicked!");
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        // no matter which component you type into, the second name shoudl change */
        { name: event.target.value, age: 21 },
        { name: 'Beanz', age: 1.4 }
      ]
    })
  }

  render() {
    // styling using javascript instead of css directly (this is called inline styling)
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        {/* Below an arrow function is used instead of binding it like we did below with one of the Person components*/}
        <button 
        style={style}
        onClick={ () => this.switchNameHandler('Maximillian!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          // below is a reference to switchNameHandler Method
          click={this.switchNameHandler.bind(this, 'Max!')}
          // below for changed we set a reference to the nameChangedHandler
          changed={this.nameChangedHandler}
        >
          My hobbies are overReacting
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    )
  }
}

export default App
