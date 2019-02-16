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

    if (text.replace(/\s/g, "").length) {
      addTask(text);
    }

    this.setState({ text: "" });
    this.string = "";
  };

  updateText = text => {
    const { data } = text.nativeEvent;

    if (!data) {
      this.string = this.string.substring(0, this.string.length - 1);
    } else {
      this.string += data;
    }

    this.setState({ text: this.string });
  };

  render() {
    const { text } = this.state;
    return (
      <div className="TaskTextInput">
        <input
          type="text"
          placeholder="Add a task..."
          className="input"
          onChange={text => this.updateText(text)}
          value={text}
        />
        <button className="button" onClick={this.handleClick}>
          Add
        </button>
      </div>
    );
  }
}
