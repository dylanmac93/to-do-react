import React from "react";
import "./ToDoList.css";
import TaskItem from "../taskItem/TaskItem";

const ToDoList = ({
  tasks,
  deleteTask,
  markAsDone,
  editTask,
  clearAllTasks
}) => {
  const renderTaskItems = () => {
    if (tasks && tasks.length > 0) {
      return tasks.map((task, index) => (
        <div className="task-item-div" key={index}>
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
  return (
    <div className="ToDoList">
      {renderTaskItems()}
      {tasks && tasks.length > 1 ? (
        <div className="clear-list-div" onClick={clearAllTasks}>
          Clear List
        </div>
      ) : null}
    </div>
  );
};

export default ToDoList;
