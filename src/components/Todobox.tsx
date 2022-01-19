import {FC} from "react";
import "./Todobox.css"

import { TodoObj } from "../App";

type Props = {
    item: TodoObj
    updateTodo: (id: string) => void;
}



const Todobox:FC<Props> = ({item, updateTodo}) => {
  return (
    <div className="todo-box">
      <div className="todo-box-left">
        <p>{item.txt}</p>
      </div>
      <div className="todo-box-right">
        <label htmlFor="done"></label>

        <input type="checkbox" id="done" />
      </div>
    </div>
  );
};

export default Todobox;
