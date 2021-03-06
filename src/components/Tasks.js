import React, { useState } from "react";
import "../styles/Tasks.css";

const Tasks = () => {
  const [task, setTaskState] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    console.log("new task is " + task);
  };

  const handleTaskChange = event => {
    setTaskState(event.target.value);
  };

  return (
    <div>
      <div className="row" id="8">
        <form onSubmit={handleSubmit}>
          <label className="col-sm-1 hour">8 AM</label>
          {/* <!-- Use col-md-10 for longer text areas to write tasks --> */}
          <input
            value={task}
            id="hour-task"
            type="text"
            className="col-md-10 time-block"
            placeholder="Tasks"
            onChange={handleTaskChange}
          />
          {/* <!-- set col-sm-1 to get smaller button and insert "save save" icon for each button element --> */}
          <button
            onClick={handleSubmit}
            id="8amBtn"
            type="submit"
            className="saveBtn col-sm-1"
          >
            <i className="fas fa-save save"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Tasks;


// return (
  //     if (this.state.mode === "edit") {
  //       return (
  //         <div>
  //           <p>Text: {this.state.text}</p>
  //           <button onClick={this.handleEdit}>Edit</button>
  //         </div>
  //       );
  //     } else {
  //       return (
  //         <div className="row">
  //           <form>
  //             <label className="col-sm-1 hour">8 AM</label>
  //             <textarea
  //               onChange={this.handleSave}
  //               value={this.state.inputText}
  //               className="col-md-10 time-block"
  //               name="task"
  //               id="8"
  //               hour="8"
  //               type="text"
  //               placeholder="Tasks"
  //             >
  //               {this.state.text}
  //             </textarea>
  //             <button
  //               onClick={this.handleSave}
  //               type="submit"
  //               id="8amBtn"
  //               className="saveBtn col-sm-1"
  //             >
  //               <i className="fas fa-save save"></i>
  //             </button>
            
  //             <div className="container">
  //       {/* <!-- Time blocks go here --> */}
  //       <div className="row" id="8">
  //           <label className="col-sm-1 hour">8 AM</label>
  //           {/* <!-- Use col-md-10 for longer text areas to write tasks --> */}
  //           <textarea id="hour-task" type="text" className="col-md-10 time-block" placeholder="Tasks"></textarea>
  //           {/* <!-- set col-sm-1 to get smaller button and insert "save save" icon for each button element --> */}
  //           <button id="8amBtn" type="submit" className="saveBtn col-sm-1"><i className="fas fa-save save"></i></button>
  //       </div>
  //       <div className="row" id="9">
  //         <label className="col-sm-1 hour">9 AM</label>
  //         <textarea id="hour-task" type="text" className="col-md-10 time-block" placeholder="Tasks"></textarea>
  //         <button id="9amBtn" type="submit" className="saveBtn col-sm-1"><i className="fas fa-save save"></i></button>
  //       </div>
  //       <div className="row" id="10">
  //         <label className="col-sm-1 hour">10 AM</label>
  //         <textarea id="hour-task" type="text" className="col-md-10 time-block" placeholder="Tasks"></textarea>
  //         <button id="10amBtn" type="submit" className="saveBtn col-sm-1"><i className="fas fa-save save save save"></i></button>
  //       </div>
  //       <div className="row" id="11">
  //         <label className="col-sm-1 hour">11 AM</label>
  //         <textarea id="hour-task" type="text" className="col-md-10 time-block" placeholder="Tasks"></textarea>
  //         <button id="11amBtn" type="submit" className="saveBtn col-sm-1"><i className="fas fa-save save"></i></button>
  //       </div>
  //       <div className="row" id="12">
  //         <label className="col-sm-1 hour">12 PM</label>
  //         <textarea id="hour-task" type="text" className="col-md-10 time-block" placeholder="Tasks"></textarea>
  //         <button id="12pmBtn" type="submit" className="saveBtn col-sm-1"><i className="fas fa-save save"></i></button>
  //       </div>
  //       <div className="row" id="13">
  //         <label className="col-sm-1 hour">1 PM</label>
  //         <textarea id="hour-task" type="text" className="col-md-10 time-block" placeholder="Tasks"></textarea>
  //         <button id="1pmBtn" type="submit" className="saveBtn col-sm-1"><i className="fas fa-save save"></i></button>
  //       </div>
  //       <div className="row" id="14">
  //         <label className="col-sm-1 hour">2 PM</label>
  //         <textarea id="hour-task" type="text" className="col-md-10 time-block" placeholder="Tasks"></textarea>
  //         <button id="2pmBtn" type="submit" className="saveBtn col-sm-1"><i className="fas fa-save save"></i></button>
  //       </div>
  //       <div className="row" id="15">
  //         <label className="col-sm-1 hour">3 PM</label>
  //         <textarea id="hour-task" type="text" className="col-md-10 time-block" placeholder="Tasks"></textarea>
  //         <button id="3pmBtn" type="submit" className="saveBtn col-sm-1"><i className="fas fa-save save"></i></button>
  //       </div>
  //       <div className="row" id="16">
  //         <label className="col-sm-1 hour">4 PM</label>
  //         <textarea id="hour-task" type="text" className="col-md-10 time-block" placeholder="Tasks"></textarea>
  //         <button id="4pmBtn" type="submit" className="saveBtn col-sm-1"><i className="fas fa-save save"></i></button>
  //       </div>
  //       <div className="row" id="17">
  //         <label className="col-sm-1 hour">5 PM</label>
  //         <textarea id="hour-task" type="text" className="col-md-10 time-block" placeholder="Tasks"></textarea>
  //         <button id="5pmBtn" type="submit" className="saveBtn col-sm-1"><i className="fas fa-save save"></i></button>
  //       </div>
  //     </div>
  //           </form>
  //         </div>
  //       );
  //     }
  //   )
  // }