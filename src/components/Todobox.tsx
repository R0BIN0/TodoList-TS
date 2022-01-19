import React from "react";
import "./Todobox.css"

const Todobox = () => {
  return (
    <div className="todo-box">
      <div className="todo-box-left">
        <p>Sortir le chien </p>
      </div>
      <div className="todo-box-right">
        <label htmlFor="done">p</label>

        <input type="checkbox" id="done" />
      </div>
    </div>
  );
};

export default Todobox;
