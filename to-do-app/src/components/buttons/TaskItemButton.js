import React from "react";
import "./TaskItemButton.css";

const TaskItemButton = ({
  text,
  textColor,
  onClickButton,
  justifyText,
  setFontSize
}) => {
  return (
    <div
      className="TaskItemButton"
      style={{
        color: textColor,
        justifyContent: justifyText
      }}
    >
      <span onClick={onClickButton} style={{ fontSize: setFontSize }}>
        {text}
      </span>
    </div>
  );
};

export default TaskItemButton;
