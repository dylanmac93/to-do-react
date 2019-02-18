import React from "react";
import "./ToDoList.css";
import TaskItem from "../taskItem/TaskItem";
import SwapTaskButton from "../buttons/SwapTaskButton";

export default class ToDoList extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      activeTaskIcon: undefined
    };

    this.firstTaskToSwap = undefined;
    this.secondTaskToSwap = undefined;
  }

  handleTaskSwapClick = index => {
    const { swapTasks } = this.props;

    // unset first task to swap
    if (this.firstTaskToSwap === index) {
      return (
        (this.firstTaskToSwap = undefined),
        this.setState({ activeTaskIcon: undefined })
      );
    }
    // set second task to swap
    if (typeof this.firstTaskToSwap === "number") {
      this.secondTaskToSwap = index;
    } else {
      // set first task to swap
      this.firstTaskToSwap = index;
      this.setState({ activeTaskIcon: index });
    }
    if (
      typeof this.firstTaskToSwap === "number" &&
      typeof this.secondTaskToSwap === "number"
    ) {
      swapTasks([this.firstTaskToSwap, this.secondTaskToSwap]);
      this.resetTasksToSwap();
    }
  };

  resetTasksToSwap = () => {
    this.firstTaskToSwap = undefined;
    this.secondTaskToSwap = undefined;
    this.setState({ activeTaskIcon: undefined });
  };

  renderTaskItems = () => {
    const { activeTaskIcon } = this.state;
    const { tasks, deleteTask, markAsDone, editTask } = this.props;

    if (tasks && tasks.length > 0) {
      return tasks.map((task, index) => (
        <div className="task-row">
          {tasks && tasks.length > 1 ? (
            <SwapTaskButton
              index={index}
              active={activeTaskIcon === index}
              handleTaskSwapClick={this.handleTaskSwapClick}
              resetTasksToSwap={this.resetTasksToSwap}
            />
          ) : null}
          <div className="task-item-div" key={index}>
            <TaskItem
              task={task}
              deleteTask={deleteTask}
              markAsDone={markAsDone}
              index={index}
              editTask={editTask}
            />
          </div>
        </div>
      ));
    }
  };

  render() {
    const { tasks, clearAllTasks } = this.props;
    return (
      <div className="ToDoList">
        {this.renderTaskItems()}
        {tasks && tasks.length > 1 ? (
          <div className="clear-list-div" onClick={clearAllTasks}>
            Clear List
          </div>
        ) : null}
      </div>
    );
  }
}
