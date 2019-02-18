import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import TaskTextInput from "./components/taskTextInput/TaskTextInput";
import ToDoList from "./components/toDoList/ToDoList";

class AppView extends Component {
  render() {
    const {
      addTask,
      tasks,
      deleteTask,
      markAsDone,
      editTask,
      clearAllTasks
    } = this.props;

    return (
      <div>
        <div className="header-div">
          <Header tasks={tasks} />
        </div>
        <div className="App">
          <div className="app-container">
            <div className="task-text-input-div">
              <TaskTextInput addTask={addTask} />
            </div>
            <div className="to-do-list-div">
              <ToDoList
                tasks={tasks}
                deleteTask={deleteTask}
                markAsDone={markAsDone}
                editTask={editTask}
                clearAllTasks={clearAllTasks}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppView;
