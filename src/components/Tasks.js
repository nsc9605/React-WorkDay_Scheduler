// import React, { useState } from "react";
import React from "react";
// import React, { Component } from "react";
// import hour from "../hour.json";
import "../styles/Tasks.css";


function Tasks(props) {

  return (
    <div className="container-fluid">
      <div className="row">
        <form>
          <label className="hour">{props.hour}</label>
          <input
            id={props.id}
            type="text"
            className="time-block"
            placeholder="Tasks"
          ></input>
          <button
            onClick={() => props.saveTaskInput(props)}
            type="submit"
            className="saveBtn"
          >
            Save
            <i className="fas fa-save save"></i>
          </button>
        </form>
      </div>
    </div>
  );
};


export default Tasks;














// const Tasks = (props) => {

  // const [inputTask, setInputTask] = useState([]);

  // const saveInputTask = (event) => {
  //  const handleSubmit = (event) => {
  //   event.preventDefault();
    
  //   setInputTask([...inputTask, display.current.value])
  //   console.log("New task is " + inputTask);
  // };

  // const handleTask = (event) => {
  //   setInputTask(event.target.value);
  // };

// class Tasks extends Component {
// // function Tasks(props) {
//   state = {
//     hour: '',
//     task: '',
//   }

//   componentDidMount() {
//     for (var i = 0; i < 10; i++) {
//       let storeNewTask = localStorage.getItem(i);
//       if (storeNewTask && this.props.id === i) {
//         this.setState({
//           hour: i,
//           task: storeNewTask
//         })
//       }
//     }
//   }
  
//   handleInputChange = (event) => {
//     let taskHour = event.target.hour;
//     let taskInput = event.target.task;

//     this.setState({ 
//       task: taskInput,
//       hour: taskHour
//      });

//      localStorage.getItem(taskHour, taskInput);
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     const taskHour = this.state.hour;
//     const taskInput = this.state.task;

//     localStorage.setItem(taskHour, taskInput);
//   }

//   render() {
//     return (
//       <div className="container-fluid">
//        <div className="row">
//          <form>
//            <label className="hour">{this.props.hour}</label>
//            <textarea
//             // value={props.task}
//             value={this.state.task}
//             id={this.props.id}
//             type="text"
//             className="time-block"
//             placeholder="Tasks"
//             onChange={this.handleInputChange}
//           />
//           <button
//             onClick= {this.handleSubmit}
//             // onClick={() => props.saveInputTask(props.id)}
//             // onClick={saveInputTask}
//             // id={this.props.hour}
//             type="submit"
//             className="saveBtn"
//             // value={taskState}
//           >
//             Save
//             <i className="fas fa-save save"></i>
//           </button>
//         </form>
//       </div>
//     </div>
//     )
//     }
//   }

// export default Tasks;