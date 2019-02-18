import React from "react";
import ReactDOM from "react-dom";
import TaskItemButton from "./TaskItemButton";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TaskItemButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
