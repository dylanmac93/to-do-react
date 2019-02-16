import React from "react";
import ReactDOM from "react-dom";
import TaskTextInput from "./TaskTextInput";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TaskTextInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});
