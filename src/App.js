// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from "react";
import style from "./App.module.css";
import TodoAdd from "./TodoAdd";
import TodoListView from "./TodoListView";

import {
  getFirestore,
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { firestore } from "./firebase";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const db = getFirestore();
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "todos"));
      const newToDos = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        todo: doc.data().todo,
      }));
      setToDos((prevToDos) => [...prevToDos, ...newToDos]);
    };

    fetchData();
  }, [db]);

  useEffect(() => {
    console.log(toDos);
  }, [toDos]);

  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    const docRef = await addDoc(collection(db, "todos"), {
      todo: toDo || null,
    });
    // setToDos((currentArray) => [...currentArray, toDo]);
    setToDos((prevToDos) => [
      ...prevToDos,
      { id: docRef.id, todo: toDo }, // 새로운 todo와 id를 업데이트하기
    ]);
    setToDo("");
  };

  const deleteBtn = async (id) => {
    console.log(id);
    await deleteDoc(doc(db, "todos", id));
    setToDos(toDos.filter((item) => item.id !== id));
    console.log("삭제!");
  };

  // const deleteBtn = (id) => {
  //   console.log(id);
  //   firestore
  //     .collection("todos")
  //     .doc(id)
  //     .delete()
  //     .then(() => {
  //       console.log("삭제!");
  //     });
  //   // setToDos(toDos.filter((item, toDoIndex) => id !== toDoIndex));
  // };

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
