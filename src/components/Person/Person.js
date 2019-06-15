import React from 'react';
import classes from './Person.css';
const Person = (props) => {
  return (
    <div className={classes.Person}>
      <p className={classes.font} onClick={props.click} >My name is {props.name}, I am {props.age} year old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}

export default Person;