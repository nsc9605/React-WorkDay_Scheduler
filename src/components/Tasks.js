import React from 'react';
import "..styles/Tasks.css";

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            inputText: '',
            mode: 'view'
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleEdit = () => {
        this.setState({mode: 'edit'});
    }

    handleSave = () => {
        this.setState({text: this.state.inputText, mode: 'save'});
    }


render() {
    if(this.state.mode === 'edit') {
    return (
        <div>
          <p>Text: {this.state.text}</p>
          <button onClick={this.handleEdit}>
            Edit
          </button>
        </div>
      );
    } else {
      return (
    <div className="row">
        <form>
    <label className="col-sm-1 hour">8 AM</label>
    <textarea 
        onChange={this.handleSave}
        value={this.state.inputText}
        className="col-md-10 time-block" 
        name="task"
        id="8"
        hour="8" 
        type="text" 
        placeholder="Tasks">{this.state.text}
    </textarea>
    <button onClick={this.handleSave} type="submit" id="8amBtn" className="saveBtn col-sm-1"><i class="fas fa-save save"></i></button>
    </form>
    </div> 
   )
  }
}
};

export default Tasks;