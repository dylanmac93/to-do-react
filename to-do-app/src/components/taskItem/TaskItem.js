import React from "react";
import "./TaskItem.css";

const TaskItem = ({ task }) => {
  return <div className="TaskItem">{task}</div>;
};

export default TaskItem;
