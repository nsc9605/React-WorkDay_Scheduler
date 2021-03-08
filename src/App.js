import React, { Component } from "react";
// import React from "react";
import Header from "./components/Header";
// import TimeBlock from "./components/TimeBlock";
import Tasks from "./components/Tasks";
import hour from "./hour.json";
import "./styles/index.css";

class App extends Component {

  // Grab tasks from localStorage and display on page
  componentDidMount() {
    for (let i = 0; i <= 9; i++) {
      let storeNewTask = localStorage.getItem(`${i}`);
      if (storeNewTask !== null) {
        document.getElementById(`${i}`).value = storeNewTask;
      } 
      console.log(i)
    }
  }

  // Save newly added task to localStorage
  saveTaskInput(props) {
    let newTask = document.getElementById(props.id).value;
    localStorage.setItem(`${props.id}`, newTask);
    console.log(newTask);
  }
  
  render() {
    return (
      <div>
        <Header />
        {hour.map((hour) => (
          <Tasks
            key={hour.hour}
            id={hour.id}
            hour={hour.hour}
            task={hour.task}
            saveTaskInput={this.saveTaskInput}
          />
        ))}
      </div>
    );
  }
}
export default App;












// class App extends Component {
//   saveNewTask(props) {
//     let task = document.getElementById(props.id).value;
//     localStorage.setItem(`${props.id}`, task);
//   }

// state = {
//   hour,
//   // task
// };

// addTask = id => {
//   // Filter this.state.hours for hours with an id not equal to the id being removed
//   const task = this.state.hour.filter(task => hour.id === id);
//   // Set this.state.hours equal to the new hours array
//   this.setState({ task });
// };

// saveInputTask = () => {
//   console.log(`${hour.task}`);
// };

//   render() {
//     return (
//       <div>
//         <Header />
//         {hours.map((hour) => (
//           <Tasks
//             saveNewTask={this.saveNewTask}
//             id={hour.id}
//             key={hour.hour}
//             hour={hour.hour}
//             value={hour.task}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// export default App;

// function App() {
//   return (
//     <>
//     <Header />
//     <TimeBlock />
//     {hour.map((hour) => <Tasks hour={hour.hour} task={hour.task} />
//     )};
//     </>
//   )
// }

// export default App;