// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from "react";
import style from "./App.module.css";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo("");
  };
  const deleteBtn = (index) => {
    setToDos(toDos.filter((item, toDoIndex) => index !== toDoIndex));
  };
  return (
    <div>
      <h1 className={style.title}>My ToDos ({toDos.length})</h1>
      <form onSubmit={onSubmit} style={style.form}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your todo..."
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button style={style.button} onClick={() => deleteBtn(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
