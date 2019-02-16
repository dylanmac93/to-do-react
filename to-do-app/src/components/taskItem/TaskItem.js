import React from "react";
import "./TaskItem.css";

export default class TaskItem extends React.PureComponent {
  constructor() {
    super();
  }

  handleDeleteClick = () => {
    const { deleteTask, index } = this.props;

    deleteTask(index);
  };

  render() {
    const { task } = this.props;
    return (
      <div className="TaskItem">
        <span className="delete-button" onClick={this.handleDeleteClick}>
          delete
        </span>
        <span className="task-text">{task}</span>
        <span className="done-button">Done</span>
      </div>
    );
  }
}
