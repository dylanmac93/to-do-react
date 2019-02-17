import React from "react";
import "./ToDoList.css";
import TaskItem from "../taskItem/TaskItem";

const ToDoList = ({ tasks, deleteTask, markAsDone, editTask }) => {
  const removeTask = index => {
    deleteTask(index);
  };

  const renderTaskItems = () => {
    if (tasks && tasks.length > 0) {
      return tasks.map((task, index) => (
        <div className="task-item-div" key={index}>
          <span className="delete-button" onClick={() => removeTask(index)}>
            x
          </span>
          <TaskItem
            task={task}
            deleteTask={deleteTask}
            markAsDone={markAsDone}
            index={index}
            editTask={editTask}
          />
        </div>
      ));
    }
  };
  return <div className="ToDoList">{renderTaskItems()}</div>;
};

export default ToDoList;
