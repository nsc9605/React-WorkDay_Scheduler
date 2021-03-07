import React, { useState } from "react";
// import TimeBlock from "./TimeBlock";
import "../styles/Tasks.css";

// function Tasks(props) {
  const Tasks = (props) => {
  
  const [taskState, setTaskState] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    
    console.log("new task is " + taskState);
  };
const handleTaskChange = event => {
  setTaskState(event.target.value);
}
 

  return (
    <div className="container-fluid">
      <div className="row">
        <form >
          <label className="hour">{props.hour}</label>
           <input
            value={taskState}
            text={props.task}
            type="text"
            className="time-block"
            placeholder="Tasks"
            onChange={handleTaskChange}
          />
          <button
            onClick={handleSubmit}
            id={props.hour}
            type="submit"
            className="saveBtn"
          >
            <i className="fas fa-save save"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Tasks;

// import React, { useState } from "react";
// // import TimeBlock from "./TimeBlock";
// import "../styles/Tasks.css";

// function Tasks(props) {
  
//   const [taskState, setTaskState] = useState("");

//   const handleSubmit = event => {
//     event.preventDefault();
//     console.log("new task is " + taskState);
//     // let newTask = props.hourBlock.filter( => friend.id !== id);

//     // var userTask = document.getElementById(props.task).value;
//     // var hourTask = document.getElementById(props.hour);

//     // localStorage.setItem(hourTask, JSON.stringify(userTask));
//   };

//   // const handleTaskChange = event => {
//   //   setTaskState(event.target.value);
//   // };

//   return (
//     <div>
//       <div className="row">
//         <form >
//           <label className="col-sm-1 hour">{props.hour}</label>
//            <input
//             value={taskState}
//             id={props.hour}
//             type="text"
//             className="col-md-10 time-block"
//             placeholder="Tasks"
//             // onChange={handleTaskChange}
//           />
//           <button
//             onClick={handleSubmit}
//             id={props.hour}
//             type="submit"
//             className="saveBtn col-sm-1"
//           >
//             <i className="fas fa-save save"></i>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Tasks;

