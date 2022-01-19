
import './App.css';
import Todobox from './components/Todobox';

function App() {
  return (
    <div className="global-container">
      <h1>La plus belles des Todo</h1>
      <div className="input-container">
        <input type="text" className="input-txt" />
      </div>
      <div className="todo-container">
        <div className="todo-box-container">
          <h2>Tâches à réaliser</h2>
          <Todobox />
        </div>
        <div className="todo-box-container">
          <h2>Tâches réalisées</h2>

          <Todobox />
        </div>
      </div>

    </div>
  );
}

export default App;
