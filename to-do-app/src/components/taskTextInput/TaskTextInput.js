import React from "react";
import "./TaskTextInput.css";

export default class TaskTextInput extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      text: ""
    };

    this.string = "";
  }

  handleClick = () => {
    const { text } = this.state;
    const { addTask } = this.props;

    // check if text is just spaces
    if (text.replace(/\s/g, "").length) {
      addTask(text);
    }

    // clear text input
    this.setState({ text: "" });
    this.string = "";
  };

  updateText = event => {
    const { value } = event.target;
    this.setState({ text: value });
  };

  render() {
    const { text } = this.state;
    return (
      <div className="TaskTextInput">
        <input
          type="text"
          placeholder="Add a task..."
          className="input"
          onChange={this.updateText}
          value={text}
        />
        <button className="button" onClick={this.handleClick}>
          Add
        </button>
      </div>
    );
  }
}
