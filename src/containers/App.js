import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from "../components/Cockpit/Cockpit";

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

    if (this.state.showPeople) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          showPeople={this.state.showPeople}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
