import { useEffect, useState } from "react";
import "./App.css";
import Todobox from "./components/Todobox";
import { v4 as uuidv4 } from "uuid";

export type TodoObj = {
  id: string;
  txt: string;
  status: boolean;
};

function App() {
  const [keyword, setKeyword] = useState<string>("");
  const [displayArr, setDisplayArr] = useState<TodoObj[]>([]);
  console.log(displayArr);

  useEffect(() => {
    let initialLS: TodoObj[] = [];

    if (!localStorage.getItem("todo")) {
      return localStorage.setItem("todo", JSON.stringify(initialLS));
    } else {
      return setDisplayArr(JSON.parse(localStorage.getItem("todo")!));
    }
  }, []);

  useEffect(() => {
    return localStorage.setItem("todo", JSON.stringify(displayArr));
  }, [displayArr]);

  const createTodo = (txt: string): void => {
    const newObj: TodoObj = {
      id: uuidv4(),
      txt: txt,
      status: false,
    };

    setDisplayArr([...displayArr, newObj]);
  };

  const updateTodo = (id: string, checked: boolean): void => {
    setDisplayArr((prev) => {
      const goodObj = prev.findIndex((el) => el.id === id);
      const newObj = {...prev[goodObj], status: checked}
      prev.splice(goodObj, 1, newObj)
      
      return [...prev]

    });
  };

  // Fonction Delete !

  // const updateTodo = (id: string): void => {
  //   const newArr = displayArr.filter((item: TodoObj) => item.id !== id)
  //   setDisplayArr(newArr)
  // };

  return (
    <div className="global-container">
      <h1>La plus belles des Todo ❤️</h1>
      <div className="input-container">
        <input
          type="text"
          className="input-txt"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button onClick={() => createTodo(keyword)}>L</button>
      </div>
      <div className="todo-container">
        <div className="todo-box-container">
          <h2>Tâches à réaliser</h2>

          {displayArr
            .filter((item: TodoObj) => !item.status)
            .map((item: TodoObj) => (
              <Todobox key={item.id} item={item} updateTodo={updateTodo} />
            ))}
        </div>
        <div className="todo-box-container">
          <h2>Tâches réalisées</h2>
          {displayArr
            .filter((item: TodoObj) => item.status)
            .map((item: TodoObj) => (
              <Todobox key={item.id} item={item} updateTodo={updateTodo} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
