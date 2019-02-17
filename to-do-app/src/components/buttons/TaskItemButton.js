import React from "react";
import "./TaskItemButton.css";

const TaskItemButton = ({ text, textColor, onClickButton, justifyText }) => {
  return (
    <div
      className="TaskItemButton"
      style={{ color: textColor, justifyContent: justifyText }}
    >
      <div onClick={onClickButton}>{text}</div>
    </div>
  );
};

export default TaskItemButton;
