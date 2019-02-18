import React from "react";
import ReactDOM from "react-dom";
import "./TaskItemButton.css";

export default class ToDoList extends React.PureComponent {
  componentWillUnmount = () => {
    document.removeEventListener("click", this.handleClickOutside, true);
  };

  handleClick = () => {
    const { handleTaskSwapClick, index } = this.props;
    handleTaskSwapClick(index);
    document.addEventListener("click", this.handleClickOutside, true);
  };

  handleClickOutside = e => {
    const { resetTasksToSwap } = this.props;
    if (
      !ReactDOM.findDOMNode(this).contains(e.target) &&
      e.target.className !== "task-swap-icon"
    ) {
      resetTasksToSwap();
    }
  };

  render() {
    const { active } = this.props;
    return (
      <div
        className="task-swap-icon"
        onClick={this.handleClick}
        style={active ? { color: "red" } : null}
      >
        swap
      </div>
    );
  }
}
