import React from "react";
import ReactDOM from "react-dom";
import "./TaskItem.css";
import TaskItemButton from "../buttons/TaskItemButton";

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
    const { text } = this.props.task;
    this.setState({ active: true, inputValue: text });
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
    if (inputValue.replace(/\s/g, "").length) {
      editTask(index, inputValue);
    }
    this.setTaskInactive();
  };

  handleClickOutside = e => {
    if (!ReactDOM.findDOMNode(this).contains(e.target)) {
      this.setTaskInactive();
    }
  };

  onKeyPress = event => {
    if (event.key === "Enter") {
      this.updateTask();
    }
  };

  render() {
    const {
      task: { text, done }
    } = this.props;
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
            onKeyPress={this.onKeyPress}
          />
          <span className="task-item-button" onClick={this.updateTask}>
            <TaskItemButton
              text={"Edit"}
              setFontSize={11}
              textColor={"cadetblue"}
              onClickButton={this.editTask}
              justifyText={"center"}
            />
          </span>
        </div>
      );
    }

    // inactive task item
    return (
      <div
        className="TaskItem"
        style={done ? { background: "cadetblue" } : null}
      >
        <span className="task-item-button" onClick={this.removeTask}>
          <TaskItemButton
            text={"X"}
            setFontSize={18}
            textColor={"#de3131"}
            onClickButton={this.editTask}
            justifyText={"center"}
          />
        </span>
        <span className="task-text-div" onClick={this.setTaskActive}>
          <div className="task-text" style={done ? { color: "white" } : null}>
            {text}
          </div>
        </span>
        <span className="task-item-button">
          <TaskItemButton
            text={done ? "undo" : "✓"}
            setFontSize={done ? 11 : 25}
            textColor={done ? "white" : "cadetblue"}
            onClickButton={this.markTaskAsDone}
            justifyText={"center"}
          />
        </span>
      </div>
    );
  }
}
