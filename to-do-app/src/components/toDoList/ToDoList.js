import React from "react";
import "./ToDoList.css";
import TaskItem from "../taskItem/TaskItem";

const ToDoList = ({ tasks }) => {
  const renderTaskItems = () => {
    if (tasks) {
      return tasks.map((task, index) => (
        <TaskItem task={task} index={index} key={index} />
      ));
    }
  };
  return (
    <div className="ToDoList">
      <div className="to-do-list-container">{renderTaskItems()}</div>
    </div>
  );
};

export default ToDoList;
