import React from "react";
import "./Header.css";

const Header = ({ clearAllTasks, tasks }) => {
  return (
    <div className="Header">
      <div className="header-container">To Do List</div>
      {tasks && tasks.length > 0 ? (
        <div onClick={clearAllTasks}>clear</div>
      ) : null}
    </div>
  );
};

export default Header;
