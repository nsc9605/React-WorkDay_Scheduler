// import Header from "./components/Header";
import "../styles/Tasks.css";
import { DateTime } from "luxon";
import React, { useEffect, useState, useRef } from "react";

function Tasks() {
  // set variables for useEffect args
  const [hoursOfDay, setHoursOfDay] = useState([]);
  const [currentTime] = useState(DateTime.now());
  const [task, setTask] = useState([])
  // (JSON.parse(localStorage.getItem(""))
  const input = useRef();
  // this.setTask({
  //   task: ''
  // });

// Set loop to show specific ours of the day 
  useEffect(() => {
    console.log("hello");
    var hoursOfDay = [];
    for (let i = 8; i < 18; i++) {
      hoursOfDay.push(DateTime.now().set({ hour: i, minutes: 0 }));
    }
    setHoursOfDay(hoursOfDay);
    console.log(currentTime);
  }, [currentTime]);


  useEffect(() => {
    // var setTask = '';
    for (let i = 0; i <= 9; i++) {
      let storeNewTask = localStorage.getItem(`${i}`);
      if (storeNewTask !== null) {
        document.getElementById(`${i}`).value = storeNewTask;
        // localStorage.setItem(`${i}`, setTask);
        // localStorage.setItem(hoursOfDay, storeNewTask, setTask);
      }
      // setTask(task);
      // console.log(i);
    }
  }, [hoursOfDay, task]);


    function handleInputChange(e){
      // const task = e.target;
      setTask({task: e.target.value})
    }

  function handleFormSubmit(e) {
    e.preventDefault()
    setTask({task: e.target.value});
    // e.target.reset();
    // this.setTask({
    //   task: e.target.value,
    // })
  
    setHoursOfDay(hoursOfDay)
    setTask(task)
    localStorage.setItem(hoursOfDay, {setTask})
  }

  const determinePastPresentFuture = (each) => {
    if (currentTime.hour === each.hour) {
      return "present";
    }
    if (currentTime.hour < each.hour) {
      return "past";
    } else {
      return "future";
    }
  };

  return (
    <div>
    <div className="jumbotron">
      <h1 className="display-3">Work Day Scheduler</h1>
      <h2 className="lead">
        A simple calendar app for scheduling your work day
      </h2>
      <h3>
        Current Day and Time:{" "}
        {currentTime.toLocaleString(DateTime.DATETIME_MED)}{" "}
      </h3>
    </div>
      {hoursOfDay.map((each, index) => {
        return (
          <div>
            <form key={each} onSubmit={handleFormSubmit}>
              <label className="hour" name="hour">
                {each.toLocaleString(DateTime.TIME_SIMPLE)}
              </label>
              <input
                key={index}
                ref={input}
                // value={this.state.task}
                className={determinePastPresentFuture(each)}
                type="text"
                placeholder="Enter Task Here"
                id="time-block"
                onChange={handleInputChange}
              ></input>
              <button
                type="submit"
                className="saveBtn"
                onClick={handleFormSubmit}
              >
                Save
              <i className="fas fa-save save"></i></button>
            </form>
          </div>
        );
      })}
    </div>
  );
}

export default Tasks;






