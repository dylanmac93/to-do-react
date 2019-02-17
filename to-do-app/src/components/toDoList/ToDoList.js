import React from "react";
import "./ToDoList.css";
import TaskItem from "../taskItem/TaskItem";

const ToDoList = ({ tasks, deleteTask, markAsDone }) => {
  const renderTaskItems = () => {
    if (tasks && tasks.length > 0) {
      return tasks.map((task, index) => (
        <div className="task-item-div" key={index}>
          <TaskItem
            task={task}
            deleteTask={deleteTask}
            markAsDone={markAsDone}
            index={index}
          />
        </div>
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
