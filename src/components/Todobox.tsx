// General

import { FC } from "react";
import { TodoObj } from "../App";

// Styles
import "./Todobox.css";

// Types

type Props = {
  item: TodoObj;
  updateTodo: (item: string, checked: boolean) => void;
  deleteTodo: (id: string) => void;
};

const Todobox: FC<Props> = ({ item, updateTodo, deleteTodo }) => {
  return (
    <div className="todo-box">
      <div className="todo-box-left">
        <p>{item.txt}</p>
      </div>
      <div className="todo-box-right">
        <input
          onChange={(e) => updateTodo(item.id, e.target.checked)}
          type="checkbox"
          checked={item.status ? true : false}
          id="done"
        />
        <button onClick={() => deleteTodo(item.id)} className="delete-btn">
          X
        </button>
      </div>
    </div>
  );
};

export default Todobox;
