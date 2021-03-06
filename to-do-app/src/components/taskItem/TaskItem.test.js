import React from "react";
import ReactDOM from "react-dom";
import TaskItem from "./TaskItem";

const mockTask = {
  text: "task",
  done: true
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TaskItem task={mockTask} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
