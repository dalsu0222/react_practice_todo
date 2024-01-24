import React from "react";
import style from "./App.module.css";

const TodoListView = ({ toDos, deleteBtn }) => {
  return (
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
  );
};

export default TodoListView;
