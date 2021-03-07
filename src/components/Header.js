import React from "react";
import Moment from "react-moment";
import "../styles/Header.css";

function Header() {
  return (
    <div>
      <header className="jumbotron">
        <h1 className="display-3">Work Day Scheduler</h1>
        <h2 className="lead">
          A simple calendar app for scheduling your work day
        </h2>
        <Moment format="dddd MMMM Do YYYY, h:mm a"></Moment>
      </header>
    </div>
  );
}

export default Header;
