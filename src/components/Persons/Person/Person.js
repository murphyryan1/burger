import React, { Component } from 'react';

import classes from './Person.css';

class Person extends Component {

  componentDidMount() {
    this.inputElement.focus();
  }

  render () {
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>I'm a person and I output {this.props.name} and {this.props.age}!</p>
        <p>{this.props.children}</p>
        <input
          ref={(inp) => { this.inputElement = inp }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>

    );
  }
}

export default Person;
