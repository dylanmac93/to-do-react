import React from "react";
import ReactDOM from "react-dom";
import SwapTaskButton from "./SwapTaskButton";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SwapTaskButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
