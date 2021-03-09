// import Header from "./components/Header";
import "../styles/Tasks.css";
import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";

function Tasks() {
  // set variables for useEffect args
  const [hoursOfDay, setHoursOfDay] = useState([]);
  const [currentTime] = useState(DateTime.now());
  const [task, setTask] = useState();

  // Set loop to show specific ours of the day
  useEffect(() => {
    console.log("hello");
    var hoursOfDay = [];
    for (let i = 8; i < 18; i++) {
      // Push the hours desired to display on page and what format
      hoursOfDay.push(DateTime.now().set({ hour: i, minutes: 0 }));
      var displayHour = localStorage.getItem({ i });
      if (displayHour === i) {
        this.setState({ hour: i, task: [] });
      }
    }
    // setTask({ task });
    setHoursOfDay(hoursOfDay);
    console.log(currentTime);
  }, [currentTime]);

  // Function to handle change in task and send to localStorage
  function handleInputChange(e) {
    const task = e.target.value;
    setTask({ task });
    // console.log(hoursOfDay.hour);
    localStorage.setItem(hoursOfDay.hour, JSON.stringify(task));
  }

  // Function to handle form when button is clicked
  function handleFormSubmit(e, i) {
    e.preventDefault();
    const task = e.target.value;
    // let times = i;
    // for (let i = 8; i + 18; i++) {
    //   if (times === i) {
    //     document.setItem(times, i)
    //   }
    // }
    setHoursOfDay(hoursOfDay);
    setTask({ task });
    localStorage.getItem(i + 8, JSON.stringify(task));
    localStorage.setItem(i + 8, JSON.stringify(task));
  }

  // Sets change in color depending on local time
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

  // Return elements to page
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-3">Work Day Scheduler</h1>
        <h2 className="lead">
          A simple calendar app for scheduling your work day
        </h2>
        <h3>
          Currently:{" "}
          {/* Set current time to display on page using Luxon documentation */}
          {currentTime.toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)}{" "}
        </h3>
      </div>
      {/* Map out the hours of day  */}
      {hoursOfDay.map((each, index) => {
        return (
          <div className="container">
            <form key={each} onSubmit={handleFormSubmit}>
              <label className="hour" name="hour">
                {each.toLocaleString(DateTime.TIME_SIMPLE)}
              </label>
              <textarea
                key={index}
                className={determinePastPresentFuture(each)}
                type="text"
                placeholder="Enter Task Here"
                id="time-block"
                onChange={handleInputChange}
              ></textarea>
              <button
                type="submit"
                className="saveBtn"
                onClick={(e) => handleFormSubmit(e, index)}
              >
                Save
                <i className="fas fa-save save"></i>
              </button>
            </form>
          </div>
        );
      })}
    </div>
  );
}

export default Tasks;
