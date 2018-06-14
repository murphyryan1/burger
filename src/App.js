import React, {Component} from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 0, name: 'Max', age: 29},
      {id: 2, name: 'Manu', age: 30},
      {id: 3, name: 'Stephanie', age: 26}
    ]
  };
  showPeople: false;

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons; -- incorrect, creates a reference to the state object
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({showPeople: !doesShow})
  };

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPeople) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />

          })}
        </div>
      );
      btnClass = classes.Red;
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>React App</h1>
        <p className={assignedClasses.join(' ')}>Change this one</p>
        <button
          className={btnClass}
          onClick={this.togglePersonHandler}
        >
          Toggle People
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
