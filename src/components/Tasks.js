// import Header from "./components/Header";
import "../styles/Tasks.css";
import { DateTime } from "luxon";
import React, { useEffect, useState, useRef } from "react";

function Tasks() {
  // set variables for useEffect args
  const [hoursOfDay, setHoursOfDay] = useState([]);
  const [currentTime] = useState(DateTime.now());
  const [saveTask, setSaveTask] = useState(
    JSON.parse(localStorage.getItem(""))
  );
  const [displayTasks, setDisplayTasks] = useState();
  const input = useRef();

  console.log(saveTask);

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
    var saveTask = '';
    for (let i = 0; i <= 9; i++) {
      let storeNewTask = localStorage.getItem(`${i}`);
      if (storeNewTask !== null) {
        document.getElementById(`${i}`).value = storeNewTask;
        localStorage.setItem(`${i}`, saveTask);
        localStorage.setItem(hoursOfDay, storeNewTask, saveTask);
      }
      setSaveTask(saveTask);
      // console.log(i);
    }
  }, [hoursOfDay, saveTask, setSaveTask]);

  // const [handleSubmit] = useState();

  // useEffect(() => {
  function handleSubmit(event) {
    event.preventDefault();
    // setSaveTask([event.saveTask]);
    setSaveTask([...saveTask, input.current.value]);
    setDisplayTasks([event.displayTasks]);
    setDisplayTasks(displayTasks);
  }
  // }, [displayTasks, hoursOfDay]);

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
            <form key={each} onSubmit={handleSubmit}>
              <label className="hour">
                {each.toLocaleString(DateTime.TIME_SIMPLE)}
              </label>
              <input
                key={index}
                className={determinePastPresentFuture(each)}
                type="text"
                ref={input}
                placeholder="Enter Task Here"
                id="time-block"
              ></input>
              <button
                type="submit"
                className="saveBtn"
                // onClick={handleSubmit}
              >
                Save
              </button>
            </form>
          </div>
        );
      })}
    </div>
  );
}

export default Tasks;
