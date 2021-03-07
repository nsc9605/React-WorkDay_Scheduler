import React from "react";
// import moment from "moment";
import Header from "./components/Header";
import TimeBlock from "./components/TimeBlock";
import Tasks from "./components/Tasks";
import "./styles/App.css";

function App() {
  return (
    <div>
      <Header />
      <TimeBlock />
      <Tasks />
    </div>
  )
}

export default App;