import React, { useState } from "react";
// import React from "react";
// import hour from "../hours.json";
import "../styles/Tasks.css";


function Tasks(props) {
// const Tasks = (props) => {

  const [taskState, setTaskState] = useState("");

  // const saveInputTask = (event) => {
   function handleSubmit(event) {
    event.preventDefault();

    console.log("New task is " + taskState);
  };

  const handleTask = (event) => {
    setTaskState(event.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <form>
          <label className="hour">{props.hour}</label>
          <textarea
            // value={props.task}
            value={taskState}
            id={props.id}
            type="text"
            className="time-block"
            placeholder="Tasks"
            onChange={handleTask}
          />
          <button
            onClick= {handleSubmit}
            // onClick={() => props.saveInputTask(props.id)}
            // onClick={saveInputTask}
            id={props.hour}
            type="submit"
            className="saveBtn"
            value={taskState}
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



// // JS FROM OG WORKDAY
// {var parent = $(this).parents(".row");
// var timeId = parseInt(parent.attr("id"));
// var currentHour = parseInt(moment().format("H"));

// // set variable for current hour for color coding purposes
// let index = 0;

// // console.log(timeBlock);

// // Function to argue past/present/future time and what to log and when.
// timeBlock.each(function () {

//     var parent = $(this).parents(".row");
//     var timeId = parseInt(parent.attr("id"));
//     var currentHour = parseInt(moment().format("H"));
//     console.log(timeId);

//     if (timeId < currentHour) {
//       $(this).addClass("past");

//     } else if (timeId === currentHour) {
//         $(this).removeClass("past");
//       $(this).addClass("present");
      
//     } else {
//         $(this).removeClass("past");
//         $(this).removeClass("present");
//     $(this).addClass("future");

//     $(this).val(localStorage.getItem(parent.attr("id")));
//   }
//   $(this).val(localStorage.getItem(parent.attr("id")));
//   // console.log($(this).val());localStorage.getItem(parent.attr("id"));
// })

// // Set .on("click") function and tell when/where to store information
// $(".saveBtn").on("click", function() {
 
//   var userText = $(this).siblings(".time-block").val();
// //   console.log(userText);
  
//   var hourTask = $(this).parents(".row").attr("id");
//   //is this value correct?
// //   console.log(hourTask)

// // Send to localStorage
// localStorage.setItem(hourTask, userText);

// // console.log(localStorage.getItem(hourTask, userText))

// console.log("+++ Get Item from Local Storage: ", localStorage.getItem(hourTask))
// })}