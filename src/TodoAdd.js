import React from "react";
import style from "./App.module.css";

const TodoAdd = ({ toDo, toDos, onChange, onSubmit }) => {
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
    </div>
  );
};

export default TodoAdd;
