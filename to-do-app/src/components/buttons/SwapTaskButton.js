import React from "react";
import ReactDOM from "react-dom";
import "./SwapTaskButton.css";

export default class SwapTaskButton extends React.PureComponent {
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
      e.target.id !== "SwapTaskButton"
    ) {
      resetTasksToSwap();
    }
  };

  render() {
    const { active } = this.props;
    return (
      <div
        className="SwapTaskButton"
        id="SwapTaskButton"
        onClick={this.handleClick}
      >
        <div
          id="SwapTaskButton"
          className={active ? "active-swap-button" : null}
        >
          ↓↑
        </div>
      </div>
    );
  }
}
