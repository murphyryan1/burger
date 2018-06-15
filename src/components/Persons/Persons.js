import React from 'react';
import Person from './Person/Person';
import PropTypes from 'prop-types';

const persons = (props) => props.persons.map((person, index) => {
  return <Person
    name={person.name}
    age={person.age}
    key={person.id}
    click={() => props.clicked(index)}
    changed={(event) => props.changed(event, person.id)}
  />
});

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default persons;
