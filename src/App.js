import React from "react";
// import moment from "moment";
import Header from "./components/Header";
// import TimeBlock from "./components/TimeBlock";
import Tasks from "./components/Tasks";
import "./styles/index.css";

function App() {
  return (
    <div>
      <Header />
      <Tasks hour="8am"/>
      <Tasks hour="9am"/>
      <Tasks hour="10am"/>
      <Tasks hour="11am"/>
      <Tasks hour="12am"/>
      <Tasks hour="1pm"/>
      <Tasks hour="2pm"/>
      <Tasks hour="3pm"/>
      <Tasks hour="4pm"/>
      <Tasks hour="5pm"/>
      <Tasks hour="6pm"/>
    </div>
  )
}

export default App;