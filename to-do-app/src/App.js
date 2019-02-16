import React, { Component } from "react";
import logo from "./logo.svg";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <div className="App">
          <div className="app-container">App container</div>
        </div>
      </Provider>
    );
  }
}

export default App;
