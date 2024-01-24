import React from "react";
import style from "./App.module.css";

const TodoListView = ({ toDos, deleteBtn }) => {
  return (
    <ul>
      {toDos.map((item) => (
        <li key={item.id}>
          {item.todo}{" "}
          <button style={style.button} onClick={() => deleteBtn(item.id)}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoListView;
