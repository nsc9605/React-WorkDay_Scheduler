import React, { Component } from 'react';
import TimeBlock from './TimeBlock';
import Tasks from '../Tasks/Tasks';
import Header from './Header';
import hours from '../../hours';
import '../styles/Wrapper';

class Wrapper extends Component {
  // Set this.state.hours to the hours json array
  state = { 
    currentDate: new Date(),
    hours,
    tasks: [],
  };
//   addTask = id => {
//     const hours = this.state.hours.filter
//   }
  
    render() {
        return (
          <Wrapper>
            <Header>Work Day Scheduler</Header>
            <TimeBlock></TimeBlock>
            <div className="row">{hours.map((hours) => <Tasks id={hours.id} key={hours.id} />)}</div> 
            </Wrapper>
        );
    }
}

export default Wrapper;