import React, { Component } from 'react';
import Header from './components/Wrapper';
import TimeBlock from './components/TimeBlock';
import Tasks from './components/Tasks';
import Wrapper from './components/Wrapper';
import hours from "./hours.json";

// import logo from './logo.svg';
// import './App.css';


class App extends Component {
  // Set this.state.hours to the hours json array
  state = { 
    hours,
    tasks: [],
  };

  
    render() {
        return (
          <Wrapper>
            <Header>Work Day Scheduler</Header>
            <div className="row">{hour.map((hours) => <Tasks)}</div> 
            </Wrapper>
        );
    }
}


export default App;
