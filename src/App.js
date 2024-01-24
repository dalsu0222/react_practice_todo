// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from "react";
import style from "./App.module.css";
import TodoAdd from "./TodoAdd";
import TodoListView from "./TodoListView";

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
      <TodoAdd
        toDo={toDo}
        toDos={toDos}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <TodoListView toDos={toDos} deleteBtn={deleteBtn} />
    </div>
  );
}

export default App;
