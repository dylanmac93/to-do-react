import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppViewContainer from "./AppViewContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppViewContainer />
      </Provider>
    );
  }
}

export default App;
