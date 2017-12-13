import React from 'react'
import Person from './Person.css'
// this is a function based component, use function based whenever possible
const person = props => {
  return (
    // className refers to the css class, not a JS class
    <div className="Person">
      <p onClick={props.click}>
        {' '}
        {/* click is the name of the property that we will call */}
        I'm {props.name} and I am {props.age} years old
      </p>
      <p>{props.children}</p>{' '}
      {/* props.childrens is reserved for text we want to insert 
        between creatin the component or other JS data*/}
      <input type="text" onChange={props.changed} value={props.name} />
      {/* props.changed is the prop we will use to set the method that will change the name
          and value={props.name} is binding to the value of this components name for 2-way data binding*/}
    </div>
  )
}

export default person
