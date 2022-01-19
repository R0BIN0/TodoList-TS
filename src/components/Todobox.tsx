import {FC, useState} from "react";
import "./Todobox.css"

import { TodoObj } from "../App";

type Props = {
    item: TodoObj
    updateTodo: (item: string, checked: boolean) => void;
}





const Todobox:FC<Props> = ({item, updateTodo}) => {


  return (
    <div className="todo-box">
      <div className="todo-box-left">
        <p>{item.txt}</p>
      </div>
      <div className="todo-box-right">
        <label htmlFor="done"></label>

        <input onChange={(e) => updateTodo(item.id, e.target.checked)} type="checkbox" checked={item.status ? true : false}  id="done" />
      </div>
    </div>
  );
};

export default Todobox;
