import React, { Component } from "react";
// import React from "react";
import Header from "./components/Header";
// import TimeBlock from "./components/TimeBlock";
import Tasks from "./components/Tasks";
import hour from "./hours.json";
// import task from "./hours.json";
import "./styles/index.css";


class App extends Component {
  state = {
    hour,
    // task
  };
  addTask = id => {
    // Filter this.state.hours for hours with an id not equal to the id being removed
    const task = this.state.hours.filter(task => hour.id === id);
    // Set this.state.hours equal to the new hours array
    this.setState({ task });
  };
  saveInputTask = () => {
    console.log(`${hour.task}`);
  };

  render() {
    
    return (
      <div>
    <Header />
    {this.state.hour.map(hour => ( 
        <Tasks
          saveInputTask={this.handleSubmit}
          id={hour.id}
          key={hour.hour}
          hour={hour.hour}
          task={this.addTask}
          value={hour.task}
        />
      ))}
      </div>
    )
}
}
export default App; 

// function App() {

// return (
// <div>
//   <Header />
//   <Tasks hour="8am"/>
//   <Tasks hour="9am"/>
//   <Tasks hour="10am"/>
//   <Tasks hour="11am"/>
//   <Tasks hour="12am"/>
//   <Tasks hour="1pm"/>
//   <Tasks hour="2pm"/>
//   <Tasks hour="3pm"/>
//   <Tasks hour="4pm"/>
//   <Tasks hour="5pm"/>
//   <Tasks hour="6pm"/>
// </div>
// )
// }

// export default App;
