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

  switchNameHandler = () => {
    // console.log("Was Clicked!");
    this.setState({
      persons: [
        { name: 'Maxmilian', age: 28 },
        { name: 'Brandon', age: 21 },
        { name: 'Beanz', age: 1.4 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
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
