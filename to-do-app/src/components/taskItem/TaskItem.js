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

  handleMarkAsDoneClick = () => {
    const { markAsDone, index } = this.props;
    markAsDone(index);
  };

  render() {
    const { task } = this.props;

    return (
      <div className="TaskItem">
        <span className="delete-button" onClick={this.handleDeleteClick}>
          delete
        </span>
        <span className="task-text">{task.text}</span>
        <span className="done-button" onClick={this.handleMarkAsDoneClick}>
          Done
        </span>
      </div>
    );
  }
}
