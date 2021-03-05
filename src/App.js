import React  from 'react';
import Header from './components/Wrapper';
// import TimeBlock from './components/TimeBlock';
import Tasks from './components/Tasks/Tasks';
import Wrapper from './components/Wrapper';
// import hours from "./hours.json";


function App() {
  return (
    <div>
      <Header />
      <Wrapper />
      <Tasks />
    </div>
  )
}


export default App;
