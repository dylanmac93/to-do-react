import React, { Component } from "react";
import logo from "./logo.svg";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import Header from "./components/Header";
import TaskTextInput from "./components/TaskTextInput";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
