import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskTextInput from "./components/TaskTextInput";

class AppView extends Component {
  render() {
    return (
      <div>
        <div className="header-div">
          <Header />
        </div>
        <div className="App">
          <div className="app-container">
            <div className="task-text-input-div">
              <TaskTextInput />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppView;
