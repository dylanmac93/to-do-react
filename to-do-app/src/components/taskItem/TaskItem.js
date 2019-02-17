import React from "react";
import ReactDOM from "react-dom";
import "./TaskItem.css";

export default class TaskItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      inputValue: props.task.text
    };
  }

  componentDidMount = () => {
    // add listener to detect a click outside component
    document.addEventListener("click", this.handleClickOutside, true);
  };

  componentWillUnmount = () => {
    document.removeEventListener("click", this.handleClickOutside, true);
  };

  removeTask = () => {
    const { deleteTask, index } = this.props;
    deleteTask(index);
  };

  markTaskAsDone = () => {
    const { markAsDone, index } = this.props;
    markAsDone(index);
  };

  setTaskActive = () => {
    this.setState({ active: true });
  };

  setTaskInactive = () => {
    const { text } = this.props.task;
    this.setState({ active: false, inputValue: text });
  };

  updateText = event => {
    const { value } = event.target;
    this.setState({ inputValue: value });
  };

  updateTask = () => {
    const { inputValue } = this.state;
    const { editTask, index } = this.props;
    editTask(index, inputValue);
    this.setTaskInactive();
  };

  handleClickOutside = e => {
    if (!ReactDOM.findDOMNode(this).contains(e.target)) {
      this.setTaskInactive();
    }
  };

  render() {
    const { task } = this.props;
    const { active, inputValue } = this.state;

    if (active) {
      // active task item
      return (
        <div className="TaskItemActive">
          <input
            className="task-item-input"
            autoFocus
            value={inputValue}
            onChange={this.updateText}
          />
          <span className="done-button" onClick={this.updateTask}>
            Edit
          </span>
        </div>
      );
    }

    // inactive task item
    return (
      <div className="TaskItem">
        <span className="delete-button" onClick={this.removeTask}>
          Delete
        </span>
        <span className="task-text" onClick={this.setTaskActive}>
          {task.text}
        </span>
        <span className="done-button" onClick={this.markTaskAsDone}>
          Done
        </span>
      </div>
    );
  }
}
