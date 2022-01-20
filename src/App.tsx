// General
import { FormEvent, useEffect, useState } from "react";
import Todobox from "./components/Todobox";
import { v4 as uuidv4 } from "uuid";

// IMG
import searchSvg from "./assets/svg/Search.svg";
import kappaImg from "./assets/img/kappa.png";

// Styles
import "./App.css";

// Types

export type TodoObj = {
  id: string;
  txt: string;
  status: boolean;
};

function App() {
  const [keyword, setKeyword] = useState<string>("");
  const [displayArr, setDisplayArr] = useState<TodoObj[]>([]);

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

  const createTodo = (txt: string, e: FormEvent): void => {
    e.preventDefault();

    const newObj: TodoObj = {
      id: uuidv4(),
      txt: txt,
      status: false,
    };

    setDisplayArr([...displayArr, newObj]);
    setKeyword("");
  };

  const updateTodo = (id: string, checked: boolean): void => {
    setDisplayArr((prev) => {
      const indexObj = prev.findIndex((el) => el.id === id);
      const newObj = { ...prev[indexObj], status: checked };
      prev.splice(indexObj, 1, newObj);

      return [...prev];
    });
  };

  const deleteTodo = (id: string): void => {
    const newArr = displayArr.filter((item: TodoObj) => item.id !== id);
    setDisplayArr(newArr);
  };

  return (
    <div className="global-container">
      <div className="title-global-container">
        <h1>La plus belle des Todo</h1>
        <img src={kappaImg} alt="Kappa" />
      </div>
      <form
        onSubmit={(e) => createTodo(keyword, e)}
        className="input-container"
      >
        <input
          type="text"
          className="input-txt"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">
          <img src={searchSvg} alt="icône de loupe" />
        </button>
      </form>
      <div className="todo-container">
        <div className="todo-box-container">
          <h2>Tâches à réaliser</h2>

          {displayArr
            .filter((item: TodoObj) => !item.status)
            .map((item: TodoObj) => (
              <Todobox
                key={item.id}
                item={item}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
              />
            ))}
        </div>
        <div className="todo-box-container">
          <h2>Tâches réalisées</h2>
          {displayArr
            .filter((item: TodoObj) => item.status)
            .map((item: TodoObj) => (
              <Todobox
                key={item.id}
                item={item}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
