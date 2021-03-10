import "../styles/Tasks.css";
import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";

function Tasks() {
  // set variables for useEffect args
  const [hoursOfDay, setHoursOfDay] = useState([]);
  const [currentTime] = useState(DateTime.now());

  // Set loop to show specific ours of the day
  useEffect(() => {
    console.log("hello");
    var hoursOfDay = [];
    for (let i = 8; i < 18; i++) {
      // Push the hours desired to display on page and what format
      var displayHour = localStorage.getItem(String(i));
      hoursOfDay.push({
        date: DateTime.now().set({ hour: i, minutes: 0 }),
        task: displayHour ? displayHour : "",
      });
    }
    setHoursOfDay(hoursOfDay, displayHour);
    console.log(currentTime);
  }, [currentTime]);
  // Function to handle change in task and send to localStorage
  function handleInputChange(e, i) {
    const task = e.target.value;
    // Loop through each time new task to save each task with hour in localStorage
    const saveNewHours = hoursOfDay.map((each) => {
      if (i + 8 === each.date.hour) {
        return {
          ...each,
          task: [task],
        };
      }
      return each;
    });
    setHoursOfDay(saveNewHours);
    document.getElementById("time-block").value = saveNewHours;
  }

  // Function to handle form when button is clicked
  function handleFormSubmit(e, i) {
    e.preventDefault();
    // Loop through forEach task input in the handleInputChange function and save the task associate with the correct hour
    hoursOfDay.forEach((each) => {
      if (i + 8 === each.date.hour) {
        // Save each task associated with that hour to localStorage
        localStorage.setItem(String(i + 8), each.task);
        // grab tasks from localStorage and display on page after refreshed
        document.getElementById("sendTask").value = each.task;
      }
    });
  }
  // Sets change in color depending on local time
  const determinePastPresentFuture = (each) => {
    if (currentTime.hour === each.date.hour) {
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
                {/* add in .date to display in non-military time */}
                {each.date.toLocaleString(DateTime.TIME_SIMPLE)}
              </label>
              <textarea
                // associate any value submitted through each.task
                // ref={input}
                value={each.task}
                className={determinePastPresentFuture(each)}
                type="text"
                placeholder="Enter Task Here"
                id="time-block"
                onChange={(e) => handleInputChange(e, index)}
              ></textarea>
              <button
                type="submit"
                className="saveBtn"
                id="sendTask"
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
