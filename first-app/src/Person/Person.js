import React from 'react'

// this is a function based component, use function based whenever possible
const person = props => {
  return (
    <div>
      <p>
        I'm {props.name} and I am {props.age} years old
      </p>
      <p>{props.children}</p>{' '}
      {/* props.childrens is reserved for text we want to insert 
                                    between creatin the component or other JS data*/}
    </div>
  )
}

export default person
