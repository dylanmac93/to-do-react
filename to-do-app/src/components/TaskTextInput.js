import React from "react";
import "./TaskTextInput.css";

const TaskTextInput = () => {
  return (
    <div className="TaskTextInput">
      <input type="text" placeholder="Add a task..." className="input" />
      <button className="button">Add</button>
    </div>
  );
};

export default TaskTextInput;
