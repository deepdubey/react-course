import React, { Component } from 'react';

import './App.css';
import Person from './components/Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'fdhjff', name: 'Max', age: 21 },
      { id: 'bh323f', name: 'Manu', age: 23 },
      { id: 'ff2ffg', name: 'Smith', age: 24 },
    ],
    showPerson: false
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons });
  }

  toggleHandler = () => {
    this.setState({
      showPerson: !(this.state.showPerson)
    })
  }

  deletePersonHandler = (personIndex) => {
    //Updating state in immutable manner
    // const persons = this.state.persons.slice() //1st way
    const persons = [...this.state.persons]; //Copying array using spread operator
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }
  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(person.id)}
                changed={(event) => this.changeNameHandler(event, person.id)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            )
          })
          }
        </div>
      );

      style.backgroundColor = 'red';
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hello</h1>
        {/* Join is used to get array in string format like 'red bold' */}
        <p className={classes.join(' ')}>This is really working</p>
        <button style={style} onClick={this.toggleHandler}>Click</button>
        {persons}
      </div>
    );
  }
}

export default App;
