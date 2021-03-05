import React from "react";

function TimeBlock(props) {
    return( 
    <div className="row">
        <form>
            <label className="col-sm-1 hour" id={id.hour}>{props.hour}</label>
        </form>
    </div>
  )
  }


export default TimeBlock;
